document.addEventListener('DOMContentLoaded', function() {
    const pageFlip = new St.PageFlip(
        document.getElementById("flip-book"),
        {
            width: 450, // base page width
            height: 600, // base page height
            size: "stretch", // auto resize to fit screen while keeping ratio
            minWidth: 315,
            maxWidth: 1000,
            minHeight: 420,
            maxHeight: 1350,
            maxShadowOpacity: 0.5,
            showCover: true,
            mobileScrollSupport: true
        }
    );

    pageFlip.loadFromHTML(document.querySelectorAll(".page"));

    // Automatically open the book after a short delay
    setTimeout(() => {
        pageFlip.flip(2); // Flips to the first two-page spread
    }, 800);
});
