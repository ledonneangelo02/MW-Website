document.addEventListener("DOMContentLoaded", function() {
    const navBarContainer = document.getElementById('Header');
    fetch('../header.html')
        .then(response => response.text())
        .then(html => {
            navBarContainer.innerHTML = html;
        });
    const footerContainer = document.getElementById('Footer');
    fetch('../footer.html')
        .then(response => response.text())
        .then(html => {
            footerContainer.innerHTML = html;
    });
});


/*<script>
$(function(){
  $("#nav-placeholder").load("nav.html");
});
</script> */