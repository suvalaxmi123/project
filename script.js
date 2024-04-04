let feedback = document.getElementById("button")

function slide(){
    (async () => {
        const { value: text } = await Swal.fire({
          input: "textarea",
          inputLabel: "FEEDBACK",
          inputPlaceholder: "Type your message here...",
          inputAttributes: {
            "aria-label": "Type your message here"
          },
          showCancelButton: true
        });
        if (text) {
          Swal.fire(text);
        }
    })()
}