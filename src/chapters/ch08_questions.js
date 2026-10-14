// Chapter 8 practice questions — all MCQ, matching the exam format.

export default [
  {
    q: 'Approximately how much did US organizations spend on training in 2019?',
    type: 'mcq',
    choices: ['$8.3 billion', '$83 billion', '$830 million', '$1.2 billion'],
    correct: 1,
    difficulty: 'M',
    explanation: '$83 billion (Freifeld, 2019). The companion figure is that the average employer spent over $1,200 per employee in 2018 — do not confuse the two.'
  },
  {
    q: 'The chapter’s central tension about training practice is that:',
    type: 'mcq',
    choices: [
      'Training research has produced few usable findings',
      'Just because research has shown what practices work does not mean organizations actually follow them',
      'Training is too expensive for most organizations to attempt',
      'Training effectiveness cannot be measured'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'The worked example is the needs assessment: it demonstrably adds to effectiveness, yet many organizations skip it. This drives the chapter’s framing question — how do we know the money is being put to good use?'
  },
  {
    q: 'Which is NOT one of the four steps in the training process shown in Figure 8.2?',
    type: 'mcq',
    choices: [
      'Conduct training needs assessment',
      'Consider characteristics of the trainees and the context',
      'Negotiate the training budget with senior leadership',
      'Conduct training evaluation'
    ],
    correct: 2,
    difficulty: 'M',
    explanation: 'The four steps are: needs assessment → consider trainee and context characteristics → choose and administer the training method → conduct evaluation. Budget is examined WITHIN the organizational analysis, not as its own step.'
  },
  {
    q: 'A training needs assessment is defined as the process by which an organization identifies:',
    type: 'mcq',
    choices: [
      'Which training vendors offer the best price',
      'The key factors that will support the training program, what needs to be trained, and who needs the training',
      'Whether training produced a change in profitability',
      'The validity coefficient of a training program'
    ],
    correct: 1,
    difficulty: 'E',
    explanation: 'This is the glossary definition, and it maps onto the four analyses: organizational (supporting factors), job (what to train), person (who needs it), demographic (who the trainees are).'
  },
  {
    q: 'Which question belongs to the ORGANIZATIONAL analysis rather than the other three?',
    type: 'mcq',
    choices: [
      'What KSAs do employees need to perform the job?',
      'What skills do employees already have?',
      'Is the culture supportive of training, and what resources are available?',
      'What is the background and experience of the trainees?'
    ],
    correct: 2,
    difficulty: 'M',
    explanation: 'Figure 8.3 assigns resources and culture to the organizational analysis. Option A is job analysis, B is person analysis, D is demographic analysis.'
  },
  {
    q: 'What is the correct order of the needs assessment steps?',
    type: 'mcq',
    choices: [
      'Person → Job → Organizational → Demographic',
      'Organizational → Job → Person → Demographic',
      'Demographic → Organizational → Job → Person',
      'Job → Organizational → Demographic → Person'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Training goals are established after the first three (comparing job requirements against person capabilities), with the demographic analysis completing the assessment.'
  },
  {
    q: 'Why does the chapter say a person analysis is necessary?',
    type: 'mcq',
    choices: [
      'Because employees often misreport their own job duties',
      'Because most employees will already have many of the KSAs the job requires, so training should target only the gap',
      'Because legal guidelines require individual assessment before training',
      'Because it identifies the organization’s training budget'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'A job analysis might identify 20 KSAs, but most employees already have many. The chapter: "it would not make sense for the organization to waste time — and resources — on training employees to do things that they can already do."'
  },
  {
    q: 'Training goals are derived by comparing:',
    type: 'mcq',
    choices: [
      'What competitors train against what this organization trains',
      'What the job analysis says employees should do against what the person analysis says they can already do',
      'Pre-training test scores against post-training test scores',
      'Trainee reactions against learning outcomes'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Training goals target the GAP between required and existing capability, and must be stated in behaviorally specific terms.'
  },
  {
    q: 'Which is the better training goal according to the chapter’s barista example, and why?',
    type: 'mcq',
    choices: [
      '"Ability to make espresso drinks" — because broad goals allow flexibility',
      '"Ability to make different espresso drinks correctly in two minutes using the standard company equipment" — because it is behaviorally specific',
      'Both are equally useful',
      'Neither, because training goals should be set by trainees'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Behavioral specificity matters to two groups: the trainer (to develop training, give feedback, and assess whether goals are met) and the trainees (to learn effectively and know whether they are on track).'
  },
  {
    q: 'Google’s "Project Oxygen" is used in the chapter as an example of:',
    type: 'mcq',
    choices: [
      'A demographic analysis',
      'A person analysis that identified eight key manager behaviors and informed a management training course',
      'A Kirkpatrick Level 4 results evaluation',
      'A cross-cultural training program'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'People Operations analyzed performance reviews, award nominations, feedback surveys, and interviews to learn how to train better bosses, then built a developmental course around the eight behaviors identified.'
  },
  {
    q: 'Transfer of training is defined as:',
    type: 'mcq',
    choices: [
      'Moving trainees between departments after training',
      'The degree to which training leads to improvements in on-the-job behavior',
      'The transfer of training responsibility from HR to supervisors',
      'Trainees teaching their coworkers what they learned'
    ],
    correct: 1,
    difficulty: 'E',
    explanation: 'This is the goal of the entire training enterprise. Option D describes DIFFUSION OF TREATMENTS, a threat to internal validity in training evaluation.'
  },
  {
    q: 'In Figure 8.4, individual and organizational characteristics affect training outcomes primarily THROUGH which variable?',
    type: 'mcq',
    choices: ['Cognitive ability', 'Training motivation', 'Transfer climate', 'Learning style'],
    correct: 1,
    difficulty: 'H',
    explanation: 'Training motivation is the mediator. Colquitt et al. (2000) found it affects outcomes even beyond the effects of cognitive ability, and that it is itself a function of both person variables and climate.'
  },
  {
    q: 'A learner focused on proving their competence to others and avoiding criticism has a:',
    type: 'mcq',
    choices: ['Learning goal orientation', 'Performance goal orientation', 'Internal locus of control', 'High meta-cognitive skill'],
    correct: 1,
    difficulty: 'M',
    explanation: 'Payne et al. (2007) found that people focused exclusively on performance (e.g., passing the test) do LESS well in training than those focused on learning the content.'
  },
  {
    q: 'Which statement about learning and performance goal orientation is correct?',
    type: 'mcq',
    choices: [
      'They are opposite ends of a single scale, so being high on one means being low on the other',
      'A person can be high on both, high on only one, or low on both',
      'Only learning goal orientation can be influenced by context',
      'Performance goal orientation always produces better training outcomes'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'They are separate dimensions. The chapter also notes orientation may depend on the learning context (DeShon & Gillespie, 2005), so organizations can change reward systems to push trainees toward learning.'
  },
  {
    q: 'What does the chapter say about matching training modes to learners’ preferred learning styles?',
    type: 'mcq',
    choices: [
      'Matching reliably improves retention and should always be done',
      'Research supports that matching learning styles and training modes does NOT necessarily lead to better retention',
      'Matching only works for kinesthetic learners',
      'Learning styles are not discussed in the chapter'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Galagan (2014). The chapter notes trying NEW approaches to learning can effectively expand one’s approach, and that learning style is still useful as a way for trainers to think about variety.'
  },
  {
    q: 'Kruger and Dunning’s (1999) findings imply which training recommendation?',
    type: 'mcq',
    choices: [
      'Low performers should be removed from training programs',
      'Provide assessments and frequent feedback, especially to low performers, since poor performers overestimate how well they are doing',
      'Feedback should be withheld until training is complete',
      'High performers need more feedback than low performers'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Poor performers overestimate their performance and may even discount feedback (Sheldon et al., 2014). Sitzmann and Ely (2010) add that frequent reminders to self-regulate can increase learning.'
  },
  {
    q: 'A company trains oil rig repair technicians using only classroom lectures. Which concept best explains why transfer is likely to be poor?',
    type: 'mcq',
    choices: [
      'Decay of learning',
      'Identical elements — the training context is dissimilar to the transfer environment',
      'Compensatory rivalry',
      'Massed learning'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'This is the chapter’s own example. A SIMULATION of actual rig conditions would improve transfer by raising both physical and psychological fidelity.'
  },
  {
    q: 'Psychological fidelity refers to the degree to which training:',
    type: 'mcq',
    choices: [
      'Resembles the physical aspects of the job',
      'Elicits the KSAs needed to do the job',
      'Is perceived as meaningful by trainees',
      'Reduces trainee anxiety'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Physical fidelity is option A. The same term pair appears in Chapter 6 for work samples — psychological fidelity underwrites content validity, physical fidelity drives applicant/trainee appeal.'
  },
  {
    q: 'Training a customer service agent by explaining company policy and WHY deliveries are handled a certain way — not just what to say — is an example of:',
    type: 'mcq',
    choices: ['Transfer through principles', 'Overlearning', 'Behavior modeling training', 'Error management training'],
    correct: 0,
    difficulty: 'M',
    explanation: 'Transfer through principles equips the agent to handle UNIQUE SITUATIONS NOT COVERED IN TRAINING, producing better transfer performance.'
  },
  {
    q: 'A nurse is trained in a new medication-verification method, but her ward already has an accepted system and coworkers tell her "this is how we do it here." This illustrates:',
    type: 'mcq',
    choices: ['Low psychological fidelity', 'Poor transfer climate', 'Decay of learning', 'Resentful demoralization'],
    correct: 1,
    difficulty: 'M',
    explanation: 'Transfer climate is the degree to which the social climate among employees back at work supports training. Blume et al. (2010) found meta-analytically that a supportive environment enhances transfer.'
  },
  {
    q: 'According to the chapter, how should a misalignment between training content and actual work practice be addressed?',
    type: 'mcq',
    choices: [
      'Always change the work practice to match the training',
      'Assess the transfer situation during the NEEDS ASSESSMENT, then either adapt the training to fit actual practice or address the transfer climate',
      'Retrain employees more frequently',
      'Switch to online delivery'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'The fix is diagnostic and bidirectional — catch the misalignment early, then decide whether the training or the workplace should change.'
  },
  {
    q: 'Which of the following is NOT one of Salas et al.’s (2012) Table 8.1 recommendations for ensuring transfer after training?',
    type: 'mcq',
    choices: [
      'Remove obstacles to transfer and ensure trainees get a chance to apply what they learned',
      'Provide support to supervisors so they can help employees apply learned skills',
      'Use real-world debriefs where employees discuss how they applied the training',
      'Require trainees to retake the training annually regardless of performance'
    ],
    correct: 3,
    difficulty: 'H',
    explanation: 'The fourth actual recommendation is providing supports like access to databases and resources for questions. Mandatory annual retraining is not among them.'
  },
  {
    q: 'Error management training enhances transfer particularly for:',
    type: 'mcq',
    choices: ['Routine tasks', 'Novel tasks', 'Physical tasks only', 'Team tasks only'],
    correct: 1,
    difficulty: 'H',
    explanation: 'Keith and Frese (2008). It works by explicitly treating errors during training as a natural part of learning rather than as failures to be avoided.'
  },
  {
    q: 'In the SMART framework, the "A" stands for:',
    type: 'mcq',
    choices: ['Accurate', 'Attainable (aggressive but achievable)', 'Assessed', 'Aligned'],
    correct: 1,
    difficulty: 'M',
    explanation: 'Figure 8.5: Specific, Measurable, Attainable (aggressive AND achievable), Relevant, Timely. SMART is the training application of goal-setting theory (Locke & Latham, 2002).'
  },
  {
    q: 'Smith-Jentsch et al. (1996) found that airplane pilots improved their training performance when they:',
    type: 'mcq',
    choices: [
      'Received the training in spaced rather than massed sessions',
      'Had experienced a "negative pre-training event" — a dangerous situation on the job',
      'Were high in performance goal orientation',
      'Completed the training online'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Those pilots likely perceived the training as more instrumental or MEANINGFUL to their safety. Burke et al. (2011) replicated the pattern meta-analytically for hazard exposure and safety training.'
  },
  {
    q: 'Watson et al. (2013) found that monitoring people during online learning produced lower learning among trainees who were high in:',
    type: 'mcq',
    choices: ['Learning goal orientation', 'Performance goal orientation', 'Cognitive ability', 'Openness to experience'],
    correct: 1,
    difficulty: 'H',
    explanation: 'They worried about being evaluated poorly. This connects the stress literature (LePine et al., 2004) to goal orientation — exhaustion and evaluation anxiety consume attention that learning requires.'
  },
  {
    q: 'Which statement about massed versus spaced learning is correct?',
    type: 'mcq',
    choices: [
      'Massed learning is generally superior for retention',
      'Spaced learning is generally superior for retention, but massed learning is often chosen for pragmatic reasons',
      'They are equally effective in all circumstances',
      'Spaced learning is only appropriate for managerial training'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Spacing lets learners organize and integrate material. Massed persists because of trainer availability, travel cost, resource constraints, and the need for faster delivery of new skills.'
  },
  {
    q: 'Providing learners with the outline and logic of training material BEFORE training begins is called:',
    type: 'mcq',
    choices: ['Debriefing', 'Advanced organizers', 'Overlearning', 'Microlearning'],
    correct: 1,
    difficulty: 'M',
    explanation: 'Closely related to the learning schema — a framework for organizing content. The textbook points at itself: chapter learning goals and the table of contents are advanced organizers.'
  },
  {
    q: 'Overlearning is MOST appropriate for which kind of behavior?',
    type: 'mcq',
    choices: [
      'Routine administrative tasks performed daily',
      'Critical behaviors that rarely occur on the job or are performed under stressful conditions',
      'Any behavior, since more practice is always better',
      'Behaviors that are easy to learn initially'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Overlearning costs extra time and resources, so it is not recommended for all skills. The chapter’s example is nuclear power plant emergency procedures — rare, highly stressful, and where "overlearning can be lifesaving."'
  },
  {
    q: 'In Figure 8.6, what pattern does job knowledge follow across the three time points?',
    type: 'mcq',
    choices: [
      'It rises steadily from baseline through six months',
      'It rises sharply immediately after training, then declines by six months',
      'It stays flat until six months, then rises',
      'It declines immediately after training, then recovers'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Roughly 1.5 at baseline → 3.5 immediately after → 2.5 at six months. This is DECAY OF LEARNING, countered by overlearning and periodic "booster" training.'
  },
  {
    q: 'Decay of learning is especially a problem when:',
    type: 'mcq',
    choices: [
      'Training was delivered online',
      'The learned knowledge or behavior is not practiced frequently on the job',
      'Trainees had high cognitive ability',
      'The training used spaced rather than massed delivery'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'If workers rarely encounter the situation — e.g., rarely deal with grouchy customers — the behavior degrades. Overlearning and booster training are the two named remedies.'
  },
  {
    q: 'In theory, on-the-job training (OJT) should produce near-perfect transfer because:',
    type: 'mcq',
    choices: [
      'It is the cheapest method available',
      'It has nearly perfect psychological AND physical fidelity',
      'It always includes formal debriefing',
      'Trainers are specially certified'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'The training context IS the job. The chapter’s point is that OJT fails in practice for organizational reasons, not conceptual ones.'
  },
  {
    q: 'What does the chapter identify as the main practical problem with OJT?',
    type: 'mcq',
    choices: [
      'It is too expensive to administer',
      'The "trainer" employee is usually not taught how to train and must keep up their regular job responsibilities as well',
      'It has low physical fidelity',
      'It cannot be evaluated'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'There is typically no formal "train-the-trainer" program, and the added workload "may cause resentments." OJT may work best when preceded by some other training such as a lecture.'
  },
  {
    q: 'Besides safety, what second advantage do machine simulators offer over learning on the job?',
    type: 'mcq',
    choices: [
      'They are cheaper than classroom training',
      'They let learners experience critical but INFREQUENTLY OCCURRING situations',
      'They eliminate the need for debriefing',
      'They guarantee Level 4 results'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'The chapter’s example is wind shear — dangerous, rare, and something pilots must know how to handle. Simulators cost upwards of millions of dollars, so option A is wrong.'
  },
  {
    q: 'The European Space Agency had astronauts live in underground caves in Italy for a week. This illustrates that:',
    type: 'mcq',
    choices: [
      'Simulations do not have to involve machinery — the key is simulating actual working conditions as closely as possible',
      'Overlearning is required for space missions',
      'Massed learning is superior for technical skills',
      'Debriefing is unnecessary in high-fidelity training'
    ],
    correct: 0,
    difficulty: 'H',
    explanation: 'Conditions included total isolation, complete darkness, and physical danger. Participants rated the program highly due to its close resemblance to actual ISS working conditions.'
  },
  {
    q: 'Debriefing is defined as talking with trainees about:',
    type: 'mcq',
    choices: [
      'Their reactions to the trainer’s presentation style',
      'What happened in the training, what could have been done better, and what was learned',
      'Their career development goals',
      'The organization’s strategic plan'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'It is how individuals and teams "turn their experiences into actual learning" (Villado & Arthur, 2013), and is routinely used in Army training exercises and surgical team training.'
  },
  {
    q: 'Lecture is MOST effective when used to:',
    type: 'mcq',
    choices: [
      'Train complex behavioral and interpersonal skills',
      'Disseminate facts or basic knowledge to a large number of learners, or deliver a learning schema',
      'Replace simulation in high-risk jobs',
      'Provide individualized pacing'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'One-way lecture is explicitly NOT effective for training behaviors and skills. Behavior modeling training is the method for interpersonal skills; programmed instruction provides individualized pacing.'
  },
  {
    q: 'Why is the name "programmed instruction" potentially misleading?',
    type: 'mcq',
    choices: [
      'Because it is not actually structured',
      'Because "programmed" refers to a program of structured instruction developed in the 1950s, not to computer delivery',
      'Because it cannot be delivered by computer',
      'Because it does not include quizzes'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'It was originally presented as a booklet of written content. It often IS computer-delivered today, but that is not where the name comes from.'
  },
  {
    q: 'In BRANCHING programmed instruction, a learner who answers incorrectly may:',
    type: 'mcq',
    choices: [
      'Only repeat the previous module',
      'Repeat the module, repeat part of the module, or go to a "remedial" module',
      'Skip ahead to the next module',
      'Be removed from the program'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'LINEAR programmed instruction offers only the two options in A. Branching is more expensive to develop because of this added complexity.'
  },
  {
    q: 'Behavior modeling training follows which sequence?',
    type: 'mcq',
    choices: [
      'Lecture → quiz → remediation',
      'Observe a model → role-play a similar situation → receive feedback from other learners and the trainer',
      'Pretest → training → posttest',
      'Needs assessment → goal setting → evaluation'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'BMT is based on Bandura’s social learning theory and is typically used for behaviorally complex skills such as interpersonal skills, often in supervisor training.'
  },
  {
    q: 'Taylor et al.’s (2005) meta-analysis found that BMT transfer is helped by:',
    type: 'mcq',
    choices: [
      'Presenting only positive models, so learners are not confused',
      'Presenting BOTH positive and negative models',
      'Removing the role-play component',
      'Delivering it exclusively online'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Showing both a supervisor doing a good job AND one doing a poor job aids transfer, confirming Baldwin (1992). The meta-analysis also found BMT’s effects on job behavior do not decay quickly.'
  },
  {
    q: 'Bezrukova et al. (2016) found diversity training is most effective when:',
    type: 'mcq',
    choices: [
      'It is delivered as a single intensive session',
      'Other diversity initiatives are in place, it addresses both awareness AND skills, and it is conducted over a period of time',
      'It focuses exclusively on legal compliance',
      'It is mandatory for all employees'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Roberson (2019) adds the critique that many organizations treat diversity training as "one-size-fits-all" rather than tailoring it through a needs assessment.'
  },
  {
    q: 'Dahling et al. (2016) studied managerial coaching and found that:',
    type: 'mcq',
    choices: [
      'More frequent coaching always improved employee performance',
      'Coaching SKILL related to employees making sales goals, and for LESS SKILLFUL coaches, frequent coaching was related to POORER performance',
      'Coaching had no relationship to any outcome',
      'Only external coaches were effective'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Quality matters more than quantity — and bad coaching done often is actively harmful. The chapter notes research on coaching remains sparse.'
  },
  {
    q: 'Cable et al. (2013) studied onboarding at an Indian call center and found that employees who were told what a great company they had joined:',
    type: 'mcq',
    choices: [
      'Performed better and stayed longer',
      'Were LESS likely to perform well and stay than employees encouraged to express their authentic selves',
      'Showed no difference from the comparison group',
      'Reported higher reactions but identical behavior'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'The chapter emphasizes that the difference in NEO content was subtle but produced big differences in results — an argument against generic company-boosterism in orientation.'
  },
  {
    q: 'Onboarding is defined as the process through which employees become familiar with:',
    type: 'mcq',
    choices: [
      'The organization’s financial performance',
      'Both the TASK and SOCIAL demands of their new roles',
      'Their legal rights as employees',
      'The training evaluation criteria'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Newcomers also learn the organization’s history, language, politics, people, goals/values, and performance proficiency (Chao et al., 1994).'
  },
  {
    q: 'Sitzmann et al.’s (2006) meta-analysis found that online training is:',
    type: 'mcq',
    choices: [
      'Always superior to classroom training',
      'About the same as classroom training for knowledge, and MORE effective if trainees are given control and can practice and receive feedback',
      'Always inferior to classroom training',
      'Effective only for managerial populations'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'The conditional is the key part — control plus practice plus feedback is what produces the advantage, not the medium itself.'
  },
  {
    q: 'Why does the chapter insist that online training is a "medium, not a method"?',
    type: 'mcq',
    choices: [
      'Because it cannot deliver interactive content',
      'Because it can be used to deliver very different methods — programmed instruction OR lecture — which suit very different skills',
      'Because it is always cheaper than classroom training',
      'Because it has no effect on learning outcomes'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Saying "we use e-learning" specifies the delivery channel but says nothing about the instructional method, so it cannot by itself predict effectiveness.'
  },
  {
    q: 'Hughes et al.’s (2016) meta-analysis of medical team training found that it improved:',
    type: 'mcq',
    choices: [
      'Trainee reactions only',
      'All training outcomes including PATIENT MORTALITY',
      'Knowledge but not behavior',
      'Team cohesion but not performance'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'This is one of the chapter’s strongest demonstrations of Kirkpatrick Level 4 results. Cross-training (team members learning each other’s jobs) also increased shared models for team interaction (Marks et al., 2002).'
  },
  {
    q: 'Which is NOT one of the three reasons the chapter gives for why organizations fail to evaluate training?',
    type: 'mcq',
    choices: [
      'They may not feel the need — "if everyone liked it, isn’t that good enough?"',
      'Trainers may want to avoid scrutiny of a costly program in case they find an answer they dislike',
      'Evaluation is time-consuming and many trainers are not trained in how to do it',
      'Evaluation is prohibited by the Uniform Guidelines'
    ],
    correct: 3,
    difficulty: 'M',
    explanation: 'The Uniform Guidelines actually push the other direction — if training is used for hiring or promotion it must be monitored and defensible.'
  },
  {
    q: 'If poor, unreliable measures are used to evaluate a training program, the more likely outcome is that:',
    type: 'mcq',
    choices: [
      'A poor training program looks as if it works',
      'An excellent training program looks as if it did NOT work',
      'Results are unaffected by measure quality',
      'Only Level 1 criteria are distorted'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'This is the Chapter 4 principle that an unreliable criterion cannot detect differences among people. The chapter notes this asymmetry is what makes evaluation feel risky to attempt.'
  },
  {
    q: 'Which of Kirkpatrick’s four levels is described as the MOST DIFFICULT to assess, and why?',
    type: 'mcq',
    choices: [
      'Reactions, because surveys have low response rates',
      'Learning, because tests must be validated',
      'Behavior, because supervisors resist providing ratings',
      'Results, because many other factors besides training affect organizational performance'
    ],
    correct: 3,
    difficulty: 'M',
    explanation: 'Results criteria concern organizational outcomes such as profitability, and isolating training’s contribution from everything else influencing the business is extremely hard.'
  },
  {
    q: 'Which Kirkpatrick level corresponds most directly to TRANSFER of training?',
    type: 'mcq',
    choices: ['Reactions', 'Learning', 'Behavior', 'Results'],
    correct: 2,
    difficulty: 'M',
    explanation: 'Behavior criteria indicate whether training led to changes in on-the-job behavior. Alliger et al. (1997) made this explicit by redefining the behavior level as transfer.'
  },
  {
    q: 'Alliger et al. (1997) produced which finding that complicates the usual dismissal of "reactions" criteria?',
    type: 'mcq',
    choices: [
      'All reactions criteria predict transfer equally well',
      'Trainee perceptions of UTILITY are related to whether transfer takes place',
      'Reactions are the only criteria worth collecting',
      'Reactions and results are statistically identical'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Trainees may be able to tell you whether a program is effective. The same work found the reverse surprise — learning outcomes are NOT necessarily associated with transfer into job behaviors.'
  },
  {
    q: 'Kraiger et al. (1993) reframed training outcomes into which three categories?',
    type: 'mcq',
    choices: [
      'Reactions, learning, behavior',
      'Cognitive, skill-based, and affective',
      'Individual, team, and organizational',
      'Internal, external, and construct'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Affective outcomes include changes in attitudes and in employee motivation and self-efficacy. The reframing responds to the criticism that Kirkpatrick’s levels mark WHEN measures are collected rather than WHAT they qualitatively are.'
  },
  {
    q: 'Employees receive a pay raise between the pretest and posttest of a training evaluation. This is an example of which threat?',
    type: 'mcq',
    choices: ['Maturation', 'History', 'Instrumentation', 'Regression to the mean'],
    correct: 1,
    difficulty: 'M',
    explanation: 'History is when an event occurs between pretest and posttest at about the same time as training, making it impossible to tell which caused the change.'
  },
  {
    q: 'New employees’ performance improves after training, but they were also naturally growing into their jobs over the same period. This is:',
    type: 'mcq',
    choices: ['Testing', 'Maturation', 'Diffusion of treatments', 'Compensatory rivalry'],
    correct: 1,
    difficulty: 'M',
    explanation: 'Maturation is when trainees actually mature or change between pretest and posttest. A TIME SERIES design helps detect it, since flat T1–T3 scores followed by a bump at T4 argue against maturation.'
  },
  {
    q: 'Employees are selected for training BECAUSE they scored very low on an assessment. Their scores improve afterward. Which threat is most relevant?',
    type: 'mcq',
    choices: ['Statistical regression to the mean', 'Experimental mortality', 'Instrumentation', 'Reactive effects of pretesting'],
    correct: 0,
    difficulty: 'H',
    explanation: 'People with extreme scores on one occasion tend toward the middle on a second. The chapter notes this is a real issue because people are often chosen for training precisely for scoring very low (remedial) or very high ("high potentials").'
  },
  {
    q: 'A control group learns they are not being trained and works harder to outperform the trained group. This is:',
    type: 'mcq',
    choices: ['Resentful demoralization', 'Compensatory rivalry', 'Compensatory equalization of treatments', 'Diffusion of treatments'],
    correct: 1,
    difficulty: 'H',
    explanation: 'Rivalry MINIMIZES the apparent training effect. Resentful demoralization is the opposite — the control group gives up and performs worse, making training look better than it is.'
  },
  {
    q: 'Trained employees return to the worksite and teach their control-group coworkers what they learned. This threat is called:',
    type: 'mcq',
    choices: ['Compensatory equalization', 'Diffusion of treatments', 'Experimental mortality', 'Testing'],
    correct: 1,
    difficulty: 'M',
    explanation: 'Good for the workers, bad for the evaluation — it can make effective training look ineffective by raising the control group’s performance.'
  },
  {
    q: 'The fix for BOTH compensatory rivalry and resentful demoralization is to:',
    type: 'mcq',
    choices: [
      'Increase the sample size',
      'Keep the control group blind to being a control group, or tell them they will be trained later',
      'Add a pretest',
      'Use a posttest-only design'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Both threats arise from the control group KNOWING it was excluded, so both are addressed by managing that knowledge.'
  },
  {
    q: 'Trainees try harder because they know they are part of a study. Which threat is this, and what was it called in Chapter 1?',
    type: 'mcq',
    choices: [
      'A threat to internal validity; the placebo effect',
      'A threat to EXTERNAL validity; the Hawthorne effect',
      'A threat to internal validity; regression to the mean',
      'A threat to external validity; the Flynn effect'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'The chapter labels it "reactive effects of the experimental setting" and explicitly ties it to the Hawthorne effect. The concern is that outside a "special" evaluation setting, participants may not do so well.'
  },
  {
    q: 'Experimental rigor is increased by which three features?',
    type: 'mcq',
    choices: [
      'Large samples, long follow-up, and multiple trainers',
      'Control groups, random assignment, and the use of pretests',
      'Reactions, learning, and behavior criteria',
      'Needs assessment, goal setting, and debriefing'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Counting how many of these three a design has is the quickest way to rank its rigor. Generally the more rigorous the design, the more threats are controlled — but the harder it is to implement.'
  },
  {
    q: 'The design notated "X  T2" is a:',
    type: 'mcq',
    choices: [
      'True experiment',
      'Pre-experiment (posttest only, no control group) that controls essentially no threats',
      'Quasi-experiment',
      'Solomon 4-group design'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'With no baseline and no control group, it can only confirm that trainees possess the KSAs afterward. The chapter notes this may be acceptable when you do not care whether training CAUSED the improvement.'
  },
  {
    q: 'Which design allows you to see how well training would work WITHOUT a pretest?',
    type: 'mcq',
    choices: [
      'Pretest, posttest, no control group',
      'Time series design',
      'Solomon 4-group design',
      'Posttest only, no control group'
    ],
    correct: 2,
    difficulty: 'H',
    explanation: 'The Solomon 4-group design is called "grand and elegant — but often impractical." Its two pretest-free rows are what let it rule out testing effects.'
  },
  {
    q: 'An organization compares its Boston office (trained) to its Philadelphia office (untrained), with pretests at both. This is a:',
    type: 'mcq',
    choices: [
      'True experiment',
      'Quasi-experiment — pretest, posttest control group with NON-random assignment',
      'Pre-experiment',
      'Time series design'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'The key is having the T1 baselines, which allow you to statistically control for pre-existing differences between two non-equivalent groups.'
  },
  {
    q: 'The design "T1 T2 T3 X T4 T5 T6" is useful because it:',
    type: 'mcq',
    choices: [
      'Requires no pretest',
      'Reveals whether maturation effects are at work, and shows decay and whether booster training is needed',
      'Eliminates the need for a training needs assessment',
      'Guarantees random assignment'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'This is the time series design. If T1–T3 are equivalent and performance bumps at T4 when training occurs, maturation is probably not driving results; T4–T6 then track decay.'
  },
  {
    q: 'For training new police recruits, the chapter suggests a simple posttest design may suffice because:',
    type: 'mcq',
    choices: [
      'Police academies lack the budget for better designs',
      'The overriding question is whether recruits possess the requisite KSAs before going on the street, not whether training CAUSED the change',
      'Random assignment is illegal in public agencies',
      'Posttest-only designs control the most threats'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Sackett and Mullen (1993): the PURPOSE of the evaluation should drive design choice. A new, expensive supervisor training program would need a far more rigorous design to prove causation.'
  },
  {
    q: 'An organization offers 200 employees with random assignment to training and control. The chapter warns this may:',
    type: 'mcq',
    choices: [
      'Be statistically underpowered',
      'Actually INTRODUCE threats — diffusion, compensatory rivalry, and resentful demoralization',
      'Violate the Uniform Guidelines',
      'Make the Solomon 4-group design mandatory'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Suggested fixes: randomly assign WORK GROUPS rather than individuals, or use a quasi-experiment where the control group is not in contact with the trained group. Underpowering is Scenario 2 (20 people in a Solomon design).'
  },
  {
    q: 'Under what circumstance does a training program become subject to the Uniform Guidelines and EEO law?',
    type: 'mcq',
    choices: [
      'Whenever it costs more than $100,000',
      'When it is used to make hiring or promotion decisions, making it a selection procedure',
      'Only when it is delivered online',
      'Only when it covers safety topics'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'The organization must then monitor whether protected-group trainees pass at a differential rate (the 4/5 rule, Ch. 7) and be prepared to defend the program’s validity.'
  },
  {
    q: 'The chapter notes that NOT training employees may itself be:',
    type: 'mcq',
    choices: [
      'A violation of the Americans with Disabilities Act',
      'A type of negligence, with legal consequences if an employee harms others during job duties',
      'Grounds for an EEOC complaint by the employee',
      'A breach of the scientist-practitioner model'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Safety, diversity, and harassment-avoidance training protect employees and also decrease the organization’s legal liability. Failure to train can make the employer liable for harm the employee causes.'
  },
  {
    q: 'Landers et al. (2019) identified which problems holding back knowledge about gamification?',
    type: 'mcq',
    choices: [
      'Excessive cost and technical complexity',
      'Faddishness, a lack of clear definition of what gamification is, and sparse research',
      'Legal restrictions and union opposition',
      'Low learner engagement'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'They recommend designers use motivation theories (expectancy, goal-setting), a robust needs assessment, and learner reactions to determine how gamified training can improve outcomes.'
  },
  {
    q: 'Microlearning is best described as:',
    type: 'mcq',
    choices: [
      'Training delivered in one intensive session',
      'A form of e-learning presenting small "bites" of information (e.g., 1–2 minutes) to maintain attention and counter decay',
      'One-on-one executive coaching',
      'A type of programmed instruction requiring quizzes'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'It is often delivered on mobile devices and can be paired with other methods such as classroom training. Research is still limited, but preliminary work suggests greater knowledge and learner satisfaction.'
  },
  {
    q: 'Informal field-based learning (IFBL) refers to:',
    type: 'mcq',
    choices: [
      'Training conducted outdoors or at field sites',
      'When people intentionally take on SELF-DIRECTED learning at work',
      'On-the-job training delivered by a designated coworker',
      'Cross-training among team members'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Wolfson et al. (2018, 2019) link IFBL to promotion-focused personality, jobs with time pressure and frequent updating, and non-punitive work climates. Most organizational learning is informal, but it was largely ignored by research until recently.'
  },
  {
    q: 'A company runs an expensive leadership program, surveys participants who rate it highly, and declares it a success. Based on Chapter 8, the best critique is that:',
    type: 'mcq',
    choices: [
      'Reactions data are never worth collecting',
      'They measured only Level 1 reactions, the most basic level, which does not indicate the training was effective — they have no evidence of learning, behavior change, or results',
      'They should have used massed rather than spaced learning',
      'The needs assessment should have come after evaluation'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Reactions are not worthless — Alliger et al. showed utility perceptions relate to transfer — but liking is not learning, and learning is not transfer.'
  },
  {
    q: 'A hospital wants emergency response procedures retained despite being used rarely. Which combination does Chapter 8 most support?',
    type: 'mcq',
    choices: [
      'Massed lecture plus a reactions survey',
      'Simulation with debriefing, overlearning to automaticity, and periodic booster training',
      'Programmed instruction with a Level 4 results evaluation',
      'Unstructured OJT with transfer through principles'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Rare + critical + high-stress is exactly the overlearning case, simulation supplies psychological and physical fidelity where mistakes are catastrophic, debriefing converts experience into learning, and boosters counter decay.'
  },
  {
    q: 'Employees complete an excellent training program, demonstrate mastery on a post-test, and return to a worksite where supervisors prefer the old method. Chapter 8 predicts:',
    type: 'mcq',
    choices: [
      'Strong Level 2 learning results but weak Level 3 behavior results, because transfer climate blocks transfer',
      'Strong results across all four Kirkpatrick levels',
      'Weak learning results because psychological fidelity was low',
      'Compensatory rivalry among the trained group'
    ],
    correct: 0,
    difficulty: 'H',
    explanation: 'The learning happened; the transfer did not. This is precisely the gap between Kirkpatrick Levels 2 and 3, and it is the nursing medication-verification example in the chapter.'
  }
];
