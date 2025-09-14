const addBtn = document.getElementById("addBtn");

    addBtn.addEventListener("click", () => {

      let note = document.createElement("div");
      note.className = "note";

      let cancel=document.createElement("span")
      cancel.innerHTML="x"
      cancel.className="cancel"


      cancel.addEventListener("click", ()=>{
        note.remove();
      })

      note.style.top = Math.random() * 500 + "px";
      note.style.left = Math.random() * 800 + "px";

      let text = document.createElement("textarea");
      text.placeholder = "Write here...";

      note.appendChild(text);
      note.appendChild(cancel);

      document.body.appendChild(note);

      dragNote(note);
    });

    function dragNote(note) {
      let isDragging = false;
      let offsetX, offsetY;

      note.addEventListener("mousedown", function (e) {
        if (e.target.tagName === "TEXTAREA") return;
        isDragging = true;
        offsetX = e.clientX - note.offsetLeft;
        offsetY = e.clientY - note.offsetTop;
      });

      document.addEventListener("mousemove", function (e) {
        if (isDragging) {
          note.style.left = e.clientX - offsetX + "px";
          note.style.top = e.clientY - offsetY + "px";
        }
      });

      document.addEventListener("mouseup", function () {
        isDragging = false;
      });
    }