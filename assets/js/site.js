(function () {
  "use strict";

  function titleCase(value) {
    if (value === "awards") return "Awards & Recognitions";
    return value
      .replace(/\b\w/g, function (letter) { return letter.toUpperCase(); })
      .replace(/\b(Ieee|Acm|Chi|Vis|Tvcg|Vgtc|Ai|Nlp|Gis|Ui|Hci|Lbw|Iui|Cridc|Cscw|Pacm|Cagis|Arxiv|Doi|Osf|IiP|Iip)\b/gi, function (term) {
        var key = term.toLowerCase();
        var special = {
          osf: "OSF",
          arxiv: "arXiv",
          cagis: "CaGIS",
          pacm: "PACM",
          tvcg: "TVCG",
          vgtc: "VGTC",
          cridc: "CRIDC",
          iui: "IUI",
          lbw: "LBW",
          cscw: "CSCW",
          hci: "HCI",
          chi: "CHI",
          vis: "VIS",
          ieee: "IEEE",
          acm: "ACM",
          ai: "AI",
          nlp: "NLP",
          gis: "GIS",
          ui: "UI",
          doi: "DOI"
        };
        return special[key] || term.toUpperCase();
      });
  }

  function isExternalHref(href) {
    if (!href || href.charAt(0) === "#" || href.indexOf("mailto:") === 0 || href.indexOf("tel:") === 0 || href.indexOf("javascript:") === 0) {
      return false;
    }
    if (href.charAt(0) === "/" || href.indexOf("./") === 0 || href.indexOf("../") === 0) {
      return false;
    }
    try {
      var url = new URL(href, window.location.origin);
      return url.origin !== window.location.origin;
    } catch (error) {
      return false;
    }
  }

  function initExternalLinks() {
    document.querySelectorAll("a[href]").forEach(function (anchor) {
      var href = anchor.getAttribute("href");
      if (isExternalHref(href)) {
        anchor.setAttribute("target", "_blank");
        anchor.setAttribute("rel", "noopener");
      } else if (anchor.getAttribute("target") === "_blank") {
        anchor.removeAttribute("target");
        if (anchor.getAttribute("rel") === "noopener") anchor.removeAttribute("rel");
      }
    });
  }

  function initThemeToggle(button) {
    var preference = window.matchMedia("(prefers-color-scheme: dark)");

    function hasStoredPreference() {
      try {
        var stored = localStorage.getItem("datavisards-theme");
        return stored === "light" || stored === "dark";
      } catch (error) {
        return false;
      }
    }

    function updateLabel() {
      var isDark = document.documentElement.dataset.theme === "dark";
      var nextTheme = isDark ? "light" : "dark";
      button.setAttribute("aria-label", "Switch to " + nextTheme + " theme");
      button.setAttribute("aria-pressed", isDark);
      button.querySelector(".theme-toggle-icon").textContent = isDark ? "☀" : "☾";
    }

    button.addEventListener("click", function () {
      var nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      try {
        localStorage.setItem("datavisards-theme", nextTheme);
      } catch (error) {
        // The selected theme still applies for this page when storage is unavailable.
      }
      updateLabel();
    });

    function syncSystemTheme(event) {
      if (hasStoredPreference()) return;
      document.documentElement.dataset.theme = event.matches ? "dark" : "light";
      updateLabel();
    }

    if (preference.addEventListener) preference.addEventListener("change", syncSystemTheme);
    else preference.addListener(syncSystemTheme);

    updateLabel();
  }

  function initFilters(root) {
    var items = Array.prototype.slice.call(root.parentElement.querySelectorAll("[data-filter-item]"));
    var search = root.querySelector("[data-filter-search]");
    var facets = Array.prototype.slice.call(root.querySelectorAll("[data-filter-facet]"));
    var count = root.querySelector("[data-filter-count]");
    var clear = root.querySelector("[data-filter-clear]");
    var empty = root.parentElement.querySelector("[data-filter-empty]");
    var active = {};
    var initial = new URLSearchParams(location.search);

    facets.forEach(function (facet) {
      var key = facet.getAttribute("data-filter-facet");
      var values = {};
      active[key] = new Set((initial.get(key) || "").toLowerCase().split(",").filter(Boolean));
      items.forEach(function (item) {
        (item.dataset[key] || "").split("||").forEach(function (value) {
          value = value.trim();
          if (value) values[value] = (values[value] || 0) + 1;
        });
      });

      var entries = Object.keys(values).map(function (value) {
        return { value: value, count: values[value] };
      }).sort(function (a, b) {
        if (key === "year") return b.value.localeCompare(a.value);
        return b.count - a.count || a.value.localeCompare(b.value);
      });

      var maxCount = entries.reduce(function (max, entry) {
        return Math.max(max, entry.count);
      }, 0);
      var previewLimit = 5;

      entries.forEach(function (entry, index) {
        var button = document.createElement("button");
        var widthPct = maxCount ? Math.max(8, Math.round((entry.count / maxCount) * 100)) : 8;
        var bar = document.createElement("span");
        bar.className = "facet-bar";
        bar.style.width = widthPct + "%";
        bar.setAttribute("aria-hidden", "true");

        button.type = "button";
        button.className = "facet-option" + (index >= previewLimit ? " facet-option-extra" : "");
        button.dataset.value = entry.value;
        button.hidden = index >= previewLimit;
        button.innerHTML =
          "<span class=\"facet-label\">" + (key === "year" ? entry.value : titleCase(entry.value)) + "</span>" +
          "<span class=\"facet-count\">(" + entry.count + ")</span>";
        button.appendChild(bar);

        if (active[key].has(entry.value)) button.classList.add("is-active");
        button.addEventListener("click", function () {
          if (active[key].has(entry.value)) active[key].delete(entry.value);
          else active[key].add(entry.value);
          button.classList.toggle("is-active");
          applyFilters();
        });
        facet.appendChild(button);
      });

      if (entries.length > previewLimit) {
        var more = document.createElement("button");
        var hasHiddenActive = entries.some(function (entry, index) {
          return index >= previewLimit && active[key].has(entry.value);
        });
        more.type = "button";
        more.className = "facet-more";
        more.textContent = "More…";
        more.addEventListener("click", function () {
          var expanded = facet.classList.toggle("is-expanded");
          facet.querySelectorAll(".facet-option-extra").forEach(function (button) {
            button.hidden = !expanded;
          });
          more.textContent = expanded ? "Less" : "More…";
        });
        facet.appendChild(more);
        if (hasHiddenActive) more.click();
      }
    });

    function applyFilters() {
      var query = (search.value || "").trim().toLowerCase();
      var visible = 0;

      items.forEach(function (item) {
        var text = Object.keys(item.dataset).map(function (key) {
          return item.dataset[key];
        }).join(" ").toLowerCase();
        var matches = !query || text.indexOf(query) !== -1;

        Object.keys(active).forEach(function (key) {
          if (!active[key].size) return;
          var itemValues = (item.dataset[key] || "").split("||");
          var hasMatch = Array.from(active[key]).some(function (value) {
            return itemValues.indexOf(value) !== -1;
          });
          if (!hasMatch) matches = false;
        });

        item.hidden = !matches;
        if (matches) visible += 1;
      });

      root.parentElement.querySelectorAll("[data-filter-group]").forEach(function (group) {
        group.hidden = !group.querySelector("[data-filter-item]:not([hidden])");
      });

      count.textContent = visible + " of " + items.length + " shown";
      clear.hidden = !query && !Object.keys(active).some(function (key) {
        return active[key].size > 0;
      });
      if (empty) empty.hidden = visible !== 0;

      var params = new URLSearchParams();
      if (query) params.set("q", query);
      Object.keys(active).forEach(function (key) {
        if (active[key].size) params.set(key, Array.from(active[key]).join(","));
      });
      history.replaceState(null, "", location.pathname + (params.toString() ? "?" + params.toString() : ""));
    }

    if (initial.get("q")) search.value = initial.get("q");

    search.addEventListener("input", applyFilters);
    clear.addEventListener("click", function () {
      search.value = "";
      Object.keys(active).forEach(function (key) { active[key].clear(); });
      root.querySelectorAll(".facet-option").forEach(function (button) {
        button.classList.remove("is-active");
      });
      applyFilters();
      search.focus();
    });
    applyFilters();
  }

  function initPhotoCarousel(root) {
    var image = root.querySelector("[data-carousel-image]");
    var caption = root.querySelector("[data-carousel-caption]");
    var strip = root.querySelector(".photo-carousel-thumbs");
    var thumbs = Array.prototype.slice.call(root.querySelectorAll("[data-carousel-thumb]"));
    var index = 0;
    var timer = null;
    var delay = parseInt(root.getAttribute("data-autoplay") || "0", 10);

    function show(nextIndex) {
      if (!thumbs.length) return;
      index = (nextIndex + thumbs.length) % thumbs.length;
      var thumb = thumbs[index];
      image.src = thumb.getAttribute("data-src");
      image.alt = thumb.getAttribute("data-alt") || "";
      caption.textContent = thumb.getAttribute("data-caption") || "";
      thumbs.forEach(function (button, i) {
        button.classList.toggle("is-active", i === index);
      });
      strip.scrollTo({
        left: thumb.offsetLeft - (strip.clientWidth - thumb.offsetWidth) / 2,
        behavior: "smooth"
      });
    }

    function restartTimer() {
      if (!delay) return;
      if (timer) window.clearInterval(timer);
      timer = window.setInterval(function () { show(index + 1); }, delay);
    }

    root.querySelector("[data-carousel-prev]").addEventListener("click", function () {
      show(index - 1);
      restartTimer();
    });
    root.querySelector("[data-carousel-next]").addEventListener("click", function () {
      show(index + 1);
      restartTimer();
    });
    thumbs.forEach(function (thumb, i) {
      thumb.addEventListener("click", function () {
        show(i);
        restartTimer();
      });
    });

    root.addEventListener("mouseenter", function () {
      if (timer) window.clearInterval(timer);
    });
    root.addEventListener("mouseleave", restartTimer);
    restartTimer();
  }

  initExternalLinks();
  document.querySelectorAll("[data-theme-toggle]").forEach(initThemeToggle);
  document.querySelectorAll("[data-filter-root]").forEach(initFilters);
  document.querySelectorAll("[data-photo-carousel]").forEach(initPhotoCarousel);

  document.querySelectorAll("[data-copy-target]").forEach(function (button) {
    button.addEventListener("click", function () {
      var target = document.getElementById(button.getAttribute("data-copy-target"));
      if (!target) return;
      var original = button.innerHTML;
      navigator.clipboard.writeText(target.textContent.trim()).then(function () {
        button.textContent = "Copied";
        setTimeout(function () { button.innerHTML = original; }, 1600);
      });
    });
  });
}());
