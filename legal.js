(() => {
  const root = document.documentElement;
  const media = matchMedia('(prefers-color-scheme: dark)');
  const appearance = () => { root.dataset.theme = media.matches ? 'dark' : 'light'; };
  function language() {
    const ru = /^#(?:ru|privacy-ru|terms-ru|third-party-ru)$/.test(location.hash);
    root.lang = ru ? 'ru' : 'en';
    document.title = 'Liquid Glass Document Workspace: ' + (ru ? 'Конфиденциальность и условия использования' : 'Privacy & Terms of Use');
  }
  appearance(); language();
  media.addEventListener('change', appearance);
  addEventListener('hashchange', language);
})();
