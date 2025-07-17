function showTab(event, tabId) {
  event.preventDefault();
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  const tab = document.getElementById(tabId);
  if(tab) tab.classList.add('active');
  if(event.currentTarget.classList.contains('nav-link')) {
    event.currentTarget.classList.add('active');
  }
}
