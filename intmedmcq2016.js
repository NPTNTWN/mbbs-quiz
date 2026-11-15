// This file only contains your data. No HTML or CSS.
const myQuestionBank = [
    {
      question: "1. The typical X-ray findings of primary tuberculosis is ( )",
      options: [
        "A. Dumbbell shadow",
        "B. Large dense shadows with cavities",
        "C. Spherical lung lesions",
        "D. Peripheral nodules",
        "E. Scattered infiltration shadows"
      ],
      answerIndex: 0, 
      explanation: "A dumbbell shadow (Ghon complex) is the classic radiographic presentation of primary tuberculosis, representing the primary lung lesion and the involved regional lymph node."
    },
    {
      question: "2. The most common pathogens of hematogenous lung abscess is ( )",
      options: [
        "A. Escherichia coli",
        "B. Staphylococcus aureus",
        "C. Aerogenes",
        "D. Klebsiella",
        "E. Viridis hemolytic streptococcus"
      ],
      answerIndex: 1, 
      explanation: "Staphylococcus aureus is the most common pathogen causing hematogenous (bloodborne) lung abscesses, often presenting as multiple bilateral cavitary lesions."
    },
    {
      question: "3. The causes of signs of spider angiomas, palmar erythema and gynecomastia in patients with liver cirrhosis are ( )",
      options: [
        "A. Portal hypertension",
        "B. Insufficiency of liver function",
        "C. Hypoproteinemia",
        "D. Secondary hyperaldosteronism",
        "E. Pituitary gland dysfunction"
      ],
      answerIndex: 1, 
      explanation: "These specific signs are caused by the accumulation of estrogen. The cirrhotic liver suffers from insufficiency of liver function and cannot properly metabolize and inactivate circulating estrogen."
    },
    {
      question: "4. The most common cause of upper gastrointestinal bleeding is ( )",
      options: [
        "A. Tearing of esophagus and cardia",
        "B. Peptic ulcers",
        "C. Acute erosive hemorrhagic gastritis",
        "D. Esophageal and gastric varices",
        "E. Gastric cancers"
      ],
      answerIndex: 1, 
      explanation: "Peptic ulcer disease (including both gastric and duodenal ulcers) remains the most common overall cause of upper gastrointestinal bleeding."
    },
    {
      question: "5. The serum marker that are most helpful in the diagnosis of primary liver cancer is ( )",
      options: [
        "A. Alkaline Phosphatase",
        "B. Alpha-fetoprotein",
        "C. Y-glutamyl transpeptidase",
        "D. Radionuclide liver scan",
        "E. Abnormal prothrombin"
      ],
      answerIndex: 1, 
      explanation: "Alpha-fetoprotein (AFP) is the standard tumor marker used clinically for the screening and diagnosis of hepatocellular carcinoma (primary liver cancer)."
    },
    {
      question: "6. The main treatment for multiple myeloma is ( )",
      options: [
        "A. Combined chemotherapy",
        "B. Androgen",
        "C. Glucocorticoid",
        "D. Radiation therapy",
        "E. Supportive treatment"
      ],
      answerIndex: 0, 
      explanation: "Combined chemotherapy regimens (often utilizing proteasome inhibitors, immunomodulators, and steroids) form the backbone of treatment for active multiple myeloma."
    },
    {
      question: "7. To what extent is acute leukemia complete remission after chemotherapy? ( )",
      options: [
        "A. Anemia and bleeding relieved",
        "B. Blood returned to normal",
        "C. Auer body disappeared",
        "D. Body temperature returned to normal",
        "E. Leukemia symptoms and signs disappeared, blood and bone marrow returned to normal"
      ],
      answerIndex: 4, 
      explanation: "Complete remission requires three criteria: resolution of clinical symptoms/signs, normalization of peripheral blood counts, and bone marrow returning to normal (blasts < 5%)."
    },
    {
      question: "8. The most important clinical features of lymphoma are ( )",
      options: [
        "A. Fever",
        "B. Anemia",
        "C. Lymphadenopathy",
        "D. Liver and splenomegaly",
        "E. Systemic failure"
      ],
      answerIndex: 2, 
      explanation: "Painless lymphadenopathy (enlarged lymph nodes), most commonly in the neck, is the classic and most important presenting clinical feature of lymphoma."
    },
    {
      question: "9. The basis for the diagnosis of asymptomatic coronary heart disease is ( )",
      options: [
        "A. Family history of coronary heart disease",
        "B. History of heavy smoking",
        "C. Elevated blood lipids",
        "D. ECG ischemic ST-T changes",
        "E. Increased heart rate"
      ],
      answerIndex: 3, 
      explanation: "Because the patient is asymptomatic (no angina), diagnosis relies on objective testing that shows ischemia, typically ischemic ST-T segment changes on an ECG or Holter monitor."
    },
    {
      question: "10. The most common cause of heart failure is ( )",
      options: [
        "A. Intravenous infusion too much and infused too fast",
        "B. Emotional factors",
        "C. Improper use of beta blockers",
        "D. Lung infection",
        "E. Ischemia getting severe"
      ],
      answerIndex: 3, 
      explanation: "In clinical practice and standard medical teaching, respiratory tract infections (lung infections) are the most common precipitating factor that induces acute exacerbations of heart failure."
    },
    {
    question: "11. A 45 years old female patient had an irritating cough for 10 days with headache and sore throat. The cold agglutinins test was positive, and the white blood cell count was 4 x 109/L. The patient's diagnosis is ( )",
    options: [
      "A. Pneumococcal pneumonia",
      "B. Viral pneumonia",
      "C. Mycoplasma pneumonia",
      "D. Staphylococcal pneumonia",
      "E. Legionella pneumonia"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> An irritating dry cough, headache, sore throat, normal WBC count, and positive cold agglutinins test in a young female patient are classic for Mycoplasma pneumoniae infection.<br><b>Why not the others:</b> A causes high fever, rusty sputum, and leukocytosis; B lacks cold agglutinins; D causes severe necrotizing pneumonia with purulent sputum; E causes high fever with hyponatremia and GI symptoms (not from slides).<br><b>Key concept:</b> Mycoplasma pneumoniae causes atypical pneumonia and stimulates IgM autoantibodies (cold agglutinins) that agglutinate RBCs at 4°C.<br><b>High-yield:</b> Young patient with persistent dry cough, normal WBC count, and positive cold agglutinin test points directly to Mycoplasma pneumoniae.",
    // Source: NOT IN SLIDES
    // Confidence: low
  },
  {
    question: "12. A 52 years old male patient was hospitalized due to liver cirrhosis and hepatic encephalopathy. He was treated with lactulose. The main mechanism of action is ( )",
    options: [
      "A. Hepatoprotective drugs to promote liver cell regeneration",
      "B. Increase the internal osmotic pressure of intestine and inhibit the bacterial reproduction",
      "C. Catharsis in order to reduce endotoxins in the body",
      "D. Change the pH of the intestine to reduce the formation and absorption of ammonia",
      "E. Supply sugar for energy production"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> Colonic bacteria degrade lactulose into organic acids (lactic acid and acetic acid), lowering intestinal pH, which converts diffusible ammonia (NH3) into non-absorbable ammonium (NH4+) and reduces its systemic absorption.<br><b>Why not the others:</b> A incorrectly describes liver cell regenerative agents; B describes osmotic laxative effects without highlighting ammonia trapping; C misidentifies simple catharsis as the primary therapeutic mechanism; E misrepresents lactulose as an energy source.<br><b>Key concept:</b> Intestinal acidification traps blood-borne and gut-derived ammonia as ammonium (NH4+), facilitating its fecal excretion.<br><b>High-yield:</b> Lactulose is first-line therapy for hepatic encephalopathy, titrated to produce 2 to 3 soft stools per day with target stool pH &lt; 6.",
    // Source: 16 Hepatic Encephalopathy.pdf, slide not found
    // Confidence: high
  },
  {
    question: "13. A 34 years old female patient had repeated diarrhea for 2 months, and had mucus pus and blood in the stool for nearly half a month, 3 to 5 times a day, accompanied by left lower abdominal pain and tenesmus. Physical examination: the left lower abdomen was tender and the rests were unremarkable. Stool culture was negative. Endoscopic examinations showed continuous erythema, friability of the mucosa, and loss of the vascular appearance of the colon. The most likely diagnosis is ( )",
    options: [
      "A. Intestinal tuberculosis",
      "B. Ulcerative colitis",
      "C. Crohn's disease",
      "D. Chronic bacillary dysentery",
      "E. Irritable bowel syndrome"
    ],
    answerIndex: 1, // B
    explanation: "<b>Why:</b> Chronic bloody diarrhea with mucus and pus, left lower quadrant pain, tenesmus, and continuous mucosal inflammation starting from the rectum with mucosal friability and loss of vascular pattern are classic endoscopic and clinical features of ulcerative colitis.<br><b>Why not the others:</b> A typically presents with ileocecal ulcers and caseating granulomas; C presents with transmural skip lesions and cobblestoning; D shows positive stool culture for Shigella; E lacks mucosal inflammation or mucosal bleeding.<br><b>Key concept:</b> Ulcerative colitis causes continuous superficial inflammation limited to the mucosa and submucosa of the colon.<br><b>High-yield:</b> Continuous colonic involvement starting in the rectum with mucosal friability and pseudopolyps is diagnostic for ulcerative colitis.",
    // Source: 14 IBD.pdf, slide not found
    // Confidence: high
  },
  {
    question: "14. A 57 years old female patient suffering from rheumatoid arthritis for 8 years took diclofenac intermittently. In the past two days, after catching a cold, she presented with headache, running nose, and nasal congestion. So she took \"Gan Mao Tong Tablet\" (herbal medication with diclofenac inside) with a dose of 4 tablets per day. This morning, she started to present nausea, vomiting with 50ml coffee-like substance and black stool once. To confirm the diagnosis, the first check is ( )",
    options: [
      "A. Blood routine tests + stool occult blood",
      "B. Barium X-rays",
      "C. Emergency gastroscopy",
      "D. Ultrasound examination of liver and gallbladder",
      "E. Vomit analysis"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> Heavy NSAID ingestion (diclofenac) inducing coffee-ground emesis and melena indicates acute erosive hemorrhagic gastropathy or peptic ulcer disease; emergency gastroscopy performed within 24 to 48 hours is the gold standard to visualize mucosal lesions and achieve hemostasis.<br><b>Why not the others:</b> A does not confirm the bleeding site or lesion type; B is contraindicated during active acute bleeding; D does not evaluate gastric mucosa; E provides no diagnostic etiology.<br><b>Key concept:</b> Emergency upper endoscopy (EGD) is the definitive initial examination for acute upper gastrointestinal hemorrhage.<br><b>High-yield:</b> Emergency gastroscopy within 24 to 48 hours is required to confirm mucosal erosion/ulceration and assess rebleeding risk.",
    // Source: 11 Gastritis.pdf, 18 Upper Gastrointestinal Hemorrhage.pdf, slide not found
    // Confidence: high
  },
  {
    question: "15. Female, 25 years old, dizziness and fatigue for 1 year. Hemoglobin was 70g/L, red blood cells were 3.0 x 1012/L, reticulocytes percentage was 0.5%, white blood cells and platelets were normal. After 7 days of treatment with iron, hemoglobin did not rise and reticulocytes percentage increased to 4.6%. The most likely diagnosis is ( )",
    options: [
      "A. Megaloblastic anemia",
      "B. Iron deficiency anemia",
      "C. Sideroblastic anemia",
      "D. Hemolytic anemia",
      "E. Myelodysplastic syndrome"
    ],
    answerIndex: 1, // B
    explanation: "<b>Why:</b> A therapeutic trial of oral iron leading to a reticulocyte surge (reticulocyte peak from 0.5% to 4.6%) after 5 to 10 days confirms the underlying diagnosis of iron deficiency anemia, while hemoglobin recovery requires several weeks.<br><b>Why not the others:</b> A responds to Vitamin B12/folate rather than iron; C displays ringed sideroblasts and fails to respond to simple iron supplementation; D presents with baseline reticulocytosis; E is a clonal stem cell disorder unresponsive to iron.<br><b>Key concept:</b> Reticulocyte response (reticulocyte crisis) within 7 to 10 days is the earliest therapeutic indicator of successful oral iron repletion.<br><b>High-yield:</b> Reticulocytes rise first (5–10 days) during iron therapy, followed by hemoglobin elevation after 2 weeks.",
    // Source: 19 Anemia - Intro.pdf, slide not found
    // Confidence: high
  },
  {
    question: "16. A middle-aged woman came to the clinic due to dizziness and fatigue. There was a history of menorrhagia. Hemoglobin 70g/L, white blood cells 6.0 x 109/L, platelets 108 x 109/L, average red blood cell volume 53 um3, average hemoglobin concentration 28%, serum ferritin 10 ug/L. Which of the following signs was not related to the diagnosis of the disease ( )",
    options: [
      "A. Ataxia",
      "B. Glossitis",
      "C. Koilonychia",
      "D. Dry and wrinkled skin",
      "E. Pale skin and mucous membranes"
    ],
    answerIndex: 0, // A
    explanation: "<b>Why:</b> Low serum ferritin (10 ug/L) and low MCV (53 fL) confirm iron deficiency anemia secondary to menorrhagia; ataxia is a neurological manifestation of subacute combined degeneration caused by Vitamin B12 deficiency, not iron deficiency.<br><b>Why not the others:</b> B, C, and D are classic tissue/epithelial changes of iron deficiency anemia; E is a universal sign of anemia.<br><b>Key concept:</b> Iron deficiency causes epithelial tissue changes (koilonychia, glossitis, angular stomatitis, dry skin) due to depletion of iron-containing tissue enzymes.<br><b>High-yield:</b> Ataxia indicates Vitamin B12 deficiency (subacute combined degeneration), whereas serum ferritin &lt; 15 ug/L is diagnostic for iron deficiency.",
    // Source: 19 Anemia - Intro.pdf, slide not found
    // Confidence: high
  },
  {
    question: "17. Female, 38 years old, had a history of systemic lupus erythematosus. She was admitted to hospital due to anemia and splenomegaly. Coombs test was positive. She was diagnosed as hemolytic anemia. The most likely cause was ( )",
    options: [
      "A. Hereditary spherocytosis",
      "B. Hereditary ovalocytosis",
      "C. Pyruvate kinase deficiency",
      "D. Thalassemias",
      "E. Autoimmune hemolytic anemia"
    ],
    answerIndex: 4, // E
    explanation: "<b>Why:</b> Systemic lupus erythematosus is a classic secondary trigger for warm-antibody autoimmune hemolytic anemia (AIHA), confirmed by a positive direct Coombs test showing autoantibodies on RBC membranes.<br><b>Why not the others:</b> A, B, C, and D are congenital/hereditary erythrocyte membrane or enzymatic defects that yield a negative Coombs test.<br><b>Key concept:</b> Secondary AIHA develops when autoimmune diseases like SLE or lymphoproliferative disorders induce warm IgG autoantibodies against RBC antigens.<br><b>Memory trick:</b> Coombs positive = Immune hemolysis (AIHA).<br><b>High-yield:</b> SLE is a major secondary cause of warm IgG-mediated AIHA, treated first-line with corticosteroids.",
    // Source: 21 Anemia - Hemolytic Anemia.pdf, slide not found
    // Confidence: high
  },
  {
    question: "18. Male, 45 years old, had an acute myocardial infarction 2 years ago. Nearly 1 month, after activity he suffered from wheezing, cyanosis of the lips, edema of the lower extremities. Moist rales at the base of both lungs could be heard. The possible pathophysiological changes in this patient were ( )",
    options: [
      "A. Sympathetic nervous system depression",
      "B. Renin-angiotensin-aldosterone system inhibition",
      "C. Increased cardiac output",
      "D. Decreased atrial natriuretic peptide secretion",
      "E. Sodium and water retention"
    ],
    answerIndex: 4, // E
    explanation: "<b>Why:</b> Post-myocardial infarction heart failure reduces cardiac output, which triggers neurohormonal activation of the RAAS and sympathetic nervous system, promoting renal sodium and water retention to maintain intravascular volume.<br><b>Why not the others:</b> A and B are activated (not depressed or inhibited) in heart failure; C is decreased due to myocardial damage; D is increased due to atrial stretch.<br><b>Key concept:</b> Decreased renal perfusion in heart failure stimulates aldosterone and vasopressin release, driving progressive sodium and water retention.<br><b>High-yield:</b> Chronic neurohormonal compensatory mechanisms in heart failure cause fluid overload, presenting with pulmonary rales and peripheral edema.",
    // Source: 31 Heart Failure.pdf, 36 CAD 2.pdf, slide not found
    // Confidence: high
  },
  {
    question: "19. Male, 25 years old. In recent years, he suffered from palpitations and syncope several times. Blood pressure was 120/80mmHg, heart rate was 40 beats/min. C-reactive protein (++), serum virus neutralizing antibody 1:640 (+). ECG: third degree atrioventricular block. The preferred treatment was ( )",
    options: [
      "A. Oxygen inhalation, bed rest",
      "B. Nutritional myocardial drugs",
      "C. Place a temporary pacemaker",
      "D. Glucocorticoids",
      "E. Antibiotics"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> Complete (third-degree) AV block with profound bradycardia (HR 40 beats/min) and syncope secondary to viral myocarditis requires urgent placement of a temporary pacemaker to maintain ventricular rate and cardiac output.<br><b>Why not the others:</b> A, B, and D are supportive medical measures that cannot rapidly restore cardiac conduction during syncopal episodes; E is ineffective against viral pathogens.<br><b>Key concept:</b> Complete heart block with syncope or severe bradycardia is an urgent indication for temporary cardiac pacing.<br><b>High-yield:</b> Third-degree AV block in acute viral myocarditis requires temporary cardiac pacing to prevent fatal cardiac arrest.",
    // Source: 39 Cardiomyopathy.pdf, slide not found
    // Confidence: high
  },
  {
    question: "20. Male, 26 years old, rheumatic heart disease with mitral stenosis and mitral regurgitation, fever for 2 weeks. Physical examination: T 38.3°C, petechia of oral mucosa and lower extremities, rhythmical heart rate 104 beats/min, 2/6 grade systolic murmur and diastolic murmur in mitral valve area, diastolic murmur in aortic valve area, abdominal soft, the spleen was 2cm below the left rib and tenderness. Which of the following examinations should the patient perform to confirms the diagnosis best ( )",
    options: [
      "A. ESR + ASO",
      "B. Urine routine + kidney function",
      "C. Blood culture",
      "D. ECG",
      "E. RF factor"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> Persistent fever, petechiae, splenomegaly, and underlying rheumatic valvular disease strongly indicate infective endocarditis; blood culture is the primary major diagnostic criterion to identify the causative organism.<br><b>Why not the others:</b> A evaluates acute rheumatic fever reactivation rather than active endocarditis; B assesses renal complications; D evaluates cardiac rhythm; E is a non-specific immunological marker.<br><b>Key concept:</b> Blood cultures drawn prior to antibiotic administration are the gold standard for diagnosing infective endocarditis.<br><b>High-yield:</b> Multiple sets of blood cultures obtained before starting antibiotics are essential to confirm infective endocarditis in a patient with fever and valvular heart disease.",
    // Source: 34 Valvular Heart Disease.pdf, slide not found
    // Confidence: high
  },
  {
    caseText: "Female, 50 years old, had fever in the afternoon and cough with blood in sputum for 1 week. ESR 50mm/h, white blood cell 10.0 x 10^9/L, N 78%. Chest radiograph showed a 1cm x 1cm area of translucent left upper lung.",
    question: "21. The most important publicity and advice to the patient should be ( )",
    options: [
      "A. Pay attention to rest",
      "B. Strengthen nutrition",
      "C. Home isolation",
      "D. Live in a nursing home",
      "E. Take medication regularly throughout the course"
    ],
    answerIndex: 4, // E
    explanation: "<b>Why:</b> Afternoon low-grade fever, hemoptysis, elevated ESR, and upper lung cavitary lesion confirm pulmonary tuberculosis; strict adherence to full-course, regular anti-TB drug therapy is essential to prevent drug resistance and achieve cure.<br><b>Why not the others:</b> A, B, and C are secondary supportive actions that cannot cure TB without full drug compliance; D increases transmission risk to vulnerable populations.<br><b>Key concept:</b> Successful anti-tuberculosis therapy relies on strict adherence to regular, multi-drug, full-course regimens.<br><b>High-yield:</b> Complete, uninterrupted medication adherence throughout the treatment course is the single most important factor preventing treatment failure and MDR-TB.",
    // Source: 04 Pulmonary TB.pdf, slide not found
    // Confidence: high
  },
  {
    caseText: "Female, 50 years old, had fever in the afternoon and cough with blood in sputum for 1 week. ESR 50mm/h, white blood cell 10.0 x 10^9/L, N 78%. Chest radiograph showed a 1cm x 1cm area of translucent left upper lung.",
    question: "22. After severe cough, the patient had sudden chest pain, dyspnea and cyanosis. Heart rate 140 beats/min, breathing 36 beats/min. Tympany on the left chest, and left lung breath sounds disappeared. Complications considered was ( )",
    options: [
      "A. Pulmonary embolism",
      "B. Acute left heart failure",
      "C. Acute respiratory distress syndrome",
      "D. Severe pneumonia",
      "E. Spontaneous pneumothorax"
    ],
    answerIndex: 4, // E
    explanation: "<b>Why:</b> Rupture of a subpleural tuberculous cavity during severe coughing causes sudden air entry into the pleural cavity, leading to ipsilateral chest pain, acute dyspnea, tympanic percussion, and absent breath sounds.<br><b>Why not the others:</b> A presents without localized chest tympany; B causes bilateral lung crackles and pink frothy sputum; C and D produce lung consolidation and rales without hyperresonance.<br><b>Key concept:</b> Tuberculous subpleural cavity rupture under high intrathoracic pressure during coughing leads to secondary spontaneous pneumothorax.<br><b>High-yield:</b> Sudden dyspnea, chest pain, tympany on percussion, and absent breath sounds following a coughing fit indicate spontaneous pneumothorax.",
    // Source: 04 Pulmonary TB.pdf, slide not found
    // Confidence: high
  },
  {
    caseText: "Female, 50 years old, had fever in the afternoon and cough with blood in sputum for 1 week. ESR 50mm/h, white blood cell 10.0 x 10^9/L, N 78%. Chest radiograph showed a 1cm x 1cm area of translucent left upper lung.",
    question: "23. The first choice for diagnosis is ( )",
    options: [
      "A. Chest CT",
      "B. Chest MRI",
      "C. Tuberculin skin test",
      "D. Acid-fast bacillus testing",
      "E. Sputum cytology"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> Sputum acid-fast bacillus (AFB) stain and culture are the primary first-choice tests to confirm active pulmonary tuberculosis by directly identifying Mycobacterium tuberculosis.<br><b>Why not the others:</b> A provides anatomical imaging but does not confirm microbiological etiology; B is not routine for lung parenchyma; C cannot distinguish active disease from prior infection; E screens for malignancy.<br><b>Key concept:</b> Demonstrating acid-fast bacilli in sputum is the fundamental diagnostic test for active pulmonary tuberculosis.<br><b>High-yield:</b> Sputum acid-fast bacillus (AFB) testing is the fastest, most specific diagnostic step for suspected active pulmonary TB.",
    // Source: 04 Pulmonary TB.pdf, slide not found
    // Confidence: high
  },
  {
    caseText: "Female, 50 years old, had fever in the afternoon and cough with blood in sputum for 1 week. ESR 50mm/h, white blood cell 10.0 x 10^9/L, N 78%. Chest radiograph showed a 1cm x 1cm area of translucent left upper lung.",
    question: "24. The most likely diagnosis is ( )",
    options: [
      "A. Mycoplasma pneumonia",
      "B. Pneumococcal pneumonia",
      "C. Infiltrating tuberculosis",
      "D. Pulmonary mycosis",
      "E. Bronchial lung cancer"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> Afternoon low-grade fever, hemoptysis, elevated ESR, and upper lobe translucent cavitary lesions on chest X-ray are classic manifestations of infiltrating pulmonary tuberculosis.<br><b>Why not the others:</b> A causes atypical interstitial infiltrates in young adults; B presents acutely with high fever and lobar consolidation; D and E present with different imaging patterns and lack classic tuberculous toxemia.<br><b>Key concept:</b> Infiltrating pulmonary tuberculosis characteristically affects the apical or subclavian regions of the upper lobes and frequently forms cavities.<br><b>High-yield:</b> Afternoon fever, night sweats, hemoptysis, and upper lobe cavitary lesions on X-ray are diagnostic hallmarks of infiltrating pulmonary TB.",
    // Source: 04 Pulmonary TB.pdf, slide not found
    // Confidence: high
  },
  {
    caseText: "A 43 years old male patient was admitted to the hospital with a chief compliant of coughing with fever for 1 week and skin petechiae for 3 days. Blood routine tests showed RBC 1.8 x 1012/L, Hb 68g/L, WBC 11.2 x 109/L, PLT 7 x 109/L. Peripheral blood smear showed a large number of promyelocytic cells.",
    question: "25. The most likely diagnosis is ( )",
    options: [
      "A. Aplastic anemia",
      "B. AML-M3",
      "C. Chronic myeloid leukemia",
      "D. Hemolytic anemia",
      "E. Methotrexate"
    ],
    answerIndex: 1, // B
    explanation: "<b>Why:</b> Abundant abnormal promyelocytes in blood or bone marrow accompanied by anemia, severe thrombocytopenia, and bleeding signs confirm Acute Promyelocytic Leukemia (AML-M3).<br><b>Why not the others:</b> A exhibits hypocellular bone marrow without leukemic blasts; C presents with granulocyte maturation spectrum and high WBC count; D displays reticulocytosis without promyelocytes; E is a folate antagonist medication.<br><b>Key concept:</b> AML-M3 (Acute Promyelocytic Leukemia) is characterized by t(15;17) translocation yielding the PML::RARA fusion gene and hypergranular promyelocyte accumulation.<br><b>High-yield:</b> Promyelocytes with dense azurophilic granules and Auer rods on blood smear indicate AML-M3.",
    // Source: 23 Leukemia AL.pdf, 24 Leukemia AL APL ALL CL.pdf, slide not found
    // Confidence: high
  },
  {
    caseText: "A 43 years old male patient was admitted to the hospital with a chief compliant of coughing with fever for 1 week and skin petechiae for 3 days. Blood routine tests showed RBC 1.8 x 1012/L, Hb 68g/L, WBC 11.2 x 109/L, PLT 7 x 109/L. Peripheral blood smear showed a large number of promyelocytic cells.",
    question: "26. The most common complication is ( )",
    options: [
      "A. Aplastic crisis",
      "B. Hemolytic anemia crisis",
      "C. DIC",
      "D. Respiratory failure",
      "E. Infection crisis"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> Malignant promyelocytes in AML-M3 contain abundant tissue factor and procoagulant granules that trigger Disseminated Intravascular Coagulation (DIC), leading to severe, life-threatening hemorrhages.<br><b>Why not the others:</b> A, B, and D are not characteristically driven by promyelocyte granule release; E occurs secondary to neutropenia, but DIC is the signature early fatal complication of M3.<br><b>Key concept:</b> Promyelocyte lysis releases procoagulants, making DIC the most frequent and dangerous complication of AML-M3.<br><b>High-yield:</b> Severe bleeding due to DIC is the classic, life-threatening complication of AML-M3.",
    // Source: 24 Leukemia AL APL ALL CL.pdf, slide not found
    // Confidence: high
  },
  {
    caseText: "A 43 years old male patient was admitted to the hospital with a chief compliant of coughing with fever for 1 week and skin petechiae for 3 days. Blood routine tests showed RBC 1.8 x 1012/L, Hb 68g/L, WBC 11.2 x 109/L, PLT 7 x 109/L. Peripheral blood smear showed a large number of promyelocytic cells.",
    question: "27. The most effective treatment is ( )",
    options: [
      "A. Retinoic acid",
      "B. Thalidomide",
      "C. Hydroxyurea",
      "D. Allopurinol",
      "E. Methotrexate"
    ],
    answerIndex: 0, // A
    explanation: "<b>Why:</b> All-trans retinoic acid (ATRA / Retinoic acid) targets the PML::RARA fusion protein to induce differentiation of leukemic promyelocytes into mature neutrophils, serving as first-line induction therapy.<br><b>Why not the others:</b> B is used for multiple myeloma; C is indicated in chronic myeloid leukemia; D prevents hyperuricemia; E is used in acute lymphoblastic leukemia.<br><b>Key concept:</b> ATRA induces terminal differentiation of promyelocytes and rapidly reverses DIC in AML-M3.<br><b>High-yield:</b> All-trans retinoic acid (ATRA) combined with arsenic trioxide (ATO) or chemotherapy is the most effective therapy for AML-M3.",
    // Source: 24 Leukemia AL APL ALL CL.pdf, slide not found
    // Confidence: high
  },
  {
    caseText: "A 72 years old male patient had repeated chest pain for 2 weeks, each lasting 5-10 minutes. The pain got worse 3 hours ago. He started to feel short of breath and was not able to lie down. Thus, he came to the hospital for help. Physical examination: blood pressure 110/70mmHg, heart rate 114 beats/min, regular rhythm, 3/6 grade systolic murmur at the apex, and scattered wheeze and moist rales in both lungs.",
    question: "28. The most appropriate treatment is ( )",
    options: [
      "A. Application of B-blockers to prevent arrhythmia",
      "B. Use antibiotics to control infection",
      "C. Apply bronchial antispasmodics",
      "D. Control of acute left heart failure",
      "E. Use adrenal cortex hormones"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> The patient presents with acute pulmonary edema (orthopnea, tachycardia, bilateral rales, and wheezes) secondary to acute myocardial infarction; urgent control of acute left heart failure is the immediate therapeutic priority.<br><b>Why not the others:</b> A is contraindicated in acute decompensated heart failure with rales; B treats pulmonary infections; C targets bronchospasm without addressing cardiac pulmonary edema; E is not indicated.<br><b>Key concept:</b> Acute left heart failure triggered by acute MI produces cardiac asthma requiring immediate heart failure stabilization.<br><b>Memory trick:</b> Wet lungs in acute MI = control HF first, hold beta-blockers.<br><b>High-yield:</b> In acute MI complicated by acute pulmonary edema, heart failure management takes immediate priority, while beta-blockers are contraindicated until stabilized.",
    // Source: 31 Heart Failure.pdf, 36 CAD 2.pdf, slide not found
    // Confidence: high
  },
  {
    caseText: "A 72 years old male patient had repeated chest pain for 2 weeks, each lasting 5-10 minutes. The pain got worse 3 hours ago. He started to feel short of breath and was not able to lie down. Thus, he came to the hospital for help. Physical examination: blood pressure 110/70mmHg, heart rate 114 beats/min, regular rhythm, 3/6 grade systolic murmur at the apex, and scattered wheeze and moist rales in both lungs.",
    question: "29. The most likely diagnosis based on the above findings is ( )",
    options: [
      "A. Rheumatic heart disease",
      "B. Primary cardiomyopathy",
      "C. Bronchopneumonia",
      "D. Bronchial Asthma",
      "E. Acute myocardial infarction"
    ],
    answerIndex: 4, // E
    explanation: "<b>Why:</b> A history of angina (chest pain for 2 weeks) worsening 3 hours ago accompanied by acute heart failure (orthopnea, rales) and papillary muscle dysfunction (apical systolic murmur) points directly to acute myocardial infarction.<br><b>Why not the others:</b> A presents with chronic valvular disease without acute ischemic chest pain; B causes chronic HF without acute angina; C presents with fever and pulmonary infiltrates; D is primary airway hyperreactivity.<br><b>Key concept:</b> Acute myocardial infarction can trigger acute left heart failure and ischemic mitral regurgitation due to papillary muscle dysfunction.<br><b>High-yield:</b> Sudden onset severe chest pain with acute pulmonary edema and apical murmur is diagnostic for acute myocardial infarction.",
    // Source: 35 CAD 1.pdf, 36 CAD 2.pdf, slide not found
    // Confidence: high
  },
  {
    caseText: "A 72 years old male patient had repeated chest pain for 2 weeks, each lasting 5-10 minutes. The pain got worse 3 hours ago. He started to feel short of breath and was not able to lie down. Thus, he came to the hospital for help. Physical examination: blood pressure 110/70mmHg, heart rate 114 beats/min, regular rhythm, 3/6 grade systolic murmur at the apex, and scattered wheeze and moist rales in both lungs.",
    question: "30. The preferred check at this time is ( )",
    options: [
      "A. Chest X-ray",
      "B. ECG",
      "C. CK-MB isoenzyme and cardiac troponins",
      "D. Echocardiogram",
      "E. Radionuclide myocardial perfusion tomography"
    ],
    answerIndex: 1, // B
    explanation: "<b>Why:</b> A 12-lead ECG is the fastest, most critical first-line test that must be obtained within 10 minutes of arrival for any patient presenting with suspected acute myocardial infarction.<br><b>Why not the others:</b> A evaluates pulmonary edema but cannot diagnose acute ischemia; C is essential but secondary to immediate ECG; D evaluates cardiac structure secondarily; E is inappropriate for acute emergency evaluation.<br><b>Key concept:</b> A 12-lead ECG performed within 10 minutes is the primary initial diagnostic step in acute coronary syndrome management.<br><b>Memory trick:</b> Chest pain in ER = ECG within 10 minutes.<br><b>High-yield:</b> 12-lead ECG within 10 minutes is the first-line diagnostic investigation for suspected acute MI.",
    // Source: 35 CAD 1.pdf, slide not found
    // Confidence: high
  }
]