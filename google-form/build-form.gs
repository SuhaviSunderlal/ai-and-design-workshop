/**
 * Night-Before AI Pulse — auto-builds the Google Form.
 *
 * HOW TO RUN (≈60 seconds, once):
 *   1. Go to  script.google.com  → New project.
 *   2. Delete the sample code, paste this whole file in.
 *   3. Click  Run  (▶).  First run asks you to authorize — allow it (it only
 *      creates a Form in your own Drive).
 *   4. Open  View → Logs  (or Execution log). The shareable link is printed there.
 *
 * The form lands in your Google Drive root, ready to Send.
 */
function buildPulseForm() {
  var form = FormApp.create('Quick hello before tomorrow 👋')
    .setDescription(
      '45 seconds, 4 questions — no wrong answers. This just helps us pitch ' +
      'tomorrow at exactly the right level for the room. See you there! — Suhav & Aditya'
    )
    .setCollectEmail(false)
    .setProgressBar(false);

  // Q1 — experience (multiple choice, required)
  form.addMultipleChoiceItem()
    .setTitle('How would you describe your experience with AI tools?')
    .setRequired(true)
    .setChoiceValues([
      'Never really used them',
      'Tried it once or twice',
      'I use it sometimes',
      'I use it most weeks / daily'
    ]);

  // Q2 — tools used (checkboxes, optional)
  form.addCheckboxItem()
    .setTitle('Which of these have you actually used? (tick any)')
    .setRequired(false)
    .setChoiceValues([
      'ChatGPT',
      'Google Gemini',
      'Claude',
      'Canva (AI features)',
      'Midjourney / Leonardo / other image tools',
      'None yet'
    ]);

  // Q3 — frequency (multiple choice, required)
  form.addMultipleChoiceItem()
    .setTitle('How often do you reach for AI right now?')
    .setRequired(true)
    .setChoiceValues([
      'Never',
      'Once in a while',
      'A few times a month',
      'A few times a week',
      'Every day'
    ]);

  // Q4 — open hope (paragraph, optional)
  form.addParagraphTextItem()
    .setTitle("One thing you're hoping to get out of tomorrow?")
    .setHelpText('A rough phrase is perfect — even "not sure yet, just curious" helps.')
    .setRequired(false);

  // Print the links you need.
  Logger.log('✅ Form created!');
  Logger.log('SHARE THIS LINK (send to attendees):  ' + form.getPublishedUrl());
  Logger.log('EDIT / VIEW RESPONSES here:            ' + form.getEditUrl());
}
