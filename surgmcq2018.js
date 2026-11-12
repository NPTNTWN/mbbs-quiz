
// This file only contains your data. No HTML or CSS.
const myQuestionBank = [

{
  question: "1. Which of the following treatments is effective for breast cancer?",
  options: [
    "A. surgical treatment",
    "B. radiotherapy",
    "C. chemotherapy",
    "D. targeted therapy",
    "E. above all are correct"
  ],
  answerIndex: 4,
  letter: "E",
  explanation: "<b>Why:</b> Comprehensive management of breast cancer incorporates a multimodal approach including surgery, chemotherapy, radiation, targeted therapy, and hormonal therapy.<br><b>Why not the others:</b> Options A, B, C, and D are all effective individual therapeutic modalities, making E the complete correct choice.<br><b>Key concept:</b> Multimodal treatment strategy in breast cancer therapy.<br><b>High-yield:</b> Combining surgical resection with adjuvant systemic and radiation therapies provides optimal long-term survival in breast cancer.",
  source: "02 Disease of Breast.pdf, slide 22",
  confidence: "high",
  flag: ""
},
{
  question: "2. Acute mastitis is acute suppurative infection of mammary gland, the main pathogenic bacteria are:",
  options: [
    "A. Gram-positive cocci",
    "B. Staphylococcus aureus",
    "C. Colibacillus",
    "D. Streptococcus",
    "E. Gram-negative bacilli"
  ],
  answerIndex: 1,
  letter: "B",
  explanation: "<b>Why:</b> Staphylococcus aureus is the single most common causative organism responsible for acute suppurative mastitis in lactating women (not from slides).<br><b>Why not the others:</b> Option A is too non-specific, while C, D, and E represent less frequent or non-primary etiologic agents (not from slides).<br><b>Key concept:</b> Staphylococcal infection via nipple fissures during lactation (not from slides).<br><b>Memory trick:</b> Staph aureus causes Suppurative mastitis (not from slides).<br><b>High-yield:</b> Milk stasis and nipple skin breaks during early lactation predispose to S. aureus infection (not from slides).",
  source: "NOT IN SLIDES",
  confidence: "low",
  flag: ""
},
{
  question: "3. The selection of breast-conserving surgery are NOT included:",
  options: [
    "A. patient's willingness",
    "B. pathological classification",
    "C. stage of disease",
    "D. adjuvant treatment",
    "E. doctor's willingness"
  ],
  answerIndex: 4,
  letter: "E",
  explanation: "<b>Why:</b> Selection for breast-conserving surgery depends on clinical stage, pathology, tumor-to-breast ratio, patient preference, and ability to receive post-op radiation, not the doctor's personal willingness.<br><b>Why not the others:</b> Options A, B, C, and D are essential objective clinical and patient-centered criteria.<br><b>Key concept:</b> Indications and eligibility criteria for breast-conserving therapy.<br><b>High-yield:</b> Patient desire for breast preservation and mandatory access to postoperative radiotherapy are prerequisites.",
  source: "02 Disease of Breast.pdf, slide 22",
  confidence: "high",
  flag: ""
},
{
  question: "4. About portal hypertension, which one is NOT true?",
  options: [
    "A. The main symptoms include Splenomegaly, Hypersplenism, Hematemesis and ascites",
    "B. Caput medusae is the most important portosystemic collateral formation",
    "C. Child-Pugh Score could reveal the Hepatic Functional Reserve",
    "D. Splenectomy with periesophagogastric Devascularization is one of the surgical treatments",
    "E. Pharmacotherapy can be as effective as endoscopic treatment."
  ],
  answerIndex: 1,
  letter: "B",
  explanation: "<b>Why:</b> Gastroesophageal varices represent the most clinically critical portosystemic collateral formation because rupture leads to life-threatening hematemesis, whereas caput medusae is less clinically significant.<br><b>Why not the others:</b> Option A correctly lists primary portal hypertension manifestations, C accurately describes Child-Pugh utility, D is a standard devascularization operation, and E reflects acute bleeding management principles.<br><b>Key concept:</b> Portosystemic collateral circulation and variceal hemorrhage.<br><b>High-yield:</b> Esophagogastric variceal rupture is the leading cause of death in portal hypertension.",
  source: "12 Portal Hypertension.pdf, slide 27",
  confidence: "high",
  flag: ""
},
{
  question: "5. Which one is NOT the common cause of upper gastrointestinal hemorrhage?",
  options: [
    "A. Peptic ulcer disease",
    "B. Gastroesophageal varices",
    "C. Mallory-Weiss tears",
    "D. Gastritis or duodenitis",
    "E. Meckel's diverticulum"
  ],
  answerIndex: 4,
  letter: "E",
  explanation: "<b>Why:</b> Meckel's diverticulum is located in the distal ileum and causes lower gastrointestinal bleeding, whereas upper GI bleeding originates proximal to the ligament of Treitz.<br><b>Why not the others:</b> Options A, B, C, and D are all major common causes of upper gastrointestinal bleeding.<br><b>Key concept:</b> Anatomical classification of GI bleeding at the ligament of Treitz.<br><b>Memory trick:</b> Meckel's is in the ileum (Lower GI), not Upper GI.<br><b>High-yield:</b> Peptic ulcer disease is the most common cause of upper GI hemorrhage (50%-60%).",
  source: "15 Bleeding.pdf, slide 16",
  confidence: "high",
  flag: ""
},
{
  question: "6. The most common site of acute hematogenous osteomyelitis is:",
  options: [
    "A. Metaphysis",
    "B. Metacarpal bone",
    "C. Ilium",
    "D. Lower end of tibia",
    "E. Calcaneus"
  ],
  answerIndex: 0,
  letter: "A",
  explanation: "<b>Why:</b> The metaphysis of rapidly growing long bones is the most common anatomical site due to sluggish blood flow in hairpin capillary loops and sparse phagocytes.<br><b>Why not the others:</b> Options B, C, D, and E name specific bones or bone segments rather than the primary anatomical zone (metaphysis).<br><b>Key concept:</b> Pathophysiology and localization of hematogenous bone seeding.<br><b>High-yield:</b> Distal femur and proximal tibia metaphyses are the most frequently affected long bone sites in pediatric patients.",
  source: "22 Bone Joint Infections.pdf, slide 18",
  confidence: "high",
  flag: ""
},
{
  question: "7. Which kind nerve will be injured at the onset of cubital tunnel syndrome?",
  options: [
    "A. Median nerve",
    "B. Sciatic nerve",
    "C. Ulnar nerve",
    "D. Radial nerve",
    "E. C5 nerve root"
  ],
  answerIndex: 2,
  letter: "C",
  explanation: "<b>Why:</b> Cubital tunnel syndrome is caused by entrapment or compression of the ulnar nerve as it passes behind the medial epicondyle at the elbow.<br><b>Why not the others:</b> Option A is involved in carpal tunnel syndrome, B is in the lower extremity, D passes in the radial groove, and E affects upper cervical C5 nerve roots.<br><b>Key concept:</b> Ulnar nerve compression neuropathy at the elbow.<br><b>Memory trick:</b> Cubital tunnel = Ulnar nerve (\"funny bone\").<br><b>High-yield:</b> Cubital tunnel syndrome produces sensory loss in the 4th and 5th digits and intrinsic hand muscle atrophy.",
  source: "17 Upper Limb Fracture.pdf, slide 15",
  confidence: "high",
  flag: ""
},
{
  question: "8. Duodenal ulcer commonly occurs in which part of the duodenum?",
  options: [
    "A. First part",
    "B. Second part",
    "C. Third part",
    "D. Fourth part",
    "E. Any part"
  ],
  answerIndex: 0,
  letter: "A",
  explanation: "<b>Why:</b> Duodenal ulcers occur predominantly in the first part of the duodenum (duodenal bulb) because it directly receives unbuffered gastric acid output from the stomach.<br><b>Why not the others:</b> Options B, C, and D are postbulbar segments where peptic ulcers are rare, making E incorrect.<br><b>Key concept:</b> Anatomical location of acid-peptic duodenal ulceration.<br><b>High-yield:</b> Over 90% of duodenal ulcers develop in the duodenal bulb (first part).",
  source: "06 Disease of Stomach and Duodenum.pdf, slide 1",
  confidence: "high",
  flag: ""
},
{
  question: "9. Early gastric cancer is:",
  options: [
    "A. Confined to the gastric antrum",
    "B. Confined to mucosal and submucosal layers of gastric wall",
    "C. Less than 2cm in diameter",
    "D. With no lymph node metastasis",
    "E. With no invasion of serosa"
  ],
  answerIndex: 1,
  letter: "B",
  explanation: "<b>Why:</b> Early gastric cancer is defined strictly by the depth of tumor invasion confined to the mucosa or submucosa, regardless of lesion size or lymph node status.<br><b>Why not the others:</b> Option A imposes an incorrect anatomical restriction, C adds an invalid size cutoff, D is false because lymph node metastasis can occur, and E is incomplete.<br><b>Key concept:</b> Histopathology and depth definition of early gastric carcinoma.<br><b>High-yield:</b> Early gastric cancer definition depends solely on mucosal/submucosal depth and NOT on lymph node involvement.",
  source: "06 Disease of Stomach and Duodenum.pdf, slide 4",
  confidence: "high",
  flag: ""
},
{
  question: "10. In an abdominal injury with a small bowel prolapse, the preferred emergency treatment is:",
  options: [
    "A. Bandage and cover with sterilized or cleaning ware",
    "B. Bandage and cover with saline gauze",
    "C. Bandage and cover with vaseline gauze",
    "D. Quickly return the intestine into the abdominal cavity",
    "E. Press and bandage directly with sterile gauze"
  ],
  answerIndex: 0,
  letter: "A",
  explanation: "<b>Why:</b> When intestinal prolapse occurs, exposed organs must not be pushed back; covering them with a sterile bowl/ware before bandaging protects them from compression ischemia.<br><b>Why not the others:</b> Options B, C, and E fail to provide rigid protection against bandage pressure, while D is strictly contraindicated due to contamination and shock risks.<br><b>Key concept:</b> First-aid emergency management of abdominal evisceration.<br><b>High-yield:</b> Never reduce eviscerated bowel in the field; protect with a rigid cover to prevent ischemic constriction during transport.",
  source: "04 Abdominal Injury.pdf, slide 42",
  confidence: "high",
  flag: ""
},
{
  question: "11. Male, 50 years old, painless jaundice for 2 months, CT scan shows swelling of the gallbladder, diameter of the common bile duct is 1.8cm, a mass could be seen at the head of pancreas. Which of the surgical method should be chosen?",
  options: [
    "A. Pancreatic head resection",
    "B. Total pancreatectomy",
    "C. Pancreaticoduodenectomy",
    "D. Choledochojejunostomy",
    "E. Total pancreaticoduodenectomy"
  ],
  answerIndex: 2,
  letter: "C",
  explanation: "<b>Why:</b> Painless progressive jaundice with a pancreatic head mass and biliary dilation strongly indicates resectable pancreatic head carcinoma, for which pancreaticoduodenectomy (Whipple procedure) is the standard curative operation.<br><b>Why not the others:</b> Option A is anatomically incomplete, B is reserved for diffuse involvement, D is purely palliative for biliary obstruction, and E is unnecessary for a localized head lesion.<br><b>Key concept:</b> Surgical resection of pancreatic head adenocarcinoma via Whipple procedure.<br><b>High-yield:</b> Painless jaundice plus an enlarged gallbladder (Courvoisier sign) indicates periampullary/pancreatic head malignancy requiring Whipple resection.",
  source: "14 Pancreas.pdf, slide 73",
  confidence: "high",
  flag: ""
},
{
  question: "12. Male, 63 years old, Right upper quadrant pain, vomit, chills and fever, jaundice after 2 days. The Diagnosis is most like:",
  options: [
    "A. acute gastritis",
    "B. acute pancreatitis",
    "C. acute cholecystitis",
    "D. acute cholangitis",
    "E. biliary tract ascariasis"
  ],
  answerIndex: 3,
  letter: "D",
  explanation: "<b>Why:</b> The patient presents with Charcot's triad (RUQ abdominal pain, high fever with chills, and jaundice), which is pathognomonic for acute cholangitis.<br><b>Why not the others:</b> Option A lacks jaundice/fever, B lacks primary jaundice and chills, C presents with Murphy sign without early jaundice, and E causes severe colicky pain without initial classic triad.<br><b>Key concept:</b> Charcot's triad in acute suppurative cholangitis.<br><b>Memory trick:</b> Pain + Fever + Jaundice = Charcot's triad of Cholangitis.<br><b>High-yield:</b> Acute cholangitis requires prompt biliary decompression and broad-spectrum intravenous antibiotics.",
  source: "13 Biliary Tract.pdf, slide 9",
  confidence: "high",
  flag: ""
},
{
  question: "13. Male, 30 years old, overeating, upper quadrant pain, nausea and vomiting, fever, Increased heart rate, blood test: WBC 12.0 x 109/L, NEUT 88%, the preferred examination is:",
  options: [
    "A. abdomen film on erect and supine positions",
    "B. ultrasonography",
    "C. blood and urine amylase",
    "D. electrocardiogram",
    "E. arteriography"
  ],
  answerIndex: 2,
  letter: "C",
  explanation: "<b>Why:</b> The patient's presentation following overeating strongly points to acute pancreatitis, making serum and urine amylase testing the essential first-line diagnostic laboratory evaluation.<br><b>Why not the others:</b> Option A evaluates perforation/ileus, B assesses gallstone secondary causes, D evaluates cardiac ischemia, and E is an invasive vascular modality.<br><b>Key concept:</b> Laboratory diagnosis of acute pancreatitis.<br><b>High-yield:</b> Serum amylase rises within 2 to 12 hours of acute pancreatitis onset (>3 times upper limit of normal).",
  source: "14 Pancreas.pdf, slide 40",
  confidence: "high",
  flag: ""
},
{
  question: "14. Male, 50 years old, Right upper quadrant pain 3 hours, vomit. Significant past history included chronic cholecystolithiasis, physical examination: 37°C, Slight tenderness in the right upper abdomen. The first preferred test is:",
  options: [
    "A. blood test",
    "B. X-ray test",
    "C. Ultrasound",
    "D. PTC",
    "E. ERCP"
  ],
  answerIndex: 2,
  letter: "C",
  explanation: "<b>Why:</b> B-ultrasound (ultrasonography) is the non-invasive, quick, highly sensitive initial imaging modality of choice for biliary colic and gallbladder stones.<br><b>Why not the others:</b> Option A provides non-specific laboratory values, B fails to show radiolucent stones, D is invasive percutaneous drainage, and E is an invasive therapeutic endoscopic procedure.<br><b>Key concept:</b> First-line imaging for cholelithiasis and biliary pathology.<br><b>High-yield:</b> Ultrasound is >95% sensitive for detecting gallbladder stones and acoustic shadowing.",
  source: "13 Biliary Tract.pdf, slide 12",
  confidence: "high",
  flag: ""
},
{
  question: "15. Female, 50 years old, Right upper quadrant pain after rich diet 2 days, nausea. physical examination: tenderness in the upper abdomen. Elevated leucocyte, the blood amylase 600U/dl, the urine amylase 300U/dl. The Diagnosis is most like:",
  options: [
    "A. acute cholecystitis",
    "B. cholelithiasis",
    "C. intestinal obstruction",
    "D. acute gastric dilatation",
    "E. Acute severe pancreatitis"
  ],
  answerIndex: 4,
  letter: "E",
  explanation: "<b>Why:</b> Upper abdominal pain after a fatty meal accompanied by significantly elevated blood and urine amylase levels and systemic inflammation confirms acute pancreatitis.<br><b>Why not the others:</b> Options A and B do not cause marked hyperamylasemia, C presents with distension and obstipation without primary hyperamylasemia, and D lacks enzymatic markers.<br><b>Key concept:</b> Enzyme elevation diagnostic criteria in acute pancreatitis.<br><b>High-yield:</b> Hyperamylasemia (>3x normal) triggered by heavy meals or alcohol confirms acute pancreatitis.",
  source: "14 Pancreas.pdf, slide 40",
  confidence: "high",
  flag: ""
},
{
  question: "16. 76-year-old female had back pain after falling at home. X-ray showed 12th thoracic vertebral fractures, which of the following is recommended?",
  options: [
    "A. open spinal internal fixation",
    "B. vertebroplasty/kyphoplasty",
    "C. no treatment is required",
    "D. antibiotic drugs",
    "E. bed rest"
  ],
  answerIndex: 1,
  letter: "B",
  explanation: "<b>Why:</b> Percutaneous vertebroplasty or kyphoplasty is the recommended minimally invasive procedure for symptomatic osteoporotic vertebral compression fractures in elderly patients to relieve pain and restore stability.<br><b>Why not the others:</b> Option A is overly aggressive for isolated low-energy compression fractures, C ignores debilitating pain, D is for infection, and E prolonged bed rest causes rapid bone loss and deconditioning.<br><b>Key concept:</b> Minimally invasive management of osteoporotic compression fractures.<br><b>High-yield:</b> Vertebroplasty/kyphoplasty rapidly stabilizes painful osteoporotic vertebral fractures and permits early mobilization.",
  source: "NOT IN SLIDES",
  confidence: "medium",
  flag: ""
},
{
  question: "17. An 8-year-old boy has swelling and pain in his left knee, which is rapidly aggravated, with severe pain and high fever. Check the left knee joint for obvious redness, swelling, heat and tenderness. The first consideration is:",
  options: [
    "A. Tuberculosis of knee joint",
    "B. Rheumatoid arthritis",
    "C. Rheumatoid knee arthritis",
    "D. Suppurative arthritis",
    "E. Gouty arthritis"
  ],
  answerIndex: 3,
  letter: "D",
  explanation: "<b>Why:</b> Acute onset of high fever, severe joint pain, local erythema, warmth, and marked tenderness in a child strongly indicates acute suppurative (septic/pyogenic) arthritis.<br><b>Why not the others:</b> Option A presents insidiously with chronic low-grade fever, B and C are chronic autoimmune arthritides without acute high fever, and E is extremely rare in pediatric patients.<br><b>Key concept:</b> Clinical presentation of pediatric septic joint infection.<br><b>High-yield:</b> Acute suppurative arthritis is a pediatric orthopedic emergency requiring urgent joint aspiration and antibiotic treatment to prevent cartilage destruction.",
  source: "22 Bone Joint Infections.pdf, slide 25",
  confidence: "high",
  flag: ""
},
{
  question: "18. Male, 48 years old, fell down on a motorcycle and injured his left calf for 10 hours. The examination showed that the middle part of the left leg was highly swollen, hard and had abnormal activities. The skin temperature of the foot was lower than that of the opposite side, and the sensation was obviously decreased. The dorsalis pedis artery could not be touched. X-ray confirmed the fracture of the middle segment of the left tibia and fibula. Which of the following complications may occur?",
  options: [
    "A. Common peroneal nerve injury",
    "B. Infection",
    "C. Osteofascial compartment syndrome",
    "D. Injury of anterior tibial artery",
    "E. Fat embolism"
  ],
  answerIndex: 2,
  letter: "C",
  explanation: "<b>Why:</b> Severe swelling, tense/hard calf compartment, sensory deficit, cold foot, and unpalpable distal pulses following tibia-fibula fracture define Osteofascial Compartment Syndrome (OCS).<br><b>Why not the others:</b> Option A causes isolated foot drop without global leg hardness/vascular compromise, B takes days to develop, D does not account for all compartment signs, and E causes pulmonary/neurologic signs.<br><b>Key concept:</b> Ischemic compartment syndrome in long bone leg fractures.<br><b>Memory trick:</b> 5 Ps of OCS: Pain, Pallor, Paresthesia, Paralysis, Pulselessness.<br><b>High-yield:</b> Tibial shaft fractures are the most common cause of lower extremity compartment syndrome, requiring urgent surgical fasciotomy.",
  source: "16 Orthopedics.pdf, slide 18",
  confidence: "high",
  flag: ""
},
{
  question: "19. Female, 48 years old, the middle finger is stiff for more than 2 months, and it has sound after the activity. What is the possible diagnosis?",
  options: [
    "A. Bursitis",
    "B. Traumatic arthritis",
    "C. Stenosing tenosynovitis",
    "D. Rheumatoid arthritis",
    "E. ganglion"
  ],
  answerIndex: 2,
  letter: "C",
  explanation: "<b>Why:</b> Digital stiffness accompanied by a snapping sound or catching during movement (\"triggering\") is characteristic of stenosing tenosynovitis of the flexor tendon sheath.<br><b>Why not the others:</b> Option A causes localized fluid swelling without tendon snapping, B follows major trauma with joint pain, D presents with polyarticular symmetrical hand involvement, and E presents as a soft cystic mass.<br><b>Key concept:</b> Pathophysiology of stenosing flexor tenosynovitis (trigger finger).<br><b>High-yield:</b> Stenosing tenosynovitis involves nodular thickening of the flexor tendon sliding through the A1 pulley.",
  source: "NOT IN SLIDES",
  confidence: "high",
  flag: ""
},
{
  question: "20. Male, 28 years old. Pain in the right hip, with low afternoon fever, night sweats, lack of appetite and weight loss for 1 year. Physical examination: The right hip joint showed flexion deformity, no obvious swelling in appearance, limited flexion and extension activities, Thomas sign (+). ESR 56mm/h. X-ray examination showed that the right hip joint space was narrowed, there was worm-like bone destruction on the articular surface, and there was a 2.5cm sized cavity in the right acetabulum, with dead bone formation. Four weeks after admission, the patient's spirit and appetite improved, with ESR of 20mm/h. What is the most possible diagnosis?",
  options: [
    "A. Hip tuberculosis",
    "B. Osteoarthritis of the hip",
    "C. Femoral head necrosis",
    "D. Hip rheumatoid arthritis",
    "E. Fracture of neck of femur"
  ],
  answerIndex: 0,
  letter: "A",
  explanation: "<b>Why:</b> Chronic hip pain, low-grade afternoon fever, night sweats, elevated ESR, positive Thomas sign (flexion deformity), and worm-like bone destruction with sequestration on X-ray confirm hip joint tuberculosis.<br><b>Why not the others:</b> Options B, C, D, and E lack systemic tuberculous constitutional symptoms (fever, night sweats, weight loss) and characteristic worm-like bone destruction.<br><b>Key concept:</b> Clinical and radiological hallmarks of tuberculous arthritis of the hip.<br><b>High-yield:</b> Hip joint tuberculosis classic signs include positive Thomas sign, joint space narrowing, and worm-like articular erosions.",
  source: "22 Bone Joint Infections.pdf, slide 25",
  confidence: "high",
  flag: ""
},
{
  question: "21. A 72-year-old man has lost 40 pounds of weight over a 2- or 3-month period. He gives a history of anorexia for several months, and of vague epigastric discomfort and anemia for the past 3 weeks. Nasogastric lavage revealed a material that looked like coffee grounds. Emergent gastrointestinal endoscopic examination will most likely reveal which of the following?",
  options: [
    "A. Atrophic gastritis",
    "B. Gastric ulcer",
    "C. Duodenal ulcer",
    "D. Gastric carcinoma",
    "E. Whipple's disease"
  ],
  answerIndex: 3,
  letter: "D",
  explanation: "<b>Why:</b> An elderly male presenting with constitutional red-flag symptoms (profound rapid weight loss, anorexia, anemia) and coffee-ground emesis strongly suggests advanced gastric carcinoma.<br><b>Why not the others:</b> Option A causes chronic mucosal atrophy without a solitary bleeding tumor, B and C typically present with classic pain patterns without massive rapid weight loss, and E affects the small bowel with malabsorption.<br><b>Key concept:</b> Clinical features of advanced gastric adenocarcinoma.<br><b>High-yield:</b> Alarm features in dyspeptic patients over 55 (weight loss, anemia, persistent vomiting) necessitate prompt diagnostic upper endoscopy to rule out gastric cancer.",
  source: "06 Disease of Stomach and Duodenum.pdf, slide 11",
  confidence: "high",
  flag: ""
},
{
  question: "22. A 37-year-old man presented to the emergency department with an acute onset of severe upper abdominal pain. He had been having epigastric pain every winter for 20 years, aggravated especially when starving. On examination, he was hypotensive and distressed with a rigid, silent abdomen. A chest X-ray revealed an abnormal gas shadow under the right hemidiaphragm. Surgical treatment includes the following EXCEPT:",
  options: [
    "A. Suturing the lesion in transverse direction",
    "B. Biopsy of the lesion",
    "C. Truncal vagotomy",
    "D. Peritoneal irrigation",
    "E. Omental patch"
  ],
  answerIndex: 1,
  letter: "B",
  explanation: "<b>Why:</b> The patient has a perforated duodenal ulcer (pneumoperitoneum and rigid abdomen); duodenal ulcers are virtually never malignant, so routine intraoperative biopsy is unnecessary.<br><b>Why not the others:</b> Options A, C, D, and E are standard components of operative repair (transverse repair to prevent luminal narrowing, omental patch closure, thorough irrigation, and acid-reducing vagotomy).<br><b>Key concept:</b> Surgical management of acute perforated duodenal ulcer.<br><b>High-yield:</b> Biopsy of ulcer margins is essential for perforated gastric ulcers to exclude cancer, but NOT required for duodenal ulcer perforations.",
  source: "06 Disease of Stomach and Duodenum.pdf, slide 9",
  confidence: "high",
  flag: ""
},
{
  question: "23. A 67-year-old male presented with a gastric mass incidentally found on abdominal CT for routine medical examination. Abdominal CT showed a fungating tumor at the gastric cardia and several lymph node enlargement at the left gastric and celiac axis. Gastric endoscopic examination revealed a very suspicious looking ulcer and biopsy specimen showed multiple signet ring cells, mucin secretion, abnormal mitotic figures. Following are possible treatments EXCEPT:",
  options: [
    "A. EMR or ESD",
    "B. Proximal gastrectomy",
    "C. Total gastrectomy",
    "D. Chemotherapy",
    "E. Immunotherapy"
  ],
  answerIndex: 0,
  letter: "A",
  explanation: "<b>Why:</b> Endoscopic mucosal resection (EMR) or submucosal dissection (ESD) is restricted strictly to early gastric cancer confined to mucosa/submucosa without lymph node involvement.<br><b>Why not the others:</b> Options B, C, D, and E are valid surgical, systemic, and biological therapeutic options for advanced gastric cardia adenocarcinoma with regional lymph node involvement.<br><b>Key concept:</b> Contraindications to endoscopic resection in advanced gastric cancer.<br><b>High-yield:</b> Regional lymph node metastasis (N+) or muscularis invasion excludes EMR/ESD, requiring radical gastrectomy with D2 lymphadenectomy.",
  source: "06 Disease of Stomach and Duodenum.pdf, slide 13",
  confidence: "high",
  flag: ""
},
{
  question: "24. Male, 35 years old, upper abdomen was hit by a bicycle handle three weeks ago. In the past 5 days, the upper abdominal pain has been persistent, aggravated after meals, accompanied by nausea and vomiting. Physical examination: Body temperature 38.5°C, obvious distension in the left side of the upper abdomen, palpable borderless painful mass, immobility. The first check should be:",
  options: [
    "A. Abdominal X-ray plain film",
    "B. Upper gastrointestinal barium contrast examination",
    "C. Fibroduodenoscopy",
    "D. Abdominal ultrasound scan",
    "E. Abdominal artery angiography"
  ],
  answerIndex: 3,
  letter: "D",
  explanation: "<b>Why:</b> Delayed presentation of an upper abdominal mass and fever 3 weeks after blunt pancreatic trauma indicates a pancreatic pseudocyst, for which abdominal ultrasound is the preferred initial non-invasive screening tool.<br><b>Why not the others:</b> Options A, B, C, and E are either non-specific, invasive, or incapable of directly evaluating fluid collections in the pancreatic retroperitoneum.<br><b>Key concept:</b> Diagnostic imaging for post-traumatic pancreatic pseudocysts.<br><b>High-yield:</b> Pancreatic pseudocysts develop &gt;4 weeks after acute necrotizing pancreatitis or blunt abdominal trauma as enzyme-rich fluid encapsulated by fibrous tissue.",
  source: "14 Pancreas.pdf, slide 45",
  confidence: "high",
  flag: ""
},
{
  question: "25. A 29-year-old woman complained of abdominal pain and fatigue for 30 minutes after being hit by a car. Physical examination: conjunctival pallor, blood pressure 8/6kPa (60/45mmHg), pulse 120 beats/min, abdominal muscle tension, whole abdominal tenderness, mild rebound pain. A right lower abdominal puncture was performed and drew 0.5ml of noncoagulated blood. The most suitable treatment is:",
  options: [
    "A. Gastrointestinal decompression",
    "B. Active anti-shock",
    "C. Blood transfusion",
    "D. Anti-shock and at the same time rapid laparotomy exploration",
    "E. Injection of broad-spectrum antibiotics"
  ],
  answerIndex: 3,
  letter: "D",
  explanation: "<b>Why:</b> Severe hemorrhagic shock combined with non-coagulated blood on diagnostic peritoneal tap indicates ongoing intraperitoneal organ hemorrhage, requiring immediate anti-shock resuscitation alongside rapid exploratory laparotomy.<br><b>Why not the others:</b> Options A, B, C, and E are insufficient as isolated measures because uncontrolled active bleeding will cause fatal exsanguination without rapid surgical hemostasis.<br><b>Key concept:</b> Management of intra-abdominal hemorrhage with refractory shock.<br><b>High-yield:</b> Non-coagulated blood drawn on abdominal paracentesis confirms active intra-abdominal hemorrhage, dictating immediate operative exploration.",
  source: "04 Abdominal Injury.pdf, slide 43",
  confidence: "high",
  flag: ""
},
{
  caseText: "A 33-year-old lawyer presents to his primary care physician with burning epigastric pain that worsens when he is hungry and is relieved by food. He reports that the pain awakens him at night. Over the past month he has gained 6.8 kg. He has smoked 2 packs of cigarettes per day for the past 10 years. Due to work-related stress, he often gets severe headaches for which he takes up to seven aspirin tablets per day. Aside from epigastric tenderness on palpation, his physical exam is unremarkable. Vital signs include a temperature of 37°C, pulse of 75/min, and blood pressure of 118/74 mmHg.",
  question: "26. What is the most likely diagnosis?",
  options: [
    "A. Gastric cancer",
    "B. Peptic ulcer disease",
    "C. Duodenal ulcer",
    "D. Pancreatitis",
    "E. Cholecystitis"
  ],
  answerIndex: 2,
  letter: "C",
  explanation: "<b>Why:</b> Rhythmic epigastric pain occurring when hungry (empty stomach), relieved by food intake, causing nocturnal awakening, and leading to weight gain is classic for a duodenal ulcer.<br><b>Why not the others:</b> Option A causes weight loss, B is less specific than C, D presents with severe constant radiation to the back, and E presents with postprandial RUQ pain.<br><b>Key concept:</b> Clinical pain rhythm and presentation of duodenal ulcer disease.<br><b>Memory trick:</b> DUodenal ulcer = Pain Decreases with Food (eating causes weight gain).<br><b>High-yield:</b> Duodenal ulcer pain occurs 1.5-3 hours after meals or at night when gastric acid reaches the unbuffered duodenal bulb.",
  source: "06 Disease of Stomach and Duodenum.pdf, slide 6",
  confidence: "high",
  flag: ""
},
{
  caseText: "A 33-year-old lawyer presents to his primary care physician with burning epigastric pain that worsens when he is hungry and is relieved by food. He reports that the pain awakens him at night. Over the past month he has gained 6.8 kg. He has smoked 2 packs of cigarettes per day for the past 10 years. Due to work-related stress, he often gets severe headaches for which he takes up to seven aspirin tablets per day. Aside from epigastric tenderness on palpation, his physical exam is unremarkable. Vital signs include a temperature of 37°C, pulse of 75/min, and blood pressure of 118/74 mmHg.",
  question: "27. What are the complications associated with this condition?",
  options: [
    "A. Bleeding",
    "B. Perforation",
    "C. Gastric outlet syndrome caused by scarring and edema",
    "D. Cancer",
    "E. All of the above"
  ],
  answerIndex: 4,
  letter: "E",
  explanation: "<b>Why:</b> Complications of peptic ulcer disease include acute hemorrhage, peritonitis from free perforation, gastric outlet obstruction due to cicatricial pyloric stenosis, and malignant transformation in peptic ulcer disease overall.<br><b>Why not the others:</b> Options A, B, C, and D are all individual potential complications across the spectrum of peptic ulcer disease.<br><b>Key concept:</b> Major clinical complications of peptic ulcer disease.<br><b>High-yield:</b> The three primary surgical complications of peptic ulcers are bleeding, perforation, and pyloric obstruction.",
  source: "06 Disease of Stomach and Duodenum.pdf, slide 8",
  confidence: "high",
  flag: ""
},
{
  caseText: "A 33-year-old lawyer presents to his primary care physician with burning epigastric pain that worsens when he is hungry and is relieved by food. He reports that the pain awakens him at night. Over the past month he has gained 6.8 kg. He has smoked 2 packs of cigarettes per day for the past 10 years. Due to work-related stress, he often gets severe headaches for which he takes up to seven aspirin tablets per day. Aside from epigastric tenderness on palpation, his physical exam is unremarkable. Vital signs include a temperature of 37°C, pulse of 75/min, and blood pressure of 118/74 mmHg.",
  question: "28. Which is NOT the most appropriate treatment for now?",
  options: [
    "A. Discontinue smoking and use of NSAIDs",
    "B. H. pylori treatment if infected",
    "C. H2 blockers and PPIs",
    "D. Surgery",
    "E. All of the above"
  ],
  answerIndex: 3,
  letter: "D",
  explanation: "<b>Why:</b> Initial management of uncomplicated duodenal ulcer disease relies on medical therapy (PPIs, stopping NSAIDs/smoking, H. pylori eradication); surgery is NOT indicated without major complications or medical failure.<br><b>Why not the others:</b> Options A, B, and C are essential first-line medical interventions for new-onset uncomplicated peptic ulcer disease.<br><b>Key concept:</b> Indications for medical vs. surgical therapy in peptic ulcer disease.<br><b>High-yield:</b> Operative intervention for peptic ulcer disease is reserved for refractory complications (uncontrolled bleeding, perforation, obstruction) or medical treatment failure.",
  source: "06 Disease of Stomach and Duodenum.pdf, slide 7",
  confidence: "high",
  flag: ""
},
{
  caseText: "Male, 54 years old, fell from high altitude for 1 hour, left upper abdominal pain accompanied by mild nausea, palpitation, cold sweat. Physical examination: blood pressure 85/52mmHg, heart rate 120 beats/min, left chest wall skin contusion, left upper abdominal tenderness, rebound pain not obvious, localized abdominal tension, mobility flap.",
  question: "29. What is not correct about the rescue measures?",
  options: [
    "A. Rapid transfusion of blood and fluids to treat shock",
    "B. Aim to perform surgery after the systolic blood pressure rises above 90mmHg",
    "C. Closely observe the evolution of the disease",
    "D. Immediately perform an open exploratory operation",
    "E. Run the necessary lab tests, and have enough whole blood"
  ],
  answerIndex: 1,
  letter: "B",
  explanation: "<b>Why:</b> In active internal hemorrhage causing shock, surgery should not be delayed waiting for SBP to exceed 90 mmHg; rapid resuscitation and emergency surgery must be performed simultaneously.<br><b>Why not the others:</b> Options A, C, D, and E are all appropriate initial resuscitation, monitoring, diagnostic, and operative preparations for splenic rupture in shock.<br><b>Key concept:</b> Simultaneous resuscitation and emergency operative hemostasis in hemorrhagic shock.<br><b>High-yield:</b> Never delay emergency laparotomy for active intra-abdominal bleeding just to reach a target blood pressure.",
  source: "04 Abdominal Injury.pdf, slide 36",
  confidence: "high",
  flag: ""
},
{
  caseText: "Male, 54 years old, fell from high altitude for 1 hour, left upper abdominal pain accompanied by mild nausea, palpitation, cold sweat. Physical examination: blood pressure 85/52mmHg, heart rate 120 beats/min, left chest wall skin contusion, left upper abdominal tenderness, rebound pain not obvious, localized abdominal tension, mobility flap.",
  question: "30. For a definitive diagnosis, which further examination is wrong?",
  options: [
    "A. Upper gastrointestinal barium contrast examination",
    "B. Abdominal X-ray plain film",
    "C. Abdominal computed tomography",
    "D. Abdominal ultrasound scan",
    "E. Abdominal paracentesis"
  ],
  answerIndex: 0,
  letter: "A",
  explanation: "<b>Why:</b> Barium contrast studies are strictly contraindicated in acute abdominal trauma because barium causes severe chemical peritonitis if perforation is present and wastes critical resuscitation time.<br><b>Why not the others:</b> Options B, C, D, and E are all standard, safe diagnostic tools used in abdominal trauma evaluation.<br><b>Key concept:</b> Contraindication to oral barium contrast in acute abdominal trauma.<br><b>High-yield:</b> Barium contrast swallow is never used in acute trauma; FAST ultrasound and abdominal CT are preferred.",
  source: "04 Abdominal Injury.pdf, slide 18",
  confidence: "high",
  flag: ""
},
{
  caseText: "Male, 54 years old, fell from high altitude for 1 hour, left upper abdominal pain accompanied by mild nausea, palpitation, cold sweat. Physical examination: blood pressure 85/52mmHg, heart rate 120 beats/min, left chest wall skin contusion, left upper abdominal tenderness, rebound pain not obvious, localized abdominal tension, mobility flap.",
  question: "31. If the patient is suspected of ruptured spleen, the treatment principle is:",
  options: [
    "A. Priority conservative treatment",
    "B. Must protect the spleen integrity of the patient",
    "C. Life first, spleen second",
    "D. Regardless of the severity of the disease, direct open surgery treatment",
    "E. Mild spleen injury does not require the patient to be immobilized"
  ],
  answerIndex: 2,
  letter: "C",
  explanation: "<b>Why:</b> The fundamental surgical rule in splenic trauma management is \"life first, spleen second\" to prioritize patient survival over organ preservation.<br><b>Why not the others:</b> Option A ignores hemodynamic instability, B risks patient mortality for organ salvage, D ignores non-operative management for stable minor tears, and E neglects mandatory bed rest.<br><b>Key concept:</b> Primary principle of splenic trauma management.<br><b>Memory trick:</b> Spleen trauma rule: Life first, spleen second.<br><b>High-yield:</b> Splenic preservation is attempted only when hemodynamically stable; unstable hemorrhage demands splenectomy.",
  source: "04 Abdominal Injury.pdf, slide 36",
  confidence: "high",
  flag: ""
},
{
  caseText: "26-year-old male can't move his left shoulder and felt pain when playing basketball. Physical examination: the left shoulder is deformed square and can't move.",
  question: "32. The most likely diagnosis is:",
  options: [
    "A. Neck soft tissue injury",
    "B. Cervical fracture",
    "C. Clavicular fracture",
    "D. Dislocation of left shoulder joint",
    "E. Syringomyelia"
  ],
  answerIndex: 3,
  letter: "D",
  explanation: "<b>Why:</b> Post-traumatic inability to move the shoulder accompanied by a characteristic \"square shoulder\" deformity indicates anterior shoulder joint dislocation.<br><b>Why not the others:</b> Options A, B, C, and E do not cause the pathognomonic square shoulder deformity or acute shoulder joint emptiness.<br><b>Key concept:</b> Clinical signs of anterior glenohumeral dislocation.<br><b>Memory trick:</b> Square shoulder + Dugas sign = Shoulder dislocation.<br><b>High-yield:</b> Anterior dislocation of the shoulder is the most common joint dislocation in the body.",
  source: "26 PPT (Arthrosis Damnification and Dislocation).pdf, slide 15",
  confidence: "high",
  flag: ""
},
{
  caseText: "26-year-old male can't move his left shoulder and felt pain when playing basketball. Physical examination: the left shoulder is deformed square and can't move.",
  question: "33. The next check is:",
  options: [
    "A. X-ray",
    "B. Doppler ultrasound",
    "C. Bone mineral density",
    "D. Radionuclide scanning",
    "E. None"
  ],
  answerIndex: 0,
  letter: "A",
  explanation: "<b>Why:</b> Standard anteroposterior shoulder X-ray is the essential next imaging step to confirm dislocation direction and rule out associated fractures.<br><b>Why not the others:</b> Options B, C, D, and E are inappropriate, non-diagnostic, or unnecessary for acute joint dislocation.<br><b>Key concept:</b> Radiographic confirmation of shoulder dislocation.<br><b>High-yield:</b> Pre-reduction X-rays confirm dislocation and rule out associated Greater Tuberosity fractures.",
  source: "26 PPT (Arthrosis Damnification and Dislocation).pdf, slide 17",
  confidence: "high",
  flag: ""
},
{
  caseText: "26-year-old male can't move his left shoulder and felt pain when playing basketball. Physical examination: the left shoulder is deformed square and can't move.",
  question: "34. If the patient is diagnosed as above, what is the best treatment at present?",
  options: [
    "A. Stay in bed",
    "B. Application of antibiotics",
    "C. Massage, acupuncture, etc",
    "D. Vitamin treatment",
    "E. Manual reduction"
  ],
  answerIndex: 4,
  letter: "E",
  explanation: "<b>Why:</b> Acute uncomplicated shoulder dislocation is treated immediately with closed manual reduction followed by sling immobilization.<br><b>Why not the others:</b> Options A, B, C, and D do not realign the dislocated glenohumeral joint.<br><b>Key concept:</b> Closed reduction of acute traumatic joint dislocations.<br><b>High-yield:</b> Early closed manual reduction minimizes capsular stretch and neurovascular compromise in joint dislocations.",
  source: "26 PPT (Arthrosis Damnification and Dislocation).pdf, slide 18",
  confidence: "high",
  flag: ""
},
{
  caseText: "A 4-year-old child developed fever in 3 days, with a temperature of 39.5°C and chills. He complained of pain in the distal part of the right femur. He refused to take active activities and any examination. He only took a small amount of food every day after the onset of the disease. At present, the skin of the distal femur is red, fever, swelling and pain are gradually obvious. The floating patella test of knee joint is suspected to be positive. The white blood cell count is 20.5 x 109/L. X-ray shows no obvious abnormality.",
  question: "35. The child is most likely to have:",
  options: [
    "A. Acute osteomyelitis",
    "B. Acute suppurative arthritis",
    "C. Tuberculosis of knee joint",
    "D. Rheumatoid arthritis",
    "E. Osteosarcoma"
  ],
  answerIndex: 0,
  letter: "A",
  explanation: "<b>Why:</b> Acute high fever, severe pain in the distal femoral metaphysis, marked leukocytosis, and normal early X-ray are classic for acute hematogenous osteomyelitis.<br><b>Why not the others:</b> Option B primarily centers on maximal intra-articular joint line tenderness, C and D are chronic conditions, and E lacks acute high fever with leukocytosis.<br><b>Key concept:</b> Pediatric acute hematogenous osteomyelitis presentation.<br><b>High-yield:</b> Plain radiographs remain normal during the first 10-14 days of acute hematogenous osteomyelitis.",
  source: "22 Bone Joint Infections.pdf, slide 18",
  confidence: "high",
  flag: ""
},
{
  caseText: "A 4-year-old child developed fever in 3 days, with a temperature of 39.5°C and chills. He complained of pain in the distal part of the right femur. He refused to take active activities and any examination. He only took a small amount of food every day after the onset of the disease. At present, the skin of the distal femur is red, fever, swelling and pain are gradually obvious. The floating patella test of knee joint is suspected to be positive. The white blood cell count is 20.5 x 109/L. X-ray shows no obvious abnormality.",
  question: "36. Which of the following is the most useful procedure for diagnosis?",
  options: [
    "A. X-Ray",
    "B. CT",
    "C. MRI",
    "D. Aspiration of the affected area",
    "E. Bone scan"
  ],
  answerIndex: 3,
  letter: "D",
  explanation: "<b>Why:</b> Deep subperiosteal needle aspiration of the point of maximum tenderness is the definitive early diagnostic procedure to obtain pus for Gram stain and culture.<br><b>Why not the others:</b> Option A is normal early on, B is less sensitive than MRI, C and E show marrow edema but aspiration uniquely yields microbiological confirmation.<br><b>Key concept:</b> Diagnostic puncture and aspiration in acute osteomyelitis.<br><b>High-yield:</b> Subperiosteal bone aspiration provides rapid etiologic diagnosis before X-ray changes appear.",
  source: "22 Bone Joint Infections.pdf, slide 22",
  confidence: "high",
  flag: ""
},
{
  caseText: "Male, 48 years old, Right upper quadrant pain for 2 months, HBsAg+, 5cm x 4cm mass was found in the left lobe of the liver by Ultrasound.",
  question: "37. The Diagnosis is most like:",
  options: [
    "A. Liver cancer",
    "B. Liver cirrhosis",
    "C. Hepatic echinococcosis",
    "D. Hepatic hemangioma",
    "E. Bacterial liver abscess"
  ],
  answerIndex: 0,
  letter: "A",
  explanation: "<b>Why:</b> Chronic Hepatitis B infection (HBsAg+) combined with RUQ pain and a solid 5cm hepatic mass strongly indicates hepatocellular carcinoma (liver cancer).<br><b>Why not the others:</b> Option B presents with diffuse architectural changes without a solitary large tumor, C shows cystic lesions, D is a benign vascular lesion, and E presents with acute high fever.<br><b>Key concept:</b> Etiology and presentation of primary hepatocellular carcinoma.<br><b>High-yield:</b> Chronic Hepatitis B infection is the leading cause of hepatocellular carcinoma in endemic areas.",
  source: "11 Liver Disease 2.pdf, slide 12",
  confidence: "high",
  flag: ""
},
{
  caseText: "Male, 48 years old, Right upper quadrant pain for 2 months, HBsAg+, 5cm x 4cm mass was found in the left lobe of the liver by Ultrasound.",
  question: "38. The most preferred laboratory test:",
  options: [
    "A. AFP",
    "B. HBV marker",
    "C. Blood culture",
    "D. Hydatid fluid skin test",
    "E. Liver function test"
  ],
  answerIndex: 0,
  letter: "A",
  explanation: "<b>Why:</b> Serum alpha-fetoprotein (AFP) is the preferred tumor marker for screening and diagnosing hepatocellular carcinoma.<br><b>Why not the others:</b> Option B confirms viral hepatitis etiology but not malignant transformation, C is for bacteremia, D is for hydatid disease, and E assesses hepatic function rather than tumor presence.<br><b>Key concept:</b> Diagnostic utility of serum AFP in liver cancer.<br><b>High-yield:</b> Serum AFP >400 ng/mL in a patient with a hepatic mass confirms hepatocellular carcinoma.",
  source: "11 Liver Disease 2.pdf, slide 15",
  confidence: "high",
  flag: ""
},
{
  caseText: "Male, 48 years old, Right upper quadrant pain for 2 months, HBsAg+, 5cm x 4cm mass was found in the left lobe of the liver by Ultrasound.",
  question: "39. The diagnostic test is:",
  options: [
    "A. X-ray test",
    "B. Ultrasound",
    "C. CT",
    "D. Liver biopsy",
    "E. MRI"
  ],
  answerIndex: 2,
  letter: "C",
  explanation: "<b>Why:</b> Contrast-enhanced dynamic CT scan is the principal non-invasive diagnostic imaging modality for hepatocellular carcinoma, demonstrating classic arterial enhancement with venous wash-out.<br><b>Why not the others:</b> Option A cannot image liver parenchyma, B is for initial screening, D carries bleeding/tumor seeding risks, and E is secondary to CT.<br><b>Key concept:</b> Contrast CT imaging of hepatocellular carcinoma.<br><b>High-yield:</b> Dynamic triphasic CT showing early arterial enhancement and portal venous wash-out is pathognomonic for HCC.",
  source: "11 Liver Disease 2.pdf, slide 18",
  confidence: "high",
  flag: ""
},
{
  caseText: "Male, 48 years old, Right upper quadrant pain for 2 months, HBsAg+, 5cm x 4cm mass was found in the left lobe of the liver by Ultrasound.",
  question: "40. Normal liver function, the preferred treatment is:",
  options: [
    "A. Resection",
    "B. TACE",
    "C. Radiotherapy",
    "D. Chemotherapy",
    "E. Radiofrequency ablation"
  ],
  answerIndex: 0,
  letter: "A",
  explanation: "<b>Why:</b> For a solitary 5cm liver tumor with preserved liver function, surgical hepatic resection is the first-line curative treatment of choice.<br><b>Why not the others:</b> Option B is for unresectable intermediate stage, C and D have limited efficacy, and E is preferred for smaller lesions (≤3 cm).<br><b>Key concept:</b> Surgical indications for hepatocellular carcinoma.<br><b>High-yield:</b> Partial hepatectomy provides the highest 5-year survival rate for single resectable HCC in non-cirrhotic liver.",
  source: "11 Liver Disease 2.pdf, slide 22",
  confidence: "high",
  flag: ""
}
]