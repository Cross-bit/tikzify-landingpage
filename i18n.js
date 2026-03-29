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
        title: "tikzgraph — vizuální grafy do LaTeXu (TikZ) | open source",
        description:
          "tikzgraph: editor grafů s exportem do TikZ pro LaTeX — uzly, hrany, výběr, mřížka, vodítka, zpět/vpřed. Open source — Windows, Linux, iOS.",
        ogTitle: "tikzgraph — vizuální grafy do LaTeXu (TikZ)",
        ogDescription: "Kresli grafy v tikzgraph, exportuj TikZ do dokumentu. Open source, multiplatformní.",
      },
      theme: { toDay: "Den", toNight: "Noc", ariaToggle: "Přepnout světlý a tmavý režim" },
      langSwitch: { aria: "Jazyk stránky" },
      skip: "Přeskočit na obsah",
      brand: { aria: "tikzgraph", title: "tikzgraph", subtitle: "vizuální grafy · TikZ do LaTeXu" },
      nav: { mainAria: "Hlavní navigace", features: "Funkce", how: "Jak to funguje", download: "Stažení", story: "Pozadí" },
      hero: {
        kicker: "LaTeX workflow · TikZ export",
        h1: "Navrhni grafy. Vygeneruj čisté TikZ.",
        lead:
          "Nakresli graf na plátně, srovnej ho do latě a exportuj do TikZ pro LaTeX — bez ručního přepisování kódu.",
        download: "Stáhnout",
        platformsAria: "Podporované platformy",
        demoAria: "Ukázka editoru a TikZ výstupu",
        demoPreviewLabel: "Náhled",
        demoTabsAria: "Přepínání mezi náhledem editoru a TikZ kódem",
        demoEditorTitle: "Editor",
        demoToolLabel: "N · E · D · V",
        demoTikzTitle: "TikZ výstup",
        previewAlt: "Snímek obrazovky tikzgraph s grafem na plátně",
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
          "Stejná aplikace na iOS, Windows a Linuxu. Mřížka a vodítka ti pomůžou slícovat layout, když chceš pořádek.",
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
        versionsNote: "Pro konkrétní balíčky mrkni na Releases.",
      },
      footer: {
        line: "tikzgraph · Open source · Ondřej Kříž",
        top: "Nahoru",
      },
    },
    en: {
      meta: {
        title: "tikzgraph — visual graphs to LaTeX (TikZ) | open source",
        description:
          "tikzgraph: draw graphs visually—selection, grid, guides, undo/redo—export clean TikZ for LaTeX. Open source: Windows, Linux, iOS.",
        ogTitle: "tikzgraph — visual graphs to LaTeX (TikZ)",
        ogDescription: "Draw graphs in tikzgraph, export TikZ for LaTeX. Open source, cross-platform.",
      },
      theme: { toDay: "Day", toNight: "Night", ariaToggle: "Toggle light and dark theme" },
      langSwitch: { aria: "Page language" },
      skip: "Skip to content",
      brand: { aria: "tikzgraph", title: "tikzgraph", subtitle: "Visual graphs · TikZ for LaTeX" },
      nav: { mainAria: "Main navigation", features: "Features", how: "How it works", download: "Download", story: "Background" },
      hero: {
        kicker: "LaTeX workflow · TikZ export",
        h1: "Design graphs. Generate clean TikZ.",
        lead:
          "Draw on the canvas, tidy the layout, and export to TikZ for LaTeX—no retyping code by hand.",
        download: "Download",
        platformsAria: "Supported platforms",
        demoAria: "Editor and TikZ output preview",
        demoPreviewLabel: "Preview",
        demoTabsAria: "Switch between the editor screenshot and TikZ code",
        demoEditorTitle: "Editor",
        demoToolLabel: "N · E · D · V",
        demoTikzTitle: "TikZ output",
        previewAlt: "Screenshot of tikzgraph with a graph on the canvas",
        badgefoss: "Open source",
      },
      features: {
        title: "Features",
        subtitle: "Sketch on the canvas, refine the layout, drop it into LaTeX as TikZ.",
        f1t: "Comfortable drawing",
        f1p:
          "Build the graph right on the canvas—nodes, edges, labels. Pan and zoom the way you expect from a desktop editor.",
        f2t: "TikZ export",
        f2p: "One step to code you can paste into your document—no manual transcription.",
        f3t: "Room to fix mistakes",
        f3p:
          "Select several things at once, move them together, and step backward or forward when something isn’t quite right.",
        f4t: "Works where you work",
        f4p:
          "The same app on iOS, Windows, and Linux. Turn on the grid or guides when you want a neat, aligned figure.",
      },
      how: {
        title: "How it works",
        subtitle: "Draw → align the layout → export TikZ.",
        s1t: "Create a graph",
        s1p: "Add nodes and connect them with edges—directed or not, depending on what you’re modeling.",
        s2t: "Tune the layout",
        s2p:
          "Select what you need and drag it into place. Switch on the grid or guides when you want everything lined up.",
        s3t: "Export to TikZ",
        s3p: "Copy the TikZ output and paste it into your LaTeX document.",
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
