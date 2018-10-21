import sendgrid
import os
from sendgrid.helpers.mail import *

sg = sendgrid.SendGridAPIClient(apikey=os.environ.get('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'))
from_email = Email("muskanc6769@gmail.com")
to_email = Email("panghalarsh@gmail.com")
subject = "Sending with SendGrid is Fun"
content = Content("text/plain", "and easy to do anywhere, even with Python")
mail = Mail(from_email, subject, to_email, content)
response = sg.client.mail.send.post(request_body=mail.get())
print(response.status_code)
print(response.body)
print(response.headers)