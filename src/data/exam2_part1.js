// Practice Exam 2 — Part 1: Chapters 8, 9, 10, and 11.
// All fresh items (not repeats of the per-chapter practice banks).

export default [
  // ================================================== CHAPTER 8 (14)
  {
    chapter: 'Ch 8 — Training and Development',
    q: 'A company rolls out a new CRM system and trains every employee on all 20 of its modules. Based on Chapter 8, the most likely problem with this approach is that the company:',
    type: 'mcq',
    choices: [
      'Used a single training method rather than blending several',
      'Skipped the person analysis, so it is training people on skills most of them already have',
      'Failed to evaluate the training at Kirkpatrick’s results level',
      'Did not require overlearning of the most critical modules'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Training goals come from the GAP between what the job analysis requires and what the person analysis shows employees already have. A job analysis may identify 20 KSAs, but most employees already hold most of them — training everyone on everything wastes time and resources.'
  },
  {
    chapter: 'Ch 8 — Training and Development',
    q: 'Which sequence correctly orders the needs assessment?',
    type: 'mcq',
    choices: [
      'Person → Job → Organizational → Demographic → Training goals',
      'Job → Person → Organizational → Training goals → Demographic',
      'Organizational → Job → Person → Training goals → Demographic',
      'Organizational → Person → Job → Demographic → Training goals'
    ],
    correct: 2,
    difficulty: 'H',
    explanation: 'Organizational analysis sets the context, job analysis defines what the work requires, person analysis identifies who lacks it, goals come from the gap between the last two, and demographic analysis asks who needs the training across groups.'
  },
  {
    chapter: 'Ch 8 — Training and Development',
    q: 'The chapter describes a "best-practice gap" in training. This refers to the fact that:',
    type: 'mcq',
    choices: [
      'Research has established what makes training work, but organizations routinely fail to follow it — most often by skipping the needs assessment',
      'Online training has outpaced the research base evaluating it',
      'Trainees consistently rate training more favorably than objective measures justify',
      'Best practices developed in manufacturing do not transfer to service industries'
    ],
    correct: 0,
    difficulty: 'M',
    explanation: 'The needs assessment is the step that defines what to train and who needs it, and it is the one most commonly skipped.'
  },
  {
    chapter: 'Ch 8 — Training and Development',
    q: 'Which training goal is written in the form the chapter recommends?',
    type: 'mcq',
    choices: [
      'Understand the principles of espresso preparation',
      'Appreciate the importance of beverage consistency',
      'Become familiar with the espresso machine',
      'Make espresso drinks correctly in two minutes on standard equipment'
    ],
    correct: 3,
    difficulty: 'E',
    explanation: 'Behavioral goals specify the behavior, the standard, and the conditions. That helps the trainer design, give feedback, and assess, and helps the trainee learn and self-monitor. "Understand" and "appreciate" cannot be observed.'
  },
  {
    chapter: 'Ch 8 — Training and Development',
    q: 'In the model of training effectiveness, individual and organizational characteristics affect learning and transfer primarily:',
    type: 'mcq',
    choices: [
      'Directly, independent of any intervening variable',
      'Through the choice of training method',
      'Only when cognitive ability is held constant',
      'Through training motivation, which mediates their effects'
    ],
    correct: 3,
    difficulty: 'M',
    explanation: 'Motivation is the mediator, and it affects outcomes even beyond cognitive ability.'
  },
  {
    chapter: 'Ch 8 — Training and Development',
    q: 'A trainee says, "I want to master this, even if I look bad doing it at first." Compared with a trainee focused exclusively on performing well, Chapter 8 predicts this trainee will:',
    type: 'mcq',
    choices: [
      'Do better, because a performance goal orientation alone produces worse outcomes',
      'Do worse, because self-doubt undermines acquisition',
      'Do about the same, since the two orientations are opposite ends of one scale',
      'Do better only if the training is self-paced'
    ],
    correct: 0,
    difficulty: 'M',
    explanation: 'Those focused exclusively on performance do worse than those focused on learning. The two are NOT opposite ends of one scale — a person can be high on both, one, or neither.'
  },
  {
    chapter: 'Ch 8 — Training and Development',
    q: 'What does the research say about matching training delivery to trainees’ learning styles?',
    type: 'mcq',
    choices: [
      'Matching reliably improves retention and should guide training design',
      'Matching helps for psychomotor skills but not cognitive ones',
      'Matching does NOT necessarily lead to better retention',
      'Matching improves trainee reactions and learning equally'
    ],
    correct: 2,
    difficulty: 'M',
    explanation: 'This is one of the chapter’s myth-busting findings — the intuition is widespread and the evidence does not support it.'
  },
  {
    chapter: 'Ch 8 — Training and Development',
    q: 'A new employee returns from a well-designed training program and is told by a coworker, "I know that’s what they told you in training, but this is how we do it here." This illustrates:',
    type: 'mcq',
    choices: [
      'A failure of the needs assessment',
      'Poor trainee reactions at Kirkpatrick’s first level',
      'An inadequate transfer climate',
      'Insufficient overlearning'
    ],
    correct: 2,
    difficulty: 'M',
    explanation: 'A supportive environment enhances transfer; a hostile one blocks it regardless of how good the training itself was.'
  },
  {
    chapter: 'Ch 8 — Training and Development',
    q: 'Organizations frequently use massed rather than spaced practice. According to the chapter, this persists because:',
    type: 'mcq',
    choices: [
      'Massed practice produces better long-term retention for adults',
      'Massed practice is required under the Uniform Guidelines',
      'Spaced practice is only effective for psychomotor skills',
      'Of pragmatic constraints like trainer availability, travel cost, and speed'
    ],
    correct: 3,
    difficulty: 'M',
    explanation: 'Spacing lets learners organize and integrate material and is the better approach. Massed learning survives for logistical reasons, not because it works better.'
  },
  {
    chapter: 'Ch 8 — Training and Development',
    q: 'Overlearning is best reserved for which situation?',
    type: 'mcq',
    choices: [
      'Any skill where trainees show below-average initial performance',
      'Routine skills performed daily, to build automaticity',
      'Training delivered online rather than in a classroom',
      'Critical skills, rarely performed behaviors, and behaviors done under stress'
    ],
    correct: 3,
    difficulty: 'M',
    explanation: 'Overlearning costs extra time and resources, so it is reserved rather than universal. Nuclear plant emergency procedures are the chapter’s example — critical, rare, and performed under stress.'
  },
  {
    chapter: 'Ch 8 — Training and Development',
    q: 'A police academy needs to certify that recruits can perform a procedure correctly. Sackett and Mullen would argue the evaluation design should be chosen based on:',
    type: 'mcq',
    choices: [
      'The most rigorous option available, since internal validity always takes priority',
      'The purpose and the constraints — a posttest-only design can suffice here',
      'Whether a control group can be randomly assigned',
      'Whether the training was delivered online or in person'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'The most rigorous design is not always the right one. The chapter adds that randomly assigning 200 people can INTRODUCE diffusion, rivalry, and demoralization — problems the simpler design avoids.'
  },
  {
    chapter: 'Ch 8 — Training and Development',
    q: 'In Kirkpatrick’s framework, which level is by far the hardest to assess, and why?',
    type: 'mcq',
    choices: [
      'Learning, because knowledge tests must be validated',
      'Behavior, because supervisors are unreliable raters',
      'Reactions, because trainees are reluctant to criticize',
      'Results, because many non-training factors affect organizational performance'
    ],
    correct: 3,
    difficulty: 'M',
    explanation: 'The four levels ascend in difficulty: reactions → learning → behavior → results.'
  },
  {
    chapter: 'Ch 8 — Training and Development',
    q: 'Alliger and colleagues found that learning outcomes are not necessarily associated with transfer into job behaviors. However, the chapter notes that reactions are not worthless because:',
    type: 'mcq',
    choices: [
      'Reactions predict learning more strongly than any other level',
      'Favorable reactions improve the organization’s return on investment directly',
      'Reactions are the only level that can be measured immediately',
      'Trainee UTILITY perceptions do relate to transfer'
    ],
    correct: 3,
    difficulty: 'H',
    explanation: 'Whether trainees see the training as USEFUL to their jobs carries information that simple enjoyment ratings do not.'
  },
  {
    chapter: 'Ch 8 — Training and Development',
    q: 'A company requires employees to pass a training course before being eligible for promotion. Under the chapter’s legal discussion, this training:',
    type: 'mcq',
    choices: [
      'Is exempt from EEO scrutiny because participation is voluntary',
      'Must be validated only if it uses a written test',
      'Falls outside the Uniform Guidelines because it is development rather than selection',
      'Is a selection procedure, so differential pass rates must be monitored under the 4/5 rule'
    ],
    correct: 3,
    difficulty: 'H',
    explanation: 'Training used to make hiring or promotion decisions is a selection procedure and falls under the Uniform Guidelines and EEO law. The chapter also notes that FAILING to train may itself constitute negligence.'
  },

  // ================================================== CHAPTER 9 (15)
  {
    chapter: 'Ch 9 — Work Motivation',
    q: 'Van Iddekinge and colleagues (2018) tested how motivation, ability, and environment combine to produce performance. They found the relationship is:',
    type: 'mcq',
    choices: [
      'Multiplicative, so a zero on any component produces zero performance',
      'Dependent entirely on which theory family is applied',
      'Curvilinear, peaking at moderate levels of each',
      'Additive, overturning the earlier multiplicative assumption'
    ],
    correct: 3,
    difficulty: 'H',
    explanation: 'Performance = Motivation + Ability + Environment. The practical reading is that motivation alone cannot make a 5-foot NBA player — ability still constrains the outcome.'
  },
  {
    chapter: 'Ch 9 — Work Motivation',
    q: 'A manager asks, "What can I actually change on Monday to motivate this team?" Which family of motivation theories is built to answer that question?',
    type: 'mcq',
    choices: [
      'Needs-based theories',
      'Process-based theories',
      'Application-based theories',
      'Dispositional theories'
    ],
    correct: 2,
    difficulty: 'M',
    explanation: 'Needs-based theories address WHICH needs must be met, process-based theories address HOW motivation develops cognitively, and application-based theories address WHAT a manager can change.'
  },
  {
    chapter: 'Ch 9 — Work Motivation',
    q: 'What is the chapter’s overall verdict on Maslow’s hierarchy of needs?',
    type: 'mcq',
    choices: [
      'It is strongly supported and remains the field’s dominant needs theory',
      'It has been fully disconfirmed and is no longer taught',
      'It applies to blue-collar but not white-collar workers',
      'Support is weak — it survives because it is intuitive and memorable'
    ],
    correct: 3,
    difficulty: 'M',
    explanation: 'Hall found no strong support; Wahba and Bridwell found "some support, but not much"; Tay and Diener found "a tendency, but not a strong one."'
  },
  {
    chapter: 'Ch 9 — Work Motivation',
    q: 'An employee blocked from any growth opportunity begins investing heavily in friendships at work instead. ERG theory calls this:',
    type: 'mcq',
    choices: [
      'Frustration-regression',
      'Need for affiliation',
      'Hygiene substitution',
      'Instrumentality adjustment'
    ],
    correct: 0,
    difficulty: 'M',
    explanation: 'Alderfer allowed movement back down the hierarchy when a higher need is blocked. Tay and Diener supported this over Maslow’s strict upward climb, and argued balance across ERG matters most for well-being.'
  },
  {
    chapter: 'Ch 9 — Work Motivation',
    q: 'A company fixes its long-standing complaints about parking, cafeteria quality, and office temperature. Two-factor theory predicts that employees will:',
    type: 'mcq',
    choices: [
      'Become motivated, since these are recognized motivators',
      'Become motivated only if the changes were employee-initiated',
      'Stop being dissatisfied, but not become motivated',
      'Show no change at all on either dimension'
    ],
    correct: 2,
    difficulty: 'M',
    explanation: 'The theory’s revolutionary claim is that satisfaction and dissatisfaction are SEPARATE continua. Hygiene factors only demotivate when absent; motivators only motivate when present. Fixing hygiene never produces motivation.'
  },
  {
    chapter: 'Ch 9 — Work Motivation',
    q: 'Which needs theory has received the MOST consistent research support?',
    type: 'mcq',
    choices: [
      'Maslow’s hierarchy of needs',
      'McClelland’s acquired needs theory',
      'Alderfer’s ERG theory',
      'Herzberg’s two-factor theory'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Need for achievement, power, and affiliation. This is a common exam contrast against Maslow and Herzberg, both of which have weaker support.'
  },
  {
    chapter: 'Ch 9 — Work Motivation',
    q: 'Two employees have identical low pay and light workloads. One feels fairly treated and one does not. Equity theory explains this by noting that fairness depends on:',
    type: 'mcq',
    choices: [
      'The absolute level of outcomes received',
      'Whether the organization follows consistent procedures',
      'The ratio of outcomes to inputs, compared to a referent other',
      'Whether the employee values the outcome being received'
    ],
    correct: 2,
    difficulty: 'M',
    explanation: 'Low input plus low outcome can feel perfectly fair. Two things drive the judgment: the RATIO rather than absolute amounts, and the COMPARISON to someone else.'
  },
  {
    chapter: 'Ch 9 — Work Motivation',
    q: 'Johnson and colleagues (2014) examined what enacting justice costs managers. They found that:',
    type: 'mcq',
    choices: [
      'Both procedural and interpersonal justice behaviors deplete managers equally',
      'Procedural justice depletes managers over time, while interpersonal justice restores energy through social relationships',
      'Interpersonal justice depletes managers, while procedural justice is energy-neutral',
      'Neither type imposes measurable costs on the manager'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Procedural justice drains managers from "fighting the good fight," while interpersonal justice behaviors replenish them.'
  },
  {
    chapter: 'Ch 9 — Work Motivation',
    q: 'An employee is confident she can hit the target and knows the bonus is guaranteed if she does — but she does not want the bonus. Expectancy theory predicts her motivational force will be:',
    type: 'mcq',
    choices: [
      'High, because expectancy and instrumentality are both strong',
      'Moderate, because two of three components are favorable',
      'Unpredictable without knowing her referent other',
      'Near zero, because the components are multiplied'
    ],
    correct: 3,
    difficulty: 'M',
    explanation: 'V × I × E is multiplicative, so any zero collapses motivational force. A great effort–performance link and a guaranteed reward mean nothing if the employee does not value the reward.'
  },
  {
    chapter: 'Ch 9 — Work Motivation',
    q: 'A manager diagnosing an unmotivated employee asks, "Has this person ever done this job before?" In expectancy terms this probes ___, and a negative answer suggests ___.',
    type: 'mcq',
    choices: [
      'instrumentality; a broken reward system',
      'valence; a mismatch between reward and preference',
      'expectancy; a possible training problem',
      'equity; an unfavorable referent comparison'
    ],
    correct: 2,
    difficulty: 'H',
    explanation: 'The three diagnostic questions map onto the three components: expectancy (can they do it — possibly a training issue), instrumentality (does performance lead to outcomes here — the reward system), and valence (do they value the reward — ask them).'
  },
  {
    chapter: 'Ch 9 — Work Motivation',
    q: 'Why does goal-setting theory reject "just do your best"?',
    type: 'mcq',
    choices: [
      'It is too general to be useful and unmeasurable, so the person never knows if they got there',
      'It sets the target too high for most employees',
      'It emphasizes a learning rather than a performance orientation',
      'It cannot be paired with feedback'
    ],
    correct: 0,
    difficulty: 'E',
    explanation: 'This is goal-setting’s signature claim — specific, difficult goals outperform vague encouragement.'
  },
  {
    chapter: 'Ch 9 — Work Motivation',
    q: 'The chapter describes a "dark side" to goal-setting. What is it?',
    type: 'mcq',
    choices: [
      'Goals set by managers are resented more than self-set goals',
      'Continually raising targets produces stress and unethical behavior, since excessive striving depletes self-regulation',
      'Specific goals narrow attention so much that overall job performance falls',
      'Goal commitment declines sharply once a goal is achieved'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Welsh and Ordóñez found that depleted self-regulation makes ethical choices harder. The chapter’s conclusion is to use goals in context rather than blindly.'
  },
  {
    chapter: 'Ch 9 — Work Motivation',
    q: 'A manager wants a new behavior learned as quickly as possible, then wants it to persist after the rewards stop. The reinforcement research suggests:',
    type: 'mcq',
    choices: [
      'Continuous reinforcement to acquire it, then variable reinforcement to sustain it',
      'Variable reinforcement throughout, since it is superior at both',
      'Continuous reinforcement throughout, since consistency prevents extinction',
      'Punishment of the old behavior paired with continuous reinforcement of the new one'
    ],
    correct: 0,
    difficulty: 'H',
    explanation: 'Continuous reinforcement acquires new skills fastest but extinguishes quickly once withdrawn. Variable reinforcement produces the most PERSISTENT behavior.'
  },
  {
    chapter: 'Ch 9 — Work Motivation',
    q: 'A factory gives workers three additional tasks at the same level of responsibility. This is ___, which differs from ___ because it adds width rather than depth.',
    type: 'mcq',
    choices: [
      'job enrichment; job enlargement',
      'job enlargement; job enrichment',
      'job rotation; job enlargement',
      'job enrichment; job rotation'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Enlargement increases variety but NOT responsibility. Enrichment increases authority and control. Job rotation is the third tool and doubles as on-the-job training.'
  },
  {
    chapter: 'Ch 9 — Work Motivation',
    q: 'DeVoe and Iyengar (2004) compared what employees say motivates them with what managers assume. They found that:',
    type: 'mcq',
    choices: [
      'Managers and employees agreed closely across all regions studied',
      'Employees reported extrinsic motivation while managers assumed intrinsic',
      'Employees reported being more intrinsically motivated, but North American managers assumed extrinsic',
      'Only North American managers read their employees correctly'
    ],
    correct: 2,
    difficulty: 'H',
    explanation: 'Employees across North America, Asia, and Latin America reported being more intrinsically motivated. Only Latin American managers read this correctly.'
  },

  // ================================================== CHAPTER 10 (14)
  {
    chapter: 'Ch 10 — Leadership at Work',
    q: 'A supervisor gets compliance by threatening to cut hours. Based on the chapter’s definition, this supervisor is:',
    type: 'mcq',
    choices: [
      'Exercising power rather than leading, since leadership is non-coercive influence',
      'Displaying transactional leadership through contingent reward',
      'Demonstrating legitimate power appropriately',
      'Using an initiating structure behavior'
    ],
    correct: 0,
    difficulty: 'M',
    explanation: 'Non-coercive influence is built into the definition of leadership.'
  },
  {
    chapter: 'Ch 10 — Leadership at Work',
    q: 'Which base of power resides in the PERSON rather than the position, meaning anyone in the organization could hold it?',
    type: 'mcq',
    choices: [
      'Legitimate power',
      'Reward power',
      'Coercive power',
      'Referent power'
    ],
    correct: 3,
    difficulty: 'M',
    explanation: 'Legitimate, reward, and coercive power come from a formal position. Referent power comes from others liking and admiring the person.'
  },
  {
    chapter: 'Ch 10 — Leadership at Work',
    q: 'A team member who encourages everyone to goof off is widely seen by the group as its leader. This best illustrates that:',
    type: 'mcq',
    choices: [
      'Referent power always outweighs legitimate power',
      'Leader emergence and leader effectiveness are distinct',
      'Laissez-faire leadership can be effective in cohesive groups',
      'Informal leadership is more durable than formal leadership'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Emergence is being PERCEIVED as a leader; effectiveness is what you ACCOMPLISH. They correlate, but an ineffective leader can still emerge.'
  },
  {
    chapter: 'Ch 10 — Leadership at Work',
    q: 'Comparing the trait and behavioral approaches, the research shows traits explain about 2 percent of follower job satisfaction while behaviors explain over 50 percent. The chapter’s integration of the two approaches is that:',
    type: 'mcq',
    choices: [
      'Traits should be abandoned in favor of behavioral measures',
      'Traits matter only for leader emergence, never effectiveness',
      'Leader personality shapes the propensity to display task- and relationship-oriented behavior',
      'Behaviors are simply traits measured more reliably'
    ],
    correct: 2,
    difficulty: 'H',
    explanation: 'Traits work THROUGH behaviors, which then shape follower attitudes and team performance. The comparable figures for satisfaction with the leader are 6 percent for traits and 70 percent for behaviors.'
  },
  {
    chapter: 'Ch 10 — Leadership at Work',
    q: 'Judge and colleagues (2004) examined intelligence and leadership. Which statement matches their findings?',
    type: 'mcq',
    choices: [
      'Those PERCEIVED as intelligent were more likely to be seen as leaders, while actual test scores showed weaker results',
      'Actual intelligence predicted leadership far better than perceived intelligence',
      'Intelligence was unrelated to leadership perceptions at any level',
      'The relationship between intelligence and leadership was perfectly linear'
    ],
    correct: 0,
    difficulty: 'H',
    explanation: 'And too much is a problem — the relationship peaks around IQ 120. Separately, Lord et al. (1984) found intelligence was the only one of 59 traits consistently identified as something ALL leaders should possess.'
  },
  {
    chapter: 'Ch 10 — Leadership at Work',
    q: 'According to DeRue and colleagues (2011), initiating structure is the best leadership predictor of ___, while consideration is the biggest predictor of ___.',
    type: 'mcq',
    choices: [
      'follower satisfaction; group performance',
      'leader emergence; leader effectiveness',
      'group performance; follower satisfaction',
      'organizational citizenship; counterproductive behavior'
    ],
    correct: 2,
    difficulty: 'M',
    explanation: 'Initiating structure matched transformational leadership for predicting group performance, and consideration surpassed all other traits and behaviors in predicting follower satisfaction.'
  },
  {
    chapter: 'Ch 10 — Leadership at Work',
    q: 'Grant and colleagues (2011) found that extraverted leaders performed best with ___ followers, and that extraversion became a disadvantage with ___ followers.',
    type: 'mcq',
    choices: [
      'highly proactive; low-proactivity',
      'low-proactivity; highly proactive',
      'highly conscientious; low-conscientiousness',
      'newly hired; long-tenured'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Introverted leaders harnessed proactivity better, because they left room for proactive followers to contribute rather than dominating the interaction.'
  },
  {
    chapter: 'Ch 10 — Leadership at Work',
    q: 'The GLOBE project examined which leadership attributes are endorsed across cultures. Which finding is accurate?',
    type: 'mcq',
    choices: [
      'Every attribute studied proved culture-contingent',
      'Risk-taking and compassion were universally endorsed',
      'Foresight, trustworthiness, dynamism, and confidence building were universally endorsed',
      'Only the avoidance of negative attributes was universal'
    ],
    correct: 2,
    difficulty: 'H',
    explanation: 'Being a loner, irritable, or dictatorial was universally UNDESIRABLE. Risk-taking and compassion were the culture-contingent ones — endorsed in some cultures and not others.'
  },
  {
    chapter: 'Ch 10 — Leadership at Work',
    q: 'Path-goal theory is described as expectancy theory applied to leadership because the leader’s job is to:',
    type: 'mcq',
    choices: [
      'Match subordinate maturity to an appropriate level of direction',
      'Build a unique exchange relationship with each follower',
      'Decide how much subordinate participation a decision warrants',
      'Remove roadblocks and make goal accomplishment rewarding'
    ],
    correct: 3,
    difficulty: 'H',
    explanation: 'That is the leader raising the follower’s expectancy, instrumentality, and valence — the three components from Chapter 9.'
  },
  {
    chapter: 'Ch 10 — Leadership at Work',
    q: 'Which leadership theory is described as the only PRESCRIPTIVE one, telling the leader which style to use?',
    type: 'mcq',
    choices: [
      'Vroom’s normative decision model',
      'Leader–member exchange theory',
      'Fiedler’s contingency model',
      'Transformational leadership theory'
    ],
    correct: 0,
    difficulty: 'M',
    explanation: 'Participation fits when subordinates hold needed information or must be convinced; authority fits when interests diverge or the leader knows more.'
  },
  {
    chapter: 'Ch 10 — Leadership at Work',
    q: 'Regarding the two transactional leadership behaviors, the research shows that:',
    type: 'mcq',
    choices: [
      'Both are weakly but positively related to effectiveness',
      'Contingent reward was almost as positive a predictor as transformational leadership, while laissez-faire was negatively correlated with effectiveness',
      'Laissez-faire outperforms contingent reward with experienced employees',
      'Both are inferior to every transformational behavior'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'The two transactional behaviors have OPPOSING effects, so treating "transactional leadership" as a single weak category is a mistake.'
  },
  {
    chapter: 'Ch 10 — Leadership at Work',
    q: 'Conger and Kanungo argued charisma is learnable. Which is one of the three components they identified?',
    type: 'mcq',
    choices: [
      'Maintaining emotional distance to preserve authority',
      'Rewarding followers contingently on measurable performance',
      'Having an appealing vision that challenges the status quo',
      'Matching one’s style to subordinate readiness'
    ],
    correct: 2,
    difficulty: 'M',
    explanation: 'The three are an appealing vision challenging the status quo, communicating it inspirationally, and executing it unconventionally as a role model. All three can be learned and emulated.'
  },
  {
    chapter: 'Ch 10 — Leadership at Work',
    q: 'A manager has an excellent relationship with two team members and a distant one with the rest. Leader–member exchange research warns that this pattern:',
    type: 'mcq',
    choices: [
      'Benefits the in-group with no measurable cost to the team',
      'Raises team conflict and makes a justice climate critical to avoid perceived favoritism',
      'Is unavoidable and should not be managed',
      'Reduces overall team performance only when the leader is new'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Individual employees benefit from a better relationship than their peers, but having both high- and low-quality exchanges within one group creates the problem.'
  },
  {
    chapter: 'Ch 10 — Leadership at Work',
    q: 'The "70-20-10" guidance on leader development, combined with the finding that over 80 percent of companies use classroom training, suggests that:',
    type: 'mcq',
    choices: [
      'Classroom training should be eliminated from development programs',
      'Companies underinvest in classroom training relative to its value',
      'Experience alone is sufficient for leader development',
      'Most development comes from experience, feedback, coaching, and mentoring rather than the classroom'
    ],
    correct: 3,
    difficulty: 'M',
    explanation: 'The chapter says classroom training’s importance "pales in comparison" to learning by doing — but adds that experience only yields insight when paired with REFLECTION.'
  },

  // ================================================== CHAPTER 11 (14)
  {
    chapter: 'Ch 11 — Job Attitudes and Emotions at Work',
    q: 'An employee believes her workload is unreasonable, feels resentful about it, and intends to start job searching. These three reactions correspond to which components of an attitude?',
    type: 'mcq',
    choices: [
      'Cognitive, affective, and behavioral',
      'Affective, normative, and continuance',
      'Distributive, procedural, and interactional',
      'Exit, voice, and neglect'
    ],
    correct: 0,
    difficulty: 'E',
    explanation: 'Cognitive is beliefs, affective is emotions, and behavioral is intentions to act. The behavioral component is already an intention, which is why attitudes relate to behavior at all.'
  },
  {
    chapter: 'Ch 11 — Job Attitudes and Emotions at Work',
    q: 'Which type of organizational commitment is most important for shaping on-the-job performance and turnover?',
    type: 'mcq',
    choices: [
      'Normative commitment',
      'Continuance commitment',
      'Affective commitment',
      'All three contribute equally'
    ],
    correct: 2,
    difficulty: 'M',
    explanation: 'Affective is the "want to" form. Continuance is "need to" — staying for lack of alternatives or because leaving would cost too much. Normative is "ought to."'
  },
  {
    chapter: 'Ch 11 — Job Attitudes and Emotions at Work',
    q: 'An employee says, "I can’t afford to leave — I’d lose my pension and I don’t see other options." This describes:',
    type: 'mcq',
    choices: [
      'Affective commitment',
      'Continuance commitment',
      'Normative commitment',
      'Work engagement'
    ],
    correct: 1,
    difficulty: 'E',
    explanation: 'Continuance commitment comes from a lack of alternatives or the sense of losing a lot by leaving.'
  },
  {
    chapter: 'Ch 11 — Job Attitudes and Emotions at Work',
    q: 'According to the theory of planned behavior, behavior follows directly from intentions, and intentions come from three sources. They are:',
    type: 'mcq',
    choices: [
      'Attitude, norms, and control',
      'Cognition, affect, and behavior',
      'Expectancy, instrumentality, and valence',
      'Attraction, selection, and attrition'
    ],
    correct: 0,
    difficulty: 'M',
    explanation: 'Norms concern whether others would approve; control concerns whether the behavior is actually possible. This is why a dissatisfied employee may not leave — the attitude is there, but control (a viable alternative) may not be.'
  },
  {
    chapter: 'Ch 11 — Job Attitudes and Emotions at Work',
    q: 'A consultant wants to know WHERE employee dissatisfaction is concentrated so resources can be targeted. The better choice is a ___ measure, because a ___ measure can mask a severe problem in one area.',
    type: 'mcq',
    choices: [
      'global; facet-based',
      'facet-based; global',
      'single-item; multi-item',
      'behavioral; attitudinal'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'A global measure returns one overall number. A facet measure separates pay from supervision from the work itself, so adequate scores on some facets cannot hide a severe problem in another.'
  },
  {
    chapter: 'Ch 11 — Job Attitudes and Emotions at Work',
    q: 'An employee loves the actual work but finds the company’s competitive, winner-take-all culture draining. This is best described as good ___ and poor ___.',
    type: 'mcq',
    choices: [
      'person–organization fit; person–job fit',
      'person–job fit; person–organization fit',
      'affective commitment; continuance commitment',
      'intrinsic satisfaction; work engagement'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Person–job fit is the match between the person and the work itself; person–organization fit is the match between the person’s values and the organization’s values. The two can diverge.'
  },
  {
    chapter: 'Ch 11 — Job Attitudes and Emotions at Work',
    q: 'An employee accepts that layoffs were necessary but is furious that managers announced them by email with no chance to ask questions. This is primarily a violation of:',
    type: 'mcq',
    choices: [
      'Distributive justice',
      'Interactional justice',
      'Procedural justice',
      'Person–organization fit'
    ],
    correct: 1,
    difficulty: 'H',
    explanation: 'Distributive justice concerns the outcomes themselves, procedural justice the process used to reach them, and interactional justice the quality of treatment and explanation people receive.'
  },
  {
    chapter: 'Ch 11 — Job Attitudes and Emotions at Work',
    q: 'The Exit, Voice, Loyalty, Neglect model is significant because it shows that:',
    type: 'mcq',
    choices: [
      'Dissatisfaction reliably produces turnover',
      'Attitudes influence emotions more than behaviors',
      'The link between attitudes and behavior is situational rather than simple',
      'Loyalty is the most common response to unhappiness'
    ],
    correct: 2,
    difficulty: 'M',
    explanation: 'Farrell (1983). The same dissatisfaction can produce exit (leaving), voice (speaking up to improve things), loyalty (waiting for improvement), or neglect (reducing quality and quantity of work).'
  },
  {
    chapter: 'Ch 11 — Job Attitudes and Emotions at Work',
    q: 'The unfolding model of turnover challenges the assumption that people quit because of slowly accumulating dissatisfaction. It argues instead that turnover is often driven by:',
    type: 'mcq',
    choices: [
      'A jarring shock, such as graduating, being pressured to act unethically, or receiving an unsolicited offer',
      'A gradual decline in perceived organizational support',
      'The loss of a valued coworker',
      'Failure to receive an expected promotion'
    ],
    correct: 0,
    difficulty: 'H',
    explanation: 'The chapter also cautions that satisfaction and commitment correlate well with turnover INTENTIONS but more modestly with actual turnover, because not everyone who intends to leave does, and some leave abruptly.'
  },
  {
    chapter: 'Ch 11 — Job Attitudes and Emotions at Work',
    q: 'Counterproductive work behaviors — theft, ignoring safety protocols, misuse of time and equipment — relate to satisfaction and commitment, and relate STRONGLY to:',
    type: 'mcq',
    choices: [
      'Organizational citizenship behaviors',
      'Emotional intelligence',
      'Person–job fit',
      'Withdrawal'
    ],
    correct: 3,
    difficulty: 'M',
    explanation: 'The chapter groups CWBs with withdrawal as the behavioral consequences of poor attitudes, alongside absenteeism and turnover.'
  },
  {
    chapter: 'Ch 11 — Job Attitudes and Emotions at Work',
    q: 'Affective events theory holds that:',
    type: 'mcq',
    choices: [
      'Job attitudes are fixed dispositions largely unaffected by daily experience',
      'Day-to-day emotions drive job attitudes over time and cause affect-driven behavior such as spontaneous helping',
      'Negative emotions are more contagious than positive ones',
      'Emotional display rules reduce the authenticity of workplace interactions'
    ],
    correct: 1,
    difficulty: 'M',
    explanation: 'Weiss and Cropanzano (1996). The theory is why the chapter treats daily emotional events as the raw material from which attitudes get built.'
  },
  {
    chapter: 'Ch 11 — Job Attitudes and Emotions at Work',
    q: 'One irritable team member arrives at a meeting and within minutes the whole group’s mood has soured. This illustrates:',
    type: 'mcq',
    choices: [
      'Emotional contagion',
      'Surface acting',
      'Negative affectivity',
      'Emotional display rules'
    ],
    correct: 0,
    difficulty: 'M',
    explanation: 'Negative affectivity is a stable individual tendency to experience negative emotion, not a transmission process. Display rules are requirements about which emotions to show.'
  },
  {
    chapter: 'Ch 11 — Job Attitudes and Emotions at Work',
    q: 'A flight attendant smiles at a difficult passenger while still feeling irritated. A colleague instead tries to imagine what the passenger is going through until she genuinely feels sympathy. These are examples of ___ and ___ respectively.',
    type: 'mcq',
    choices: [
      'deep acting; surface acting',
      'emotional contagion; emotional labor',
      'display rules; emotional intelligence',
      'surface acting; deep acting'
    ],
    correct: 3,
    difficulty: 'M',
    explanation: 'Surface acting changes the EXPRESSION without changing the emotion. Deep acting changes the underlying emotion by re-evaluating the encounter.'
  },
  {
    chapter: 'Ch 11 — Job Attitudes and Emotions at Work',
    q: 'Which statement about surface acting and deep acting is supported by the research?',
    type: 'mcq',
    choices: [
      'Surface acting is related to stress and fatigue, and deep acting is received better by customers because it seems more genuine',
      'Surface acting is less effortful and therefore less damaging over time',
      'Deep acting produces more stress because it requires changing one’s actual feelings',
      'Neither has measurable effects on employee well-being'
    ],
    correct: 0,
    difficulty: 'H',
    explanation: 'Surface actors also devalue themselves and experience more negative emotions.'
  }
];
