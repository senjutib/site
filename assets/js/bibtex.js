document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".bibtex-btn").forEach(button => {
      button.addEventListener("click", function () {
        let bibtexElement = this.nextElementSibling;
        if (bibtexElement.style.display === "none" || bibtexElement.style.display === "") {
          bibtexElement.style.display = "block";
        } else {
          bibtexElement.style.display = "none";
        }
      });
    });
  });
  