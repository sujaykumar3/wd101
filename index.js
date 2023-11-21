function validateUserRegistration() {
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var dob = document.getElementById("dob").value;
            var password = document.getElementById("password").value;
            var acceptTerms = document.getElementById("acceptTerms").checked;
            var nameError = document.getElementById("nameError");
            var emailError = document.getElementById("emailError");
            var dobError = document.getElementById("dobError");
            var passwordError = document.getElementById("passwordError");
            var acceptTermsError = document.getElementById("acceptTermsError");
            var errorMsg = document.getElementById("errorMsg");
            var entriesSection = document.getElementById("entries");

            nameError.innerHTML = "";
            emailError.innerHTML = "";
            dobError.innerHTML = "";
            passwordError.innerHTML = "";
            acceptTermsError.innerHTML = "";
            errorMsg.innerHTML = "";

            // Validate age between 18 and 55
            var currentDate = new Date();
            var selectedDate = new Date(dob);
            var age = currentDate.getFullYear() - selectedDate.getFullYear();

            if (age < 18 || age > 55) {
                dobError.innerHTML = "Age must be between 18 and 55.";
                return;
            }

            // Validate date of birth after 1967
            var minDate = new Date("1967-01-01");
            if (selectedDate <= minDate) {
                dobError.innerHTML = "Date of Birth must be after 1967.";
                return;
            }

            if (!name) {
                nameError.innerHTML = "Name is required.";
                return;
            }

            if (!email) {
                emailError.innerHTML = "Email is required.";
                return;
            } else {
                // Validate email format
                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    emailError.innerHTML = "Enter a valid email address.";
                    return;
                }
            }

            if (!dob) {
                dobError.innerHTML = "Date of Birth is required.";
                return;
            }

            if (!password) {
                passwordError.innerHTML = "Password is required.";
                return;
            }

            if (!acceptTerms) {
                acceptTermsError.innerHTML = "Please accept the Terms and Conditions.";
                return;
            }

            // Display registration result dynamically
            var resultContainer = document.getElementById("entriesTableBody");
            var newRow = resultContainer.insertRow();

            newRow.innerHTML = `<td>${name}</td>
                                <td>${email}</td>
                                <td>${password}</td>
                                <td>${dob}</td>
                                <td>${acceptTerms ? 'Yes' : 'No'}</td>`;

            // Show the Entries section
            entriesSection.style.display = "block";
        }
