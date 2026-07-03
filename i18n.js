/**
 * Jednoduché i18n bez frameworku: slovníky + data-i18n / data-i18n-aria.
 * Jazyk: ?lang=cs|en, localStorage "graph-editor-lang-v2", jinak výchozí EN.
 * (Starý klíč graph-editor-lang se ignoruje — aby po změně výchozího nezůstávala uložená CS.)
 */
(function () {
  var STORAGE = "graph-editor-lang-v2";

  var STRINGS = {
    cs: {
      meta: {
        title: "tikzgraph — visual graph editor with TikZ export | open source",
        description:
          "tikzgraph: draw graph structures visually, tune layout, edit labels, and export clean TikZ for LaTeX. Selection, undo/redo, identity loops, and cross-platform desktop builds.",
        ogTitle: "tikzgraph — visual graph editor with TikZ export",
        ogDescription: "Create graph diagrams visually and export clean TikZ code for LaTeX. Open source desktop app.",
      },
      theme: { toDay: "Den", toNight: "Noc", ariaToggle: "Přepnout světlý a tmavý režim" },
      langSwitch: { aria: "Jazyk stránky" },
      skip: "Přeskočit na obsah",
      notice: {
        wip: "Work in progress: TikZ export zatím není hotový a download odkazy nemusí vždy fungovat.",
        contactLead: "Pokud máte zájem o vývoj nebo máte nápady na zlepšení, napište mi na",
      },
      brand: { aria: "tikzgraph", title: "tikzgraph", subtitle: "vizuální grafy · TikZ do LaTeXu" },
      nav: { mainAria: "Hlavní navigace", features: "Funkce", how: "Jak to funguje", download: "Stažení", story: "Pozadí" },
      bgGraphMode: {
        aria: "Vzhled uzlů na pozadí",
        auto: "Auto",
        normal: "Normál",
        easter: "Vejce",
        valentine: "Srdce",
        xmas: "Vánoce",
      },
      hero: {
        kicker: "LaTeX workflow · TikZ export",
        h1: "Navrhni grafy. Vygeneruj čisté TikZ.",
        lead:
          "Nakresli graf na plátně, srovnej ho do latě a exportuj do TikZ pro LaTeX — bez ručního přepisování kódu.",
        download: "Stáhnout",
        currentReleaseLabel: "Aktuální release",
        platformsAria: "Podporované platformy",
        demoAria: "Ukázka editoru a TikZ výstupu",
        demoPreviewLabel: "Náhled",
        demoTabsAria: "Přepínání mezi náhledem editoru a TikZ kódem",
        demoEditorTitle: "Editor",
        demoToolLabel: "N · E · D · V",
        demoTikzTitle: "TikZ výstup",
        previewAlt: "Snímek obrazovky tikzgraph s grafem na plátně",
        previewZoomAria: "Otevřít větší náhled editoru",
        lightboxHeading: "Náhled editoru",
        lightboxCloseAria: "Zavřít",
        badgefoss: "Open source",
      },
      features: {
        title: "Funkce",
        subtitle: "Kresli na plátně, uprav layout a hoď to do LaTeXu jako TikZ.",
        f1t: "Příjemné kreslení",
        f1p:
          "Stavíš graf přímo na plátně — uzly, hrany, popisky. Posouváš plátno a přibližuješ, jak jsi zvyklý z desktopové grafiky.",
        f2t: "TikZ export",
        f2p: "Za chvíli máš kód připravený do dokumentu — bez ručního přepisování.",
        f3t: "Kontrola nad úpravami",
        f3p:
          "Vybíráš víc věcí najednou, přesouváš je společně a když se netrefíš, vrátíš krok zpět nebo znovu vpřed.",
        f4t: "Kdekoliv pracuješ",
        f4p:
          "Stejná aplikace na macOS, Windows a Linuxu. Mřížka a vodítka ti pomůžou slícovat layout, když chceš pořádek.",
      },
      how: {
        title: "Jak to funguje",
        subtitle: "Nakresli → srovnej layout → exportuj TikZ.",
        s1t: "Vytvoř graf",
        s1p: "Přidej uzly, spoj je hranami — orientované nebo ne, podle toho, co zrovna řešíš.",
        s2t: "Uprav layout",
        s2p:
          "Vyber, co potřebuješ, přesuň to na plátně. Zapni mřížku nebo vodítka, až chceš hezky zarovnaný obrázek.",
        s3t: "Exportuj do TikZ",
        s3p: "Zkopíruj TikZ výstup a vlož ho do svého LaTeX dokumentu.",
      },
      download: {
        title: "Stažení",
        lead: "Začni rovnou v Releases, nebo otevři repozitář a podívej se, co je uvnitř.",
        releases: "Releases / Stáhnout",
        source: "Zdrojový kód",
        storyAria: "Pozadí projektu",
        storySummary: "Story behind (stručně)",
        storyP1:
          "Tenhle editor jsem původně dělal jako školní projekt. Vznikl jako základ, který postupně přerostl do plné verze s editací grafů a exportem do TikZ.",
        storyRepoLead: "Původní repozitář najdeš tady:",
        storyRepoLink: "původní repo",
        storyAuthor: "Autor: <strong>Ondřej Kříž</strong>. Aplikace je open source.",
        versionsAria: "Aktuální verze",
        currentReleaseLabel: "Aktuální release",
        platformDownload: "Stáhnout",
        versionsNote: "Pro konkrétní balíčky mrkni na Releases.",
      },
      footer: {
        line: "tikzgraph · Open source · Ondřej Kříž",
        top: "Nahoru",
      },
    },
    en: {
      meta: {
        title: "tikzgraph — visual graph editor with TikZ export | open source",
        description:
          "tikzgraph: draw graph structures visually, tune layout, edit labels, and export clean TikZ for LaTeX. Selection, undo/redo, identity loops, and cross-platform desktop builds.",
        ogTitle: "tikzgraph — visual graph editor with TikZ export",
        ogDescription: "Create graph diagrams visually and export clean TikZ code for LaTeX. Open source desktop app.",
      },
      theme: { toDay: "Day", toNight: "Night", ariaToggle: "Toggle light and dark theme" },
      langSwitch: { aria: "Page language" },
      skip: "Skip to content",
      notice: {
        wip: "Work in progress: TikZ export is not finished yet, and download links may not always work.",
        contactLead: "If you are interested in development or have ideas to improve the app, email me at",
      },
      brand: { aria: "tikzgraph", title: "tikzgraph", subtitle: "Visual graphs · TikZ for LaTeX" },
      nav: { mainAria: "Main navigation", features: "Features", how: "How it works", download: "Download", story: "Background" },
      bgGraphMode: {
        aria: "Background graph node style",
        auto: "Auto",
        normal: "Plain",
        easter: "Easter",
        valentine: "Hearts",
        xmas: "Xmas",
      },
      hero: {
        kicker: "LaTeX workflow · TikZ export",
        h1: "Design graph diagrams. Export clean TikZ.",
        lead:
          "Build nodes and edges on canvas, tune labels and geometry, then export code-ready TikZ for LaTeX — no manual rewriting.",
        download: "Download",
        currentReleaseLabel: "Current release",
        platformsAria: "Supported platforms",
        demoAria: "Editor and TikZ output preview",
        demoPreviewLabel: "Preview",
        demoTabsAria: "Switch between the editor screenshot and TikZ code",
        demoEditorTitle: "Editor",
        demoToolLabel: "N · E · D · V",
        demoTikzTitle: "TikZ output",
        previewAlt: "Screenshot of tikzgraph with a graph on the canvas",
        previewZoomAria: "Open larger editor preview",
        lightboxHeading: "Editor preview",
        lightboxCloseAria: "Close",
        badgefoss: "Open source",
      },
      features: {
        title: "Features",
        subtitle: "Sketch on the canvas, refine the layout, drop it into LaTeX as TikZ.",
        f1t: "Canvas-first graph editing",
        f1p:
          "Add nodes and directed/undirected edges directly on canvas. Create identity loops, drag labels, and keep layout readable while you work.",
        f2t: "TikZ export for LaTeX",
        f2p: "Export graph drawings as clean TikZ code and paste into your document. Great for lecture notes, reports, and formal diagrams.",
        f3t: "Selection + undo/redo workflow",
        f3p:
          "Select single or multiple objects, move/refine quickly, and recover safely with undo/redo when iterating on structure or styling.",
        f4t: "Desktop, open source",
        f4p:
          "Open-source app with practical desktop workflow and reproducible exports. Built for day-to-day graph editing, not one-off screenshots.",
      },
      how: {
        title: "How it works",
        subtitle: "Draw → align the layout → export TikZ.",
        s1t: "Sketch the structure",
        s1p: "Place nodes, connect edges, and define directionality or loops according to your model.",
        s2t: "Refine layout and labels",
        s2p:
          "Align and reposition graph parts, tune labels and styling, and use selection tools to polish the final diagram.",
        s3t: "Export and use in LaTeX",
        s3p: "Copy generated TikZ output and insert it directly into your LaTeX workflow.",
      },
      download: {
        title: "Download",
        lead: "Start from Releases, or open the repository to see what’s inside.",
        releases: "Releases / Download",
        source: "Source code",
        storyAria: "Project background",
        storySummary: "Story behind (short)",
        storyP1:
          "This editor started as a school project—a foundation that grew into a full app with graph editing and TikZ export.",
        storyRepoLead: "The original repository is here:",
        storyRepoLink: "original repo",
        storyAuthor: "Author: <strong>Ondřej Kříž</strong>. The app is open source.",
        versionsAria: "Current version",
        currentReleaseLabel: "Current release",
        platformDownload: "Download",
        versionsNote: "See Releases for specific packages.",
      },
      footer: {
        line: "tikzgraph · Open source · Ondřej Kříž",
        top: "Back to top",
      },
    },
  };

  var current = "en";

  function pickLang() {
    try {
      var q = new URLSearchParams(window.location.search).get("lang");
      if (q === "cs" || q === "en") return q;
    } catch (e) {}
    try {
      var s = localStorage.getItem(STORAGE);
      if (s === "cs" || s === "en") return s;
    } catch (e) {}
    /* Výchozí EN (bez házení podle jazyka prohlížeče). CS jen ?lang=cs nebo přepínač / uložená volba. */
    return "en";
  }

  function get(obj, path) {
    var parts = path.split(".");
    var o = obj;
    for (var i = 0; i < parts.length; i++) {
      o = o && o[parts[i]];
    }
    return typeof o === "string" ? o : null;
  }

  function t(key) {
    var s = get(STRINGS[current], key);
    if (s) return s;
    var fb = get(STRINGS.cs, key);
    return fb != null ? fb : key;
  }

  function setMeta(name, content) {
    var el = document.querySelector('meta[name="' + name + '"]');
    if (el) el.setAttribute("content", content);
  }

  function setMetaProp(prop, content) {
    var el = document.querySelector('meta[property="' + prop + '"]');
    if (el) el.setAttribute("content", content);
  }

  function applyMeta() {
    var m = STRINGS[current].meta;
    if (!m) return;
    document.title = m.title;
    setMeta("description", m.description);
    setMeta("twitter:title", m.ogTitle);
    setMeta("twitter:description", m.ogDescription);
    setMetaProp("og:title", m.ogTitle);
    setMetaProp("og:description", m.ogDescription);
    setMetaProp("og:locale", current === "cs" ? "cs_CZ" : "en_US");
  }

  function applyDom() {
    document.documentElement.lang = current === "cs" ? "cs" : "en";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key) return;
      var val = t(key);
      if (el.getAttribute("data-i18n-html") === "true") el.innerHTML = val;
      else el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (key) el.setAttribute("aria-label", t(key));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (key) el.setAttribute("alt", t(key));
    });
  }

  function syncThemeToggle(btn) {
    btn = btn || document.getElementById("themeToggle");
    if (!btn) return;
    var isLight = document.body.getAttribute("data-theme") === "light";
    var label = btn.querySelector(".theme-toggle__label");
    if (label) label.textContent = isLight ? t("theme.toNight") : t("theme.toDay");
    else btn.textContent = isLight ? t("theme.toNight") : t("theme.toDay");
    btn.classList.toggle("is-light", isLight);
    btn.classList.toggle("is-dark", !isLight);
    btn.setAttribute("aria-label", t("theme.ariaToggle"));
  }

  function syncLangButtons() {
    document.querySelectorAll("[data-set-lang]").forEach(function (b) {
      var lang = b.getAttribute("data-set-lang");
      var on = lang === current;
      b.setAttribute("aria-pressed", on ? "true" : "false");
      b.classList.toggle("is-active", on);
    });
  }

  function apply(lang) {
    if (lang !== "cs" && lang !== "en") lang = "en";
    current = lang;
    try {
      localStorage.setItem(STORAGE, lang);
    } catch (e) {}
    applyMeta();
    applyDom();
    syncLangButtons();
    syncThemeToggle();
    try {
      document.dispatchEvent(new CustomEvent("i18napply"));
    } catch (e) {}
  }

  function wireLangButtons() {
    document.querySelectorAll("[data-set-lang]").forEach(function (b) {
      b.addEventListener("click", function () {
        var lang = b.getAttribute("data-set-lang");
        if (lang === "cs" || lang === "en") apply(lang);
      });
    });
  }

  function init() {
    current = pickLang();
    apply(current);
    wireLangButtons();
    document.body.addEventListener("themechange", function () {
      syncThemeToggle();
    });
  }

  window.I18N = {
    init: init,
    apply: apply,
    getLang: function () {
      return current;
    },
    syncThemeToggle: syncThemeToggle,
    t: t,
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
