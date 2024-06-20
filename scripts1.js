const commonQueries = {
    'Registration': [
        "How to get registration on ICEGATE?",
        "What is simplified registration?",
        "Login issue, user unable to login at ICEGATE.",
        "I am already a registered user at ICEGATE and want to add more services on my registered ICEGATE ID, can I do the same?",
        "How can I change my registered email ID with associated ICEGATE ID?"
    ],
    'Filing': [
        "Shipping bill status enquiry",
        "What are the message filing guidelines?",
        "What if i am not getting query?",
        "How can i get the different message format and guidelines for filing in different ices edi versions at icegate?",
        "E scrip issue- shipping bill filing negative acknowledgement"
    ],
    'ePayment': [
        "Can i make custom duty payment in installment?",
        "What is the procedure to obtain icegate registration",
        "Challan has been rejected with error code 04.",
        "Can you please help me with the e scrip issue",
        "Challan has been rejected with error code 03 total amount collected is bank has collected less duty challan has been rejected by ices."
    ],
    'eSanchit': [
        "Will i be able to login to e sanchit?",
        "I am not able to submit the document using submit document button in e-sanchit application.",
        "Is e-sanchit available for shipping bill?",
        "Can i use the same dsc for signing documents to be upload on e-sanchit which i am using for signing be and sb documents.",
        "Am i able to upload any no. of documents at a time?"
    ],
    'IGST Refund/Drawback': [
        "How to rectify error code sb105 for igst refund",
        "What is the resolution for error code sb001 invalid sb details in igst refund?",
        "What are the benefits extended under igst laws on imports and exports?",
        "Who all have to quote gstin?",
        "Is gstin mandatory for all the importers and exporters?"
    ],
    'General Queries': [
        "Icegate website not working",
        "User wants to get registered ad code where does he need to contact",
        "I want to view the shipping bills filed.",
        "Authorised dealer code issue - authorised dealer code addition, updation",
        "Error in digital signature certificate"
    ]
};

const answers = {
    "How to get registration on ICEGATE?": "Registering on ICEGATE is a simple process:\n\na. Log on to www.icegate.gov.in and click on the ‘Register Now’ tab on the home page, or\n\nb. Log on to www.icegate.gov.in and follow the path:\n- Services\n- Registration\n- For Registration on ICEGATE Fill up the registration form by entering all the details in the required fields.\nFor further help, all users are requested to refer to the advisory issued pertaining to the registration process.",
    "What is simplified registration?": "Under Simplified Registration Exporter/Importer can get registration without uploading DSC, PAN verification, document upload to ICEGATE and approval procedure.\nThis Simplified Auto Registration is based on IEC and GSTIN, requires OTP verifications of e-mail and mobile number.\n\nNote: Default password is sent by ICEGATE for every user.",
    "Login issue, user unable to login at ICEGATE.": "If you're unable to login at ICEGATE, try resetting your password or contact ICEGATE support for further assistance.",
    "I am already a registered user at ICEGATE and want to add more services on my registered ICEGATE ID, can I do the same?": "Yes, as a registered ICEGATE user, you can add more services to your account by logging in and accessing the service management section.",
    "How can I change my registered email ID with associated ICEGATE ID?": "You are requested to visit below link for changing registered email id:old.icegate.gov.in/Download/Advisory%20to%20all%20users%20for%20updating%20registered%20email%20id%20at%20ICEGATE%20April%202019.pdf",

    "Shipping bill status enquiry": "Please use below link to check your SB status:\nenquiry.icegate.gov.in/enquiryatices/sbTrack\n\nIn case of any issue, please drop email to icegatehelpdesk@icegate.gov.in or call 1800-3010-1000",
    "What are the message filing guidelines?": "To check the Message Filing Guidelines, please click here.",
    "What if i am not getting query?": "Since sending of the 'Query' raised by the assessing officers in the ICES 1.5 to the registered e-mail id of the concerned user is a new service introduced through ICEGATE in ICES 1.5; users are requested first to get their ICEGATE ID updated for query via sending mail on registration@icegate.gov.in with their compete registration details. Thereafter, the users can not only receive the query raised in their BEs and SBs but can file the Query Reply also through internet using the RES package for ICES 1.5.",
    "How can i get the different message format and guidelines for filing in different ices edi versions at icegate?": "Messages formats for both ICES 1.0 and ICES 1.5 software's are available at ICEGATE website icegate.gov.in under the link Guidelines - Message Implementation Guidelines.",
    "E scrip issue- shipping bill filing negative acknowledgement": "Kindly raise a ticket using the Create Incident option or call 1800-3010-1000 for any issues. You can also write to icegatehelpdesk@icegate.gov.in  with the error screenshot so that we can serve you better.",

    "Can i make custom duty payment in installment?": "No, one fixed amount can be paid oncein single transaction.",
    "What is the procedure to obtain icegate registration": "Log on to icegate.gov.in and then go to ‘Login / Sign Up and follow the steps for registration. A ‘New Registration Demo’ PPT and FAQs / Advisory on New Registration under the ‘Downloads’ Tab may be referred for assistance. For further assistance, ICEGATE helpdesk on 1800-3010-1000 or email icegate.helpdesk@icegate.gov.in may be contacted.",
    "Challan has been rejected with error code 04.": "Issue pertains to ICES end;users are requested to contact at ICEGATE",
    "Can you please help me with the e scrip issue": "This functionality is available for IEC Holders registered with Digital Signature only. Simplified Registered users are not allowed for registration under this scheme.\nPlease refer the advisory & Tutorials  available at ICEGATE.\n\nFor further clarification, please check the advisory available at :\nicegate.gov.in-> Guidelines -> E-payment\nSelect advisory to avail Export Incentive Schemes (RODTEP & ROSCTL)",
    "Challan has been rejected with error code 03 total amount collected is bank has collected less duty challan has been rejected by ices.": "Users are requested to contact Customs location.",

    "Will i be able to login to e sanchit?": "Only ICEGATE registered users can use e-SANCHIT applications by accessing the e-SANCHIT link.",
    "I am not able to submit the document using submit document button in e-sanchit application.": "Once the document is uploaded, the document type is selected and the digital signature is verified then only the submit button will be visible.",
    "Is e-sanchit available for shipping bill?": "At present e-SANCHIT competency is given to importers only to submit BE documents.",
    "Can i use the same dsc for signing documents to be upload on e-sanchit which i am using for signing be and sb documents.": "Yes, the same DSC that is used for signing BE and SB documents can also beused for signing the document for e-SANCHIT.",
    "Am i able to upload any no. of documents at a time?": "No, you can upload maximum 5 documents at a time.",

    "How to rectify error code sb105 for igst refund?": "To rectify the Error code SB105 in IGST return, user need to use Table 9A and amend through GST Return.  The response code SB105 occurs when the given port code is not an SEZ port and given shipping bill number not have a valid length of either 7 (ESB) or 6 (MSB) or 5(CRSB). SB105 means Invalid Shipping Bill number",
    "What is the resolution for error code sb001 invalid sb details in igst refund?": "Shipping Bill validation is failed at ICEGATE System with error code SB001 – the combination of SB Number, SB Date and Port Code in the invoice transmitted from GST System doesn’t match the details given in the SB. You may amend the invoice details on the GST System. For any further help on how to amend an invoice on GST System, please contact the GST Helpdesk.",
    "What are the benefits extended under igst laws on imports and exports?": "The importers can avail the benefit of credit of IGST (and comp cess) paid on imports to pay GST on their outward supply. Similarly, exporters can claim refund of IGST (and comp cess) paid on exports.",
    "Who all have to quote gstin?": "Anyone who is registered with GSTN and wants to avail the benefits of GST.",
    "Is gstin mandatory for all the importers and exporters?": "No. GSTIN is mandatory only for those importers and exporters who are making taxable supplies under GST or who wish to avail the benefit of GST.",
};

function handleUserInput(input) {
    addMessage(input, 'user');
    if (commonQueries[input]) {
        setTimeout(() => {
            addMessage('Please go ahead and type your query.', 'assistant');
            addMessage(`Here are some top questions which are asked most frequently under ${input}:`, 'assistant');
            showCommonQuestions(commonQueries[input]);
        }, 500);
    } else if (answers[input]) {
        setTimeout(() => {
            addMessage(answers[input], 'assistant');
        }, 500);
    } else if (input === 'DIN Search') {
        setTimeout(() => {
            window.location.href = "https://esanchar.cbic.gov.in/DIN/DINSearch";
        }, 1000); // Delay redirection for user to see their message
    } else if (input === 'Indian AEO Program') {
        setTimeout(() => {
            window.location.href = "https://www.aeoindia.gov.in/";
        }, 1000);
    } else if (input === 'Customs Act') {
        setTimeout(() => {
            window.location.href = "https://www.indiacode.nic.in/bitstream/123456789/15359/1/the_customs_act%2C_1962.pdf";
        }, 1000);
    } else {
        sendToRasa(input);
    }
}

function showCommonQuestions(questions) {
    const chatContent = document.getElementById('chat-content');
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    questions.forEach(question => {
        const button = document.createElement('button');
        button.textContent = question;
        button.onclick = () => handleUserInput(question);
        buttonContainer.appendChild(button);
    });
    chatContent.appendChild(buttonContainer);
    chatContent.scrollTop = chatContent.scrollHeight;
}

function handleTextInput() {
    const question = document.getElementById('user-question').value.trim();
    if (question) {
        handleUserInput(question);
        document.getElementById('user-question').value = '';
    } else {
        alert("Please enter a question.");
    }
}

function addMessage(content, sender) {
    const chatContent = document.getElementById('chat-content');
    const message = document.createElement('div');
    chatContent.scrollTop = chatContent.scrollHeight;
    message.className = `message ${sender}`;
    message.textContent = content;
    if (sender === 'assistant') {
        message.innerHTML = `
            <section>
                <img src="assisstant-image.png" alt="Assistant Image">
            </section>
            <section>
                ${content}
                <i class="fas fa-volume-up speaker-icon" onclick="speakText('${content}')"></i>
            </section>`;
    }
    chatContent.appendChild(message);
    chatContent.scrollTop = chatContent.scrollHeight;
}


// Function to handle text-to-speech
function speakText(text) {
    var speakObj = new SpeechSynthesisUtterance();
    speakObj.text = text;
    speakObj.voice = speechSynthesis.getVoices().filter(function (voice) {
        return voice.name == "Google UK English Female"
    })[0];
    window.speechSynthesis.speak(speakObj);
}
function resetChat() {
    const chatContent = document.getElementById('chat-content');
    chatContent.innerHTML = `
        <div class="message assistant">
        <section>
              <img src="assisstant-image.png" alt="Assistant Image" />
        </section>
        <section>
              Hi, I'm Vaani, your Virtual Assistant. You can select from the
              options below or you can type your question in the space provided:
            </section>
        </div>
        <div class="button-container">
            <button onclick="handleUserInput('Registration')">Registration</button>
            <button onclick="handleUserInput('Filing')">Filing</button>
            <button onclick="handleUserInput('ePayment')">ePayment</button>
            <button onclick="handleUserInput('eSanchit')">eSanchit</button>
            <button onclick="handleUserInput('IGST Refund/Drawback')">IGST Refund/Drawback</button>
            <button onclick="handleUserInput('General Queries')">General Queries</button>
            <button onclick="handleUserInput('DIN Search')">DIN Search</button>
            <button onclick="handleUserInput('Customs Act')">Customs Act</button>
            <button onclick="handleUserInput('RTI Information')">RTI Information</button>
            <button onclick="handleUserInput('Indian AEO Program')">Indian AEO Program</button>
            <button onclick="handleUserInput('Enquiry')">Enquiry</button>
            <button onclick="handleUserInput('Message ID')">Message ID</button>
            <button onclick="handleUserInput('Transactional Queries')">Transactional Queries</button>
        </div>
    `;
}


function sendToRasa(message) {
    fetch('http://localhost:5005/webhooks/rest/webhook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sender: 'user', message: message })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (data && data.length > 0) {
                data.forEach(message => {
                    addMessage(message.text, 'assistant');
                });
            } else {
                addMessage('I did not understand that. Can you please rephrase?', 'assistant');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            addMessage('Sorry, there was an error processing your request.', 'assistant');
        });
}
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.interimResults = true; // Allow interim results
recognition.lang = 'en-US';

let isRecording = false;
let finalTranscript = '';

recognition.onstart = () => {
    console.log('Speech recognition service has started');
    document.querySelector('.fa-microphone').classList.add('recording');
};

recognition.onresult = (event) => {
    let interimTranscript = '';

    for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
        } else {
            interimTranscript += event.results[i][0].transcript;
        }
    }
    document.getElementById('user-question').value = finalTranscript + interimTranscript;
};

recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
};

recognition.onend = () => {
    document.querySelector('.fa-microphone').classList.remove('recording');
    isRecording = false;
};

function startRecognition() {
    if (isRecording) {
        recognition.stop();
    } else {
        finalTranscript = ''; // Reset the transcript
        recognition.start();
    }
    isRecording = !isRecording;
}

// Add event listener for the microphone button
document.querySelector('#mic-button').addEventListener('click', startRecognition);

// Function to handle text input
function handleTextInput() {
    const userInput = document.getElementById('user-question').value;
    if (userInput.trim()) {
        handleUserInput(userInput);
        document.getElementById('user-question').value = ''; // Clear the input field after sending the message
    }
}

// Add event listener for the send button
document.querySelector('#send-button').addEventListener('click', handleTextInput);
