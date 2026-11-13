// This file only contains your data. No HTML or CSS.
const myQuestionBank = [
  {
    question:
      "1. Which of the followings is most consistent with the malignant pleural effusion? ( )",
    options: [
      "A. Large amount of pleural effusion",
      "B. Accompanied by fever",
      "C. Transudative pleural effusion",
      "D. Old age",
      "E. Bloody pleural effusion",
    ],
    answerIndex: 4, // E
    explanation:
      "<b>Why:</b> Tumor invasion of pleural blood vessels typically produces a grossly bloody exudate.<br><b>Why not the others:</b> A is nonspecific as heart failure or TB can also cause large effusions; B points more toward infection or tuberculosis; C is wrong because malignancy causes exudative, not transudative, effusions; D is merely a risk factor rather than a specific diagnostic feature.<br><b>Key concept:</b> Malignant pleural effusions are classically bloody, lymphocytic exudates.<br><b>High-yield:</b> Pleural fluid cytology is the diagnostic gold standard, and CEA &gt;20 ug/L with high LDH supports malignancy.",
    // Source: Pleural Effusion lecture (slide not found)
    // Confidence: high
  },
  {
    question: "2. The main feature of myelodysplastic syndrome (MDS) is ( )",
    options: [
      "A. Refractory anemia persists",
      "B. Active myeloproliferative state",
      "C. Pathological hematopoiesis",
      "D. One or more lineages of cytopenias",
      "E. Chromosomal abnormalities",
    ],
    answerIndex: 2, // C
    explanation:
      "<b>Why:</b> MDS is fundamentally defined by dysplasia (pathological hematopoiesis) causing ineffective blood cell production.<br><b>Why not the others:</b> A describes only one clinical subtype rather than the core mechanism; B characterizes myeloproliferative neoplasms, whereas MDS features ineffective hematopoiesis; D is the peripheral consequence of dysplasia; E occurs in only about 60% of patients (40% have normal cytogenetics).<br><b>Key concept:</b> Clonal hematopoietic stem cell disorder with morphologic dysplasia and &lt;20% blasts.<br><b>High-yield:</b> High risk of transformation into acute myeloid leukemia (AML).",
    // Source: Myelodysplastic syndromes lecture (slide not found)
    // Confidence: high
  },
  {
    question: "3. The most common early symptom of lung cancer is ( )",
    options: [
      "A. Chest tightness, shortness of breath",
      "B. Persistent chest pain",
      "C. Hemoptysis",
      "D. Dry cough",
      "E. Weight loss",
    ],
    answerIndex: 3, // D
    explanation:
      "<b>Why:</b> An irritating, paroxysmal dry cough is the earliest and most frequent symptom caused by tumor stimulation of the bronchial mucosa (not from slides).<br><b>Why not the others:</b> A suggests airway obstruction or pleural effusion; B indicates parietal pleura or chest wall invasion; C occurs later when tumor tissue ulcerates; E is a late constitutional sign of advanced malignancy.<br><b>Key concept:</b> Early endobronchial irritation triggers cough receptors before significant luminal obstruction or invasion occurs (not from slides).<br><b>High-yield:</b> A new or changing cough in a smoker &gt;40 years warrants chest imaging to rule out lung cancer (not from slides).",
    // Source: NOT IN SLIDES
    // Confidence: low
  },
  {
    question:
      "4. The best way to diagnose acute erosive gastritis (acute gastric mucosal disease) is ( )",
    options: [
      "A. Barium meal",
      "B. Gastric juice analysis",
      "C. Gastroscopy",
      "D. Serum gastrin",
      "E. Ultrasound",
    ],
    answerIndex: 2, // C
    explanation:
      "<b>Why:</b> Gastroscopy allows direct visualization of superficial mucosal erosions, hyperemia, and bleeding, ideally within 24-48 hours of onset (not from slides).<br><b>Why not the others:</b> A misses shallow mucosal erosions that lack deep craters; B measures acid secretion rather than mucosal injury; D evaluates Zollinger-Ellison syndrome or atrophic gastritis; E cannot resolve gastric mucosal detail.<br><b>Key concept:</b> Endoscopic visualization is the gold standard for diagnosing acute gastric mucosal lesions.<br><b>High-yield:</b> Perform emergency gastroscopy within 24-48 hours of upper GI bleeding before superficial erosions rapidly heal (not from slides).",
    // Source: Gastritis lecture (slide not found)
    // Confidence: medium
  },
  {
    question:
      "5. The evidence to confirm the diagnosis of tuberculous peritonitis is ( )",
    options: [
      "A. Middle-aged patients with a history of tuberculosis and PPD strong positive",
      "B. Fever for more than 4 weeks, accompanied by abdominal distension, abdominal pain, abdominal mass or toughness on palpation",
      "C. Ascites is exudative, mainly lymphocytes, and bacterial culture is negative",
      "D. Barium meal examination found signs of intestinal adhesion",
      "E. None of the above",
    ],
    answerIndex: 4, // E
    explanation:
      '<b>Why:</b> Definitive confirmation requires finding Mycobacterium tuberculosis (culture/smear) or caseating granulomas on peritoneal biopsy, which are absent from A-D (not from slides).<br><b>Why not the others:</b> A only indicates prior TB exposure and clinical suspicion; B describes classic symptoms and "doughy" abdomen, which are suggestive but not confirmatory; C is typical of tuberculous ascites but also seen in peritoneal carcinomatosis; D shows nonspecific adhesions.<br><b>Key concept:</b> Microbiological identification of M. tuberculosis or histopathological caseous granuloma is required for definitive diagnosis (not from slides).<br><b>High-yield:</b> Ultrasound-guided peritoneal biopsy or laparoscopy provides the highest diagnostic yield.',
    // Source: Tuberculous peritonitis lecture (slide not found)
    // Confidence: medium
  },
  {
    question: "6. The serum marker of hepatocellular carcinoma is ( )",
    options: [
      "A. CEA",
      "B. AFP",
      "C. PSA",
      "D. CA19-9",
      "E. Alkaline phosphatase",
    ],
    answerIndex: 1, // B
    explanation:
      "<b>Why:</b> Alpha-fetoprotein (AFP) is elevated in 70%-90% of hepatocellular carcinoma (HCC) cases and rises 8-11 months before clinical symptoms.<br><b>Why not the others:</b> A is primarily used for colorectal and gastrointestinal cancers; C screens for prostate cancer (not from slides); D is associated with pancreatic and biliary tract malignancies (not from slides); E is a nonspecific enzyme elevated in cholestasis or bone disease.<br><b>Key concept:</b> AFP is an oncofetal glycoprotein reactivated during malignant transformation of hepatocytes.<br><b>High-yield:</b> Serum AFP &gt;400 ug/L persisting for 4 weeks (or &gt;200 ug/L for 8 weeks) strongly supports HCC diagnosis.",
    // Source: Hepatic cancer lecture (slide not found)
    // Confidence: high
  },
  {
    question:
      "7. Regarding high blood pressure in the elderly, which one of the followings is WRONG ( )",
    options: [
      "A. Both systolic and diastolic blood pressure are increased",
      "B. Prone to orthostatic hypotension",
      "C. Prone to heart failure",
      "D. Vascular resistance is increased, while cardiac output is normal or decreased",
      "E. Large fluctuations in blood pressure",
    ],
    answerIndex: 0, // A
    explanation:
      "<b>Why:</b> Elderly patients typically present with isolated systolic hypertension (elevated SBP with normal or low DBP) due to large-artery stiffness, making A false (not from slides).<br><b>Why not the others:</b> B is true due to impaired baroreceptor sensitivity; C is true from chronic increased afterload; D is true as peripheral arterial stiffness raises systemic vascular resistance; E is true because blunted baroreflexes cause wide BP variability.<br><b>Key concept:</b> Age-related loss of aortic elasticity increases systolic pressure and widens pulse pressure (not from slides).<br><b>High-yield:</b> Isolated systolic hypertension (SBP &ge;140 mmHg and DBP &lt;90 mmHg) is the predominant form in patients &gt;60 years (not from slides).",
    // Source: NOT IN SLIDES
    // Confidence: low
  },
  {
    question:
      "8. Which of the followings is most likely to be related to severe coagulation deficiency? ( )",
    options: [
      "A. Purpura",
      "B. Fundus hemorrhage",
      "C. Deep hematoma",
      "D. Nose bleeding",
      "E. Bleeding gums",
    ],
    answerIndex: 2, // C
    explanation:
      "<b>Why:</b> Coagulation factor deficiencies impair secondary hemostasis (fibrin clot stabilization), leading to deep tissue, muscle, and joint bleeding such as deep hematomas (not from slides).<br><b>Why not the others:</b> A, B, D, and E represent superficial mucocutaneous bleeding, which is characteristic of platelet disorders or vascular wall defects (primary hemostasis).<br><b>Key concept:</b> Primary hemostasis defects cause superficial petechiae/mucosal bleeds, whereas secondary hemostasis defects cause deep hematomas and hemarthroses (not from slides).<br><b>Memory trick:</b> Platelets = Petechiae/Purpura (superficial); Coagulation factors = Cavities/Joints/Deep muscles.<br><b>High-yield:</b> Hemophilia A and B classically present with delayed deep muscle hematomas and hemarthroses (not from slides).",
    // Source: NOT IN SLIDES
    // Confidence: low
  },
  {
    question:
      "9. The most fundamental treatment for disseminated intravascular coagulation (DIC) is ( )",
    options: [
      "A. Anti-coagulant therapy",
      "B. Replenish coagulation factor",
      "C. Anti-shock therapy",
      "D. Anti-fibrinolytic treatment",
      "E. Treating the underlying disorder",
    ],
    answerIndex: 4, // E
    explanation:
      "<b>Why:</b> DIC is always secondary to an underlying trigger (such as sepsis, trauma, or malignancy); eliminating the trigger stops ongoing coagulation activation (not from slides).<br><b>Why not the others:</b> A (heparin) halts thrombosis in select cases but does not remove the trigger; B replaces consumed factors only when active bleeding occurs; C is supportive; D is generally contraindicated as it worsens microvascular thrombosis.<br><b>Key concept:</b> Removal of the underlying procoagulant stimulus is the cornerstone of DIC management (not from slides).<br><b>High-yield:</b> Sepsis, obstetric complications, malignancy, and severe trauma are the top triggers of DIC (not from slides).",
    // Source: NOT IN SLIDES
    // Confidence: low
  },
  {
    question:
      "10. The valves most easily affected by rheumatic heart disease are ( )",
    options: [
      "A. Mitral valve and tricuspid valve",
      "B. Tricuspid valve and pulmonary valve",
      "C. Aortic valve and pulmonary valve",
      "D. Mitral valve and pulmonary valve",
      "E. Mitral valve and aortic valve",
    ],
    answerIndex: 4, // E
    explanation:
      "<b>Why:</b> Left-sided heart valves experience the highest hemodynamic pressure and shear stress, making the mitral valve (most common) and aortic valve (second most common) most vulnerable (not from slides).<br><b>Why not the others:</b> A, B, C, and D include right-sided valves (tricuspid and pulmonary), which operate under low pressure and are rarely damaged by rheumatic fever.<br><b>Key concept:</b> Autoimmune cross-reactivity (molecular mimicry) following Group A streptococcal pharyngitis preferentially damages high-pressure left-sided valves (not from slides).<br><b>Memory trick:</b> Valve involvement frequency follows pressure gradients: Mitral &gt; Aortic &gt; Tricuspid &gt; Pulmonary (MATP).<br><b>High-yield:</b> Mitral stenosis is the most common chronic valvular lesion of rheumatic heart disease (not from slides).",
    // Source: NOT IN SLIDES
    // Confidence: low
  },
  {
    images: ["images/intmedii2017_q11.png"],
    question:
      "11. A 24-year-old female patient presents with high fever of 40°C, accompanied by chills, cough, fatigue and chest pain for 2 days. PE: conscious, blood pressure 11.4/6.7kPa (86/50mmHg), pulse 102 beats/min. Lab: WBC 21 x 109/L. The chest radiograph is shown in the picture. Which of the following diagnoses is correct? ( )",
    options: [
      "A. Streptococcus pneumonia",
      "B. Viral pneumonia",
      "C. Lung abscess",
      "D. Lung tuberculosis",
      "E. Pneumococcal pneumonia",
    ],
    answerIndex: 4, // E
    explanation:
      '<b>Why:</b> Acute high fever, chills, chest pain, leukocytosis (WBC 21 x 10^9/L), and homogeneous right upper lobe consolidation bordered sharply by the horizontal fissure on chest X-ray classically indicate pneumococcal pneumonia (the specific disease title used in the lecture slides, whereas A omits "pneumoniae")[cite: 3].<br><b>Why not the others:</b> A is an incomplete organism name rather than the full disease entity "Pneumococcal Pneumonia" used in the slides[cite: 3]; B causes interstitial infiltrates and normal/low WBC (not from slides); C shows a thick-walled cavity with an air-fluid level (not from slides); D presents subacutely with upper-lobe cavitary or fibronodular lesions (not from slides).<br><b>Key concept:</b> Streptococcus pneumoniae causes lobar consolidation with air-bronchograms and accounts for half of community-acquired pneumonia[cite: 3].<br><b>High-yield:</b> SBP &lt;90 mmHg (here 86/50 mmHg) scores 1 point on CURB-65 and signals severe pneumonia or septic shock[cite: 3].',
    // Source: Pneumonia lecture (5Y - Int Med (W))
    // Confidence: high
  },
  {
    question:
      "12. A 20-year-old female had fever, painlessness enlargement of cervical lymph nodes, and joint pain for 10 days. Lab: Hb 62g/L, WBC 11.0 x 109/L, PLT 89 x 109/L. The most likely diagnosis is ( )",
    options: [
      "A. Viral infection",
      "B. Rheumatic fever",
      "C. Acute leukemia",
      "D. Lymphoma",
      "E. Systemic lupus erythematosus, SLE",
    ],
    answerIndex: 4, // E
    explanation:
      "<b>Why:</b> A young female presenting with fever, arthralgia, lymphadenopathy, and multi-lineage hematologic involvement (severe anemia Hb 62 g/L and thrombocytopenia PLT 89 x 10^9/L) strongly favors systemic lupus erythematosus (SLE) (not from slides).<br><b>Why not the others:</b> A typically causes self-limited lymphocytosis rather than severe anemia (Hb 62 g/L) (not from slides); B presents with migratory polyarthritis and carditis without significant cytopenias (not from slides); C usually causes sternal tenderness and abnormal WBC/blasts rather than prominent joint pain[cite: 3, 9]; D typically causes chronic progressive lymphadenopathy without acute arthralgia (not from slides).<br><b>Key concept:</b> SLE is a multisystem autoimmune disease predominantly affecting young women of childbearing age (not from slides).<br><b>High-yield:</b> Autoimmune hemolytic anemia and thrombocytopenia are classic hematologic criteria for SLE (not from slides).",
    // Source: NOT IN SLIDES
    // Confidence: low
  },
  {
    question:
      "13. A 23-year-old male with irregular diet suffered from epigastric pain recently. Pain was more intense on an empty stomach at nighttime. Three days ago, he had melena with palpitation and sweats and presented to the hospital. Physical examination: blood pressure 110/70mmHg, mild upper abdomen tenderness, liver and spleen untouched. The most likely diagnosis is ( )",
    options: [
      "A. Gastric ulcer and upper gastrointestinal bleeding",
      "B. Duodenal ulcer with upper gastrointestinal bleeding",
      "C. Stomach cancer and upper gastrointestinal bleeding",
      "D. Liver cirrhosis and lower gastrointestinal bleeding",
      "E. Acute gastritis with upper gastrointestinal bleeding",
    ],
    answerIndex: 1, // B
    explanation:
      "<b>Why:</b> Rhythmic fasting and nocturnal epigastric pain relieved by food is classic for duodenal ulcer (DU), and melena with palpitations and sweating confirms acute upper GI bleeding[cite: 4, 10].<br><b>Why not the others:</b> A typically causes postprandial pain (30-60 minutes after eating) rather than nocturnal hunger pain (not from slides); C occurs in older patients with weight loss and irregular pain (not from slides); D presents with hepatosplenomegaly and causes upper (variceal), not lower, GI bleeding (not from slides); E lacks chronic rhythmic hunger/nighttime pain (not from slides).<br><b>Key concept:</b> Peptic ulcers exhibit chronic, episodic, and rhythmic epigastric pain[cite: 4], with DU occurring during fasting/nighttime (not from slides).<br><b>High-yield:</b> Peptic ulcer is the most common cause of massive upper gastrointestinal hemorrhage[cite: 4].",
    // Source: Peptic Ulcer lecture (5Y - Int Med (W))[cite: 4, 10]
    // Confidence: high
  },
  {
    question:
      "14. A 40-year-old female had persistent jaundice for 9 months with pruritus. Physical examination: Yellowish scleral and skin. Hepatomegaly with 3cm below the costal margin, hard and smooth on palpation. Splenomegaly, 6cm below the costal margin. Serum anti-mitochondrial antibody positive, total bilirubin 134 umol/L, conjugated bilirubin 88 umol/L, γ-GT 200U/L. The most likely diagnosis is ( )",
    options: [
      "A. Chronic active hepatitis",
      "B. Primary liver cancer",
      "C. Primary biliary cirrhosis",
      "D. Liver cirrhosis after hepatitis",
      "E. Secondary biliary cirrhosis",
    ],
    answerIndex: 2, // C
    explanation:
      "<b>Why:</b> Middle-aged female with chronic cholestatic jaundice, pruritus, hepatosplenomegaly, elevated γ-GT and conjugated bilirubin, and positive serum anti-mitochondrial antibody (AMA) is diagnostic of primary biliary cirrhosis (PBC)[cite: 5, 11].<br><b>Why not the others:</b> A shows elevated IgG and hepatocellular transaminases rather than AMA positivity[cite: 11]; B features elevated AFP and a liver mass[cite: 11]; D follows viral hepatitis with negative AMA (not from slides); E results from prolonged extrahepatic biliary obstruction rather than autoimmune AMA-positive cholangitis[cite: 5].<br><b>Key concept:</b> PBC is an autoimmune destruction of intrahepatic small bile ducts characterized by AMA positivity and cholestasis[cite: 5, 11].<br><b>High-yield:</b> Pruritus often precedes jaundice by months or years, and ALP/γ-GT are markedly elevated[cite: 5, 11].",
    // Source: Primary Biliary Cirrhosis / Liver Cirrhosis lecture (5Y - Int Med (W))[cite: 5, 11]
    // Confidence: high
  },
  {
    question:
      "15. The ECG monitoring of a patient with heart failure suggested the progressive PR prolongation with eventual block after a P wave. The most likely diagnosis is ( )",
    options: [
      "A. Sinus arrest",
      "B. Bradycardia-tachycardia syndrome",
      "C. Second-degree sinoatrial block",
      "D. Second-degree type I atrioventricular block",
      "E. Second-degree type II atrioventricular block",
    ],
    answerIndex: 3, // D
    explanation:
      "<b>Why:</b> Progressive PR interval prolongation culminating in a non-conducted P wave (dropped QRS beat) is the hallmark ECG pattern of second-degree type I (Mobitz I / Wenckebach) AV block[cite: 6].<br><b>Why not the others:</b> A shows an absence of P waves with a long pause (not from slides); B alternates between bradyarrhythmias and tachyarrhythmias in sick sinus syndrome (not from slides); C drops an entire P-QRS-T complex without PR prolongation (not from slides); E drops QRS complexes abruptly with a constant PR interval (not from slides).<br><b>Key concept:</b> Mobitz I block occurs at the AV node with progressive conduction fatigue until one impulse fails to conduct[cite: 6].<br><b>High-yield:</b> The first conducted beat after the dropped QRS has the shortest PR interval[cite: 6].",
    // Source: Arrhythmias lecture (5Y - Int Med (W))[cite: 6]
    // Confidence: high
  },
  {
    question:
      "16. A 37-year-old male presents with fatigue and fever for 1 week. Physical examination: T 38.6°C, pallor, diffused petechiae, without lymphopathy, heart rate 100 beats/min, regular rhythm, moist rale can be heard in right lung, without hepatomegaly and splenomegaly. Laboratory tests: White blood cells 1.9 x 109/L, neutrophils 0.22 x 109/L, lymphocytes 0.77 x 109/L, basophils 0.01 x 109/L, hemoglobin 69g/L, platelets 32 x 109/L, reticulocytes 0.1%. The most likely diagnosis is ( )",
    options: [
      "A. Chronic Myeloid Leukemia",
      "B. Chronic lymphocytic leukemia",
      "C. Lymphoma",
      "D. Aplastic anemia",
      "E. Iron deficiency anemia",
    ],
    answerIndex: 3, // D
    explanation:
      "<b>Why:</b> Severe pancytopenia (WBC 1.9 x 10^9/L with marked neutropenia, Hb 69 g/L, PLT 32 x 10^9/L), very low reticulocytes (0.1%), fever/infection, bleeding (petechiae), and absence of hepatosplenomegaly or lymphadenopathy point to aplastic anemia[cite: 3, 7].<br><b>Why not the others:</b> A presents with marked leukocytosis and massive splenomegaly (not from slides); B causes lymphocytosis and lymphadenopathy (not from slides); C features prominent lymphadenopathy[cite: 3]; E causes isolated microcytic anemia rather than pancytopenia (not from slides).<br><b>Key concept:</b> Aplastic anemia is bone marrow failure causing pancytopenia and markedly hypocellular marrow without organomegaly[cite: 7].<br><b>High-yield:</b> Lack of hepatosplenomegaly and lymphadenopathy helps distinguish aplastic anemia from acute leukemia and lymphoma (not from slides).",
    // Source: Aplastic Anemia lecture (5Y - Int Med (W))[cite: 7]
    // Confidence: high
  },
  {
    question:
      "17. A 49-year-old worker suddenly vomited about 400ml of blood after eating hard food. He had a history of drinking for 20 years, and felt anorexia, nausea, and abdominal distension frequently. Physical examination: caput medusae and splenomegaly with 3cm below the costal margin. The most likely reason is ( )",
    options: [
      "A. Esophagus-gastric fundus varicose rupture",
      "B. Duodenal ulcer",
      "C. Esophagitis",
      "D. Stomach cancer",
      "E. Acute erosive hemorrhagic gastritis",
    ],
    answerIndex: 0, // A
    explanation:
      "<b>Why:</b> A 20-year history of alcohol abuse, chronic GI symptoms, caput medusae, and splenomegaly confirm alcoholic cirrhosis with portal hypertension, where hard food mechanically ruptures esophageal-gastric fundus varices causing massive hematemesis (not from slides).<br><b>Why not the others:</b> B causes rhythmic epigastric pain without portal hypertension signs (caput medusae/splenomegaly)[cite: 4, 10]; C rarely causes sudden 400 mL hematemesis (not from slides); D and E do not explain caput medusae and splenomegaly (not from slides).<br><b>Key concept:</b> Portal hypertension opens portosystemic collaterals (esophageal/gastric varices, caput medusae) and causes congestive splenomegaly (not from slides).<br><b>High-yield:</b> Esophagogastric variceal rupture is the most lethal cause of acute upper GI bleeding in cirrhotic patients (not from slides).",
    // Source: Liver Cirrhosis lecture (slide not found)
    // Confidence: high
  },
  {
    question:
      "18. A 69-year-old male presents with intermittent low back pain for six months. His height is reduced by several inches because of vertebral collapse. Laboratory test: Hb 66g/L, normal WBC and PLT; urine protein (+++), Bence Jones protein (+). To confirm the diagnosis, the first-to-order investigation is ( )",
    options: [
      "A. Renal function",
      "B. Alkaline phosphatase",
      "C. Bone marrow aspiration and smear",
      "D. Parathyroid hormone",
      "E. Serum ferritin",
    ],
    answerIndex: 2, // C
    explanation:
      "<b>Why:</b> Elderly male with bone pain, vertebral compression fractures (height loss), anemia (Hb 66 g/L), proteinuria, and positive urinary Bence Jones protein (monoclonal light chains) has multiple myeloma, which is confirmed by bone marrow aspiration showing clonal plasma cells (not from slides).<br><b>Why not the others:</b> A assesses renal impairment (CRAB criteria) but is not diagnostic (not from slides); B is typically normal in multiple myeloma due to suppressed osteoblast activity (not from slides); D evaluates hyperparathyroidism (not from slides); E evaluates iron stores (not from slides).<br><b>Key concept:</b> Multiple myeloma is a malignant proliferation of clonal plasma cells in the bone marrow producing monoclonal immunoglobulins/light chains (not from slides).<br><b>High-yield:</b> Classic CRAB features are hyperCalcemia, Renal insufficiency, Anemia, and Bone lytic lesions (not from slides).",
    // Source: NOT IN SLIDES
    // Confidence: low
  },
  {
    question:
      "19. A 34-year-old female had palpitation and dyspnea on exertion for 7 years. Yesterday, she was admitted to the hospital because of breathlessness, restlessness, and hemoptysis. Physical examination: mitral face, hyperactive first heart sound, 3/6 grade rumbling diastolic murmur at the apex and open valve sound can be heard. The most appropriate treatment for this patient is ( )",
    options: [
      "A. Oxygen inhalation",
      "B. Intravenous aminophylline",
      "C. Application of Angiotensin Converting Enzyme Inhibitor (ACEI)",
      "D. Furosemide intravenous injection",
      "E. Deslanoside intravenous injection",
    ],
    answerIndex: 3, // D
    explanation:
      "<b>Why:</b> Mitral facies, loud S1, opening snap, and an apical rumbling diastolic murmur indicate rheumatic mitral stenosis complicated by acute pulmonary edema (dyspnea, restlessness, hemoptysis); intravenous furosemide rapidly reduces preload and pulmonary venous congestion (not from slides).<br><b>Why not the others:</b> A is only supportive and insufficient alone to relieve pulmonary edema (not from slides); B is a bronchodilator not first-line for cardiogenic pulmonary edema (not from slides); C reduces afterload but can cause severe hypotension in fixed valvular stenosis (not from slides); E (digitalis) is ineffective in sinus rhythm mitral stenosis because the defect is mechanical obstruction rather than LV systolic failure (not from slides).<br><b>Key concept:</b> Acute pulmonary edema in mitral stenosis is driven by elevated left atrial and pulmonary venous pressure requiring rapid preload reduction (not from slides).<br><b>High-yield:</b> Loop diuretics (IV furosemide) and nitrates are primary treatments to lower left atrial pressure in acute decompensated mitral stenosis (not from slides).",
    // Source: NOT IN SLIDES
    // Confidence: low
  },
  {
    question:
      "20. A patient has a sudden tachycardia. The electrocardiogram is shown in the figure. The most significant manifestations for diagnosis is ( )",
    images: ["images/intmedii2017_q20.png"],
    options: [
      "A. Heart rate is often above 160 beats/min",
      "B. Carotid sinus massage can stop tachycardia",
      "C. Carotid sinus massage can increase atrioventricular block",
      "D. Absolute regularity of heart rhythm",
      "E. The heart rate gradually slows down during carotid sinus massage",
    ],
    answerIndex: 1, // B
    explanation:
      "<b>Why:</b> The ECG demonstrates paroxysmal supraventricular tachycardia (PSVT, regular narrow-QRS tachycardia at ~180 bpm without distinct sinus P waves), and vagal stimulation such as carotid sinus massage abruptly terminates the reentrant circuit.<br><b>Why not the others:</b> A is common in PSVT (150-250 bpm) but also occurs in sinus tachycardia or atrial flutter (not from slides); C characterizes atrial flutter rather than PSVT (not from slides); D is seen in other regular tachycardias like sinus tachycardia or 2:1 atrial flutter (not from slides); E describes sinus tachycardia, whereas PSVT terminates abruptly (not from slides).<br><b>Key concept:</b> PSVT (AVNRT/AVRT) relies on AV nodal conduction for reentry, so vagal maneuvers abruptly block the circuit.<br><b>High-yield:</b> PSVT attacks begin and end abruptly, and carotid sinus massage or Valsalva maneuver is first-line acute management.",
    // Source: Arrhythmias lecture (slide not found)
    // Confidence: high
  },
  {
    caseText:
      "A 60-year-old patient with history of chronic pulmonary heart disease. Recently, his cough and shortness of breath have worsened with delirium. Arterial blood gas analysis: pH 7.27, PaO2 6.65kPa (50mmHg), PaCO2 10.74kPa (80.6mmHg), HCO3- 20mmol/L.",
    question: "21. Which of the following diagnoses is correct? ( )",
    options: [
      "A. Chronic pulmonary heart disease and heart failure",
      "B. Chronic pulmonary heart disease and lung infection",
      "C. Chronic pulmonary heart disease with cerebrovascular disease",
      "D. Chronic pulmonary heart disease, type II respiratory failure",
      "E. Chronic pulmonary heart disease, type I respiratory failure",
    ],
    answerIndex: 3, // D
    explanation:
      "<b>Why:</b> The patient has chronic pulmonary heart disease (cor pulmonale) with PaO2 50 mmHg (&lt;60 mmHg) and PaCO2 80.6 mmHg (&gt;50 mmHg) plus delirium (pulmonary encephalopathy), meeting the exact slide criteria for type II respiratory failure[cite: 5].<br><b>Why not the others:</b> A lacks signs of right heart failure such as peripheral edema or hepatomegaly[cite: 3]; B is likely a trigger but not directly proven without fever, WBC, or imaging; C is incorrect because delirium here stems from hypercapnic pulmonary encephalopathy rather than stroke[cite: 5]; E requires PaCO2 &lt;50 mmHg[cite: 5].<br><b>Key concept:</b> Type II respiratory failure is defined as PaO2 &lt;60 mmHg together with hypercapnia (PaCO2 &gt;50 mmHg)[cite: 5].<br><b>High-yield:</b> Delirium or mental status changes in decompensated cor pulmonale indicate pulmonary encephalopathy due to severe CO2 retention[cite: 3, 5].",
    // Source: Cor Pulmonale lecture (5Y - Int Med (W))
    // Confidence: high
  },
  {
    caseText:
      "A 60-year-old patient with history of chronic pulmonary heart disease. Recently, his cough and shortness of breath have worsened with delirium. Arterial blood gas analysis: pH 7.27, PaO2 6.65kPa (50mmHg), PaCO2 10.74kPa (80.6mmHg), HCO3- 20mmol/L.",
    question:
      "22. The results of the above arterial blood gas analysis should belong to ( )",
    options: [
      "A. Respiratory acidosis decompensation",
      "B. Respiratory acidosis and metabolic alkalosis",
      "C. Respiratory alkalosis",
      "D. Metabolic acidosis",
      "E. Respiratory acidosis and metabolic acidosis",
    ],
    answerIndex: 4, // E
    explanation:
      "<b>Why:</b> The pH is acidotic at 7.27 (&lt;7.35), PaCO2 is elevated at 80.6 mmHg (&gt;45 mmHg, respiratory acidosis), and HCO3- is decreased at 20 mmol/L (&lt;22 mmol/L, metabolic acidosis), indicating a mixed respiratory and metabolic acidosis[cite: 4].<br><b>Why not the others:</b> A would show an elevated compensatory HCO3- (&gt;26 mmol/L) rather than a reduced HCO3- (not from slides); B requires elevated HCO3- (&gt;26 mmol/L) (not from slides); C requires pH &gt;7.45 and PaCO2 &lt;35 mmHg[cite: 4]; D alone would not explain PaCO2 80.6 mmHg[cite: 4].<br><b>Key concept:</b> When PaCO2 is elevated (&gt;45 mmHg) and HCO3- is simultaneously decreased (&lt;22 mmol/L), both respiratory and metabolic acidosis coexist[cite: 4].<br><b>High-yield:</b> Severe hypoxemia (PaO2 50 mmHg) causes lactic acid accumulation, lowering HCO3- alongside hypercapnic respiratory acidosis (not from slides).",
    // Source: Acid-Base Balance / ABG lecture, slides 84 & 96-97 (5Y - Int Med (W))
    // Confidence: high
  },
  {
    caseText:
      "A 60-year-old patient with history of chronic pulmonary heart disease. Recently, his cough and shortness of breath have worsened with delirium. Arterial blood gas analysis: pH 7.27, PaO2 6.65kPa (50mmHg), PaCO2 10.74kPa (80.6mmHg), HCO3- 20mmol/L.",
    question:
      "23. According to the patient's clinical manifestations and arterial blood gas analysis results, we should give him respiratory therapy of ( )",
    options: [
      "A. Hyperbaric oxygen therapy",
      "B. Pure oxygen therapy",
      "C. Intermittent oxygen therapy",
      "D. Continuous low concentration oxygen",
      "E. High frequency ventilator",
    ],
    answerIndex: 3, // D
    explanation:
      "<b>Why:</b> In type II respiratory failure with CO2 retention (PaCO2 80.6 mmHg), continuous low-concentration oxygen therapy (25%-29%, nasal cannula 1-3 L/min) is required to relieve hypoxemia without suppressing the hypoxic respiratory drive[cite: 4, 5].<br><b>Why not the others:</b> A and B deliver excessive oxygen concentrations that worsen CO2 retention and precipitate respiratory arrest[cite: 5]; C causes dangerous rebound hypoxemia when oxygen is withdrawn (not from slides); E is not the standard initial oxygen therapy for hypercapnic COPD/cor pulmonale (not from slides).<br><b>Key concept:</b> Type II respiratory failure requires a low inspired oxygen fraction (25%-29%) to prevent worsening hypercapnia[cite: 4, 5].<br><b>High-yield:</b> Therapeutic oxygen goal in cor pulmonale is to maintain SaO2 &ge;90% and PaO2 &ge;60 mmHg[cite: 5].",
    // Source: Respiratory Failure & Cor Pulmonale lectures, slide 50 (5Y - Int Med (W))
    // Confidence: high
  },
  {
    caseText:
      "A 60-year-old patient with history of chronic pulmonary heart disease. Recently, his cough and shortness of breath have worsened with delirium. Arterial blood gas analysis: pH 7.27, PaO2 6.65kPa (50mmHg), PaCO2 10.74kPa (80.6mmHg), HCO3- 20mmol/L.",
    question:
      "24. In the treatment of this patient, which of the following should NOT be carried out immediately? ( )",
    options: [
      "A. Intravenous sodium bicarbonate",
      "B. Control infection",
      "C. Expectorant",
      "D. Improve ventilation",
      "E. Oxygen therapy",
    ],
    answerIndex: 0, // A
    explanation:
      "<b>Why:</b> With pH 7.27 (&gt;7.20), intravenous sodium bicarbonate should not be given immediately because improving alveolar ventilation clears CO2 and corrects pH, whereas bicarbonate generates extra CO2 and worsens intracellular acidosis (not from slides).<br><b>Why not the others:</b> B is essential because respiratory infection is the main trigger of acute decompensation[cite: 3]; C clears airway secretions[cite: 3]; D relieves CO2 retention[cite: 3]; E corrects life-threatening hypoxemia (PaO2 50 mmHg)[cite: 3].<br><b>Key concept:</b> Core management of acute decompensated cor pulmonale focuses on controlling infection, maintaining airway patency, improving ventilation, and controlled oxygen therapy[cite: 3].<br><b>High-yield:</b> Sodium bicarbonate is generally reserved only for severe acidemia (pH &lt;7.15-7.20) after adequate ventilation is established (not from slides).",
    // Source: Cor Pulmonale lecture (5Y - Int Med (W))
    // Confidence: medium
  },
  {
    caseText:
      "A 36-year-old male complained of distension and discomfort in his left upper abdomen for 2 months and aggravated for 1 week. PE: palpation of superficial lymph nodes and liver were unremarkable. Palpation of spleen revealed splenomegaly with 5cm below the costal arch. Lab: WBC 270 x 109/L, Hb 101g/L, PLT 312 x 109/L. Classification: 1% of myeloblasts, 3% of promyelocytic cells, 11% of myelocytic cells, 38% of late myelocytic cells, and 35% of rod-shaped granulocytes. 2% of basophils. Neutrophil alkaline phosphatase staining was negative.",
    question:
      "25. Which of the followings is the first investigation to order? ( )",
    options: [
      "A. Abdominal B ultrasound",
      "B. Protein electrophoresis",
      "C. Bone marrow cytogenetic analyses",
      "D. Abdominal CT scan",
      "E. Spleen biopsy",
    ],
    answerIndex: 2, // C
    explanation:
      "<b>Why:</b> Splenomegaly, marked leukocytosis (270 x 10^9/L) with granulocytes at all maturation stages (&lt;10% blasts), basophilia, and negative NAP staining strongly indicate chronic myeloid leukemia (CML), which requires bone marrow examination and cytogenetic analysis for the Ph chromosome to confirm[cite: 6].<br><b>Why not the others:</b> A and D only confirm splenomegaly already detected on physical exam (not from slides); B evaluates monoclonal gammopathies such as multiple myeloma (not from slides); E is unnecessary and carries a high bleeding risk (not from slides).<br><b>Key concept:</b> CML diagnosis relies on bone marrow aspiration showing dominant granulopoiesis (&lt;10% blasts) alongside cytogenetic/molecular detection of Ph chromosome and BCR::ABL[cite: 6].<br><b>High-yield:</b> Negative NAP score differentiates CML from a leukemoid reaction (where NAP is markedly elevated)[cite: 6].",
    // Source: Chronic Myeloid Leukemia lecture (5Y - Int Med (W))
    // Confidence: high
  },
  {
    caseText:
      "A 36-year-old male complained of distension and discomfort in his left upper abdomen for 2 months and aggravated for 1 week. PE: palpation of superficial lymph nodes and liver were unremarkable. Palpation of spleen revealed splenomegaly with 5cm below the costal arch. Lab: WBC 270 x 109/L, Hb 101g/L, PLT 312 x 109/L. Classification: 1% of myeloblasts, 3% of promyelocytic cells, 11% of myelocytic cells, 38% of late myelocytic cells, and 35% of rod-shaped granulocytes. 2% of basophils. Neutrophil alkaline phosphatase staining was negative.",
    question: "26. What do you expect on cytogenetics? ( )",
    options: [
      "A. Trisomy 21",
      "B. T (15:17)",
      "C. Del (5q)",
      "D. T (9:22)",
      "E. Del (17p)",
    ],
    answerIndex: 3, // D
    explanation:
      "<b>Why:</b> Chronic myeloid leukemia is caused by the reciprocal translocation t(9;22)(q34;q11), forming the Philadelphia (Ph) chromosome and the BCR::ABL fusion gene[cite: 6, 7].<br><b>Why not the others:</b> A is associated with Down syndrome and transient myeloproliferative disorder (not from slides); B characterizes acute promyelocytic leukemia (APL, PML::RARa)[cite: 7]; C defines 5q- syndrome, a subtype of myelodysplastic syndrome (not from slides); E is a high-risk deletion seen in chronic lymphocytic leukemia or multiple myeloma (not from slides).<br><b>Key concept:</b> The t(9;22) translocation fuses BCR on chromosome 22 with ABL on chromosome 9, encoding the constitutively active p210 tyrosine kinase[cite: 6].<br><b>Memory trick:</b> CML = t(9;22) Philadelphia chromosome (9 + 22 = 31; APL = t(15;17), 15 + 17 = 32).<br><b>High-yield:</b> Over 90%-95% of CML patients harbor the t(9;22) Philadelphia chromosome[cite: 6].",
    // Source: Chronic Myeloid Leukemia lecture (5Y - Int Med (W))
    // Confidence: high
  },
  {
    caseText:
      "A 36-year-old male complained of distension and discomfort in his left upper abdomen for 2 months and aggravated for 1 week. PE: palpation of superficial lymph nodes and liver were unremarkable. Palpation of spleen revealed splenomegaly with 5cm below the costal arch. Lab: WBC 270 x 109/L, Hb 101g/L, PLT 312 x 109/L. Classification: 1% of myeloblasts, 3% of promyelocytic cells, 11% of myelocytic cells, 38% of late myelocytic cells, and 35% of rod-shaped granulocytes. 2% of basophils. Neutrophil alkaline phosphatase staining was negative.",
    question: "27. What is the first-line therapy for this patient? ( )",
    options: [
      "A. Cyclophosphamide",
      "B. Hydroxyurea",
      "C. Daunorubicin",
      "D. Prednisone",
      "E. Imatinib",
    ],
    answerIndex: 4, // E
    explanation:
      "<b>Why:</b> Imatinib (Gleevec, 400-600 mg/day) is a targeted BCR::ABL tyrosine kinase inhibitor and the gold-standard first-line therapy for chronic-phase CML[cite: 6].<br><b>Why not the others:</b> A is an alkylating agent used in lymphomas and autoimmune diseases (not from slides); B lowers WBC counts rapidly for cytoreduction but does not induce cytogenetic remission or alter disease progression[cite: 6]; C is an anthracycline used in acute leukemia induction (not from slides); D is a corticosteroid used in lymphoid malignancies (not from slides).<br><b>Key concept:</b> Imatinib competitively inhibits the ATP-binding site of the BCR::ABL tyrosine kinase, blocking leukemic proliferation[cite: 6].<br><b>High-yield:</b> Because this patient's WBC is &gt;200 x 10^9/L, monitor for leukostasis (which may require temporary hydroxyurea or therapeutic leukapheresis alongside TKI initiation)[cite: 6].",
    // Source: Chronic Myeloid Leukemia lecture (5Y - Int Med (W))
    // Confidence: high
  },
];
