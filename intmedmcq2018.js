// This file only contains your data. No HTML or CSS.
const myQuestionBank = [
{
  question: "1. The most important factor in the pathogenesis of peptic ulcer disease is ( )",
  options: [
    "A. Helicobacter pylori",
    "B. Non-steroidal anti-inflammatory drug",
    "C. Pepsin",
    "D. Prostaglandin deficiency",
    "E. Gastric acid"
  ],
  answerIndex: 0, // A
  explanation: "<b>Why:</b> Helicobacter pylori is a major etiological factor in peptic ulcer disease. It causes chronic gastric inflammation, disrupts mucosal defense, and contributes to ulcer formation<br><b>Why not the others:</b> B is another major cause through inhibition of protective prostaglandins; C and E are aggressive factors that contribute to mucosal injury; D represents impaired mucosal protection, particularly in NSAID-related ulcers<br><b>Key concept:</b> Peptic ulcer develops when aggressive factors (H. pylori, acid, pepsin, NSAIDs) overcome mucosal defenses (mucus, bicarbonate, prostaglandins)<br><b>High-yield:</b> H. pylori and NSAIDs are the two major causes of peptic ulcer disease. Gastric acid is necessary for ulcer formation but is not the only underlying cause",
  // Source: 12 Peptic Ulcer 1.pdf, slide 5
  // Confidence: high
},
{
  question: "2. Which one is the most valuable in the diagnosis of portal hypertension in cirrhosis ( )",
  options: [
    "A. Varicose veins in the lower esophagus",
    "B. Subcutaneous varicose veins of the abdominal wall",
    "C. Large splenic size and hypersplenism",
    "D. Refractory ascites",
    "E. The spleen is large and ascites"
  ],
  answerIndex: 0, // A
  explanation: "<b>Why:</b> Esophageal varices are direct evidence of portosystemic collateral formation caused by portal hypertension. Their presence strongly supports the diagnosis in a patient with cirrhosis<br><b>Why not the others:</b> B indicates abdominal wall collateral circulation; C suggests congestive splenomegaly and hypersplenism; D and E indicate complications of portal hypertension but are less specific<br><b>Key concept:</b> Increased portal pressure causes blood to bypass the liver through portosystemic collaterals, particularly at the lower esophagus, producing esophageal varices<br><b>High-yield:</b> Esophageal varices are detected by upper GI endoscopy. HVPG measurement is the reference standard for quantifying portal pressure",
  // Source: 17 Liver Cirrhosis - 1 c261102.pdf, slide not found
  // Confidence: high
},
{
  question: "3. The distinction between Hodgkin's lymphoma and non-Hodgkin's lymphoma mainly depends on the former having ( )",
  options: [
    "A. Periodic fever",
    "B. Night sweats",
    "C. Alcohol pain",
    "D. The site of lymph node enlargement is more extensive",
    "E. Reed-Sternberg cells were found in the lymph node pathology"
  ],
  answerIndex: 4, // E
  explanation: "<b>Why:</b> Reed-Sternberg cells are the characteristic diagnostic cells of classical Hodgkin lymphoma and are identified by lymph node biopsy<br><b>Why not the others:</b> A and B are systemic B symptoms that can occur in both lymphoma types; C is a characteristic but uncommon clinical feature of Hodgkin lymphoma; D is more suggestive of the widespread, non-contiguous distribution often seen in non-Hodgkin lymphoma<br><b>Key concept:</b> Classical Hodgkin lymphoma is characterized by Reed-Sternberg cells, typically large cells with bilobed or multinucleated nuclei and prominent owl-eye nucleoli<br><b>High-yield:</b> Classical Reed-Sternberg cells typically express CD15 and CD30. Tissue biopsy is essential for lymphoma classification",
  // Source: 26 Lymphoma.pdf, slide not found
  // Confidence: high
},
{
  question: "4. The most common cause of death from hypertension is ( )",
  options: [
    "A. Cerebrovascular accident",
    "B. Myocardial infarction",
    "C. Renal failure",
    "D. Cardiac insufficiency",
    "E. Arrhythmia"
  ],
  answerIndex: 0, // A
  explanation: "<b>Why:</b> Cerebrovascular accident is the expected examination answer because chronic uncontrolled hypertension is a major risk factor for both cerebral infarction and intracerebral hemorrhage<br><b>Why not the others:</b> B, C, D, and E are also important complications of hypertension, but they are not the expected leading cause of death in this question<br><b>Key concept:</b> Chronic hypertension damages cerebral small vessels and accelerates atherosclerosis, increasing the risk of ischemic stroke and intracerebral hemorrhage<br><b>High-yield:</b> Hypertension causes target-organ damage in the brain, heart, kidneys, and blood vessels. The exact leading cause of death varies with population and clinical setting",
  // Source: 32 Hypertension.pdf, slide not found
  // Confidence: medium
},
{
  question: "5. The main cause of anemia in acute leukemia is ( )",
  options: [
    "A. Erythrocyte life span is shortened",
    "B. Lack of hematopoietic raw materials",
    "C. Haemorrhage",
    "D. Reproductive erythropoiesis",
    "E. Leukemic clones inhibit normal hematopoietic stem cells"
  ],
  answerIndex: 4, // E
  explanation: "<b>Why:</b> Leukemic blasts proliferate uncontrollably in the bone marrow and suppress normal hematopoietic stem cells, reducing normal red blood cell production and causing anemia<br><b>Why not the others:</b> A, B, and C may contribute to anemia in selected patients but are not the primary mechanism in acute leukemia; D does not describe the main mechanism of leukemic anemia<br><b>Key concept:</b> Bone marrow replacement and suppression by leukemic blasts impair normal hematopoiesis, affecting red blood cells, white blood cells, and platelets<br><b>High-yield:</b> Acute leukemia causes three major manifestations: anemia → fatigue and pallor; neutropenia → infection; thrombocytopenia → bleeding",
  // Source: 23 Leukemia AL.pdf, slide not found
  // Confidence: high
},
{
  question: "6. The main basis for the diagnosis of acute leukemia is ( )",
  options: [
    "A. Fever of unknown origin",
    "B. Progressive splenomegaly",
    "C. Philadelphia chromosome",
    "D. Neutrophil alkaline phosphatase activity was increased",
    "E. Blasts were &gt; 30% in the bone marrow"
  ],
  answerIndex: 4, // E
  explanation: "<b>Why:</b> Excessive accumulation of immature blast cells in the bone marrow is the main diagnostic basis for acute leukemia. The question uses the historical FAB criterion of &gt;30% blasts<br><b>Why not the others:</b> A and B are nonspecific clinical findings; C is associated with CML and can also occur in some cases of ALL, but is not the general diagnostic basis for acute leukemia; D is more commonly associated with leukemoid reactions than with CML<br><b>Key concept:</b> Acute leukemia is diagnosed by identifying abnormal blast proliferation in bone marrow, supported by morphology, immunophenotyping, cytogenetics, and molecular studies<br><b>High-yield:</b> Remember the classification difference: FAB uses &gt;30% blasts, whereas modern WHO/ICC classifications generally use &ge;20%, with specific genetic exceptions",
  // Source: 23 Leukemia AL.pdf, slide not found
  // Confidence: high
},
{
  question: "7. The most important basis for judging whether tuberculosis is infectious is ( )",
  options: [
    "A. Tuberculosis bacteria found in sputum smear",
    "B. Tuberculin test",
    "C. Repeated sputum with blood",
    "D. Chest X-ray examination",
    "E. Erythrocyte sedimentation rate"
  ],
  answerIndex: 0, // A
  explanation: "<b>Why:</b> Detection of acid-fast bacilli (AFB) in sputum smear indicates a high respiratory bacillary burden and strongly suggests infectious pulmonary tuberculosis<br><b>Why not the others:</b> B indicates TB infection but cannot distinguish active disease from latent infection; C may occur in pulmonary TB but does not establish infectiousness; D shows lung abnormalities but cannot directly determine infectiousness; E is a nonspecific inflammatory marker<br><b>Key concept:</b> Pulmonary TB spreads through airborne particles generated by patients with infectious respiratory disease. The amount of bacilli in respiratory secretions is an important determinant of transmission risk<br><b>High-yield:</b> Positive sputum AFB smear strongly suggests infectiousness, but a negative smear does not completely exclude transmission. Consider sputum NAAT, culture, symptoms, and clinical findings",
  // Source: 04 Pulmonary TB.pdf, slide not found
  // Confidence: high
},
{
  question: "8. The most meaningful ECG change to distinguish angina from myocardial infarction is ( )",
  options: [
    "A. ST segment elevation",
    "B. The T wave is exceptionally towering",
    "C. The newly emerging pathological Q-wave",
    "D. With ventricular arrhythmia",
    "E. T wave inversion"
  ],
  answerIndex: 2, // C
  explanation: "<b>Why:</b> A newly developed pathological Q wave indicates myocardial necrosis, supporting myocardial infarction rather than uncomplicated angina, which causes ischemia without myocardial cell death<br><b>Why not the others:</b> A may occur in acute STEMI but is not specific to irreversible necrosis; B may represent hyperacute ischemic changes; D is a possible complication of MI but is not diagnostic; E may occur in myocardial ischemia and does not independently distinguish MI from angina<br><b>Key concept:</b> Angina causes transient myocardial ischemia, whereas MI involves irreversible myocardial injury and necrosis<br><b>High-yield:</b> Pathological Q wave = myocardial necrosis. However, Q waves are not required for MI diagnosis and may be absent in early or non-Q-wave MI" ,
  // Source: 36 CAD 2.pdf, slide not found
  // Confidence: high
},
{
  question: "9. The most common pathogen of primary lung abscess is ( )",
  options: [
    "A. Staphylococcus aureus",
    "B. Pneumococcus",
    "C. Anaerobe",
    "D. Fungus",
    "E. Streptococcus"
  ],
  answerIndex: 2, // C
  explanation: "<b>Why:</b> Primary lung abscess commonly develops after aspiration of bacteria from the oral cavity, especially anaerobic organisms, into the lower respiratory tract<br><b>Why not the others:</b> A, B, and E can cause lung infections and abscesses but are less characteristic of aspiration-related primary lung abscess; D is an uncommon cause in immunocompetent patients<br><b>Key concept:</b> Aspiration of oropharyngeal secretions introduces mixed oral flora into the lung, causing tissue necrosis and abscess formation<br><b>High-yield:</b> Think of aspiration risk factors such as impaired consciousness, poor oral hygiene, and swallowing dysfunction. Anaerobic infection is classically associated with foul-smelling sputum",
  // Source: 01 Respiratory System.pdf, slide 1
  // Confidence: high
},
{
  question: "10. The most serious complication of ulcerative colitis is ( )",
  options: [
    "A. Pseudopolyp of colon",
    "B. Stenosis of colon",
    "C. Hypoproteinemia",
    "D. Toxic megacolon",
    "E. Water electrolyte disorder"
  ],
  answerIndex: 3, // D
  explanation: "<b>Why:</b> Toxic megacolon is a life-threatening complication of severe ulcerative colitis, characterized by acute colonic dilation with systemic toxicity and a high risk of perforation<br><b>Why not the others:</b> A is a result of repeated mucosal inflammation and healing; B may occur in chronic intestinal disease but is less characteristic of UC; C and E are important complications of severe diarrhea and intestinal inflammation but are not as immediately life-threatening as toxic megacolon<br><b>Key concept:</b> Severe colonic inflammation disrupts neuromuscular function and reduces colonic motility, causing marked dilation and potentially leading to perforation, peritonitis, and sepsis<br><b>High-yield:</b> Toxic megacolon is suggested by systemic toxicity with colonic dilation, classically &gt;6 cm on abdominal imaging. Watch for fever, tachycardia, abdominal distension, and severe bloody diarrhea",
  // Source: 14 IBD.pdf, slide not found
  // Confidence: high
},

{
  question: "11. The patient, male, 35 years old, was diagnosed with posthepatitis B cirrhosis 2 years ago, with obvious wasting, liver pain, abdominal distension and low fever in the past 2 months. Liver subcostal 3.5cm and 2.5cm large spleen. For a definite diagnosis, the preferred laboratory test is ( )",
  options: [
    "A. Alkaline phosphatase (AKP)",
    "B. γ-GT",
    "C. LDH",
    "D. Monoamine oxidase (MAO)",
    "E. AFP"
  ],
  answerIndex: 4, // E
  explanation: "<b>Why:</b> Chronic HBV cirrhosis is a major risk factor for hepatocellular carcinoma (HCC). Progressive wasting, liver pain, low-grade fever, and hepatomegaly raise suspicion for HCC. Among the given laboratory tests, serum alpha-fetoprotein (AFP) is the most appropriate tumor marker<br><b>Why not the others:</b> A, B, and C are nonspecific enzymes that may increase in various liver injuries; D is associated with hepatic fibrosis rather than being a tumor marker for HCC<br><b>Key concept:</b> AFP is produced by many hepatocellular carcinomas and can support the diagnosis, but an elevated AFP alone cannot confirm HCC<br><b>High-yield:</b> In patients with cirrhosis, suspicious liver lesions require multiphasic contrast-enhanced CT or MRI for diagnostic evaluation. AFP is supportive, not definitive",
  // Source: 15 Primary Hepatic Carcinoma.pdf, slide not found
  // Confidence: high
},
{
  question: "12. The patient, a 24-year-old male, had irregular fever for 3 months with enlarged right neck lymph node. The puncture smear sees \"mirror shadow\" cells, which should be considered first ( )",
  options: [
    "A. Chronic lymphocytic leukemia",
    "B. Non-Hodgkin lymphoma",
    "C. Scrofula",
    "D. Lymph node metastasis of the cancer tumor",
    "E. Hodgkin disease"
  ],
  answerIndex: 4, // E
  explanation: "<b>Why:</b> Cervical lymphadenopathy, prolonged fever, and mirror-shadow cells (Reed-Sternberg cells) strongly suggest Hodgkin lymphoma. These characteristic cells have large, often bilobed nuclei with prominent eosinophilic nucleoli resembling owl eyes<br><b>Why not the others:</b> A typically presents with mature lymphocytosis; B is a different group of lymphoid malignancies; C causes granulomatous inflammation, often with caseous necrosis; D shows metastatic malignant epithelial cells rather than Reed-Sternberg cells<br><b>Key concept:</b> Reed-Sternberg cells are the characteristic diagnostic cells of classical Hodgkin lymphoma, usually within an inflammatory background<br><b>High-yield:</b> Classical Hodgkin lymphoma typically expresses CD15 and CD30. Excisional lymph node biopsy is preferred for definitive diagnosis",
  // Source: 26 Lymphoma.pdf, slide not found
  // Confidence: high
},
{
  question: "13. The patient, male, was 24 years old. Anemia appearance, liver, spleen and lymph nodes were not touched. Blood routine test: Hb 60 g/L, RBC 2.00 x 10<sup>12</sup>/L, WBC 3.00 x 10<sup>9</sup>/L, PLT 50 x 10<sup>9</sup>/L. No naive cells were seen on multiple blood smears, and the puncture smear in multiple parts of the bone marrow showed increased fat droplets, hypoplasia, and megakaryocyte deficiency. The most likely diagnosis is ( )",
  options: [
    "A. Myelofibrosis",
    "B. Leukocytes showed increasing leukemia",
    "C. Myelodysplastic syndrome",
    "D. Aplastic anemia",
    "E. Vice histiocytosis"
  ],
  answerIndex: 3, // D
  explanation: "<b>Why:</b> Pancytopenia (low RBC, WBC, and PLT) without hepatosplenomegaly or lymphadenopathy, together with hypocellular bone marrow, increased fat spaces, and reduced megakaryocytes, strongly indicates aplastic anemia<br><b>Why not the others:</b> A usually causes marrow fibrosis, often with splenomegaly and a leukoerythroblastic blood picture; B typically shows leukemic blasts; C shows ineffective hematopoiesis with dysplastic marrow cells rather than simply an empty hypocellular marrow; E does not fit the characteristic clinical and marrow findings<br><b>Key concept:</b> Aplastic anemia is bone marrow failure characterized by pancytopenia and hypocellular marrow replaced by fatty tissue<br><b>High-yield:</b> Remember the combination: pancytopenia + hypocellular fatty marrow + absence of significant organomegaly = aplastic anemia",
  // Source: 20 Anemia - Aplastic Anemia.pdf, slide not found
  // Confidence: high
},
{
  question: "14. Which of the following is not a treatment principle for chronic atrial fibrillation ( )",
  options: [
    "A. Recovering sinus rhythm",
    "B. Reduce symptoms",
    "C. Improve cardiac function",
    "D. Prevent arterial embolism",
    "E. Control ventricular rate"
  ],
  answerIndex: 0, // A
  explanation: "<b>Why:</b> The expected examination answer is A. In the traditional management approach to chronic or permanent atrial fibrillation, routine restoration of sinus rhythm is not the primary treatment goal. Management focuses on ventricular rate control, symptom relief, cardiac function, and prevention of thromboembolism<br><b>Why not the others:</b> B, C, D, and E are important management goals. Rate control improves ventricular filling and cardiac function, while anticoagulation reduces the risk of thromboembolic stroke<br><b>Key concept:</b> AF management has two major strategies: rate control (control ventricular response) and rhythm control (restore and maintain sinus rhythm), alongside assessment for anticoagulation<br><b>High-yield:</b> Permanent AF means a decision has been made not to pursue further rhythm restoration. Persistent AF may still be treated with cardioversion or antiarrhythmic therapy in selected patients",
  // Source: 38 Arrhythmia 2.pdf, slide not found
  // Confidence: medium
},
{
  question: "15. The patient, female, 30 years old, worker, felt fatigue for 5 years and 1 week. Menstruation is heavy, poor appetite, partial food. WBC 4.2 x 10<sup>9</sup>/L, RBC 2.5 x 10<sup>12</sup>/L, Hb 69 g/L, MCV 60fl, MCH 20pg, MCHC 280g/L. After the clinical administration of iron, the first indicator of elevation is ( )",
  options: [
    "A. Hemoglobin",
    "B. Blood cells",
    "C. Reticulocytes",
    "D. Total number of red blood cells",
    "E. White blood cells"
  ],
  answerIndex: 2, // C
  explanation: "<b>Why:</b> The patient has microcytic hypochromic anemia (low MCV, MCH, and MCHC), strongly suggesting iron deficiency anemia, likely related to heavy menstrual blood loss. After effective iron therapy, reticulocyte production increases first as the bone marrow resumes erythropoiesis<br><b>Why not the others:</b> A and D increase later as newly produced red blood cells enter circulation; B is nonspecific and is not the earliest response marker; E is not specifically increased by iron treatment<br><b>Key concept:</b> Iron replenishment restores hemoglobin synthesis, allowing the bone marrow to produce more red blood cells. Reticulocytes are released before a measurable rise in hemoglobin<br><b>High-yield:</b> Reticulocyte count typically begins increasing within several days and peaks around 7–10 days after effective iron therapy. Hemoglobin rises later, usually over subsequent weeks",
  // Source: 19 Anemia - Intro.pdf, slide not found
  // Confidence: high
},
{
  question: "16. The patient, male, 56 years old, was admitted for haematemesis and melena for a 6-hour emergency, with a past history of hepatitis B for more than 10 years. Physical examination: anemia appearance, spider nevus, normal heart and lung, abdominal swelling, shifting dullness positive. The gastroscopy was shown in Fig. The most likely diagnosis of this patient was ( )",
  images: ["images/intmedii2018_q16.png"],
  options: [
    "A. Oesophageal ulcer and bleeding",
    "B. Esophageal cancer and bleeding",
    "C. Esophageal injury and bleeding",
    "D. Cirrhosis and variceal rupture and bleeding in the oesophagus and stomach",
    "E. Mucosal tear syndrome of the esophageal cardia"
  ],
  answerIndex: 3, // D
  explanation: "<b>Why:</b> The endoscopic image shows prominent, tortuous esophageal varices. Combined with chronic hepatitis B, spider nevi, ascites (positive shifting dullness), hematemesis, and melena, the findings strongly indicate cirrhosis with portal hypertension complicated by variceal bleeding<br><b>Why not the others:</b> A causes ulcerative mucosal lesions rather than enlarged tortuous veins; B typically shows an irregular mass or ulcerated tumor; C requires a history of traumatic esophageal injury; E (Mallory-Weiss syndrome) causes a longitudinal mucosal tear near the gastroesophageal junction, usually following repeated vomiting<br><b>Key concept:</b> Cirrhosis increases portal venous pressure, causing portosystemic collateral formation and dilation of submucosal esophageal veins. Rupture of these varices can cause massive upper GI bleeding<br><b>High-yield:</b> Cirrhosis + hematemesis + esophageal varices = suspect variceal hemorrhage. Acute management includes resuscitation, vasoactive therapy (e.g., terlipressin or octreotide), antibiotic prophylaxis, and urgent endoscopic variceal ligation",
  // Source: Attached gastroscopy image and clinical question; lecture slides not provided
  // Confidence: high
},
{
    question: "17. The patient, 22 years old female, who developed cough and expectoration for 3 weeks and amenorrhea for 2 months, failed to receive self-administered amoxicillin treatment. Chest radiograph: patchy density of the right upper lung. The possible diagnosis is ( )",
    options: [
      "A. Bronchiectasis",
      "B. Secondary tuberculosis of lung",
      "C. Pneumococcal pneumonia",
      "D. Pulmonary abscess",
      "E. Chronic bronchitis"
    ],
    answerIndex: 1, // B
    explanation: "<b>Why:</b> Subacute cough, failure to improve with amoxicillin and an upper-lobe pulmonary infiltrate suggest pulmonary tuberculosis, particularly secondary TB.<br><b>Why not:</b> A: usually presents with chronic purulent sputum. C: typically causes acute pneumonia. D: usually presents with fever and cavitary lesions. E: requires chronic productive cough for at least 3 months per year for 2 consecutive years.<br><b>Core:</b> Upper-lobe infiltrates + persistent cough + failure of routine antibiotics = suspect pulmonary TB.",
    // Source: 04 Pulmonary TB.pdf, slide not found
    // Confidence: high
  },
  {
    question: "18. The patient, female, 20-year-old, had sudden palpitations for 1 hour. Past history of similar episodes may terminate spontaneously. Physical examination: the thyroid gland is not large, the heart boundary is not large, the heart rate is 180 times / min, the rhythm is complete, unheard noise. A clear diagnosis should be done immediately via ( )",
    options: [
      "A. Echocardiography",
      "B. Electrocardiographic examination",
      "C. Cardiac vector map examination",
      "D. Cardiac X-ray examination",
      "E. T3, T4 check up"
    ],
    answerIndex: 1, // B
    explanation: "<b>Why:</b> Sudden-onset regular tachycardia with previous episodes that terminate spontaneously suggests paroxysmal supraventricular tachycardia (PSVT). ECG during the attack identifies the rhythm.<br><b>Why not:</b> A: evaluates cardiac structure. C: not a routine first-line test. D: assesses heart size. E: investigates thyroid dysfunction but cannot identify the arrhythmia.<br><b>Core:</b> Sudden-onset, sudden-termination regular tachycardia → suspect PSVT; obtain a 12-lead ECG during the attack.",
    // Source: 37 Arrhythmia 1.pdf, 38 Arrhythmia 2.pdf, slide not found
    // Confidence: high
  },
  {
    question: "19. A 45-year-old man underwent routine physical examination, and a substantial 2cm × 2.5cm space-occupying lesion was found in the right lobe of the liver. The man had no abnormal symptoms and signs, and was preferred for the next examination ( )",
    options: [
      "A. Hepatic arteriography",
      "B. Liver function test",
      "C. Nuclide liver scan",
      "D. CT examination of the abdomen",
      "E. Serum AFP examination"
    ],
    answerIndex: 4, // E
    explanation: "<b>Why:</b> Serum alpha-fetoprotein (AFP) is a tumor marker used to support the evaluation of suspected hepatocellular carcinoma (HCC).<br><b>Why not:</b> A: invasive and not the preferred initial investigation. B: evaluates liver function, not the focal lesion. C: has limited ability to characterize focal liver lesions. D: provides anatomical characterization and is clinically important for evaluating the lesion.<br><b>Core:</b> AFP supports HCC evaluation but cannot diagnose HCC alone; multiphasic contrast-enhanced CT or MRI is used to characterize suspicious liver lesions.",
    // Source: 15 Primary Hepatic Carcinoma.pdf, slide not found
    // Confidence: medium
    // Flag: check answer — see report
  },
{
  question: "20. As shown in Fig, the ECG of a patient with myocardial infarction, the localization diagnosis of the ECG is ( )",
  images: ["images/intmedii2018_q20.png"],
  options: [
    "A. High lateral wall",
    "C. Anterior wall",
    "B. Inferior wall",
    "D. Posterior wall",
    "E. None of the above is correct"
  ],
  answerIndex: 2,
  letter: "B",
  explanation: "ST-segment elevation in leads III and aVF indicates inferior wall myocardial infarction, with reciprocal ST depression in aVL supporting the diagnosis.<br>Why others are wrong: High lateral MI involves leads I and aVL; anterior MI involves V1–V4; posterior MI typically shows reciprocal ST depression in V1–V3 with tall R waves",
  source: "GPT, no slides",
  confidence: "medium",
  flag: "check answer"
},
{
    caseText: "The patient, female, had an asthma attack for 2 days, orthopnea, cyanosis and diffuse wheezing in both lungs.",
    question: "21. Which of the following results best fits the patient's current condition ( )",
    options: [
      "A. PaCO2 increased, PaO2 increased",
      "B. PaO2 decreased, PaCO2 decreased",
      "C. PaCO2 was normal, PaO2 decreased",
      "D. Pulmonary living capacity was normal and the residual volume was increased",
      "E. FEV Reduction, with a normal residual air volume"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> Severe asthma causes hypoxemia (decreased PaO2). As respiratory muscle fatigue develops, PaCO2 may return to normal or increase instead of remaining low.<br><b>Why not:</b> A: PaO2 should decrease. B: typical of early asthma with hyperventilation. D: vital capacity may decrease. E: residual volume usually increases due to air trapping.<br><b>Core:</b> Severe asthma + normal or rising PaCO2 = respiratory muscle fatigue and impending respiratory failure.",
    // Source: 09 Asthma c261010.pdf, slide 17
    // Confidence: high
  },
  {
    caseText: "The patient, female, had an asthma attack for 2 days, orthopnea, cyanosis and diffuse wheezing in both lungs.",
    question: "22. The following diagnosis is more accurate ( )",
    options: [
      "A. Bronchial asthma",
      "B. Wheezy bronchitis",
      "C. Concurrent infection of asthma",
      "D. Asthma with pneumothorax",
      "E. Status asthmaticus"
    ],
    answerIndex: 4, // E
    explanation: "<b>Why:</b> The prolonged severe asthma attack with orthopnea and cyanosis suggests status asthmaticus, a severe exacerbation that does not respond adequately to usual treatment.<br><b>Why not:</b> A: too general. B: does not describe severe asthma exacerbation. C: infection is a possible trigger, not the main diagnosis. D: requires evidence of pneumothorax.<br><b>Core:</b> Status asthmaticus = severe, persistent asthma exacerbation refractory to initial treatment; the traditional >24-hour criterion should be verified with slides.",
    // Source: 09 Asthma c261010.pdf, slide 14
    // Confidence: high
  },
  {
    caseText: "The patient, female, had an asthma attack for 2 days, orthopnea, cyanosis and diffuse wheezing in both lungs.",
    question: "23. To determine the severity of the disease, what kind of the following tests should be made ( )",
    options: [
      "A. X-ray chest",
      "B. Serum IgE",
      "C. Lung function",
      "D. Blood gas analysis",
      "E. Electrocardiogram"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> Arterial blood gas (ABG) analysis evaluates oxygenation (PaO2), ventilation (PaCO2) and acid-base status, helping assess respiratory failure severity.<br><b>Why not:</b> A: detects complications but does not directly assess gas exchange. B: evaluates allergic tendency. C: difficult to perform reliably during severe respiratory distress. E: evaluates cardiac abnormalities.<br><b>Core:</b> Severe asthma: ABG assesses hypoxemia, hypercapnia and impending respiratory failure.",
    // Source: 09 Asthma c261010.pdf, slide 17
    // Confidence: high
  },
  {
    caseText: "The patient, female, had an asthma attack for 2 days, orthopnea, cyanosis and diffuse wheezing in both lungs.",
    question: "24. Which of the following treatments is incorrect ( )",
    options: [
      "A. Oxygen therapy",
      "B. Control infection",
      "C. Thoracic puncture extraction",
      "D. Intravenous aminophylline dexamethasone infusion",
      "E. Correct acid-base imbalance"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> Thoracic puncture is used for conditions such as pneumothorax or pleural effusion, not uncomplicated status asthmaticus.<br><b>Why not:</b> A: corrects hypoxemia. B: treats bacterial infection when present. D: includes systemic corticosteroid treatment; aminophylline use depends on the treatment protocol. E: addresses acid-base disturbances when present.<br><b>Core:</b> Status asthmaticus management focuses on oxygenation, bronchodilation, systemic corticosteroids and treatment of precipitating factors.",
    // Source: 09 Asthma c261010.pdf, slide 23
    // Confidence: high
  },
{
    caseText: "The patient, 25 year old female, had palpitations, shortness of breath, dizziness, and chest tightness for 3 days. She had an upper respiratory tract infection 3 weeks ago and had recovered. In the past health was good. Physical Examination: the heart boundary is slightly larger, the heart rate is 100 times / min, can hear S3, Lung (-), blood pressure of 107/70mmHg.",
    question: "25. The most important treatment of confirmed viral myocarditis is ( )",
    options: [
      "A. Bed rest until the heart will return to normal size",
      "B. Static antibiotics",
      "C. Adrenal cortex hormone",
      "D. Static energy mixture",
      "E. Traditional Chinese medicine"
    ],
    answerIndex: 0, // A
    explanation: "<b>Why:</b> Bed rest reduces myocardial workload and oxygen demand, allowing the inflamed myocardium to recover.<br><b>Why not:</b> B: antibiotics do not treat viral infections. C: corticosteroids are not routinely indicated. D: supportive metabolic therapy, not the main treatment. E: not the primary evidence-based treatment.<br><b>Core:</b> Acute viral myocarditis → rest and avoid strenuous physical activity during recovery.",
    // Source: 39 Cardiomyopathy.pdf, slide 14
    // Confidence: high
  },
  {
    caseText: "The patient, 25 year old female, had palpitations, shortness of breath, dizziness, and chest tightness for 3 days. She had an upper respiratory tract infection 3 weeks ago and had recovered. In the past health was good. Physical Examination: the heart boundary is slightly larger, the heart rate is 100 times / min, can hear S3, Lung (-), blood pressure of 107/70mmHg.",
    question: "26. On the second day of hospitalization, the patient felt dizziness and amaurosis, had third-degree atrioventricular block after examination, and her heart rate was 45 times / min. The most appropriate treatment measure is ( )",
    options: [
      "A. Ancardiac pacemaker",
      "B. A temporary cardiac pacemaker",
      "C. Adrenaline",
      "D. Styling atropine",
      "E. A lot of quiet vitamins"
    ],
    answerIndex: 1, // B
    explanation: "<b>Why:</b> Third-degree AV block with symptomatic bradycardia (45 bpm), dizziness and amaurosis requires temporary cardiac pacing to maintain an adequate heart rate and cardiac output.<br><b>Why not:</b> A: permanent pacing may be unnecessary if conduction recovers. C: may temporarily increase heart rate but does not reliably correct complete AV block. D: atropine may be ineffective in severe or infranodal block. E: does not correct the conduction disturbance.<br><b>Core:</b> Symptomatic complete AV block → temporary pacing; consider permanent pacing if conduction does not recover.",
    // Source: 39 Cardiomyopathy.pdf, slide 14
    // Confidence: high
  },
  {
    caseText: "The patient, 25 year old female, had palpitations, shortness of breath, dizziness, and chest tightness for 3 days. She had an upper respiratory tract infection 3 weeks ago and had recovered. In the past health was good. Physical Examination: the heart boundary is slightly larger, the heart rate is 100 times / min, can hear S3, Lung (-), blood pressure of 107/70mmHg.",
    question: "27. The most appropriate auxiliary examination is ( )",
    options: [
      "A. Electrocardiogram",
      "B. Myocardial enzyme spectrum",
      "C. Liver function",
      "D. ASO",
      "E. Swallow culture"
    ],
    answerIndex: 0, // A
    explanation: "<b>Why:</b> ECG is an essential initial investigation for suspected myocarditis, detecting arrhythmias, ST-T abnormalities and conduction disturbances.<br><b>Why not:</b> B: detects myocardial injury but does not directly identify electrical abnormalities. C: evaluates liver function. D: suggests recent streptococcal infection. E: investigates bacterial throat infection.<br><b>Core:</b> Suspected myocarditis → ECG for electrical abnormalities; cardiac troponin and cardiac MRI help evaluate myocardial injury and inflammation.",
    // Source: 39 Cardiomyopathy.pdf, slide 12
    // Confidence: high
  },
  {
    caseText: "The patient, a 35-year-old male with fever with cervical and inguinal lymph node enlargement for more than 1 month, was diagnosed as mid-high malignant NHL by right cervical lymph node biopsy.",
    question: "28. The biggest difference between NHL and HD is that ( )",
    options: [
      "A. Irregular fever",
      "B. It is prone to distant spread",
      "C. Easy weight loss",
      "D. It is easy to have night sweats",
      "E. It is prone to painless and progressive lymph node enlargement"
    ],
    answerIndex: 1, // B
    explanation: "<b>Why:</b> Non-Hodgkin lymphoma (NHL) tends to spread non-contiguously to distant lymph nodes and extranodal organs, unlike Hodgkin lymphoma (HD), which typically spreads contiguously.<br><b>Why not:</b> A: fever can occur in both. C: weight loss is a B symptom in both. D: night sweats occur in both. E: painless progressive lymphadenopathy occurs in both.<br><b>Core:</b> Hodgkin lymphoma → contiguous spread; NHL → non-contiguous spread and more frequent extranodal involvement.",
    // Source: 26 Lymphoma.pdf, slide 4
    // Confidence: high
  },
  {
    caseText: "The patient, a 35-year-old male with fever with cervical and inguinal lymph node enlargement for more than 1 month, was diagnosed as mid-high malignant NHL by right cervical lymph node biopsy.",
    question: "29. The most common site of NHL involvement in the digestive tract is ( )",
    options: [
      "A. Ileum",
      "B. Jejunum",
      "C. Stomach",
      "D. Colon",
      "E. Rectum"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> The stomach is the most common site of gastrointestinal involvement by NHL.<br><b>Why not:</b> A: can be involved, particularly in certain lymphoma subtypes. B: less commonly involved. D: less common than the stomach. E: less common than the stomach.<br><b>Core:</b> Stomach is the most common gastrointestinal site of NHL involvement.",
    // Source: 26 Lymphoma.pdf, slide not found
    // Confidence: high
  },
  {
    caseText: "The patient, a 35-year-old male with fever with cervical and inguinal lymph node enlargement for more than 1 month, was diagnosed as mid-high malignant NHL by right cervical lymph node biopsy.",
    question: "30. The preferred chemotherapy regimen for this patient was ( )",
    options: [
      "A. COPP",
      "B. MOPP",
      "C. CHOP",
      "D. COP",
      "E. ABVD"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> CHOP (Cyclophosphamide, Doxorubicin, Vincristine and Prednisone) is a standard chemotherapy regimen for aggressive intermediate-to-high-grade NHL.<br><b>Why not:</b> A: traditional Hodgkin lymphoma regimen. B: traditional Hodgkin lymphoma regimen. D: lacks Doxorubicin. E: standard regimen for Hodgkin lymphoma.<br><b>Core:</b> Aggressive B-cell NHL → R-CHOP (CHOP + Rituximab) when CD20-positive and clinically appropriate.",
    // Source: 26 Lymphoma.pdf, slide 7
    // Confidence: high
  },
];
