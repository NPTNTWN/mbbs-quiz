// This file only contains your data. No HTML or CSS.
const myQuestionBank = [
  {
    question: "1. The size of normal ovary of adult is about: ( )",
    options: [
      "A. 4cm * 3cm * 1cm",
      "B. 2cm * 4cm * 3cm",
      "C. 5cm * 5cm * 1cm",
      "D. 6cm * 4cm * 2cm",
      "E. 3cm * 5cm * 1cm"
    ],
    answerIndex: 0, // A
    explanation: "<b>Why:</b> The normal adult ovary measures approximately 4 × 3 × 1 cm and weighs about 5–6 g.<br><b>Why not:</b> B: incorrect dimensions. C: excessively wide. D: larger than normal. E: incorrect length and width proportions.<br><b>Core:</b> Normal adult ovary ≈ 4 × 3 × 1 cm (volume approximately 6 mL). (not from slides)",
    // Source: NOT IN SLIDES
    // Confidence: low
  },
  {
    question: "2. Which is the ligament from the lateral borders of the uterus on each side to the lateral pelvic wall? ( )",
    options: [
      "A. round ligaments",
      "B. broad ligaments",
      "C. uterosacral ligaments",
      "D. uterine cardinal ligaments",
      "E. suspensory ligament"
    ],
    answerIndex: 1, // B
    explanation: "<b>Why:</b> The broad ligament is a double fold of peritoneum extending from the lateral borders of the uterus to the lateral pelvic walls.<br><b>Why not:</b> A: extends from uterine cornu through the inguinal canal to labia majora. C: extends from cervix to sacrum. D: extends from cervix to pelvic wall. E: suspends the ovary from the pelvic wall.<br><b>Core:</b> Broad ligament = uterus to pelvic wall; cardinal ligament = cervix to pelvic wall. (not from slides)",
    // Source: NOT IN SLIDES
    // Confidence: low
  },
  {
    question: "3. Which hormone can be used as serum biomarker for diagnosis of pregnancy? ( )",
    options: [
      "A. Estrogen",
      "B. Progesterone",
      "C. PAPP-A",
      "D. HCG",
      "E. HMG"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> Human chorionic gonadotropin (hCG), produced by syncytiotrophoblasts after implantation, is detected in serum and urine pregnancy tests.<br><b>Why not:</b> A: non-specific steroid hormone. B: supports pregnancy but is not a specific diagnostic marker. C: used in first-trimester aneuploidy screening. E: used for ovulation induction.<br><b>Core:</b> Serum β-hCG is the biochemical marker used for early pregnancy diagnosis and monitoring."
    // Source: 05 Diagnosis of pregnancy.pdf, slide on hCG: human chorionic gonadotropin
    // Confidence: high
  },
  {
    question: "4. Single-phase of BBT (basic body temperature) shows: ( )",
    options: [
      "A. abortion",
      "B. onset of labor",
      "C. ovulation",
      "D. anovulation",
      "E. pregnancy"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> A monophasic basal body temperature (BBT) curve lacks the post-ovulatory temperature rise caused by progesterone, suggesting anovulation.<br><b>Why not:</b> A: BBT is not used to diagnose abortion. B: not a marker of labor onset. C: ovulatory cycles normally show a biphasic curve. E: pregnancy maintains an elevated post-ovulatory temperature.<br><b>Core:</b> Biphasic BBT = ovulatory cycle; monophasic BBT = anovulatory cycle."
    // Source: 02 Female Reproduction Physiology 2.pdf, slide on BBT: basal body temperature
    // Confidence: high
  },
  {
    question: "5. Which is not true for the physiological effects of Progesterone?",
    options: [
      "A. induces proliferative phase of endometrium",
      "B. produces myohyperplasia and causes low frequency high amplitude contraction",
      "C. along with estrogen to promote endometrium glandular development",
      "D. cervical mucus becomes thicker, opaque and less abundant",
      "E. accelerate vaginal epithelial cell shedding, large superficial cells with small pyknotic nuclei are replaced by small cells"
    ],
    answerIndex: 0, // A
    explanation: "<b>Why:</b> Estrogen induces the proliferative phase of the endometrium, whereas progesterone converts it into the secretory phase after ovulation.<br><b>Why not:</b> B: progesterone inhibits myometrial excitability and contractions. C: supports endometrial glandular development with estrogen. D: makes cervical mucus thick, opaque, and scanty. E: promotes vaginal epithelial shedding and replacement of superficial cells by smaller cells.<br><b>Core:</b> Estrogen = proliferative endometrium and thin cervical mucus; progesterone = secretory endometrium and thick cervical mucus."
    // Source: 02 Female Reproduction Physiology 2.pdf, slide on Physiological effects of estrogen and progesterone
    // Confidence: high
  },
  {
    question: "6. Where does fertilization occur? ( )",
    options: [
      "A. cervix",
      "B. uterine body",
      "C. fallopian tube",
      "D. ovary",
      "E. uterine endometrium"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> Fertilization normally occurs in the ampulla of the fallopian tube, where the oocyte meets the capacitated sperm.<br><b>Why not:</b> A: not the fertilization site. B: the embryo later enters the uterine cavity. D: site of oocyte maturation and ovulation. E: site of implantation.<br><b>Core:</b> Fertilization = ampulla of the fallopian tube; implantation = uterine endometrium."
    // Source: 03 Pregnancy physiology 1.pdf, slide 3 (Fertilization and implantation)
    // Confidence: high
  },
  {
    question: "7. The amount of amniotic fluid during full term pregnancy is around ( )",
    options: [
      "A. 500ml",
      "B. 600ml",
      "C. 800ml",
      "D. 1000ml",
      "E. 1200ml"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> According to the provided explanation, amniotic fluid volume peaks at approximately 1000 mL around 38 weeks and decreases to about 800 mL at 40 weeks.<br><b>Why not:</b> A: lower than the expected term volume. B: below the stated term value. D: corresponds to the approximate peak volume. E: higher than the stated term value.<br><b>Core:</b> Amniotic fluid volume: approximately 1000 mL at 38 weeks, decreasing to 800 mL at term."
    // Source: 03 Pregnancy physiology 1.pdf, slide on The amniotic fluid (Amount)
    // Confidence: high
  },
  {
    question: "8. Which of the following is wrong about umbilical cord? ( )",
    options: [
      "A. average length is 55cm (30~100cm) at full term",
      "B. has 3 vessels, 2 veins and 1 artery at full term",
      "C. its exterior is dull white, covered with amnion",
      "D. extends from the fetal umbilicus to the fetal surface of the placenta",
      "E. the arteries carry the venous blood from the fetus to the placenta"
    ],
    answerIndex: 1, // B
    explanation: "<b>Why:</b> The normal umbilical cord has three vessels: two umbilical arteries and one umbilical vein, not two veins and one artery.<br><b>Why not:</b> A: normal average length is approximately 55 cm. C: correct external appearance. D: correct anatomical attachment. E: umbilical arteries carry deoxygenated fetal blood to the placenta.<br><b>Core:</b> Umbilical cord = 2 arteries (deoxygenated blood to placenta) + 1 vein (oxygenated blood to fetus)."
    // Source: 03 Pregnancy physiology 1.pdf, slide on Umbilical cord
    // Confidence: high
  },
  {
    question: "9. If the LMP is Mar 3rd 2021, when is the pregnant woman's EDC? ( )",
    options: [
      "A. Jan 10th 2023",
      "B. Dec 3rd 2021",
      "C. Dec 10th 2021",
      "D. Dec 10th 2022",
      "E. Jan 3rd 2022"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> Using Naegele's rule, subtract 3 months and add 7 days: March 3rd, 2021 becomes December 10th, 2021.<br><b>Why not:</b> A: incorrect year. B: does not add 7 days. D: incorrect year. E: incorrect month and date.<br><b>Core:</b> EDC = LMP + 9 months + 7 days (Naegele's rule)."
    // Source: 05 Diagnosis of pregnancy.pdf, slide on LMP------EDC (Naegele's rule)
    // Confidence: high
  },
  {
    question: "10. First stage of labor is up to ( )",
    options: [
      "A. rupture of membranes",
      "B. 3/5th dilation of cervix",
      "C. full dilation of cervix",
      "D. crowning of head",
      "E. expulsion of fetus"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> The first stage of labor begins with regular uterine contractions and ends when the cervix is fully dilated to 10 cm.<br><b>Why not:</b> A: membrane rupture can occur at different stages. B: intermediate cervical dilation. D: occurs during the second stage. E: marks the end of the second stage.<br><b>Core:</b> First stage = contractions to full cervical dilation; second stage = full dilation to fetal delivery; third stage = placental delivery."
    // Source: 06 Normal Labor.pdf, slide on Labor stage
    // Confidence: high
  },
  {
    question: "11. Which of the following periods refers to mid-term pregnancy? ( )",
    options: [
      "A. 12 to 28 weeks of pregnancy",
      "B. 13 to 27 weeks of pregnancy",
      "C. 14 to 27+6 weeks of pregnancy",
      "D. 13 to 28+6 weeks of pregnancy",
      "E. 11 to 28 weeks of pregnancy"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> Mid-term pregnancy (second trimester) extends from 14 weeks to 27 weeks and 6 days of gestation.<br><b>Why not:</b> A: incorrect boundaries. B: starts too early and gives an incomplete upper limit. D: starts too early and ends too late. E: starts too early.<br><b>Core:</b> First trimester = up to 13+6 weeks; second trimester = 14–27+6 weeks; third trimester = from 28 weeks."
    // Source: 05 Diagnosis of pregnancy.pdf, slide 14-27, or second trimester (mid pregnancy)
    // Confidence: high
  },
  {
    question: "12. The preferred treatment for incomplete abortion is ( )",
    options: [
      "A. observation",
      "B. correct anemia",
      "C. complete curettage of uterine cavity",
      "D. embryo protection",
      "E. promote uterine contractions"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> Incomplete abortion leaves retained products of conception in the uterus, which can cause persistent bleeding and require uterine evacuation.<br><b>Why not:</b> A: does not remove retained tissue. B: supportive treatment, not definitive management. D: pregnancy is already being lost. E: uterotonics alone may not adequately remove retained tissue.<br><b>Core:</b> Incomplete abortion with significant bleeding or retained tissue may require suction evacuation of the uterine cavity."
    // Source: 07 Abortion.pdf, slide on Treatment of incomplete abortion
    // Confidence: high
  },
  {
    question: "13. These are all the complications of severe placenta abruption, except ( )?",
    options: [
      "A. acute renal failure",
      "B. coagulation dysfunction",
      "C. postpartum hemorrhage",
      "D. hypertension",
      "E. DIC"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> Hypertension is an important risk factor and cause of placental abruption, rather than a typical complication resulting from it.<br><b>Why not:</b> A: severe blood loss can cause acute renal failure. B: consumption of clotting factors causes coagulation dysfunction. C: uterine atony can cause postpartum hemorrhage. E: DIC is a major complication of severe abruption.<br><b>Core:</b> Severe placental abruption can cause DIC, hypovolemic shock, acute renal failure, and postpartum hemorrhage."
    // Source: 09 Abruption of Placenta.pdf, slide on Pathophysiology
    // Confidence: high
  },
  {
    question: "14. Which of the following is the most common etiology of ectopic pregnancy? ( )",
    options: [
      "A. Peritubal adhesions",
      "B. Tubal abnormalities",
      "C. Tubal surgery",
      "D. Salpingitis",
      "E. IUD"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> Salpingitis, commonly associated with pelvic inflammatory disease (PID), damages the tubal mucosa and cilia, impairing normal embryo transport and increasing ectopic pregnancy risk.<br><b>Why not:</b> A: may distort tubal anatomy but is not the selected most common cause. B: congenital abnormalities are less common. C: previous surgery is a risk factor but not the most common cause. E: IUD use is associated with a higher proportion of ectopic pregnancies among pregnancies that occur with an IUD in place.<br><b>Core:</b> Salpingitis/PID → tubal mucosal damage and impaired ciliary transport → increased ectopic pregnancy risk."
    // Source: 18 Pelvic Inflammatory Disease (PID).pdf, slide on Pathogenesis
    // Confidence: high
  },
  {
    question: "15. The basic pathophysiology change of preeclampsia is: ( )",
    options: [
      "A. Vasospasm",
      "B. Proteinuria",
      "C. Hypertension",
      "D. Edema",
      "E. Tissue hypoxia"
    ],
    answerIndex: 0, // A
    explanation: "<b>Why:</b> Generalized small-artery vasospasm is the basic pathological change, causing increased vascular resistance and reduced blood flow to maternal organs and the placenta.<br><b>Why not:</b> B: results from glomerular endothelial injury. C: clinical manifestation of increased vascular resistance. D: results partly from increased vascular permeability. E: downstream consequence of reduced tissue perfusion.<br><b>Core:</b> Preeclampsia: abnormal placentation and endothelial dysfunction → generalized vasospasm → hypertension and organ ischemia."
    // Source: 10 Hypertension disorders of Pregnancy.pdf, slide on Pathophysiology
    // Confidence: high
  },
  {
    question: "16. A female, 24y, chief complaint: amenorrhea 50 days, vaginal bleeding 3 days. History of present illness: her usual menses is regular, date of last period: 5/6/2020. At 40 days of amenorrhea, the HCG test in urine was positive. She felt sick and vomited, and 3 days ago, had vaginal bleeding, very little, bright red, and painless. So she came to see the doctor. Physical examination: T 37°C, P: 80/min, BP 120/70mmHg. Lung, heart, and abdomen are normal. PV: cervix: smooth, with some pregnancy tissue visible in the external cervical os. Uterus: anterior position, soft, enlarged to about 5 gestational weeks. Adnexa: normal. Lab: normal. Which diagnosis is correct? ( )",
    options: [
      "A. threatened abortion",
      "B. ectopic pregnancy",
      "C. inevitable abortion",
      "D. missed abortion",
      "E. complete abortion"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> Visible pregnancy tissue at the cervical os suggests an abortion in progress, and the supplied answer classifies this as inevitable abortion.<br><b>Why not:</b> A: requires a closed cervical os without tissue passage. B: does not fit the described visible intrauterine pregnancy tissue. D: typically involves retained nonviable pregnancy tissue with a closed os. E: requires complete passage of pregnancy tissue.<br><b>Core:</b> Threatened abortion = closed os; inevitable abortion = open os without tissue passage; incomplete abortion = open os with partial tissue passage.",
    flag: "check answer"
    // Source: 07 Abortion.pdf, slide on Classification of abortion
    // Confidence: high
  },
  {
    question: "17. Which of the following is NOT the etiology of placental abruption? ( )",
    options: [
      "A. Hypertension",
      "B. Delivery of the first baby of twins",
      "C. Anemia",
      "D. Trauma",
      "E. Sudden escape of liquor amnii in hydramnios"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> Anemia is not a direct mechanical or vascular cause of premature placental separation in the listed mechanisms.<br><b>Why not:</b> A: maternal hypertension is a major risk factor. B: delivery of the first twin causes sudden uterine decompression. D: trauma can cause premature placental separation. E: sudden loss of amniotic fluid in hydramnios can cause rapid uterine decompression.<br><b>Core:</b> Major abruption risk factors include hypertension, trauma, and sudden uterine decompression."
    // Source: 09 Abruption of Placenta.pdf, slide on Etiology and risk factors
    // Confidence: high
  },
  {
    question: "18. For pregnant women with cardiac disease, the most dangerous period is ( )",
    options: [
      "A. After 7 days of puerperium",
      "B. 28-31 weeks of gestation",
      "C. 24-27 weeks of gestation",
      "D. 32-34 weeks of gestation",
      "E. 35-36 weeks of gestation"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> Around 32–34 weeks, maternal blood volume is markedly increased, placing substantial hemodynamic stress on a heart affected by cardiac disease.<br><b>Why not:</b> A: the early postpartum period is more dangerous than after 7 days. B: maternal blood volume is still increasing. C: generally earlier than the peak volume expansion. E: follows the stated 32–34-week high-risk period.<br><b>Core:</b> Important high-risk periods in maternal cardiac disease: late pregnancy, labor and delivery, and the first 72 hours postpartum."
    // Source: 11 Cardiac disease in pregnancy.pdf, slide on Summary-Cardiovascular physiology in pregnancy
    // Confidence: high
  },
  {
    question: "19. If the measurement of the posterior sagittal diameter and inter-tuberous diameter is 11cm, how should we deal with this full-term pregnant woman? ( )",
    options: [
      "A. Trial of labor",
      "B. Observe",
      "C. Vacuum extraction",
      "D. Cesarean section",
      "E. Obstetric forceps"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> The sum of the inter-tuberous and posterior sagittal diameters is 11 cm, suggesting marked pelvic outlet contraction and inadequate space for vaginal delivery.<br><b>Why not:</b> A: trial of labor may be unsafe with severe outlet contraction. B: does not resolve the mechanical obstruction. C: vacuum extraction cannot correct a contracted bony outlet. E: forceps cannot overcome severe pelvic outlet narrowing.<br><b>Core:</b> Inter-tuberous diameter + posterior sagittal diameter: the adequacy cutoff is approximately 15 cm (verify with slides).",
    flag: "check answer"
    // Source: 12 Abnormal Labor.pdf, slide on Contracted pelvis
    // Confidence: high
  },
  {
    question: "20. When a patient is diagnosed with hypertonic uterine dysfunction, what therapeutic options are available except: ( )",
    options: [
      "A. Sedative",
      "B. Magnesium sulfate",
      "C. Oxytocin",
      "D. Oxygen",
      "E. Maybe cesarean section"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> Oxytocin increases uterine contractions and is inappropriate in hypertonic uterine dysfunction, where uterine tone is already abnormally high or contractions are poorly coordinated.<br><b>Why not:</b> A: sedatives may help reduce excessive uterine activity. B: magnesium sulfate has uterine-relaxing effects. D: supports maternal oxygenation when needed. E: cesarean section may be necessary if the condition persists or delivery is obstructed.<br><b>Core:</b> Hypertonic uterine dysfunction: avoid oxytocin; management may include rest, sedation, and uterine relaxation."
    // Source: 12 Abnormal Labor.pdf, slide 12
    // Confidence: high
  },
  {
    question: "21. The bony marks of the left and right side of the mid-pelvis for females are: ( )",
    options: [
      "A. Sacrococcygeal joint",
      "B. Ischial tubercle",
      "C. Ischial spine",
      "D. Sacrum",
      "E. The promontory of the sacrum"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> The right and left ischial spines project medially from the pelvic sidewalls and form the lateral boundaries of the mid-pelvis.<br><b>Why not:</b> A: posterior landmark of the pelvic outlet. B: lateral landmark of the pelvic outlet. D: posterior boundary of the pelvic cavity. E: posterior landmark of the pelvic inlet.<br><b>Core:</b> Mid-pelvis lateral landmarks = ischial spines; the interspinous diameter is approximately 10 cm. (not from slides)",
    // Source: NOT IN SLIDES
    // Confidence: low
  },
  {
    question: "22. In clinical practice, CA-125 is usually used as a specific tumor marker for ( )",
    options: [
      "A. choriocarcinoma",
      "B. ovarian teratoma",
      "C. epithelial ovarian cancer",
      "D. immature teratoma",
      "E. ovarian sex-cord stromal tumor"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> CA-125 is a serum tumor marker commonly used in the assessment and monitoring of epithelial ovarian cancer.<br><b>Why not:</b> A: monitored using β-hCG. B: no specific marker listed here. D: associated with AFP. E: commonly associated with inhibin or estrogen.<br><b>Core:</b> Ovarian tumor markers: epithelial ovarian cancer = CA-125; choriocarcinoma = β-hCG; yolk sac tumor = AFP; granulosa cell tumor = inhibin."
    // Source: 25 Ovarian cancer1.pdf, slide Homework-Single choice
    // Confidence: high
  },
  {
    question: "23. A 33-year-old female complained about vulvar itching for 4 days. Gynecological examination: there was a large amount of cottage cheese-like discharge in the vagina. The patient's diagnosis is ( )",
    options: [
      "A. Trichomonas vaginitis",
      "B. Bacterial vaginosis",
      "C. Vulvovaginal candidiasis",
      "D. Atrophic vaginitis",
      "E. Non-specific vulvitis"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> Vulvar itching with thick, white, cottage cheese-like vaginal discharge strongly suggests vulvovaginal candidiasis.<br><b>Why not:</b> A: typically causes yellow-green frothy discharge. B: causes thin gray discharge with fishy odor. D: associated with estrogen deficiency and vaginal atrophy. E: does not typically produce characteristic curd-like discharge.<br><b>Core:</b> Candida = intense itching + thick white discharge + vaginal pH &lt;4.5."
    // Source: 17 Infection of Femal Reporductive System.pdf, slide on Clinical feature of VVC
    // Confidence: high
  },
  {
    question: "24. The main route of transmission of genital tuberculosis is: ( )",
    options: [
      "A. Bloodborne",
      "B. Lymphatic spread",
      "C. Sexual intercourse",
      "D. Direct spread",
      "E. Respiratory tract transmission"
    ],
    answerIndex: 0, // A
    explanation: "<b>Why:</b> Genital tuberculosis usually develops secondary to infection elsewhere, spreading mainly through the bloodstream to the reproductive organs, especially the fallopian tubes.<br><b>Why not:</b> B: less common route. C: sexual transmission is not the usual route. D: direct spread from nearby infected organs is less common. E: respiratory transmission is the initial route of pulmonary infection, not the main route to genital organs.<br><b>Core:</b> Genital TB: hematogenous spread is the main route; fallopian tubes are commonly affected first."
    // Source: 16 Female Genital TB.pdf, slide on Route of transmission
    // Confidence: high
  },
  {
    question: "25. Which of the following is the most common site for cervical cancer: ( )",
    options: [
      "A. Squamous epithelium",
      "B. Transition zone of squamous-columnar junction",
      "C. Columnar epithelium",
      "D. Cervical glandular epithelium",
      "E. Outer cervix"
    ],
    answerIndex: 1, // B
    explanation: "<b>Why:</b> The transformation zone at the squamocolumnar junction is the most common site of cervical precancerous lesions and carcinoma because of active squamous metaplasia and susceptibility to HPV-related changes.<br><b>Why not:</b> A: too broad; does not specify the transformation zone. C: less commonly the primary site. D: glandular lesions can occur but are less common. E: non-specific anatomical description.<br><b>Core:</b> Cervical cancer most commonly develops in the transformation zone at the squamocolumnar junction."
    // Source: 19 Cervical Carcinoma.pdf, slide on Histology of cervix
    // Confidence: high
  },
  {
    question: "26. A 50-year-old female, having a fibroid in the uterus which makes the uterus enlarged to 10 gestational weeks but presenting with no symptoms: ( )",
    options: [
      "A. Hysterectomy",
      "B. Myomectomy",
      "C. Hysteroscopic removal",
      "D. No treatment indicated",
      "E. Drug treatment"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> An asymptomatic uterine fibroid in a perimenopausal woman can generally be managed conservatively without active treatment.<br><b>Why not:</b> A: unnecessary major surgery in an asymptomatic patient. B: usually considered for symptomatic patients or fertility preservation. C: mainly used for suitable submucosal fibroids. E: medication is generally used when symptoms require treatment.<br><b>Core:</b> Asymptomatic uterine fibroids generally require observation rather than immediate intervention."
    // Source: 20 Uterus Myoma.pdf, slide on Management of uterine myoma
    // Confidence: high
  },
  {
    question: "27. If a woman was diagnosed with \"premature ovarian failure\", her FSH level may be ( ) IU/L.",
    options: [
      "A. 5",
      "B. 15",
      "C. 20",
      "D. 45",
      "E. 10"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> Premature ovarian failure causes reduced ovarian hormone production and loss of negative feedback, resulting in elevated FSH due to hypergonadotropic hypogonadism.<br><b>Why not:</b> A: low-normal FSH. B: below the classic diagnostic threshold. C: elevated but below the classic threshold. E: generally within the normal range.<br><b>Core:</b> Classic POF criterion: FSH &gt;40 IU/L (verify with slides); diagnostic thresholds may differ between guidelines."
    // Source: 23 Amenorrhea.pdf, slide on Diagnosis / Primary amenorrhea
    // Confidence: high
  },
  {
    question: "28. The most common metastatic mode of choriocarcinoma is: ( )",
    options: [
      "A. Hematogenous spread",
      "B. Lymphatic dissemination",
      "C. Direct extension",
      "D. Implantation metastasis",
      "E. Diffuse diffusion"
    ],
    answerIndex: 0, // A
    explanation: "<b>Why:</b> Choriocarcinoma invades blood vessels early and spreads mainly through the bloodstream to distant organs.<br><b>Why not:</b> B: lymphatic spread is less common. C: describes local invasion rather than the main distant metastatic route. D: implantation spread is not the usual route. E: not a recognized metastatic route.<br><b>Core:</b> Choriocarcinoma = early hematogenous metastasis; lungs are the most common distant site."
    // Source: 29 GTDs (Gestational Trophoblastic Diseases) 2.pdf, slide on Clinical Manifestations
    // Confidence: high
  },
  {
    question: "29. Which of the following is not correct regarding dysgerminoma of ovary? ( )",
    options: [
      "A. sensitive to radiation therapy",
      "B. sensitive to chemotherapy",
      "C. Malignant",
      "D. Unilateral solid tumor",
      "E. Lymphocytic infiltrate"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> Dysgerminoma is usually unilateral, but bilateral tumors can occur, so describing it as exclusively unilateral is not universally correct. (not from slides)<br><b>Why not:</b> A: dysgerminoma is radiosensitive. B: it is also highly sensitive to chemotherapy. C: it is a malignant germ cell tumor. E: lymphocytic infiltration is a characteristic histological finding.<br><b>Core:</b> Dysgerminoma: malignant ovarian germ cell tumor, usually unilateral, with lymphocytic infiltration and sensitivity to radiotherapy and chemotherapy. (not from slides)",
    flag: "check answer"
    // Source: NOT IN SLIDES
    // Confidence: low
  },
  {
    question: "30. An elderly woman, who has been menopausal for 5 years, came to the hospital because of a small amount of vaginal bleeding for 1 day. Her uterus and cervix had atrophied, and the cervical smear was normal. Ultrasound of the uterus and appendages was normal too. The diagnosis should first consider: ( )",
    options: [
      "A. Atrophic vaginitis",
      "B. Uterine empyema",
      "C. Uterine polyps",
      "D. Bacterial vaginosis",
      "E. Vulvovaginal candidiasis"
    ],
    answerIndex: 0, // A
    explanation: "<b>Why:</b> Estrogen deficiency after menopause causes thinning and fragility of the vaginal mucosa, making atrophic vaginitis a likely cause of minor vaginal bleeding in this patient.<br><b>Why not:</b> B: usually associated with intrauterine infection and purulent discharge. C: may cause postmenopausal bleeding but is less supported by the normal ultrasound. D: typically causes thin discharge and fishy odor. E: typically causes intense itching and thick white discharge.<br><b>Core:</b> Postmenopausal atrophic vaginitis = estrogen deficiency → thin, fragile vaginal epithelium → irritation and spotting."
    // Source: 17 Infection of Femal Reporductive System.pdf, slide on Atrophic Vaginitis
    // Confidence: high
  },
];
