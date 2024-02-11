document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Add your form submission logic here
        console.log("Form submitted!");

        // Additional logic to send form data to an email using Formspree
        submitForm();
    });

    function submitForm() {
        const formData = new FormData(contactForm);

        fetch("https://formspree.io/f/xeqyagdq", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    alert("Form submitted successfully!");
                    // Optionally, you can reset the form
                    contactForm.reset();
                } else {
                    alert("Error submitting form. Please try again.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Error submitting form. Please try again.");
            });
    }

    // Custom form submission logic
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);

        // Extract form values
        const name = formData.get("name");
        const classValue = formData.get("class");
        const gender = formData.get("gender");
        const telephone = formData.get("telephone");
        const comment = formData.get("comment");

        // Add your custom form submission logic here
        console.log("Name:", name);
        console.log("Class:", classValue);
        console.log("Gender:", gender);
        console.log("Telephone:", telephone);
        console.log("Comment:", comment);

        // Optionally, you can reset the form
        contactForm.reset();
    });

    // Your other code for the image slider, scroll-to-top button, etc.
});

$(document).ready(function() {
    // Your existing code for the image slider
    function startImageSlider() {
        setInterval(function() {
            var currentImage = $(".image-slider img.active");
            var nextImage = currentImage.next();

            if (nextImage.length === 0) {
                nextImage = $(".image-slider img:first");
            }

            currentImage.removeClass("active");
            nextImage.addClass("active");
        }, 4000); // Change image every 4 seconds (adjust as needed)

        // Initial setup
        $(".image-slider img:first").addClass("active");
    }

    startImageSlider();

    // New code for the scroll-to-top button
    window.addEventListener("scroll", handleScroll);

    function handleScroll() {
        var scrollButton = $(".scroll-to-top");
        if (window.scrollY > 200) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    }

    $(".scroll-to-top").on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    // New code for country code increment/decrement
    let countryCodeValue = 1; // Initial country code value

    window.incrementNumber = function() {
        countryCodeValue++;
        updateCountryCode();
    };

    window.decrementNumber = function() {
        if (countryCodeValue > 1) {
            countryCodeValue--;
            updateCountryCode();
        }
    };

    function updateCountryCode() {
        document.getElementById("countryCode").value = '+' + countryCodeValue;
    }
});

