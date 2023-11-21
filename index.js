
        function validateUserRegistration() {
            var alias = document.getElementById("userAlias").value;
            var email = document.getElementById("userEmail").value;
            var password = document.getElementById("userPassword").value;
            var confirmPassword = document.getElementById("confirmUserPassword").value;
            var errorMsg = document.getElementById("errorMsg");

            errorMsg.innerHTML = "";

            if (!alias || !email || !password || !confirmPassword) {
                errorMsg.innerHTML = "All fields are required.";
                return;
            }

            if (password !== confirmPassword) {
                errorMsg.innerHTML = "Passwords do not match.";
                return;
            }

            // Additional validation logic can be added here.

            // If all validations pass, you can submit the form.
            document.getElementById("userRegistrationForm").submit();
        }
