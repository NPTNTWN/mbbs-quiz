// This file only contains your data. No HTML or CSS.
const myQuestionBank = [
  {
    question: "1. Which is the ligament from the cervix to the pelvic wall?",
    options: [
      "A. round ligaments",
      "B. broad ligaments",
      "C. uterosacral ligaments",
      "D. uterine cardinal ligaments",
      "E. suspensory ligament"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> The cardinal (transverse cervical) ligament extends laterally from the cervix to the pelvic sidewall, providing uterine support.<br><b>Why not:</b> A: extends from uterine cornu to labia majora. B: peritoneal fold covering uterus and adnexa. C: extends from cervix to sacrum. E: suspends ovaries from pelvic wall.<br><b>Core:</b> Cardinal = cervix to pelvic wall; uterosacral = cervix to sacrum; round = uterine cornu to labia majora. (not from slides)"
    // Source: NOT IN SLIDES
    // Confidence: low
  },
  {
    question: "2. Which hormone can increase body temperature after ovulation?",
    options: [
      "A. Testosterone",
      "B. Estrogen",
      "C. Dexamethasone",
      "D. Progesterone",
      "E. T3"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> Progesterone acts on the hypothalamic thermoregulatory center, increasing basal body temperature by 0.3–0.5°C during the luteal phase after ovulation.<br><b>Why not:</b> A: has no luteal thermogenic role. B: does not produce the post-ovulatory temperature rise. C: synthetic corticosteroid. E: thyroid hormone regulating basal metabolism.<br><b>Core:</b> Progesterone causes a 0.3–0.5°C rise in basal body temperature after ovulation."
    // Source: 02 Female Reproduction Physiology 2.pdf, slide on Body temperature regulation
    // Confidence: high
  },
  {
    question: "3. If menstrual period is 32 days, during menstrual cycle the time of ovulation occurs at about?",
    options: [
      "A. Ninth day",
      "B. Fourteenth day",
      "C. Sixteenth day",
      "D. Eighteenth day",
      "E. Twenty-second day"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> The luteal phase is approximately 14 days, so ovulation occurs about 14 days before the next menstruation (32 - 14 = day 18).<br><b>Why not:</b> A: too early. B: typical of a 28-day cycle. C: corresponds approximately to a 30-day cycle. E: too late.<br><b>Core:</b> Estimated ovulation day = menstrual cycle length - 14 days."
    // Source: 02 Female Reproduction Physiology 2.pdf, slide on Ovulation day
    // Confidence: high
  },
  {
    question: "4. Hegar's sign can be elicited by:",
    options: [
      "A. 8 weeks",
      "B. 10 weeks",
      "C. 12 weeks",
      "D. 14 weeks",
      "E. 16 weeks"
    ],
    answerIndex: 0, // A
    explanation: "<b>Why:</b> Hegar's sign is softening of the uterine isthmus, detectable on bimanual examination at approximately 6–8 weeks of gestation.<br><b>Why not:</b> B: later than the typical detection period. C: the uterus becomes abdominal around this stage. D: too late. E: second trimester, beyond the typical detection period.<br><b>Core:</b> Hegar's sign = softening of the uterine isthmus at approximately 6–8 weeks."
    // Source: 05 Diagnosis of pregnancy.pdf, slide on Signs of Pregnancy
    // Confidence: high
  },
  {
    question: "5. After delivery of a term infant with Apgar scores of 2 at 1 minute and 7 at 5 minutes, you ask that umbilical cord blood be collected for pH. The umbilical arteries carry which of the following?",
    options: [
      "A. Oxygenated blood to the placenta",
      "B. Oxygenated blood from the placenta",
      "C. Deoxygenated blood to the placenta",
      "D. Deoxygenated blood from the placenta",
      "E. Deoxygenated blood to the maternal uterus"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> The two umbilical arteries carry deoxygenated blood from the fetus to the placenta for gas exchange.<br><b>Why not:</b> A: the arteries carry deoxygenated blood. B: oxygenated blood is carried by the umbilical vein. D: blood flows to, not from, the placenta. E: the arteries supply the placenta, not the maternal uterus.<br><b>Core:</b> One umbilical vein carries oxygenated blood to the fetus; two umbilical arteries carry deoxygenated blood to the placenta."
    // Source: 03 Pregnancy physiology 1.pdf, slide on Circulatory function
    // Confidence: high
  },
  {
    question: "6. Regarding normal pregnancy:",
    options: [
      "A. Pregnancy lasts on average 40 weeks from conception",
      "B. If a woman has a long menstrual cycle, the expected date of delivery should be extended to reflect this",
      "C. Most women will deliver on the expected date of delivery",
      "D. Fetuses may be considered independently viable from 20 weeks' gestation",
      "E. Fetuses may be considered independently viable from 36 weeks' gestation"
    ],
    answerIndex: 1, // B
    explanation: "<b>Why:</b> Naegele's rule assumes a 28-day menstrual cycle. With a longer cycle, ovulation generally occurs later, so the expected date of delivery should be adjusted accordingly.<br><b>Why not:</b> A: pregnancy lasts approximately 40 weeks from LMP, not conception. C: only about 4–5% deliver on the exact EDD (verify with slides). D: the viability threshold is approximately 22–24 weeks (verify with slides). E: viability can occur before 36 weeks.<br><b>Core:</b> Adjust EDD for cycle length: LMP + 280 days + (cycle length - 28 days)."
    // Source: 05 Diagnosis of pregnancy.pdf, slide 6
    // Confidence: high
  },
  {
    question: "7. Which of the following can be used for diagnosis of pregnancy?",
    options: [
      "A. Estrogen",
      "B. Progesterone",
      "C. PAPP-A",
      "D. Hcg",
      "E. Hmg"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> Human chorionic gonadotropin (hCG), secreted by syncytiotrophoblasts, is detected in urine and serum pregnancy tests.<br><b>Why not:</b> A: not specific for pregnancy diagnosis. B: supports pregnancy but is not the diagnostic marker. C: used in first-trimester aneuploidy screening. E: fertility-related hormone, not the pregnancy test marker.<br><b>Core:</b> hCG is the hormone detected by standard urine and serum pregnancy tests."
    // Source: 05 Diagnosis of pregnancy.pdf, slide on Assistant examination
    // Confidence: high
  },
  {
    question: "8. Which is wrong about the inevitable abortion?",
    options: [
      "A. Increased vaginal bleeding",
      "B. Increased lower abdominal pain",
      "C. Part of the placenta is embedded in the cervix or part of the placenta is discharged",
      "D. Opening of the cervix",
      "E. The uterus matches the gestational week or slightly less than the gestational week"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> Partial passage or retention of placental tissue in the cervix is characteristic of incomplete abortion, not inevitable abortion.<br><b>Why not:</b> A: increased bleeding is typical. B: uterine contractions cause lower abdominal pain. D: cervical dilation is a key feature. E: uterine size may match or be slightly smaller than gestational age.<br><b>Core:</b> Inevitable abortion = open cervical os without tissue passage; incomplete abortion = open os with partial tissue passage."
    // Source: 07 Abortion.pdf, slide on Classification of abortion
    // Confidence: high
  },
  {
    question: "9. What are the main points to distinguish threatened abortion and inevitable abortion?",
    options: [
      "A. Length of bleeding",
      "B. Degree of lower abdominal pain",
      "C. Whether the early pregnancy reaction exists",
      "D. The os of cervix is open or closed",
      "E. Positive pregnancy test"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> The cervical os is the key distinguishing finding: it remains closed in threatened abortion but becomes dilated in inevitable abortion.<br><b>Why not:</b> A: bleeding duration varies. B: pain intensity overlaps. C: pregnancy symptoms may occur in both. E: pregnancy tests can be positive in both.<br><b>Core:</b> Threatened abortion = closed os; inevitable abortion = open os without tissue passage."
    // Source: 07 Abortion.pdf, slide on Classification of abortion
    // Confidence: high
  },
  {
    question: "10. Which is incorrect about abortion:",
    options: [
      "A. Once a missed abortion is diagnosed, the embryo and placental tissue should be completely discharged as soon as possible",
      "B. Incomplete miscarriage has been diagnosed, and suction or curettage should be performed in time to remove residual tissue in the uterine cavity",
      "C. Complete abortion generally does not require special treatment",
      "D. Infective abortion is often the incomplete abortion combined with infection, the treatment principle is removing the residual tissue firstly in the uterine cavity then giving antibiotics.",
      "E. Women with a history of habitual miscarriage should undergo necessary examinations before pregnancy"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> In septic abortion, broad-spectrum antibiotics must be started first to control infection before uterine evacuation, reducing the risk of worsening sepsis.<br><b>Why not:</b> A: missed abortion may require evacuation to prevent complications. B: retained tissue may require evacuation to control bleeding. C: complete abortion generally needs no intervention. E: recurrent miscarriage warrants evaluation before pregnancy.<br><b>Core:</b> Septic abortion management = IV broad-spectrum antibiotics first, followed by uterine evacuation."
    // Source: 07 Abortion.pdf, slide on Treatment of Septic Abortion
    // Confidence: high
  },
  {
    question: "11. Which is not a contraindication for conservative treatment of tubal pregnancy?",
    options: [
      "A. Rupture of tubal pregnancy",
      "B. Gestational sac diameter &lt; 4cm",
      "C. Unsteady vital signs",
      "D. Blood level of HCG &lt; 2000 U/L",
      "E. Diameter of gestational sac ≥ 3cm with heart tube beat"
    ],
    answerIndex: 1, // B
    explanation: "<b>Why:</b> A small, unruptured tubal pregnancy (&lt;4 cm) with stable vital signs may be suitable for conservative medical treatment with methotrexate.<br><b>Why not:</b> A: rupture requires urgent intervention. C: hemodynamic instability requires emergency treatment. D: low hCG is also a favorable criterion, making this option potentially correct. E: embryonic cardiac activity is a contraindication to methotrexate.<br><b>Core:</b> Medical treatment criteria include an unruptured mass, stable vital signs, low hCG, and absence of embryonic cardiac activity.",
    flag: "check answer"
    // Source: NOT IN SLIDES
    // Confidence: low
  },
  {
    question: "12. Which of the following descriptions are not typical manifestations of placental abruption?",
    options: [
      "A. Abdominal pain with vaginal bleeding",
      "B. Gross hematuria",
      "C. Systemic symptoms are not proportional to external bleeding",
      "D. Bloody amniotic fluid",
      "E. Raised height of the fundus"
    ],
    answerIndex: 1, // B
    explanation: "<b>Why:</b> Gross hematuria is not a typical manifestation of placental abruption and may suggest urinary tract involvement or another obstetric complication.<br><b>Why not:</b> A: typical painful vaginal bleeding. C: concealed hemorrhage causes symptoms disproportionate to visible bleeding. D: blood may enter the amniotic cavity. E: concealed hemorrhage can increase fundal height.<br><b>Core:</b> Placental abruption: painful bleeding, uterine tenderness or rigidity, and possible concealed hemorrhage."
    // Source: 09 Abruption of Placenta.pdf, slide on Clinical manifestation
    // Confidence: high
  },
  {
    question: "13. The correct treatment of placental abruption is:",
    options: [
      "A. Once the diagnosis is decided, the pregnancy should be terminated as soon as possible",
      "B. Expectant treatment is feasible if vaginal bleeding is not much",
      "C. All patients with placenta abruption should select vaginal delivery if the fetus is already dead.",
      "D. After rupture of the membrane, the fetal head can be pulled by scalp forceps to stop bleeding",
      "E. If there is a placental abruption in the uterus, massage can be used to strengthen uterine contraction if uteroplacental apoplexy happened"
    ],
    answerIndex: 0, // A
    explanation: "<b>Why:</b> Placental abruption can cause severe maternal hemorrhage, DIC, and fetal compromise, requiring prompt assessment, stabilization, and delivery when indicated.<br><b>Why not:</b> B: mild external bleeding does not exclude concealed hemorrhage. C: vaginal delivery is not mandatory in every case. D: scalp traction is not an appropriate treatment. E: uteroplacental apoplexy (Couvelaire uterus) may impair uterine contraction.<br><b>Core:</b> Management priorities: maternal stabilization, correction of hemorrhage or coagulopathy, and timely delivery."
    // Source: 09 Abruption of Placenta.pdf, slide on Management
    // Confidence: high
  },
  {
    question: "14. When pregnant women with preeclampsia are treated with magnesium sulfate, their respiratory rate should not be less than:",
    options: [
      "A. 12 times/min",
      "B. 14 times/min",
      "C. 16 times/min",
      "D. 18 times/min",
      "E. 20 times/min"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> Magnesium sulfate toxicity causes CNS and respiratory depression. A respiratory rate below the required safety threshold may indicate toxicity and requires withholding further magnesium sulfate.<br><b>Why not:</b> A: below the stated safety threshold. B: below the stated safety threshold. D: above the minimum threshold. E: above the minimum threshold.<br><b>Core:</b> Monitor patellar reflex, respiratory rate ≥16/min (verify with slides), and urine output ≥17 mL/hr (verify with slides); keep calcium gluconate available."
    // Source: 10 Hypertension disorders of Pregnancy.pdf, slide on Review / Magnesium sulfate
    // Confidence: high
  },
  {
    question: "15. The diagnostic criteria for gestational hypertension does not include:",
    options: [
      "A. Blood pressure ≥ 140/90mmHg firstly during pregnancy",
      "B. No proteinuria",
      "C. Blood pressure returns to normal level within 12 weeks after delivery",
      "D. The final diagnosis can be made during pregnancy",
      "E. There is no other manifestations of preeclampsia, such as upper abdominal discomfort, etc."
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> Under the described criteria, normalization of blood pressure within 12 weeks postpartum is needed to confirm gestational hypertension retrospectively, so the final diagnosis cannot be established during pregnancy.<br><b>Why not:</b> A: new-onset hypertension after 20 weeks is required. B: proteinuria is absent. C: postpartum normalization supports the diagnosis. E: no preeclampsia-related features should be present.<br><b>Core:</b> Gestational hypertension = new-onset BP ≥140/90 mmHg after 20 weeks without proteinuria or other preeclampsia features."
    // Source: 10 Hypertension disorders of Pregnancy.pdf, slide on Classification-2(Definition)
    // Confidence: high
  },
  {
    question: "16. For pregnant women with heart disease, which of the treatment measures for the second stage of labor is incorrect?",
    options: [
      "A. Assisted vaginal delivery",
      "B. Hold your breath and add abdominal pressure",
      "C. Giving oxygen",
      "D. Shorten the second stage of labor",
      "E. Put a sandbag on the abdomen after the fetus is delivered"
    ],
    answerIndex: 1, // B
    explanation: "<b>Why:</b> Holding the breath and pushing (Valsalva maneuver) increases intrathoracic pressure and cardiac workload, potentially worsening maternal heart failure.<br><b>Why not:</b> A: reduces maternal pushing effort. C: supports oxygenation. D: reduces the duration of cardiac stress. E: helps reduce sudden postpartum circulatory changes.<br><b>Core:</b> Cardiac disease in labor: avoid prolonged maternal pushing and shorten the second stage with assisted delivery when indicated."
    // Source: 11 Cardiac disease in pregnancy.pdf, slide on Intrapartum treatment
    // Confidence: high
  },
  {
    question: "17. Which of the following is the basic pathological change of hypertensive disorders of pregnancy?",
    options: [
      "A. Sodium and Water Retention",
      "B. Hemoconcentration",
      "C. Vascular endothelial injury",
      "D. Generalized vasospasm",
      "E. Increased vascular fragility and permeability"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> Generalized small-artery vasospasm increases vascular resistance, causing hypertension and reduced blood flow to maternal organs and the placenta.<br><b>Why not:</b> A: secondary fluid-balance change. B: results partly from plasma volume reduction. C: endothelial injury is an important associated pathological process. E: contributes to vascular leakage and edema.<br><b>Core:</b> Classic basic pathological change: generalized small-artery vasospasm."
    // Source: 10 Hypertension disorders of Pregnancy.pdf, slide on Pathophysiology
    // Confidence: high
  },
  {
    question: "18. The typical symptom of placenta previa is:",
    options: [
      "A. abdominal pain",
      "B. vaginal bleeding without pain",
      "C. premature rupture of membrane",
      "D. vaginal bleeding with severe abdominal pain",
      "E. vaginal bleeding and rupture of membrane"
    ],
    answerIndex: 1, // B
    explanation: "<b>Why:</b> Placenta previa typically causes painless vaginal bleeding because placental tissue overlies the lower uterine segment and may separate as it stretches.<br><b>Why not:</b> A: pain is not typical. C: membrane rupture is not the characteristic presentation. D: suggests placental abruption. E: not the classic presentation.<br><b>Core:</b> Placenta previa = painless vaginal bleeding; placental abruption = painful vaginal bleeding."
    // Source: 08 Placenta Previa.goodnotes.pdf, slide on Clinical symptoms
    // Confidence: high
  },
  {
    question: "19. How many types of breech presentation are there?",
    options: [
      "A. 3",
      "B. 2",
      "C. 5",
      "D. 6",
      "E. 10"
    ],
    answerIndex: 0, // A
    explanation: "<b>Why:</b> Breech presentation has three main types based on fetal hip and knee flexion: complete, frank, and incomplete breech.<br><b>Why not:</b> B: omits one type. C: incorrect number. D: confuses presentation types with fetal positions. E: incorrect number.<br><b>Core:</b> Complete = hips and knees flexed; frank = hips flexed and knees extended; incomplete = one or both feet or knees present."
    // Source: 05 Diagnosis of pregnancy.pdf, slide on Fetal presentation
    // Confidence: high
  },
  {
    question: "20. Primipara, 39+5 weeks of gestation, 148 cm in height, no scoliosis of spine, no history of trauma, extrapelvic measurements: 20 cm in diameter between iliac spines, 22.5 cm in diameter between iliac crests, 15.5 cm in external diameter of sacropubic, 6 cm in diameter between ischial tubercles, and 90 degrees in angle of pubic arch. Which of the following types of pelvis does the pregnant woman have?",
    options: [
      "A. normal pelvis",
      "B. skewed pelvis",
      "C. contracted pelvis",
      "D. flat pelvis",
      "E. anthropoid pelvis"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> The interspinous, intercristal, external conjugate, and intertuberous diameters are all reduced compared with normal values, indicating a generally contracted pelvis.<br><b>Why not:</b> A: measurements are reduced. B: requires pelvic asymmetry. D: primarily involves a shortened anteroposterior inlet diameter. E: has a relatively long anteroposterior diameter.<br><b>Core:</b> Generally contracted pelvis = reduction of pelvic dimensions across the inlet, midpelvis, and outlet."
    // Source: 12 Abnormal Labor.pdf, slide on Contracted pelvis
    // Confidence: high
  },
  {
    question: "21. The proper description of vaginal discharge for vaginitis of candida is:",
    options: [
      "A. Vaginal secretions are gray and thinly coat the vaginal walls with fishy odor",
      "B. Vaginal secretions with fresh blood-stained",
      "C. Yellow or green vaginal discharge with foam",
      "D. Thick, white (cottage cheese-like) vaginal discharge",
      "E. Purulent vaginal discharge"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> Vulvovaginal candidiasis typically causes thick, white, clumpy discharge resembling cottage cheese due to vaginal inflammation.<br><b>Why not:</b> A: bacterial vaginosis. B: may suggest cervical lesions or contact bleeding. C: Trichomonas vaginitis. E: suggests purulent cervicitis or other infection.<br><b>Core:</b> Candida = thick white discharge, pH &lt;4.5; BV = thin gray fishy discharge; Trichomonas = yellow-green frothy discharge."
    // Source: 17 Infection of Femal Reporductive System.pdf, slide on Clinical feature of VVC
    // Confidence: high
  },
  {
    question: "22. Reliable evidence for the diagnosis of endometrial tuberculosis was:",
    options: [
      "A. Hysterosalpingography",
      "D. Endometrial pathology",
      "E. Hysteroscopy"
    ],
    answerIndex: 1, // D
    explanation: "<b>Why:</b> Endometrial tissue examination can demonstrate characteristic granulomatous inflammation and provide histopathological evidence of genital tuberculosis.<br><b>Why not:</b> A: may show tubal abnormalities but cannot provide histological confirmation. E: visualizes intrauterine adhesions and abnormal endometrial surfaces but does not establish the diagnosis alone.<br><b>Core:</b> Endometrial biopsy with histopathological examination provides important diagnostic evidence for genital tuberculosis."
    // Source: 16 Female Genital TB.pdf, slide on Diagnosis 1, Endometrial pathological examination
    // Confidence: high
  },
  {
    question: "23. A 22-year-old woman with regular menstrual periods complains of 2 days' vaginal bleeding in 6 weeks after her last menstrual period. The bleeding is dark in color, painless and began after intercourse. Home pregnancy test is positive. Examination shows a small amount of dark blood in the vagina and at the cervical os. The cervix is closed and some tissue is visible. Bimanual examination reveals a soft, enlarged size uterus and normal adnexa without masses or tenderness. What is your procedure of diagnosis?",
    options: [
      "A. detect serum HCG",
      "B. order a transabdominal ultrasound examination",
      "C. perform a culdocentesis",
      "D. advise evacuation of the uterus by suction curettage",
      "E. laparoscopy"
    ],
    answerIndex: 1, // B
    explanation: "<b>Why:</b> Pelvic ultrasound is needed to assess pregnancy location, fetal viability, and possible ectopic pregnancy in a woman with early pregnancy bleeding.<br><b>Why not:</b> A: pregnancy is already confirmed by a urine test. C: reserved for selected cases of suspected intraperitoneal bleeding. D: premature before confirming pregnancy location and viability. E: invasive and not the initial diagnostic procedure.<br><b>Core:</b> Early pregnancy bleeding requires ultrasound assessment to determine pregnancy location and viability.",
    flag: "check answer"
    // Source: NOT IN SLIDES
    // Confidence: medium
  },
  {
    question: "24. Which of the following diseases is related to human papilloma virus?",
    options: [
      "A. Carcinoma of the cervix",
      "B. Endometrial dysplasia",
      "C. Amenorrhea",
      "D. ovarian cancer",
      "E. uterus dysfunctional bleeding"
    ],
    answerIndex: 0, // A
    explanation: "<b>Why:</b> Persistent infection with high-risk HPV, particularly types 16 and 18, is the major cause of cervical intraepithelial neoplasia and cervical carcinoma.<br><b>Why not:</b> B: not the characteristic HPV-associated disease. C: usually involves hormonal or ovarian dysfunction. D: commonly associated with genetic and other risk factors. E: commonly related to ovulatory or hormonal dysfunction.<br><b>Core:</b> High-risk HPV types 16 and 18 are strongly associated with cervical carcinoma."
    // Source: 19 Cervical Carcinoma.pdf, slide on Etiology
    // Confidence: high
  },
  {
    question: "25. The treatment of AUB-O in young women is:",
    options: [
      "A. Radiotherapy",
      "B. Hormones",
      "C. D & C",
      "D. Hysterectomy",
      "E. Endometrial ablation"
    ],
    answerIndex: 1, // B
    explanation: "<b>Why:</b> Hormonal therapy, such as progestins or combined oral contraceptives, is used to control bleeding and regulate menstrual cycles in young women with anovulatory AUB.<br><b>Why not:</b> A: not indicated for benign AUB-O. C: reserved for selected cases requiring evacuation or diagnostic assessment. D: excessive treatment for young women. E: damages the endometrium and compromises future fertility.<br><b>Core:</b> AUB-O in young women: hormonal therapy is the main treatment approach."
    // Source: 24 Ovulatory dysfunctional AUB.pdf, slide on Sex hormones: first choice for stopping bleeding
    // Confidence: high
  },
  {
    question: "26. Indications for radiotherapy in carcinoma endometrium include all, except:",
    options: [
      "A. Deep myometrial involvement",
      "B. Pelvic node involvement",
      "C. Poor differentiation",
      "D. Enlarged uterine cavity",
      "E. Positive operational margin"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> An enlarged uterine cavity alone is not a standard indication for adjuvant radiotherapy in endometrial carcinoma.<br><b>Why not:</b> A: deep myometrial invasion increases recurrence risk. B: indicates regional lymphatic spread. C: poor differentiation indicates high-grade disease. E: positive surgical margins increase local recurrence risk.<br><b>Core:</b> High-risk features include deep myometrial invasion, pelvic lymph node involvement, poor differentiation, and positive surgical margins."
    // Source: 21 Endometrial Carcinoma.pdf, slide on Treatment
    // Confidence: high
  },
  {
    question: "27. When the fetal head is presenting with occiput directed toward the left side and anterior pelvis of the woman, the fetal position is?",
    options: [
      "A. ROA",
      "B. ROP",
      "C. LOA",
      "D. LOT",
      "E. LOP"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> The fetal occiput points toward the mother's left anterior pelvis, giving Left Occiput Anterior (LOA).<br><b>Why not:</b> A: Right Occiput Anterior. B: Right Occiput Posterior. D: Left Occiput Transverse. E: Left Occiput Posterior.<br><b>Core:</b> LOA = Left Occiput Anterior; fetal landmark + maternal pelvic side + direction."
    // Source: 06 Normal Labor.pdf, slide on Fetal position
    // Confidence: high
  },
  {
    question: "28. Choriocarcinoma commonly metastasizes to:",
    options: [
      "A. Brain",
      "B. Lung",
      "C. Vagina",
      "D. Ovary",
      "E. Liver"
    ],
    answerIndex: 1, // B
    explanation: "<b>Why:</b> Choriocarcinoma spreads early through blood vessels, and the lungs are the most common site of metastasis.<br><b>Why not:</b> A: brain metastasis occurs but is less common. C: vaginal metastasis occurs but is less common than lung involvement. D: uncommon site of distant metastasis. E: liver metastasis occurs but is less common.<br><b>Core:</b> Choriocarcinoma spreads hematogenously; lungs are the most common metastatic site."
    // Source: 29 GTDs (Gestational Trophoblastic Diseases) 2.pdf, slide on Clinical Manifestations
    // Confidence: high
  },
  {
    question: "29. Which of the following managements fits for the choriocarcinoma best?",
    options: [
      "A. Hysterectomy",
      "B. Chinese medicine",
      "C. Immunotherapy",
      "D. Radiotherapy",
      "E. Chemotherapy"
    ],
    answerIndex: 4, // E
    explanation: "<b>Why:</b> Choriocarcinoma is highly sensitive to chemotherapy, which is the primary treatment and can achieve high cure rates even in metastatic disease.<br><b>Why not:</b> A: reserved for selected cases, such as uncontrolled bleeding or specific surgical indications. B: not an established definitive treatment. C: not standard first-line treatment. D: mainly considered for selected metastatic complications, such as CNS disease.<br><b>Core:</b> Choriocarcinoma = highly chemosensitive malignancy; systemic chemotherapy is the main treatment."
    // Source: 29 GTDs (Gestational Trophoblastic Diseases) 2.pdf, slide on Treatment
    // Confidence: high
  },
  {
    question: "30. Which description is wrong about the common clinical manifestations of tubal pregnancy?",
    options: [
      "A. Abdominal pain is the first symptom for most patients with tubal pregnancy",
      "B. Vaginal bleeding is often irregular after short-term menopause, and the amount is small",
      "C. All Patients have large and continuous vaginal bleeding after menopause",
      "D. Some patients are in shock soon due to intra-abdominal bleeding and severe abdominal pain",
      "E. There may be a drop of blood pressure"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> Tubal pregnancy usually causes small-volume, irregular vaginal bleeding rather than large and continuous external bleeding.<br><b>Why not:</b> A: abdominal pain is a common presenting symptom. B: irregular, small-volume bleeding may occur after amenorrhea. D: tubal rupture can cause intraperitoneal hemorrhage, severe pain, and shock. E: blood loss can cause hypotension.<br><b>Core:</b> Classic ectopic pregnancy triad = amenorrhea, abdominal pain, and vaginal bleeding."
    // Source: 07 Abortion.pdf, slide on Ectopic pregnancy
    // Confidence: high
  },

];
