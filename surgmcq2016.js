// This file only contains your data. No HTML or CSS.
const myQuestionBank = [
  {
    question: "1. Charcot's triad sign is ( )",
    options: [
      "A. biliary colic, intermittent chills and fever, jaundice",
      "B. biliary colic, shock, jaundice",
      "C. intermittent chills, fever, jaundice",
      "D. intermittent chills, jaundice, shock",
      "E. biliary colic, shock, intermittent chills",
    ],
    answerIndex: 0,
    letter: "A",
    explanation:
      "<b>Why:</b> Charcot's triad consists of right upper quadrant biliary colic, intermittent high fever with chills, and jaundice, indicating acute cholangitis.<br><b>Why not the others:</b> Option B replaces fever with shock (part of Reynolds pentad), C lacks biliary colic, and D and E list incomplete or incorrect combinations.<br><b>Key concept:</b> Charcot's triad in extrahepatic bile duct obstruction and cholangitis.<br><b>Memory trick:</b> Charcot's Triad = Pain + Fever/Chills + Jaundice.<br><b>High-yield:</b> Charcot's triad is pathognomonic for acute suppurative cholangitis secondary to choledocholithiasis.",
    source: "13 Biliary Tract.pdf, slide 9",
    confidence: "high",
    flag: "",
  },
  {
    question: "2. Score of Child Pugh grade B is ( )",
    options: [
      "A. 1-5 points",
      "B. 5-6 points",
      "C. 7-9 points",
      "D. 10-15 points",
      "E. 8-10 points",
    ],
    answerIndex: 2,
    letter: "C",
    explanation:
      "<b>Why:</b> According to the Child-Pugh scoring system for hepatic functional reserve, Class A is 5-6 points, Class B is 7-9 points, and Class C is 10-15 points.<br><b>Why not the others:</b> Option A is invalid (minimum score is 5), B corresponds to Child-Pugh Class A, D corresponds to Class C, and E is an incorrect score range.<br><b>Key concept:</b> Child-Pugh scoring classification for cirrhosis and liver failure.<br><b>Memory trick:</b> Child-Pugh: A = 5-6, B = 7-9, C = 10-15.<br><b>High-yield:</b> Child-Pugh Class B (7-9 points) indicates moderate hepatic functional impairment with an operative mortality of 10-15%.",
    source: "12 Portal Hypertension.pdf, slide 15",
    confidence: "high",
    flag: "",
  },
  {
    question:
      "3. The lateral stress test of knee joint is mainly used for examination ( )",
    options: [
      "A. Injury of medial collateral ligament",
      "B. Anterior cruciate ligament injury",
      "C. Posterior cruciate ligament injury",
      "D. Injury of lateral collateral ligament",
      "E. Injury of medial and lateral collateral ligaments",
    ],
    answerIndex: 4,
    letter: "E",
    explanation:
      "<b>Why:</b> The lateral stress test (valgus/varus stress test) assesses the mechanical stability and integrity of both the medial collateral ligament (valgus) and lateral collateral ligament (varus).<br><b>Why not the others:</b> Options A and D specify only one ligament rather than both collateral ligaments evaluated by lateral stress testing, B uses the Drawer/Lachman test, and C uses the posterior drawer test.<br><b>Key concept:</b> Physical examination of knee collateral ligament injuries.<br><b>High-yield:</b> Valgus stress evaluates the medial collateral ligament, while varus stress evaluates the lateral collateral ligament.",
    source: "26 PPT (Arthrosis Damnification and Dislocation).pdf, slide 23",
    confidence: "high",
    flag: "",
  },
  {
    question:
      "4. Which tissue does not be involved in the pathogenesis osteomyelitis? ( )",
    options: [
      "A. Bone",
      "B. Bone marrow",
      "C. Periosteum",
      "D. Surrounding soft tissue",
      "E. Vascular tissue",
    ],
    answerIndex: 4,
    letter: "E",
    explanation:
      "<b>Why:</b> Osteomyelitis is formally defined as an infectious inflammation involving bone, bone marrow, periosteum, and surrounding soft tissues; primary vascular tissue is not included in its basic tissue definition.<br><b>Why not the others:</b> Options A, B, C, and D are all explicitly listed as the primary structural components involved in osteomyelitis pathogenesis.<br><b>Key concept:</b> Pathological definition and tissue extent of osteomyelitis.<br><b>High-yield:</b> Acute osteomyelitis spreads sequentially from bone marrow to cortical bone, subperiosteal space, and surrounding soft tissues.",
    source: "22 Bone Joint Infections.pdf, slide 2",
    confidence: "high",
    flag: "",
  },
  {
    question:
      "5. What's Indications for vertebroplasty/kyphoplasty for vertebral fracture? ( )",
    options: [
      "A. Osteoporosis new fracture in aged patients",
      "B. Violence fracture",
      "C. Pain on percussion",
      "D. Middle column compromise fracture",
      "E. Fracture in Thoracic 4 and above",
    ],
    answerIndex: 0,
    letter: "A",
    explanation:
      "<b>Why:</b> Percutaneous vertebroplasty and balloon kyphoplasty are indicated for acute or painful osteoporotic vertebral compression fractures in elderly patients to restore stability and relieve pain.<br><b>Why not the others:</b> Option B high-energy burst fractures require open stabilization, C is a non-specific physical exam sign, D middle column compromise causes spinal canal occlusion contraindicating cement augmentation, and E upper thoracic fractures carry high neurological risks.<br><b>Key concept:</b> Indications for cement augmentation in vertebral compression fractures.<br><b>High-yield:</b> New osteoporotic vertebral compression fractures in elderly patients are the primary indication for vertebroplasty/kyphoplasty.",
    source: "25 Spine Fracture.pdf, slide 10",
    confidence: "high",
    flag: "",
  },
  {
    question:
      "6. Which of the following statements is wrong about bone tuberculosis? ( )",
    options: [
      "A. It occurs in children and adolescents",
      "B. It's mostly from blood",
      "C. It can form tuberculous abscess",
      "D. Most of the lesions were necrotic",
      "E. The most common site is the epiphysis of the long bone",
    ],
    answerIndex: 4,
    letter: "E",
    explanation:
      "<b>Why:</b> The spine (vertebral column, Pott's disease) is the most common anatomical site of bone tuberculosis (>50%), NOT the epiphysis of long bones.<br><b>Why not the others:</b> Options A, B, C, and D are all true statements (prevalent in youth, hematogenous spread from lungs, forms cold abscesses, causes caseous necrosis).<br><b>Key concept:</b> Epidemiology and anatomical distribution of skeletal tuberculosis.<br><b>High-yield:</b> The spine is the single most common site of skeletal tuberculosis, followed by the hip and knee joints.",
    source: "22 Bone Joint Infections.pdf, slide 35",
    confidence: "high",
    flag: "",
  },
  {
    question: "7. What is not degenerative lumbar vertebral disease? ( )",
    options: [
      "A. Degenerative intervertebral disc herniation",
      "B. Degenerative lumbar spinal canal stenosis",
      "C. Degenerative spondylolisthesis",
      "D. Degenerative scoliosis",
      "E. Degenerative arthrosis",
    ],
    answerIndex: 0,
    letter: "A",
    explanation:
      "<b>Why:</b> Lumbar disc herniation is primarily an acute or subacute structural mechanical displacement of nucleus pulposus tissue through an annular tear, distinct from chronic degenerative lumbar spinal disorders.<br><b>Why not the others:</b> Options B, C, D, and E represent classic chronic degenerative lumbar spine conditions resulting from long-term wear, facet joint hypertrophy, and ligamentous laxity.<br><b>Key concept:</b> Classification of degenerative lumbar spinal pathologies.<br><b>High-yield:</b> Lumbar spinal stenosis, degenerative spondylolisthesis, and degenerative scoliosis form the triad of chronic degenerative lumbar spine disease.",
    source: "19 Lumbar Disc Herniation and Radiculopathy.pdf, slide 5",
    confidence: "medium",
    flag: "",
  },
  {
    question:
      "8. Abdominal pain in the early stage of acute appendicitis is mostly located in the upper abdomen and around the umbilical cord, because ( )",
    options: [
      "A. Dysfunction of internal organs",
      "B. Peritonitis irritation",
      "C. Visceral nerve reflex",
      "D. Gastrointestinal reflex spasm",
      "E. Acute gastroenteritis",
    ],
    answerIndex: 2,
    letter: "C",
    explanation:
      "<b>Why:</b> Early appendiceal lumen obstruction causes visceral swelling that stimulates sympathetic visceral pain fibers (T10 level), resulting in poorly localized periumbilical pain via visceral nerve reflex.<br><b>Why not the others:</b> Option A is vague, B occurs later when parietal peritoneum is inflamed (causing somatic RLQ pain), D describes secondary motor responses, and E is an unrelated clinical diagnosis.<br><b>Key concept:</b> Pathophysiology of visceral vs. somatic pain in acute appendicitis.<br><b>Memory trick:</b> Early periumbilical pain = Visceral nerve reflex (T10); Late RLQ pain = Somatic parietal peritonitis.<br><b>High-yield:</b> Classic appendicitis pain begins as diffuse periumbilical visceral pain and migrates to the RLQ as somatic peritonitis develops.",
    source: "08 Appendicitis.pdf, slide 4",
    confidence: "high",
    flag: "",
  },
  {
    question:
      "9. Main basis of diagnoses of indirect inguinal hernia during operation is ( )",
    options: [
      "A. the hernia ring is outside the inferior epigastric artery.",
      "B. the hernia sac is in the inguinal canal.",
      "C. the hernia sac is below the pubic tubercle.",
      "D. the hernia ring is inside the inferior epigastric artery.",
      "E. the hernia ring is not in the Hesselbach triangle.",
    ],
    answerIndex: 0,
    letter: "A",
    explanation:
      "<b>Why:</b> During surgery, an indirect inguinal hernia is defined by its hernia ring (deep ring) positioned lateral (outside) to the inferior epigastric artery.<br><b>Why not the others:</b> Option D describes a direct hernia (medial to artery), B and E are non-specific findings, and C describes a femoral hernia (below inguinal ligament).<br><b>Key concept:</b> Surgical anatomical landmarks distinguishing direct from indirect inguinal hernias.<br><b>Memory trick:</b> MDs don't LIe: Medial = Direct, Lateral = Indirect.<br><b>High-yield:</b> The inferior epigastric artery is the primary intraoperative landmark: indirect is lateral, direct is medial.",
    source: "03 Hernia.pdf, slide 3",
    confidence: "high",
    flag: "",
  },
  {
    question:
      "10. The most effective treatment of acute suppurative peritonitis ( )",
    options: [
      "A. No diet",
      "B. Anti-shock position",
      "C. Abdominal puncture",
      "D. antibiotic",
      "E. Emergency surgery",
    ],
    answerIndex: 4,
    letter: "E",
    explanation:
      "<b>Why:</b> Emergency surgery to remove or repair the underlying intra-abdominal infectious source (e.g. perforated viscus) and irrigate the cavity is the definitive and most effective cure for acute suppurative peritonitis.<br><b>Why not the others:</b> Options A, B, C, and D are supportive adjunctive or diagnostic measures that cannot eliminate the primary source of peritoneal contamination.<br><b>Key concept:</b> Definitive operative management of acute secondary peritonitis.<br><b>High-yield:</b> Surgical control of the septic source and peritoneal lavage form the cornerstone of curing acute suppurative peritonitis.",
    source: "05 Acute Suppurative Peritonitis.pdf, slide 22",
    confidence: "high",
    flag: "",
  },
  {
    question:
      "11. Which of the following definitions is true for secondary prevention of cancer: ( )",
    options: [
      "A. identification and elimination of risk factors and causes, improve cancer prevention ability, nip in the bud.",
      "B. identify carcinogens in the environment, vaccinations, chemoprevention, lifestyle changes, and dietary nutrition.",
      "C. early detection, early diagnosis, early treatment, prevention at the beginning.",
      "D. study the reasonable treatment plan, carry on the rehabilitation instruction, strengthen the exercise, the reasonable diet, the pain relief.",
      "E. improve the treatment rate, improve survival rate and quality of life, rehabilitation, pain relief.",
    ],
    answerIndex: 2,
    letter: "C",
    explanation:
      '<b>Why:</b> Secondary prevention of cancer focuses on early detection, early diagnosis, and early treatment (the "three earlies") to intercept malignancy at its inception.<br><b>Why not the others:</b> Options A and B define primary prevention (etiologic risk factor reduction), while D and E describe tertiary prevention (rehabilitation and palliation).<br><b>Key concept:</b> Secondary cancer prevention via the "three earlies" strategy.<br><b>Memory trick:</b> Secondary = 3 Earlies (Early detection, diagnosis, treatment).<br><b>High-yield:</b> Cancer screening programs (e.g. mammography, Pap smear, colonoscopy) exemplify secondary prevention.',
    source: "NOT IN SLIDES",
    confidence: "high",
    flag: "",
  },
  {
    question: "12. Which of the following is true in surgical oncology ( )",
    options: [
      "A. intraoperative use of sharp separation, less blunt separation.",
      "B. try to prolong the interval between the biopsy and the actual operation.",
      "C. use local anesthesia as much as possible.",
      "D. ligation the supply artery, and then ligation the output vein.",
      "E. When exploring the abdominal cavity, the tumor is taken as the center, and the exploration is carried out from center to outside.",
    ],
    answerIndex: 0,
    letter: "A",
    explanation:
      "<b>Why:</b> Surgical oncology principles mandate sharp dissection over blunt separation to avoid squeezing tumor tissue and causing iatrogenic mechanical dissemination of malignant cells.<br><b>Why not the others:</b> Option B delays definitive care, C risks local needle tract seeding, D is backwards (output vein must be ligated first), and E violates non-touch exploration.<br><b>Key concept:</b> Surgical oncology no-touch techniques and sharp dissection principles.<br><b>High-yield:</b> Outflow vein ligation before tumor manipulation prevents hematogenous dissemination during surgical resection.",
    source: "NOT IN SLIDES",
    confidence: "high",
    flag: "",
  },
  {
    question: "13. The purpose of perioperative chemotherapy is ( )",
    options: [
      "A. reduce the size of tumor",
      "B. reduce the chances of transfer",
      "C. detection the drug sensitivity",
      "D. reduce the chance of recurrence",
      "E. above all are correct",
    ],
    answerIndex: 4,
    letter: "E",
    explanation:
      "<b>Why:</b> Perioperative chemotherapy shrinks primary tumors, eradicates occult micrometastases (reducing transfer and recurrence), and provides in vivo assessment of tumor drug sensitivity.<br><b>Why not the others:</b> Options A, B, C, and D are all individual valid clinical objectives of perioperative chemotherapeutic regimens, making E correct.<br><b>Key concept:</b> Multimodal goals of perioperative systemic chemotherapy.<br><b>High-yield:</b> Neoadjuvant chemotherapy downstages tumors to improve resectability and tests systemic drug responsiveness.",
    source: "NOT IN SLIDES",
    confidence: "high",
    flag: "",
  },
  {
    question:
      "14. Male, 40 years old, hematemesis 1000ml, in stable condition after treatment, the bleeding stopped. To determine the cause of bleeding, which is the preferred method?",
    options: [
      "A. Selective celiac angiography",
      "B. B-ultrasound",
      "C. Gastroscopy",
      "D. Liver function tests.",
      "E. Barium meal examination",
    ],
    answerIndex: 2,
    letter: "C",
    explanation:
      "<b>Why:</b> Gastroscopy (upper GI endoscopy) is the preferred gold-standard diagnostic modality to identify the precise etiology and site of upper gastrointestinal bleeding once hemodynamically stabilized.<br><b>Why not the others:</b> Option A is for active hemorrhage without endoscopic localization, B and D evaluate liver parenchyma/function, and E is contraindicated in acute bleeding.<br><b>Key concept:</b> Endoscopic evaluation of upper gastrointestinal hemorrhage.<br><b>High-yield:</b> Upper GI endoscopy performed within 24 hours of stabilization identifies the cause of bleeding in &gt;90% of patients.",
    source: "15 Bleeding.pdf, slide 74",
    confidence: "high",
    flag: "",
  },
  {
    question:
      "15. 55-year-old man who is extremely obese reports weakness, sweating, tachycardia, confusion, and headache whenever he fasts for more than a few hours. He has prompt relief of symptoms when he eats. These symptoms are most suggestive of which of the following disorders?",
    options: [
      "A. Diabetes mellitus",
      "B. Insulinoma",
      "C. Zollinger-Ellison syndrome",
      "D. Carcinoid syndrome",
      "E. Multiple endocrine neoplasia, type II",
    ],
    answerIndex: 1,
    letter: "B",
    explanation:
      "<b>Why:</b> Adrenergic and neuroglycopenic symptoms during fasting promptly relieved by eating satisfy Whipple's triad, pathognomonic for a functioning beta-cell insulinoma.<br><b>Why not the others:</b> Option A causes hyperglycemia, C causes severe peptic ulceration, D causes flushing/diarrhea, and E involves medullary thyroid carcinoma and pheochromocytoma.<br><b>Key concept:</b> Whipple's triad in functioning pancreatic neuroendocrine tumors.<br><b>Memory trick:</b> Whipple's triad for Insulinoma: Fasting hypoglycemia + Adrenergic/neuroglycopenic symptoms + Food relief.<br><b>High-yield:</b> Insulinomas are the most common functioning pancreatic neuroendocrine tumors, typically benign and cured by enucleation.",
    source: "14 Pancreas.pdf, slide 78",
    confidence: "high",
    flag: "",
  },
  {
    question:
      "16. Male, 58 years old. Right upper quadrant pain, chills and fever, jaundice 2 days. PE: body temperature 40.1°C, blood pressure 79/55 mmHg. Cutaneous and sclera jaundice, right upper quadrant and low processus xiphoideus tenderness, and swelling gallbladder. Lab test: WBC 26 x 10^9/L. Serum direct bilirubin 65 mmol/L. The Diagnosis is most like:",
    options: [
      "A. Acute suppurative cholecystitis",
      "B. Gallbladder perforation",
      "C. Hepatolithiasis complicated by biliary tract infection",
      "D. Acute obstructive suppurative cholangitis",
      "E. Acute severe pancreatitis",
    ],
    answerIndex: 3,
    letter: "D",
    explanation:
      "<b>Why:</b> The presence of Reynolds' pentad (RUQ pain, high fever/chills, jaundice, shock, and severe systemic toxicity) confirms acute obstructive suppurative cholangitis (AOSC).<br><b>Why not the others:</b> Options A, B, and C lack full Reynolds' pentad with septic shock, while E presents without primary direct hyperbilirubinemic biliary obstruction.<br><b>Key concept:</b> Reynolds' pentad in acute obstructive suppurative cholangitis.<br><b>Memory trick:</b> Reynolds' Pentad = Charcot's Triad + Shock + Altered mental status.<br><b>High-yield:</b> AOSC is a surgical emergency requiring immediate fluid resuscitation, IV antibiotics, and urgent biliary decompression (ERCP/PTCD).",
    source: "13 Biliary Tract.pdf, slide 10",
    confidence: "high",
    flag: "",
  },
  {
    question:
      "17. Male, 50 years old, painless jaundice for 2 months, CT scan shows swelling of the gallbladder, diameter of the common bile duct is 1.8cm, a mass could be seen at the head of pancreas. Which of the surgical methods should be chosen?",
    options: [
      "A. Pancreatic head resection",
      "B. Total pancreatectomy",
      "C. Pancreaticoduodenectomy",
      "D. Choledochojejunostomy",
      "E. Total pancreaticoduodenectomy",
    ],
    answerIndex: 2,
    letter: "C",
    explanation:
      "<b>Why:</b> Painless progressive jaundice with Courvoisier sign (dilated common bile duct and enlarged gallbladder) and a head mass indicates pancreatic head adenocarcinoma, requiring pancreaticoduodenectomy (Whipple procedure).<br><b>Why not the others:</b> Option A is an incomplete operation, B is for diffuse pancreatic involvement, D is purely palliative bypass, and E is an unnecessary overextension.<br><b>Key concept:</b> Surgical resection of resectable pancreatic head carcinoma.<br><b>High-yield:</b> Pancreaticoduodenectomy (Whipple procedure) is the definitive curative operation for adenocarcinoma of the pancreatic head.",
    source: "14 Pancreas.pdf, slide 73",
    confidence: "high",
    flag: "",
  },
  {
    question:
      "18. 35-year-old male has hip ache, asymmetry in the length of the lower limbs, and ecchymosis of the perineum after a traffic accident. X-ray shows pelvic fracture. Associated injuries still need to be excluded, including:",
    options: [
      "A. urethral injury",
      "B. pneumothorax",
      "C. spinal cord injury",
      "D. liver rupture",
      "E. mediastinal injury",
    ],
    answerIndex: 0,
    letter: "A",
    explanation:
      "<b>Why:</b> High-energy pelvic fractures with perineal ecchymosis and limb asymmetry carry a high risk of lower urinary tract injury, particularly posterior urethral disruption (10% incidence).<br><b>Why not the others:</b> Options B, C, D, and E are extra-pelvic organ injuries less specifically associated with perineal ecchymosis and pelvic ring disruption.<br><b>Key concept:</b> Associated genitourinary injuries in pelvic ring fractures.<br><b>High-yield:</b> Blood at the meatus or perineal ecchymosis in pelvic fractures mandates retrograde urethrography before urethral catheterization.",
    source: "24 Pelvic Fracture.pdf, slide 7",
    confidence: "high",
    flag: "",
  },
  {
    question:
      "19. A 77-year-old male suffered from right hip pain and limited movement after falling down accidentally. Physical examination on admission found that the right lower limb external rotation was shortened by 2cm and the external rotation reached 70 degrees. The most likely diagnosis was:",
    options: [
      "A. Femoral neck fracture",
      "B. Intertrochanteric fracture",
      "C. Subtrochanteric fracture",
      "D. Fracture of femoral shaft",
      "E. Soft tissue contusion",
    ],
    answerIndex: 1,
    letter: "B",
    explanation:
      "<b>Why:</b> In elderly hip trauma, limb shortening with marked external rotation approaching 70°-90° is characteristic of an extracapsular intertrochanteric fracture.<br><b>Why not the others:</b> Option A is intracapsular, so joint capsule tension limits external rotation to 45°-60°, C and D present with mid-thigh pain/deformity, and E lacks shortening.<br><b>Key concept:</b> Clinical differentiation between intertrochanteric and femoral neck fractures.<br><b>Memory trick:</b> Intertrochanteric = Intense rotation (70°-90°); Femoral neck = Limited rotation (45°-60°).<br><b>High-yield:</b> Extracapsular intertrochanteric fractures allow greater external rotation (up to 90°) than intracapsular femoral neck fractures.",
    source: "18 Lower Limb Fracture.pdf, slide 28",
    confidence: "high",
    flag: "",
  },
  {
    question:
      "20. Female, 50 years old. Three fingers on the radial side of the left hand were hypersensitive, thenar muscle atrophy, thumb opponensplasty weakness, and positive wrist flexion test. According to the patient's symptoms and signs, the most likely diagnosis is:",
    options: [
      "A. Carpal tunnel syndrome",
      "B. Aseptic necrosis of lunate bone",
      "C. Cervical spondylosis, radiculopathy",
      "D. Tenosynovitis of wrist",
      "E. Tuberculosis of carpal bone",
    ],
    answerIndex: 0,
    letter: "A",
    explanation:
      "<b>Why:</b> Sensory changes in the radial 3.5 digits, thenar muscle atrophy, weak thumb opposition, and a positive Phalen test (wrist flexion) confirm median nerve entrapment in the carpal tunnel.<br><b>Why not the others:</b> Option B presents with localized wrist pain without median nerve signs, C affects C6/C7 dermatomes without Phalen sign, D causes tendon sheath tenderness, and E causes chronic bony destruction.<br><b>Key concept:</b> Median nerve compression in carpal tunnel syndrome.<br><b>Memory trick:</b> Phalen test + Thenar atrophy = Carpal tunnel syndrome.<br><b>High-yield:</b> Carpal tunnel syndrome causes paresthesia in the radial 3.5 digits and weakness of thenar muscles (abductor pollicis brevis).",
    source: "17 Upper Limb Fracture.pdf, slide 16",
    confidence: "high",
    flag: "",
  },
  {
    question:
      "21. A 28-year-old man was involved in a car accident. When he came to the hospital, it was 3 hours after injury. He had severe pain in his right upper arm. X-rays showed oblique fracture in the middle of his right humerus. Besides, deformity of dropping wrist was identified during physical examination. ( ) should be taken into consideration.",
    options: [
      "A. Axillary nerve injury",
      "B. Medial plantar nerve injury",
      "C. Radial nerve injury",
      "D. Brachial artery injury",
      "E. Ulnar nerve injury",
    ],
    answerIndex: 2,
    letter: "C",
    explanation:
      "<b>Why:</b> Fractures of the mid-shaft humerus frequently injure the radial nerve running in the radial groove, producing wrist drop (dropping wrist) and loss of finger extension.<br><b>Why not the others:</b> Option A causes deltoid paralysis, B is located in the lower extremity, D causes distal upper limb ischemia, and E causes claw hand deformity.<br><b>Key concept:</b> Radial nerve trauma in mid-shaft humeral fractures.<br><b>Memory trick:</b> Mid-shaft humerus fracture = Wrist drop (Radial nerve).<br><b>High-yield:</b> Radial nerve injury is the most common nerve complication of humeral shaft fractures, manifesting as wrist drop and loss of dorsal first web space sensation.",
    source: "17 Upper Limb Fracture.pdf, slide 8",
    confidence: "high",
    flag: "",
  },
  {
    question:
      "22. Male, 18 years old, student, has back pain for half a year, with low fever, night sweats and mild anemia. What should be checked firstly except?",
    options: ["A. PPD test", "B. X-ray", "C. ESR", "D. MRI", "E. Biopsy"],
    answerIndex: 4,
    letter: "E",
    explanation:
      "<b>Why:</b> In suspected spinal tuberculosis, non-invasive imaging (X-ray, MRI) and laboratory screening (ESR, PPD) are performed first; invasive bone biopsy is NOT a primary initial screening tool.<br><b>Why not the others:</b> Options A, B, C, and D are all essential non-invasive or laboratory first-line diagnostic modalities in the initial workup of Pott's disease.<br><b>Key concept:</b> Initial diagnostic workflow for tuberculous spondylitis.<br><b>High-yield:</b> Erythrocyte sedimentation rate (ESR), plain X-rays, and MRI form the primary initial diagnostic workup for spinal tuberculosis before considering invasive procedures.",
    source: "22 Bone Joint Infections.pdf, slide 38",
    confidence: "high",
    flag: "",
  },
  {
    question:
      '23. Male, 33 years old, 6 hours after subtotal thyroidectomy for "primary hyperthyroidism", feeling difficulty breathing, with blue complexion and red neck dressing. Which of the following complications is more likely?',
    options: [
      "A. Recurrent laryngeal nerve injury",
      "B. Superior laryngeal nerve injury",
      "C. Bleeding from the incision",
      "D. Thyroid crisis",
      "E. Parathyroid injury",
    ],
    answerIndex: 2,
    letter: "C",
    explanation:
      "<b>Why:</b> Acute dyspnea, cyanosis (blue complexion), and red-soaked dressings within 6 hours post-thyroidectomy indicate postoperative incisional hemorrhage compressing the trachea.<br><b>Why not the others:</b> Option A causes hoarseness or asphyxia without incisional bleeding, B causes low voice pitch, D presents with hyperpyrexia and severe tachycardia, and E causes hypocalcemic tetany.<br><b>Key concept:</b> Acute postoperative hemorrhage and tracheal compression following thyroidectomy.<br><b>High-yield:</b> Post-thyroidectomy hematoma compressing the trachea is a life-threatening emergency requiring immediate bedside wound decompression.",
    source: "01 Disease of Neck.pdf, slide 14",
    confidence: "high",
    flag: "",
  },
  {
    question:
      "24. A 23-year-old man had abdominal pain for 4 hours. He had a metastatic right lower abdominal pain. The X-ray of his abdomen shows intestinal obstruction. The most likely diagnosis was:",
    options: [
      "A. acute appendicitis",
      "B. urinary calculi",
      "C. Acute intestinal obstruction",
      "D. acute ileus",
      "E. perforation of hollow organs",
    ],
    answerIndex: 0,
    letter: "A",
    explanation:
      "<b>Why:</b> Migrating (metastatic) right lower quadrant pain is the pathognomonic presentation of acute appendicitis; localized reflex paralytic ileus near the inflamed appendix can show secondary air-fluid levels on X-ray.<br><b>Why not the others:</b> Option B presents with flank colicky pain radiating to the groin, C and D cause generalized obstipation without migrating pain, and E presents with free subdiaphragmatic air.<br><b>Key concept:</b> Clinical pain migration pattern in acute appendicitis.<br><b>Memory trick:</b> Periumbilical to RLQ migrating pain = Acute appendicitis.<br><b>High-yield:</b> Pain migrating from the periumbilical region to McBurney's point is the classic hallmark of acute appendicitis.",
    source: "08 Appendicitis.pdf, slide 4",
    confidence: "high",
    flag: "",
  },
  {
    question:
      '25. Patient, 35-year-old, male, presents with a chief complaint of "sudden upper abdominal pain with nausea and vomit for 3 hours after full meal". The patient had a history of gastric ulcer. Physical examination: abdominal tenderness, rebound pain, especially for upper abdomen, tension of abdominal muscle, abdominal rumbling sound disappeared. Erect abdominal X-Ray examination showed large amounts of subdiaphragmatic free air. The diagnosis is:',
    options: [
      "A. ulcer perforation",
      "B. acute pancreatitis",
      "C. extrauterine pregnancy",
      "D. acute cholecystitis",
      "E. AMI",
    ],
    answerIndex: 0,
    letter: "A",
    explanation:
      "<b>Why:</b> Sudden severe epigastric pain after a meal in a patient with gastric ulcer disease, diffuse peritonitis, and subdiaphragmatic free air on erect radiograph confirms peptic ulcer perforation.<br><b>Why not the others:</b> Option B lacks subdiaphragmatic pneumoperitoneum, C occurs in females with pelvic pain, D presents with localized RUQ pain without free air, and E presents with crushing chest pain.<br><b>Key concept:</b> Clinical and radiological features of perforated peptic ulcer.<br><b>Memory trick:</b> Peptic ulcer history + Peritonitis + Free subdiaphragmatic air = Ulcer perforation.<br><b>High-yield:</b> Pneumoperitoneum under the diaphragm on an upright X-ray is pathognomonic for hollow viscus perforation.",
    source: "06 Disease of Stomach and Duodenum.pdf, slide 9",
    confidence: "high",
    flag: "",
  },
  {
    caseText:
      "Male, 48 years old, Right upper quadrant pain for 2 months, HBsAg+, 5cm x 4cm mass was found in the left lobe of the liver by Ultrasound.",
    question: "26. The Diagnosis is most like:",
    options: [
      "A. Liver cancer",
      "B. Liver cirrhosis",
      "C. Hepatic echinococcosis",
      "D. Hepatic hemangioma",
      "E. Bacterial liver abscess",
    ],
    answerIndex: 0,
    letter: "A",
    explanation:
      "<b>Why:</b> Chronic Hepatitis B infection (HBsAg+) combined with right upper quadrant pain and a solid 5cm liver mass strongly indicates primary liver cancer (hepatocellular carcinoma).<br><b>Why not the others:</b> Option B presents with cirrhosis without a solitary large tumor, C shows cystic lesions, D is a benign vascular lesion, and E presents with acute high fever.<br><b>Key concept:</b> Etiology and presentation of primary hepatocellular carcinoma.<br><b>Memory trick:</b> HBsAg(+) + Solid Liver Mass = Hepatocellular Carcinoma.<br><b>High-yield:</b> Chronic Hepatitis B infection is the leading cause of primary hepatocellular carcinoma in endemic regions.",
    source: "11 Liver Disease 2.pdf, slide 12",
    confidence: "high",
    flag: "",
  },
  {
    caseText:
      "Male, 48 years old, Right upper quadrant pain for 2 months, HBsAg+, 5cm x 4cm mass was found in the left lobe of the liver by Ultrasound.",
    question: "27. The most preferred laboratory test:",
    options: [
      "A. AFP",
      "B. HBV marker",
      "C. Blood culture",
      "D. Hydatid fluid skin test",
      "E. Liver function test",
    ],
    answerIndex: 0,
    letter: "A",
    explanation:
      "<b>Why:</b> Serum alpha-fetoprotein (AFP) is the preferred tumor marker for screening and confirming hepatocellular carcinoma in high-risk patients.<br><b>Why not the others:</b> Option B assesses viral status rather than malignant transformation, C tests for bacteremia, D tests for hydatid disease, and E evaluates hepatic functional reserve.<br><b>Key concept:</b> Diagnostic utility of serum AFP in hepatocellular carcinoma.<br><b>High-yield:</b> Serum AFP >400 µg/L in a chronic hepatitis B patient with a hepatic mass confirms hepatocellular carcinoma.",
    source: "11 Liver Disease 2.pdf, slide 15",
    confidence: "high",
    flag: "",
  },
  {
    caseText:
      "Male, 48 years old, Right upper quadrant pain for 2 months, HBsAg+, 5cm x 4cm mass was found in the left lobe of the liver by Ultrasound.",
    question: "28. The diagnostic test is:",
    options: [
      "A. X-ray test",
      "B. Ultrasound",
      "C. CT",
      "D. Liver biopsy",
      "E. MRI",
    ],
    answerIndex: 2,
    letter: "C",
    explanation:
      "<b>Why:</b> Contrast-enhanced dynamic abdominal CT is the principal non-invasive imaging modality to confirm tumor characteristics (arterial hyperenhancement with portal venous wash-out).<br><b>Why not the others:</b> Option A cannot evaluate liver parenchyma, B is an initial screening tool, D carries bleeding and tumor seeding risks, and E is a secondary imaging modality.<br><b>Key concept:</b> Contrast CT imaging of hepatocellular carcinoma.<br><b>High-yield:</b> Dynamic triphasic CT showing early arterial enhancement and portal venous wash-out is pathognomonic for HCC.",
    source: "11 Liver Disease 2.pdf, slide 18",
    confidence: "high",
    flag: "",
  },
  {
    caseText:
      "Male, 48 years old, Right upper quadrant pain for 2 months, HBsAg+, 5cm x 4cm mass was found in the left lobe of the liver by Ultrasound.",
    question: "29. The preferred treatment is:",
    options: [
      "A. Resection",
      "B. TACE",
      "C. Radiotherapy",
      "D. Chemotherapy",
      "E. Radiofrequency ablation",
    ],
    answerIndex: 0,
    letter: "A",
    explanation:
      "<b>Why:</b> Surgical hepatic resection is the preferred curative treatment for a single resectable 5cm liver mass in a patient with preserved liver function.<br><b>Why not the others:</b> Option B is for unresectable intermediate disease, C and D have limited efficacy in HCC, and E is preferred for smaller lesions (≤3cm).<br><b>Key concept:</b> Surgical indications for resectable hepatocellular carcinoma.<br><b>High-yield:</b> Partial hepatectomy provides the highest 5-year survival rate for single resectable hepatocellular carcinoma in patients with normal liver function.",
    source: "11 Liver Disease 2.pdf, slide 22",
    confidence: "high",
    flag: "",
  },
  {
    caseText:
      "45-year-old male, had left upper limb pain with numbness for 2 weeks. The brachial plexus traction test was positive.",
    question: "30. The most likely diagnosis is:",
    options: [
      "A. lumbar disc herniation",
      "B. Radicular Cervical Spondylosis",
      "C. spinal tuberculosis",
      "D. spinal tumor",
      "E. syringomyelia",
    ],
    answerIndex: 1,
    letter: "B",
    explanation:
      "<b>Why:</b> Upper limb pain and numbness accompanied by a positive brachial plexus traction test (Eaton test) is pathognomonic for radicular cervical spondylosis.<br><b>Why not the others:</b> Option A affects the lower extremity, C presents with low fever and night sweats, D causes constant progressive non-positional pain, and E presents with dissociated sensory loss.<br><b>Key concept:</b> Clinical signs of radicular cervical spondylosis.<br><b>Memory trick:</b> Positive Eaton test + Radiating arm pain = Cervical radiculopathy.<br><b>High-yield:</b> Radicular cervical spondylosis is the most common type of cervical spondylosis, caused by cervical disc herniation or osteophyte entrapment of nerve roots.",
    source: "20 Cervical Myelopathy and Radiculopathy.pdf, slide 12",
    confidence: "high",
    flag: "",
  },
  {
    caseText:
      "45-year-old male, had left upper limb pain with numbness for 2 weeks. The brachial plexus traction test was positive.",
    question: "31. The next step is to check with:",
    options: [
      "A. MRI",
      "B. Doppler ultrasound",
      "C. bone densitometer",
      "D. radionuclide scanning",
      "E. No need",
    ],
    answerIndex: 0,
    letter: "A",
    explanation:
      "<b>Why:</b> Magnetic Resonance Imaging (MRI) is the gold-standard diagnostic imaging modality to visualize intervertebral disc herniation, neural foramen stenosis, and nerve root compression.<br><b>Why not the others:</b> Options B, C, D, and E are non-diagnostic for spinal neural compression.<br><b>Key concept:</b> Diagnostic imaging in cervical radiculopathy.<br><b>High-yield:</b> Cervical spinal MRI clearly delineates soft tissue intervertebral disc herniations and nerve root impingement in radiculopathy.",
    source: "20 Cervical Myelopathy and Radiculopathy.pdf, slide 18",
    confidence: "high",
    flag: "",
  },
  {
    caseText:
      "45-year-old male, had left upper limb pain with numbness for 2 weeks. The brachial plexus traction test was positive.",
    question:
      "32. If the patient is diagnosed as above, the current treatment is:",
    options: [
      "A. surgical treatment",
      "B. combination of antibiotics",
      "C. conservative treatment, such as cervical traction, painkillers, etc",
      "D. Vitamin",
      "E. no treatment",
    ],
    answerIndex: 2,
    letter: "C",
    explanation:
      "<b>Why:</b> Initial management of new-onset radicular cervical spondylosis without progressive myelopathy or severe motor deficit is conservative non-operative therapy (cervical traction, NSAIDs, and neck collar immobilization).<br><b>Why not the others:</b> Option A is reserved for severe motor deficits or failed conservative care, B is for infectious spondylitis, D is non-therapeutic, and E is inappropriate.<br><b>Key concept:</b> First-line conservative management of cervical radiculopathy.<br><b>High-yield:</b> Over 80-90% of patients with radicular cervical spondylosis improve significantly with conservative non-surgical therapy.",
    source: "20 Cervical Myelopathy and Radiculopathy.pdf, slide 22",
    confidence: "high",
    flag: "",
  },
  // QUESTION 33-34 Image
  {
    caseText:
      "Male, 35 years old, a month ago, suddenly had low back pain when carrying heavy objects, which was relieved by the physicotherapeutics for a week. Later, it gradually developed radiation pain in the right lower limb, and the symptoms became worse when tired, coughing or defecating. There was no fever and night sweats. PE: Lasegue sign (+).",
    images: ["images/surgmcq2016_case33-34.png"],
    question: "33. The most likely diagnosis is:",
    options: [
      "A. Ankylosing spondylitis",
      "B. Lumbar fracture",
      "C. Rheumatoid arthritis",
      "D. Lumbar vertebra tuberculosis",
      "E. Lumbar disc herniation",
    ],
    answerIndex: 4,
    letter: "E",
    explanation:
      "<b>Why:</b> Sudden low back pain after heavy lifting, then radicular leg pain that worsens with coughing or defecating (raised pressure) and a positive Lasegue (straight leg raise) sign point to nerve root compression from a herniated disc, which the MRI supports.<br><b>Why not the others:</b> A (ankylosing spondylitis) causes morning stiffness in younger men, not a sudden mechanical onset. B (fracture) needs significant trauma. C (rheumatoid arthritis) mainly affects small joints. D (spinal TB) comes with fever and night sweats, which are absent here.<br><b>Key concept:</b> Lumbar disc herniation: the nucleus pulposus protrudes through the annulus and compresses a nerve root, causing back pain with sciatica.<br><b>Memory trick:</b> Lasegue = Leg raise = Lumbar disc.<br><b>High-yield:</b> L4-5 and L5-S1 are the most common levels (not from slides).",
    source: "NOT IN SLIDES",
    confidence: "high",
    flag: "",
  },
  {
    caseText:
      "Male, 35 years old, a month ago, suddenly had low back pain when carrying heavy objects, which was relieved by the physicotherapeutics for a week. Later, it gradually developed radiation pain in the right lower limb, and the symptoms became worse when tired, coughing or defecating. There was no fever and night sweats. PE: Lasegue sign (+).",
    images: ["images/surgmcq2016_case33-34.png"],
    question: "34. Which is not correct about treatment?",
    options: [
      "A. Rest",
      "B. Nonsteroidal Anti-inflammatory Drugs",
      "C. Surgical treatment",
      "D. Physicotherapy",
      "E. Biopsy",
    ],
    answerIndex: 4,
    letter: "E",
    explanation:
      "<b>Why:</b> A biopsy is a diagnostic procedure, not a treatment. It is only considered when a tumour or infection (for example tuberculosis) is suspected, and nothing here suggests that.<br><b>Why not the others:</b> A (rest), B (NSAIDs) and D (physiotherapy) are standard first-line conservative treatment. C (surgery) is appropriate if conservative treatment fails or neurological deficits worsen.<br><b>Key concept:</b> Disc herniation is managed conservatively first, and surgery is kept for failed treatment or progressive deficits.<br><b>High-yield:</b> Most lumbar disc herniations improve with conservative treatment alone (not from slides).",
    source: "NOT IN SLIDES",
    confidence: "high",
    flag: "",
  },
  {
    caseText:
      "A 50-year-old male has a reducible mass in the right scrotum for 14 years, which could not be reduced for 1 day, accompanying with vomiting and stopping exhaust and defecation. Physical examination: heart rate 108 beats/min, blood pressure 100/60 mmHg, right scrotal swelling with obvious tenderness, abdominal distension, hyperactive bowel sounds. Blood routine: WBC 14 x 109/L.",
    question: "35. This patient is most likely to be diagnosed as:",
    options: [
      "A. acute intestinal obstruction.",
      "B. hydrocele of testis.",
      "C. inguinal hernia with incarceration.",
      "D. spermatic lipoma.",
      "E. acute testicular torsion.",
    ],
    answerIndex: 2,
    letter: "C",
    explanation:
      "<b>Why:</b> A long-standing reducible scrotal mass that suddenly becomes irreducible, tender, and accompanied by mechanical bowel obstruction (vomiting, obstipation, distension) confirms an incarcerated inguinal hernia.<br><b>Why not the others:</b> Option A is a secondary manifestation rather than the primary anatomic diagnosis, B is transilluminable without obstruction, D is painless, and E lacks mechanical bowel obstruction.<br><b>Key concept:</b> Incarcerated groin hernia presenting as mechanical bowel obstruction.<br><b>High-yield:</b> Incarcerated inguinal hernia requires urgent surgical intervention to prevent progression to strangulation and bowel necrosis.",
    source: "03 Hernia.pdf, slide 2",
    confidence: "high",
    flag: "",
  },
  {
    caseText:
      "A 50-year-old male has a reducible mass in the right scrotum for 14 years, which could not be reduced for 1 day, accompanying with vomiting and stopping exhaust and defecation. Physical examination: heart rate 108 beats/min, blood pressure 100/60 mmHg, right scrotal swelling with obvious tenderness, abdominal distension, hyperactive bowel sounds. Blood routine: WBC 14 x 109/L.",
    question: "36. The best treatment for this patient is:",
    options: [
      "A. emergency surgery.",
      "B. anti-inflammation and pain relief.",
      "C. gastrointestinal decompression and elective surgery.",
      "D. exploratory laparotomy.",
      "E. tension-free herniorrhaphy.",
    ],
    answerIndex: 0,
    letter: "A",
    explanation:
      "<b>Why:</b> An acute irreducible incarcerated inguinal hernia presenting with mechanical bowel obstruction, tachycardia, and tenderness requires emergency surgical repair to prevent bowel strangulation.<br><b>Why not the others:</b> Option B delays life-saving care, C is unsafe when manual reduction has failed, D is less targeted than direct groin exploration, and E specifies an elective technique rather than emergency urgency.<br><b>Key concept:</b> Emergency surgical indications for incarcerated groin hernias.<br><b>High-yield:</b> Failed manual reduction of an incarcerated hernia dictates immediate emergency surgical operation.",
    source: "03 Hernia.pdf, slide 2",
    confidence: "high",
    flag: "",
  },
  {
    caseText:
      "A 50-year-old male has a reducible mass in the right scrotum for 14 years, which could not be reduced for 1 day, accompanying with vomiting and stopping exhaust and defecation. Physical examination: heart rate 108 beats/min, blood pressure 100/60 mmHg, right scrotal swelling with obvious tenderness, abdominal distension, hyperactive bowel sounds. Blood routine: WBC 14 x 109/L.",
    question:
      "37. If incarcerated intestinal necrosis is found during the operation, the appropriate surgical method after resection of the necrotic intestine is:",
    options: [
      "A. high ligation of hernia sac and hernia repair.",
      "B. Ferguson herniorrhaphy.",
      "C. Bassini herniorrhaphy.",
      "D. McVay herniorrhaphy.",
      "E. high ligation of hernia sac and enterectomy.",
    ],
    answerIndex: 0,
    letter: "A",
    explanation:
      "<b>Why:</b> When gangrenous intestine is resected during an emergency hernia operation, high ligation of the hernia sac accompanied by primary tissue repair without synthetic mesh is performed to avoid prosthetic infection.<br><b>Why not the others:</b> Options B, C, and D list specific eponym repair methods without specifying mandatory high ligation, and E repeats enterectomy which is already completed.<br><b>Key concept:</b> Surgical management of strangulated hernia with intestinal necrosis.<br><b>High-yield:</b> Prosthetic mesh placement is contraindicated in contaminated fields during gangrenous bowel resection in strangulated hernia repair.",
    source: "03 Hernia.pdf, slide 2",
    confidence: "high",
    flag: "",
  },
  {
    caseText:
      "An art elderly male suffered from abdominal pain for 6 hours, accompanied by nausea and vomiting. The vomit was the content of the stomach. The body temperature was 39°C, the heart rate was 110 times/min, the blood pressure was 140/90 mmHg. The physical examination found Plate-like abdomen. The tenderness was mainly in the left lower abdomen, and the rebound pain was obvious. Blood routine: WBC 22 x 109/L. Abdominal X-ray showed beak sign.",
    question: "38. The possible diagnosis of X-ray is:",
    options: [
      "A. appendicitis",
      "B. gastric perforation",
      "C. volvulus",
      "D. duodenal perforation",
      "E. colon cancer",
    ],
    answerIndex: 2,
    letter: "C",
    explanation:
      "<b>Why:</b> A pathognomonic \"beak sign\" (bird's beak tapering) on abdominal imaging in an elderly male with left lower quadrant pain confirms colonic (sigmoid) volvulus.<br><b>Why not the others:</b> Option A presents with right lower quadrant pain, B and D produce subdiaphragmatic pneumoperitoneum, and E presents with chronic bowel habit changes.<br><b>Key concept:</b> Radiographic \"bird's beak sign\" in sigmoid volvulus.<br><b>Memory trick:</b> Bird's beak sign = Volvulus.<br><b>High-yield:</b> Sigmoid volvulus presents in elderly patients with abdominal pain, distension, and classic bird's beak tapering on contrast radiography.",
    source: "07 Intestinal Obstruction.pdf, slide 12",
    confidence: "high",
    flag: "",
  },
  {
    caseText:
      "An art elderly male suffered from abdominal pain for 6 hours, accompanied by nausea and vomiting. The vomit was the content of the stomach. The body temperature was 39°C, the heart rate was 110 times/min, the blood pressure was 140/90 mmHg. The physical examination found Plate-like abdomen. The tenderness was mainly in the left lower abdomen, and the rebound pain was obvious. Blood routine: WBC 22 x 109/L. Abdominal X-ray showed beak sign.",
    question: "39. Which one is not needed for further inspection?",
    options: [
      "A. abdominal puncture",
      "B. abdominal CT",
      "C. electrocardiogram",
      "D. detection of pulmonary ventilation function",
      "E. liver function, electrolyte",
    ],
    answerIndex: 3,
    letter: "D",
    explanation:
      "<b>Why:</b> Pulmonary ventilation function testing (spirometry) is an elective non-urgent study that is completely inappropriate and unnecessary in an acute surgical abdomen emergency.<br><b>Why not the others:</b> Options A, B, C, and E are critical emergency diagnostic and preoperative evaluations (paracentesis for peritonitis, CT for volvulus/ischemia, ECG for cardiac clearance, and lab electrolytes).<br><b>Key concept:</b> Emergency pre-operative diagnostic priorities.<br><b>High-yield:</b> Elective pulmonary function testing has no role in the acute evaluation of a surgical emergency abdomen.",
    source: "NOT IN SLIDES",
    confidence: "high",
    flag: "",
  },
  {
    caseText:
      "An art elderly male suffered from abdominal pain for 6 hours, accompanied by nausea and vomiting. The vomit was the content of the stomach. The body temperature was 39°C, the heart rate was 110 times/min, the blood pressure was 140/90 mmHg. The physical examination found Plate-like abdomen. The tenderness was mainly in the left lower abdomen, and the rebound pain was obvious. Blood routine: WBC 22 x 109/L. Abdominal X-ray showed beak sign.",
    question: "40. Correct treatment is:",
    options: [
      "A. operation",
      "B. conservative treatment",
      "C. surgical treatment after conservative treatment",
      "D. no treatment required",
      "E. abandonment of treatment",
    ],
    answerIndex: 0,
    letter: "A",
    explanation:
      "<b>Why:</b> High fever (39°C), severe leukocytosis (22 x 10^9/L), and a plate-like rigid abdomen indicate bowel gangrene and peritonitis, mandating immediate emergency surgical operation.<br><b>Why not the others:</b> Options B and C dangerous delay operative treatment when bowel strangulation and peritonitis are present, while D and E are non-therapeutic.<br><b>Key concept:</b> Indications for emergency laparotomy in strangulated bowel obstruction.<br><b>High-yield:</b> Volvulus complicated by severe toxicity, peritonitis, or suspected gangrene requires immediate emergency surgical intervention.",
    source: "07 Intestinal Obstruction.pdf, slide 16",
    confidence: "high",
    flag: "",
  },
];
