// 1st Way
document.addEventListener("click", function(e) {
  if (e.target.className.indexOf("bottom-bar__close") !== -1) {
    document.body.removeChild(e.target.parentElement.parentElement);

    // Showcase .remove(); (not supported in IE)
  }
});

// 2nd way
// document.addEventListener("click", function(e) {
//   if (e.target.getAttribute("data-bottombar-close") !== null) {
//     const bottomBarName = e.target.getAttribute("data-bottombar-close");
//     document.body.removeChild(
//       document.body.querySelector(
//         ".bottom-bar[data-bottombar='" + bottomBarName + "']"
//       )
//     );
//   }
// });

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const btn = document.getElementById('btn');
    sidebar.classList.toggle('close');
    if (sidebar.classList.contains('close')) {
        btn.classList.remove('fa-chevron-up');
        btn.classList.add('fa-chevron-down');
    } else {
        btn.classList.remove('fa-chevron-down');
        btn.classList.add('fa-chevron-up');
    }
}
