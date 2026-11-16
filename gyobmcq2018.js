// This file only contains your data. No HTML or CSS.
const myQuestionBank = [
  {
    question: "1. Embryo implantation occurs in ( )",
    options: [
      "A. Late proliferative phase",
      "B. Early secretory phase",
      "C. Late secretory phase",
      "D. Endometrium with decidua reaction",
      "E. Premenstrual phase"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> Implantation occurs approximately 6–7 days after fertilization, during the secretory phase when progesterone has prepared the endometrium for implantation.<br><b>Why not:</b> A: occurs before ovulation. B: generally precedes the implantation window. D: decidual reaction develops in response to implantation. E: occurs near menstruation when hormone levels decline.<br><b>Core:</b> Implantation window = approximately days 20–24 of a 28-day menstrual cycle."
    // Source: 01 Female Reproduction Physiology 1.pdf, slide on Uterine cycle
    // Confidence: high
  },
  {
    question: "2. The ovulation occurs on ( )",
    options: [
      "A. In the middle of two consecutive menstrual phases",
      "B. 12 days before the next menstruation",
      "C. 14 days before the next menstruation",
      "D. 14 days after the beginning day of last menstruation",
      "E. 14 days after the end of last menstruation"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> Ovulation usually occurs approximately 14 days before the next menstruation because the luteal phase is relatively constant.<br><b>Why not:</b> A: only approximately true for a regular 28-day cycle. B: not the usual luteal phase duration. D: varies with menstrual cycle length. E: depends on the duration of menstruation.<br><b>Core:</b> Estimated ovulation day = cycle length - 14 days."
    // Source: 01 Female Reproduction Physiology 1.pdf, slide 13
    // Confidence: high
  },
  {
    question: "3. ( ) is the main bacterium of a normal vagina?",
    options: [
      "A. Lactobacillus",
      "B. Corynebacteria",
      "C. Escherichia coli",
      "D. Bacteroides",
      "E. Clostridium"
    ],
    answerIndex: 0, // A
    explanation: "<b>Why:</b> Lactobacillus is the predominant protective bacterium in normal vaginal flora. It produces lactic acid, maintaining an acidic vaginal environment.<br><b>Why not:</b> B: may be present as a minor commensal. C: intestinal bacterium that can cause infection. D: anaerobic bacteria associated with bacterial vaginosis. E: anaerobic spore-forming bacteria, not the predominant normal flora.<br><b>Core:</b> Lactobacillus → lactic acid production → vaginal pH &lt;4.5."
    // Source: 17 Infection of Femal Reporductive System.pdf, slide on The Normal Vagina Physiology-2
    // Confidence: high
  },
  {
    question: "4. During fertilization, the sperm penetrates into the ( )",
    options: [
      "A. Oogonium",
      "B. Primary oocyte",
      "C. Secondary oocyte",
      "D. Secondary follicle",
      "E. Primordial follicle"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> The ovulated cell is a secondary oocyte arrested in metaphase II. Sperm penetration triggers completion of meiosis II.<br><b>Why not:</b> A: precursor germ cell. B: arrested in prophase I before ovulation. D: ovarian follicular structure, not the fertilized cell. E: immature resting follicle.<br><b>Core:</b> Ovulated oocyte = secondary oocyte arrested in metaphase II until fertilization."
    // Source: 01 Female Reproduction Physiology 1.pdf, slide 13
    // Confidence: high
  },
  {
    question: "5. Regarding normal pregnancy, which is correct ( )",
    options: [
      "A. Pregnancy lasts on average 40 weeks from conception",
      "B. If a woman has a long menstrual cycle, the expected date of delivery should be extended to reflect this",
      "C. Most women will deliver on the expected date of delivery",
      "D. Fetuses may be considered independently viable from 20 weeks' gestation",
      "E. Pregnancy lasts on average 38 weeks from LMP"
    ],
    answerIndex: 1, // B
    explanation: "<b>Why:</b> Naegele's rule assumes a 28-day menstrual cycle. With a longer cycle, ovulation usually occurs later, so the expected delivery date should be adjusted later.<br><b>Why not:</b> A: pregnancy lasts approximately 38 weeks from conception. C: only a small proportion deliver on the exact EDD. D: the usual viability threshold is approximately 22–24 weeks (verify with slides). E: pregnancy lasts approximately 40 weeks from LMP.<br><b>Core:</b> Adjust EDD for cycle length: LMP + 280 days + (cycle length - 28 days)."
    // Source: 05 Diagnosis of pregnancy.pdf, slide 6
    // Confidence: high
  },
  {
    question: "6. During the first ( ) weeks after fertilization, the term embryo is used to denote the developing organism because it is during this time that all the major organs are formed.",
    options: [
      "A. 5 weeks",
      "B. 6 weeks",
      "C. 7 weeks",
      "D. 8 weeks",
      "E. 10 weeks"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> The embryonic period extends through the first 8 weeks after fertilization and includes organogenesis. The developing organism is termed a fetus afterward.<br><b>Why not:</b> A: too early. B: organogenesis is still ongoing. C: still within the embryonic period. E: extends beyond the embryonic period.<br><b>Core:</b> Embryo = first 8 weeks after fertilization; fetus = after 8 weeks after fertilization."
    // Source: 03 Pregnancy physiology 1.pdf, slide on Embryo and Fetus definitions
    // Confidence: high
  },
  {
    question: "7. After delivery of a term infant with Apgar scores of 2 at 1 minute and 7 at 5 minutes, you ask that umbilical cord blood be collected for pH. The umbilical arteries carry which of the following ( )",
    options: [
      "A. Oxygenated blood to the placenta",
      "B. Oxygenated blood from the placenta",
      "C. Deoxygenated blood to the placenta",
      "D. Deoxygenated blood from the placenta",
      "E. Oxygenated blood to the fetus"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> The two umbilical arteries carry deoxygenated blood from the fetus to the placenta for gas exchange.<br><b>Why not:</b> A: umbilical arteries carry deoxygenated blood. B: oxygenated blood travels from placenta through the umbilical vein. D: blood flows toward the placenta, not away from it. E: oxygenated blood reaches the fetus through the umbilical vein.<br><b>Core:</b> Two umbilical arteries = deoxygenated blood to placenta; one umbilical vein = oxygenated blood to fetus."
    // Source: 03 Pregnancy physiology 1.pdf, slide on Circulatory function
    // Confidence: high
  },
  {
    question: "8. Pregnancy is confirmed by, except for ( )",
    options: [
      "A. Morning sickness",
      "B. Fetal heart activity",
      "C. Gestational sac in USG",
      "D. Fetal movement by examiner",
      "E. Fetal outline and fetal parts by palpation through the maternal abdominal wall"
    ],
    answerIndex: 0, // A
    explanation: "<b>Why:</b> Morning sickness is a presumptive symptom of pregnancy, not objective confirmation. The other options describe objective findings used to establish pregnancy.<br><b>Why not:</b> B: fetal cardiac activity is a positive sign. C: ultrasound visualization of a gestational sac provides objective evidence. D: fetal movement felt by the examiner is a positive sign. E: fetal parts palpated by the examiner are a positive sign.<br><b>Core:</b> Positive signs of pregnancy include fetal heart activity, fetal movement felt by the examiner, and fetal visualization on ultrasound."
    // Source: 05 Diagnosis of pregnancy.pdf, slide on Positive signs of pregnancy
    // Confidence: high
  },
  {
    question: "9. One may make a diagnosis of labor if ( )",
    options: [
      "A. In a primigravid patient who is 2cm dilated and experiences regular contractions",
      "B. In a multiparous patient with irregular contractions where the cervix is 2 cm dilated as it will admit 1-2 fingers on vaginal examination",
      "C. In a nulliparous woman with irregular contracting who has ruptured her membranes spontaneously",
      "D. In a multiparous patient who is extremely distressed with pains, irregular contractions on the monitor, and who says she lost a show of blood at home",
      "E. In a woman who is having irregular contractions, is distressed by them and who has had a caesarean delivery in her last pregnancy"
    ],
    answerIndex: 0, // A
    explanation: "<b>Why:</b> Regular uterine contractions with cervical dilation support a diagnosis of labor, making A the best option among those listed.<br><b>Why not:</b> B: irregular contractions do not establish true labor. C: membrane rupture alone does not establish labor. D: irregular contractions and bloody show are insufficient. E: irregular contractions alone do not establish labor.<br><b>Core:</b> True labor = regular contractions with progressive cervical effacement and dilation."
    // Source: 06 Normal Labor.pdf, slide on Diagnosis of labor
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
    explanation: "<b>Why:</b> The first stage of labor begins with regular uterine contractions and ends when the cervix reaches full dilation (10 cm).<br><b>Why not:</b> A: membrane rupture can occur at different stages. B: intermediate cervical dilation. D: occurs during the second stage. E: marks the end of the second stage.<br><b>Core:</b> First stage = contractions to full cervical dilation; second stage = full dilation to fetal delivery; third stage = placental delivery."
    // Source: 06 Normal Labor.pdf, slide on Labor stage
    // Confidence: high
  },
  {
    question: "11. Assessment of progress of labor is best done by ( )",
    options: [
      "A. station of head",
      "B. rupture of membrane",
      "C. contraction of uterus",
      "D. partogram",
      "E. position of fetus"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> A partogram is a graphical record of labor progress, monitoring cervical dilation and fetal descent over time.<br><b>Why not:</b> A: measures only fetal descent. B: membrane rupture does not measure labor progress. C: describes uterine activity but not cervical progress. E: describes fetal orientation.<br><b>Core:</b> Partogram = monitoring cervical dilation, fetal descent, and labor progress."
    // Source: 12 Abnormal Labor.pdf, slide on Partogram
    // Confidence: high
  },
  {
    question: "12. Which of the following is the main point to distinguish threatened abortion from inevitable abortion ( )",
    options: [
      "A. The length of vaginal bleeding",
      "B. Degree of the lower abdominal pain",
      "C. Whether the early pregnancy reaction exists",
      "D. The os of cervix is open or closed",
      "E. Positive pregnancy test"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> The cervical os is the key differentiating finding: it is closed in threatened abortion and open (dilated) in inevitable abortion.<br><b>Why not:</b> A: bleeding duration varies. B: pain severity overlaps. C: pregnancy symptoms may occur in both. E: pregnancy tests can remain positive in both.<br><b>Core:</b> Threatened abortion = closed os; inevitable abortion = open os without tissue passage."
    // Source: 07 Abortion.pdf, slide on Classification of abortion
    // Confidence: high
  },
  {
    question: "13. The most common site of tubal pregnancy is ( )",
    options: [
      "A. Isthmus part",
      "B. Umbrella part",
      "C. Interstitial part",
      "D. Funnel part",
      "E. Ampulla part"
    ],
    answerIndex: 4, // E
    explanation: "<b>Why:</b> The ampulla is the most common site of tubal ectopic pregnancy because it is the usual site of fertilization.<br><b>Why not:</b> A: less common than the ampulla. B: fimbrial ectopic pregnancy is less common. C: interstitial pregnancy is relatively uncommon. D: infundibular pregnancy is less common.<br><b>Core:</b> Most common tubal ectopic pregnancy site = ampulla."
    // Source: 07 Abortion.pdf, slide on Ectopic pregnancy
    // Confidence: high
  },
  {
    question: "14. A placental previa patient at 36 gestational-week, with cervix not dilated, has heavy bleeding, how should we treat her now? ( )",
    options: [
      "A. oxytocin infusion",
      "B. cesarean section",
      "C. expectant management",
      "D. delivery by vagina",
      "E. perform antibiotics"
    ],
    answerIndex: 1, // B
    explanation: "<b>Why:</b> Heavy bleeding from placenta previa at 36 weeks requires urgent delivery, and Cesarean section is indicated because the placenta obstructs the birth canal.<br><b>Why not:</b> A: does not control the bleeding or resolve placenta previa. C: unsafe with heavy active bleeding. D: vaginal delivery is generally contraindicated with placenta previa. E: antibiotics do not treat the hemorrhage.<br><b>Core:</b> Placenta previa with heavy active bleeding = urgent Cesarean delivery."
    // Source: 08 Placenta Previa.goodnotes.pdf, slide on Treatment
    // Confidence: high
  },
  {
    question: "15. The most basic pathophysiological change of gestational hypertensive disorders is ( )",
    options: [
      "A. Imbalance of Prostaglandin/thromboxane A",
      "B. Systemic vasospasm",
      "C. Excessive water and sodium retention",
      "D. Blood concentration",
      "E. High condensation state"
    ],
    answerIndex: 1, // B
    explanation: "<b>Why:</b> Generalized small-artery vasospasm is the basic pathological change, increasing vascular resistance and reducing blood flow to maternal organs and the placenta.<br><b>Why not:</b> A: contributes to abnormal vascular regulation. C: may occur secondary to renal dysfunction. D: may result from fluid shifts. E: hypercoagulability is not the primary pathological change.<br><b>Core:</b> Gestational hypertension/preeclampsia: endothelial dysfunction → systemic vasospasm → increased vascular resistance and tissue hypoperfusion."
    // Source: 10 Hypertension disorders of Pregnancy.pdf, slide on Pathophysiology
    // Confidence: high
  },
  {
    question: "16. They are the most susceptible periods for heart failure in patients with heart disease except ( )",
    options: [
      "A. 28 weeks",
      "B. 32 weeks",
      "C. 34 weeks",
      "D. stages of labor",
      "E. 72 hours after delivery"
    ],
    answerIndex: 0, // A
    explanation: "<b>Why:</b> The major high-risk periods are around 32–34 weeks, during labor and delivery, and within 72 hours postpartum. Therefore, 28 weeks is the exception.<br><b>Why not:</b> B: marked maternal blood volume expansion increases cardiac workload. C: near peak cardiovascular stress. D: uterine contractions and blood redistribution increase cardiac workload. E: postpartum autotransfusion increases venous return.<br><b>Core:</b> High-risk periods for maternal heart failure = 32–34 weeks, labor/delivery, and first 72 hours postpartum."
    // Source: 11 Cardiac disease in pregnancy.pdf, slide on Summary-Cardiovascular physiology in pregnancy
    // Confidence: high
  },
  {
    question: "17. The following condition that will not affect vaginal delivery is ( )",
    options: [
      "A. Myoma is in the lower uterine segment.",
      "B. Conglutination of the external cervical.",
      "C. Myoma in front of uterus.",
      "D. Scarring of low segment.",
      "E. Transverse vaginal septa."
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> A fibroid located in the anterior uterine body generally does not obstruct the birth canal, so vaginal delivery may remain possible.<br><b>Why not:</b> A: a lower-segment fibroid may obstruct fetal descent. B: cervical adhesion may prevent cervical dilation. D: a lower-segment uterine scar may increase rupture risk. E: a transverse vaginal septum can mechanically obstruct delivery.<br><b>Core:</b> Fibroid location matters: lower uterine segment or cervical fibroids may obstruct labor; non-obstructing uterine body fibroids may permit vaginal delivery."
    // Source: 20 Uterus Myoma.pdf, slide on Complication in pregnancy of fibroid myoma
    // Confidence: high
  },
  {
    question: "18. Which of the followings about threatened uterine rupture is correct ( )",
    options: [
      "A. often seen in uterine hypotonic dysfunction",
      "B. present pathologic retraction ring",
      "C. the fetal presentation could be engaged in the pelvic inlet",
      "D. fetal heart tone is clear",
      "E. descent of fetal presenting part is normal"
    ],
    answerIndex: 1, // B
    explanation: "<b>Why:</b> Threatened uterine rupture in obstructed labor may produce a pathological retraction ring (Bandl ring), indicating excessive uterine retraction and obstruction.<br><b>Why not:</b> A: usually associated with obstructed labor and abnormal uterine activity, not uterine hypotonia. C: the presenting part is often obstructed and high. D: fetal heart abnormalities may develop. E: fetal descent is usually arrested.<br><b>Core:</b> Bandl ring = pathological retraction ring associated with threatened uterine rupture in obstructed labor."
    // Source: 14 Rupture of Uterus .pdf, slide on Threatened uterine rupture / Pathological ring
    // Confidence: high
  },
  {
    question: "19. The proper vaginal discharge for vaginitis of candida is ( )",
    options: [
      "A. Vaginal secretions are gray and thinly coat the vaginal walls with fishy odor",
      "B. Thick, cottage cheese-like vaginal discharge",
      "C. Yellow or green vaginal discharge with foam",
      "D. Vaginal secretions with fresh blood-stained",
      "E. Purulent vaginal discharge"
    ],
    answerIndex: 1, // B
    explanation: "<b>Why:</b> Vulvovaginal candidiasis typically causes thick, white, clumpy discharge resembling cottage cheese, often accompanied by vulvar itching.<br><b>Why not:</b> A: typical of bacterial vaginosis. C: typical of Trichomonas vaginitis. D: may indicate cervical pathology or contact bleeding. E: suggests cervicitis or another bacterial infection.<br><b>Core:</b> Candida = thick white discharge; BV = thin gray fishy discharge; Trichomonas = yellow-green frothy discharge."
    // Source: 17 Infection of Femal Reporductive System.pdf, slide on Clinical feature of VVC
    // Confidence: high
  },
  {
    question: "20. The following statement is not the sequelae of PID ( )",
    options: [
      "A. Infertility",
      "B. Ectopic pregnancy",
      "C. Chronic pelvic pain",
      "D. Pelvic peritonitis",
      "E. Ovarian cancer"
    ],
    answerIndex: 4, // E
    explanation: "<b>Why:</b> Ovarian cancer is not a recognized typical sequela of pelvic inflammatory disease (PID).<br><b>Why not:</b> A: tubal scarring can cause infertility. B: tubal damage increases ectopic pregnancy risk. C: pelvic adhesions may cause chronic pelvic pain. D: pelvic peritonitis can occur as a complication of PID.<br><b>Core:</b> Major PID sequelae = tubal infertility, ectopic pregnancy, and chronic pelvic pain."
    // Source: 18 Pelvic Inflammatory Disease (PID).pdf, slide on Clinical manifestation of PID
    // Confidence: high
  },
  {
    question: "21. Golden standard for the diagnosis of endometrial tuberculosis was ( )",
    options: [
      "A. Hysterosalpingography",
      "B. Laparoscopy",
      "C. Endometrial pathology",
      "D. Pelvic X-ray",
      "E. Hysteroscopy"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> Endometrial histopathological examination can demonstrate characteristic tuberculous granulomas and provides diagnostic evidence of endometrial tuberculosis.<br><b>Why not:</b> A: shows tubal abnormalities but is not definitive. B: visualizes pelvic lesions but requires tissue confirmation. D: lacks sufficient diagnostic specificity. E: visualizes intrauterine abnormalities but does not provide histological confirmation alone.<br><b>Core:</b> Endometrial pathology through biopsy or diagnostic curettage is the diagnostic method emphasized in the slides."
    // Source: 16 Female Genital TB.pdf, slide on Diagnosis 1, Endometrial pathological examination
    // Confidence: high
  },
  {
    question: "22. Which virus infection could trigger cervical carcinoma ( )",
    options: [
      "A. HBV",
      "B. HIV",
      "C. HSV-I",
      "D. HPV",
      "E. HSV-II"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> Persistent infection with high-risk human papillomavirus (HPV), particularly types 16 and 18, is the major cause of cervical carcinoma.<br><b>Why not:</b> A: associated with hepatitis B and hepatocellular carcinoma. B: causes immunosuppression and indirectly increases cancer risk. C: commonly causes oral herpes. E: commonly causes genital herpes.<br><b>Core:</b> High-risk HPV types 16 and 18 are strongly associated with cervical carcinoma."
    // Source: 19 Cervical Carcinoma.pdf, slide on Etiology
    // Confidence: high
  },
  {
    question: "23. The most common degeneration of myoma of uterus during pregnancy is ( )",
    options: [
      "A. Hyaline degeneration",
      "B. Cystic degeneration",
      "C. Calcification degeneration",
      "D. Sarcomatous change",
      "E. Red degeneration"
    ],
    answerIndex: 4, // E
    explanation: "<b>Why:</b> Rapid fibroid growth during pregnancy may exceed its blood supply, causing hemorrhagic infarction and aseptic necrosis known as red degeneration.<br><b>Why not:</b> A: the most common degenerative change overall. B: may develop following advanced degeneration. C: commonly occurs in older or postmenopausal women. D: malignant transformation is rare.<br><b>Core:</b> Pregnancy-associated uterine fibroid degeneration = red (carneous) degeneration."
    // Source: 20 Uterus Myoma.pdf, slide on Benign degeneration of uterus myoma
    // Confidence: high
  },
  {
    question: "24. Which is the most common pathologic type of endometrial cancer ( )",
    options: [
      "A. Endometrioid carcinoma",
      "B. Serous carcinoma",
      "C. Mucinous carcinoma",
      "D. Clear cell carcinoma",
      "E. Carcinosarcoma"
    ],
    answerIndex: 0, // A
    explanation: "<b>Why:</b> Endometrioid carcinoma is the most common histological type of endometrial cancer and is commonly associated with estrogen exposure.<br><b>Why not:</b> B: less common, aggressive Type II carcinoma. C: uncommon subtype. D: rare aggressive subtype. E: uncommon mixed malignant tumor.<br><b>Core:</b> Endometrioid carcinoma = most common endometrial cancer histology; traditionally classified as Type I."
    // Source: 21 Endometrial Carcinoma.pdf, slide on Pathology - Microscopic examination
    // Confidence: high
  },
  {
    question: "25. Which age female is easily diagnosed as endometriosis ( )",
    options: [
      "A. Children",
      "B. Puberty",
      "C. Reproductive women",
      "D. Perimenopausal women",
      "E. Postmenopausal women"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> Endometriosis is an estrogen-dependent disease that predominantly affects women of reproductive age.<br><b>Why not:</b> A: uncommon before puberty. B: can occur after menarche but is less typical. D: incidence generally decreases as ovarian estrogen production declines. E: uncommon after menopause.<br><b>Core:</b> Endometriosis predominantly affects reproductive-age women because of its estrogen dependence."
    // Source: 22 Endometriosis and Adenomyosis.pdf, slide on Age at Diagnosis
    // Confidence: high
  },
  {
    question: "26. Which secondary amenorrhea does Asherman syndrome belong to according to lesion sites ( )",
    options: [
      "A. Hypothalamic amenorrhea",
      "B. Pituitary amenorrhea",
      "C. Ovarian amenorrhea",
      "D. Uterine amenorrhea",
      "E. Other endocrine diseases"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> Asherman syndrome causes intrauterine adhesions that damage or obstruct the endometrial cavity, producing uterine-factor amenorrhea.<br><b>Why not:</b> A: involves hypothalamic GnRH regulation. B: involves pituitary dysfunction. C: involves ovarian dysfunction. E: involves systemic endocrine disorders.<br><b>Core:</b> Asherman syndrome = intrauterine adhesions (synechiae) → uterine amenorrhea."
    // Source: 23 Amenorrhea.pdf, slide on Lesion sites / Uterine amenorrhea
    // Confidence: high
  },
  {
    question: "27. Which definition is not correct about normal menses ( )",
    options: [
      "A. Mean cycle is 21-35 days.",
      "B. Mean interval is 3-7 days.",
      "C. Average blood loss with menstruation is 5-80 ml.",
      "D. The uterine bleeding after menopause is normal menses.",
      "E. The uterine bleeding before menarche is not normal menses."
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> Postmenopausal uterine bleeding is abnormal because menstruation should cease after menopause. It requires investigation to exclude endometrial pathology.<br><b>Why not:</b> A: normal menstrual cycle interval is 21–35 days. B: normal menstrual duration is approximately 3–7 days. C: the traditional reference range for menstrual blood loss is 5–80 mL. E: bleeding before menarche is abnormal.<br><b>Core:</b> Any postmenopausal bleeding requires evaluation to exclude endometrial malignancy."
    // Source: 01 Female Reproduction Physiology 1.pdf, slide on Normal Menstruation
    // Confidence: high
  },
  {
    question: "28. The most common complication of ovarian tumors is ( )",
    options: [
      "A. Cystic degeneration",
      "B. Rupture",
      "C. Malignancy",
      "D. Torsion",
      "E. Infection"
    ],
    answerIndex: 3, // D
    explanation: "<b>Why:</b> Pedicle torsion is a common acute complication of ovarian tumors, particularly mobile benign ovarian masses, causing sudden severe lower abdominal pain.<br><b>Why not:</b> A: degenerative change rather than a typical acute complication. B: ovarian tumor rupture can occur but is less commonly the selected complication. C: malignant transformation is not the most common complication. E: infection is uncommon.<br><b>Core:</b> Ovarian torsion = twisting of the ovarian vascular pedicle → impaired venous drainage and potentially ovarian ischemia."
    // Source: 25 Ovarian cancer1.pdf, slide on Complications of Ovarian Tumors
    // Confidence: high
  },
  {
    question: "29. Which of the ovarian tumors is the most sensitive to radiation therapy ( )",
    options: [
      "A. Endodermal sinus tumors",
      "B. Serous cystadenocarcinoma",
      "C. Dysgerminoma",
      "D. Mucinous cystadenocarcinoma",
      "E. Brenner tumor"
    ],
    answerIndex: 2, // C
    explanation: "<b>Why:</b> Dysgerminoma is a malignant ovarian germ cell tumor with marked radiosensitivity.<br><b>Why not:</b> A: yolk sac tumor is primarily treated with chemotherapy. B: treated mainly with surgery and platinum-based chemotherapy. D: epithelial tumor not characteristically radiosensitive. E: usually a benign epithelial tumor treated surgically.<br><b>Core:</b> Dysgerminoma = highly radiosensitive ovarian germ cell tumor."
    // Source: 26 Ovarian cancer2.pdf, slide on Review exercises-Single choice
    // Confidence: high
  },
  {
    question: "30. Which of the following managements fits for the choriocarcinoma best ( )",
    options: [
      "A. Hysterectomy",
      "B. Chinese medicine",
      "C. Immunotherapy",
      "D. Radiotherapy",
      "E. Chemotherapy"
    ],
    answerIndex: 4, // E
    explanation: "<b>Why:</b> Choriocarcinoma is highly sensitive to chemotherapy, which is the primary treatment and can achieve remission even in patients with metastatic disease.<br><b>Why not:</b> A: reserved for selected cases, such as uncontrolled bleeding or selected chemoresistant disease. B: not an established definitive treatment. C: not standard first-line therapy. D: may be considered for selected metastatic complications but is not the primary treatment.<br><b>Core:</b> Choriocarcinoma = highly chemosensitive malignancy; chemotherapy is the main treatment."
    // Source: 29 GTDs (Gestational Trophoblastic Diseases) 2.pdf, slide on Treatment
    // Confidence: high
  }


];
