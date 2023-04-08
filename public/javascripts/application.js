"use strict"

document.addEventListener("DOMContentLoaded", function () {
  let forms = document.querySelectorAll("form.delete", "form.complete_all");
  forms.forEach(form => {
    form.addEventListener("sumbit", function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (confirm("Are you sure? This cannot be undone!")) {
        event.target.submit();
      }
    });
  });
});