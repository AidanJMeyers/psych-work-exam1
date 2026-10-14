import React from 'react';
import { Callout, Table, Card } from '../components/Visual.jsx';

const IMG = 'ch08_training_development';

export default [
  // ------------------------------------------------------------------ 1
  {
    id: 'why-training-matters',
    title: 'Why Training Matters & the Four-Step Process',
    subtitle: 'The money involved, the best-practice gap, and the overall arc of the chapter',
    images: [
      {
        src: `${IMG}/08a_fig8-1_training_spend_per_employee.png`,
        alt: 'Figure 8.1: a line chart of average dollars spent per employee on training from 2013 to 2018, rising from about $1,180 to roughly $1,300.',
        caption: 'Figure 8.1 — Annual average dollars spent on employee training (ATD Annual Reports).'
      },
      {
        src: `${IMG}/08b_fig8-2_training_process.png`,
        alt: 'Figure 8.2: a four-box arrow diagram — Conduct Training Needs Assessment, Consider Characteristics of the Trainees and the Context, Choose and Administer the Training Method, Conduct Training Evaluation.',
        caption: 'Figure 8.2 — The four-step training process within an organization. This is the chapter’s outline.'
      }
    ],
    content: (
      <>
        <Callout kind="danger" title="The numbers that open the chapter">
          <Table
            headers={['Figure', 'Detail']}
            rows={[
              ['$83 billion', 'Estimated US organizational spending on training in 2019 (Freifeld, 2019)'],
              ['Over $1,200 per employee', 'What the average employer spent on training in 2018 (Ho, 2018)'],
              ['6–10% per year', 'Growth in training investment in countries where it is less established, such as Brazil (Cozzo, 2014)']
            ]}
          />
        </Callout>

        <Callout kind="warn" title="The central tension — know this, it drives the whole chapter">
          <strong>&ldquo;Just because research has shown what practices work in organizational training
          does not mean that organizations are actually following these best practices.&rdquo;</strong>
          <p className="mt-2">
            The chapter&rsquo;s worked example: we know a <strong>training needs assessment adds to training
            effectiveness</strong> by defining what the training should cover and who needs it —{' '}
            <strong>yet many organizations fail to do this.</strong> Hence the chapter&rsquo;s own framing
            question: <em>&ldquo;how do we know that the money spent on training is being put to good
            use?&rdquo;</em>
          </p>
        </Callout>

        <Card title="Salas et al. (2012) — best practices for ensuring training quality">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Conduct a <strong>training needs assessment before getting started</strong>.</li>
            <li>Be sure the <strong>type of training matches the workers</strong>.</li>
            <li>Ensure the training <strong>translates into changes in job performance</strong>.</li>
          </ul>
        </Card>

        <Callout kind="info" title="The buy-vs-build decision">
          Deciding whether to <strong>&ldquo;buy&rdquo; skilled workers or hire employees who will need
          training</strong> is named as one of the key HR decisions an organization must make —{' '}
          <strong>and there are tradeoffs with each approach</strong>. This connects Ch. 8 directly back to
          selection (Ch. 6).
        </Callout>

        <Card title="Workplace Application — SAP's Learning2Go">
          <p className="text-sm">
            SAP combined <strong>e-learning, face-to-face workshops, and real-time virtual classes</strong>{' '}
            — an illustration of the chapter&rsquo;s claim that{' '}
            <strong>there is no one best way to train and some combination is usually most
            effective</strong>. Three foci: basic job knowledge, <strong>follow-up to sustain learning and
            on-the-job application</strong>, and content accessible anywhere.
          </p>
          <Table
            headers={['Reported result', 'Value']}
            rows={[
              ['Saved in travel costs alone', 'At least $7 million'],
              ['More sales accounts vs. untrained employees', '68 percent more'],
              ['Time taken to make successful sales', '17 percent less']
            ]}
          />
        </Card>
      </>
    )
  },

  // ------------------------------------------------------------------ 2
  {
    id: 'needs-assessment',
    title: 'The Training Needs Assessment',
    subtitle: 'Four analyses that answer what to train and who needs it',
    images: [
      {
        src: `${IMG}/08c_fig8-3_needs_assessment_overview.png`,
        alt: 'Figure 8.3: four blue columns — Organizational Analysis (available resources? culture supportive?), Job Analysis (what KSAs are needed? what critical incidents?), Person Analysis (what skills do employees already have? which KSAs should be trained? what are the training goals?), Demographic Analysis (background and experience of trainees? are they motivated and ready to learn?).',
        caption: 'Figure 8.3 — Overview of the training needs assessment process.'
      }
    ],
    content: (
      <>
        <Callout kind="danger" title="Definition + the four analyses in order">
          <strong>Training needs assessment</strong> — glossary: <em>the process by which an organization
          identifies the key factors in the organization that will support the training program, what needs
          to be trained, and who needs the training.</em>
          <p className="mt-2">
            Order matters and is testable:{' '}
            <strong>Organizational → Job → Person → (Training Goals) → Demographic.</strong>
          </p>
        </Callout>

        <Table
          headers={['Step', 'Glossary definition', 'Key questions it answers']}
          rows={[
            [
              <strong key="1">1. Organizational analysis</strong>,
              'Identification of a BROAD SET OF ORGANIZATIONAL ISSUES that can help or hinder the effectiveness of a training program.',
              'WHY does the organization want training, and is it ALIGNED WITH STRATEGY? WHICH employees? What RESOURCES (budget, trainers, facilities, travel/e-learning)? What is the CULTURE — is there support for training? What is the EXTERNAL business and LEGAL environment (safety laws; Uniform Guidelines)?'
            ],
            [
              <strong key="2">2. Job analysis</strong>,
              'The process of identifying which TASKS employees currently perform and the KSAs needed to do those tasks (Ch. 3).',
              'What tasks do employees perform? What KSAs do they need? What CRITICAL INCIDENTS do they face? (The chapter stresses critical incidents give "good material for training exercises.")'
            ],
            [
              <strong key="3">3. Person analysis</strong>,
              'The process of identifying what current employees CAN ACTUALLY DO and what KSAs they CURRENTLY POSSESS.',
              'Which of the needed KSAs do employees ALREADY have? Methods: performance ratings, productivity/sales data, customer ratings, tests, supervisor interviews, employee surveys.'
            ],
            [
              <strong key="4">4. Demographic analysis</strong>,
              'The process of identifying WHO THE TRAINEES ARE — for example, education, age, and familiarity with technology.',
              'Education level? Age? Tech familiarity? Are they motivated to learn? What traits (self-efficacy, conscientiousness) might affect learning?'
            ]
          ]}
        />

        <Callout kind="warn" title="Why person analysis exists — the logic to remember">
          A job analysis might identify <strong>20 unique KSAs</strong>, but{' '}
          <strong>most employees will already have many of them</strong>. You need the{' '}
          <strong>subset some employees actually need</strong>, because{' '}
          <strong>&ldquo;it would not make sense for the organization to waste time — and resources — on
          training employees to do things that they can already do.&rdquo;</strong>
        </Callout>

        <Card title="Training goals — and why they must be behavioral">
          <p className="text-sm">
            <strong>Glossary:</strong> <em>a statement of the purpose of the training and the end state of
            the trainee in behaviorally specific terms.</em> Goals come from comparing{' '}
            <strong>(1) what the JOB analysis says employees should be able to do</strong> against{' '}
            <strong>(2) what the PERSON analysis says they already can do</strong> — i.e., they target{' '}
            <strong>the gap</strong>.
          </p>
          <Callout kind="tip" title="The barista example">
            Which is the better goal?
            <ul className="list-disc pl-5 mt-1">
              <li><em>&ldquo;Ability to make espresso drinks&rdquo;</em></li>
              <li>
                <strong>&ldquo;Ability to make different espresso drinks CORRECTLY in TWO MINUTES using the
                STANDARD COMPANY EQUIPMENT&rdquo;</strong>
              </li>
            </ul>
            <p className="mt-2">
              The second. It matters for <strong>two groups</strong>: the <strong>trainer</strong> (to
              develop training, give feedback, and assess whether goals are met) and the{' '}
              <strong>trainees</strong> (to learn effectively and know whether they are on track).
            </p>
          </Callout>
        </Card>

        <Callout kind="info" title="Google's Project Oxygen — a person-analysis case">
          Google&rsquo;s <strong>People Operations</strong> analyzed performance reviews, manager-award
          nominations, feedback surveys, and interviews to learn how to{' '}
          <strong>train people to be better bosses</strong>. They identified{' '}
          <strong>eight key behaviors</strong> of effective managers — good coach; empowering without
          micromanaging; interest in team member success and well-being; productive and results-oriented;
          good communicator and listener; helps with career development; clear vision and strategy; key
          technical skills — and built a management training course around them.
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 3
  {
    id: 'individual-differences',
    title: 'Trainee Individual Differences',
    subtitle: 'Cognitive ability, personality, self-efficacy, goal orientation, meta-cognition',
    images: [
      {
        src: `${IMG}/08d_fig8-4_characteristics_to_motivation.png`,
        alt: 'Figure 8.4: Individual Characteristics (cognitive ability, personality, learning style, KSAOs) and Organizational Characteristics (rewards, climate, culture) both feed arrows into Training Motivation, which feeds into Training Outcomes (knowledge, skills, transfer, other outcomes).',
        caption: 'Figure 8.4 — Individual and organizational characteristics act THROUGH training motivation to shape outcomes.'
      }
    ],
    content: (
      <>
        <Callout kind="tip" title="Read Figure 8.4 as a path model">
          Individual characteristics <strong>and</strong> organizational characteristics →{' '}
          <strong>training motivation</strong> → training outcomes (knowledge, skills,{' '}
          <strong>transfer</strong>, other). Motivation is the <strong>mediator</strong>, which is why the
          chapter treats it as "both the trainee and the context."
        </Callout>

        <Table
          headers={['Individual difference', 'What the research says']}
          rows={[
            [
              <strong key="g">General cognitive ability (g)</strong>,
              'One of the MOST IMPORTANT determinants of employee learning (Ree & Earles, 1991). Higher-ability employees learn training material better AND more quickly.'
            ],
            [
              <strong key="p">Personality</strong>,
              'Barrick & Mount (1991): OPENNESS, EXTRAVERSION, and CONSCIENTIOUSNESS tend to succeed in training. Major et al. (2006): conscientiousness, openness, extraversion, and PROACTIVE PERSONALITY affect training MOTIVATION. But the relationship is not always clean — Martocchio & Judge (1997) found conscientiousness relates to self-efficacy (good for learning) AND to SELF-DECEPTION (negative for learning).'
            ],
            [
              <strong key="s">Learning self-efficacy</strong>,
              'Glossary: a person’s belief that they can MASTER the training material. Consistently predicts training success — belief in mastery enhances training motivation (Colquitt et al., 2000).'
            ],
            [
              <strong key="l">Locus of control</strong>,
              'A person’s belief that behavior is controlled by themselves (internal) or outside factors (external). Internals tend to do better. FIX for low self-efficacy and external locus: take training in SMALL STEPS so learners see they can succeed.'
            ],
            [
              <strong key="c">Core self-evaluations (CSE)</strong>,
              'What people think about themselves, their ability, and their control. Stanhope et al. (2013): CSE affected knowledge and skill THROUGH trainee motivation and effort allocation.'
            ],
            [
              <strong key="st">Learning style</strong>,
              'Visual, auditory, kinesthetic. IMPORTANT CAVEAT: research supports that MATCHING learning styles to training modes does NOT necessarily lead to better retention (Galagan, 2014).'
            ],
            [
              <strong key="m">Meta-cognitive skills</strong>,
              'Glossary: the ability of learners to STEP BACK AND ASSESS THEIR OWN LEARNING and mastery.'
            ]
          ]}
        />

        <Callout kind="danger" title="Goal orientation — the single most tested distinction here">
          <strong>Goal orientation</strong> — glossary: <em>the type of goal a person has when
          learning.</em>
          <Table
            headers={['Type', 'Definition', 'Outcome']}
            rows={[
              [
                <strong key="l">Learning goal orientation</strong>,
                'A focus on MASTERING the training material; more interested in learning and acquiring new skills.',
                'Better training performance'
              ],
              [
                <strong key="p">Performance goal orientation</strong>,
                'Focused on DOING WELL ON THE OUTCOMES, PROVING COMPETENCE to others, and AVOIDING CRITICISM of their performance.',
                'People focused EXCLUSIVELY on performance (e.g., passing the test) do LESS WELL than those focused on learning (Payne et al., 2007)'
              ]
            ]}
          />
          <p className="mt-2">
            <strong>Two details the exam can hook:</strong> (1) a person can be{' '}
            <strong>high on BOTH, high on only one, or low on both</strong> — they are not opposite ends of
            one scale; (2) although it is an individual difference, it{' '}
            <strong>may also depend on the learning context</strong>, and organizations{' '}
            <strong>can change reward systems</strong> to push trainees toward learning rather than
            performance (DeShon &amp; Gillespie, 2005).
          </p>
          <p className="mt-2 text-sm">
            The chapter&rsquo;s analogy: students who focus on learning content regardless of grade versus
            students focused on getting a high exam grade.
          </p>
        </Callout>

        <Callout kind="warn" title="Kruger & Dunning (1999) in the training context">
          People performing <strong>well</strong> on tests were <strong>more accurate</strong> at estimating
          their scores; <strong>poor performers OVERESTIMATED</strong> how well they were doing. Sheldon et
          al. (2014) add that <strong>poor performers may DISCOUNT feedback</strong> while{' '}
          <strong>high performers may be more interested in improving</strong>.
          <p className="mt-2">
            <strong>Training implication:</strong> learners who are <em>not</em> gaining the required
            knowledge may <strong>overestimate how well they are doing and under-invest effort</strong>. The
            fix: <strong>assessments (short quizzes) and frequent feedback, especially to low
            performers</strong>, plus <strong>frequent reminders to self-regulate</strong>, which Sitzmann
            &amp; Ely (2010) showed can increase learning.
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 4
  {
    id: 'transfer',
    title: 'Transfer of Training & the Organizational Context',
    subtitle: 'Identical elements, fidelity, transfer through principles, and transfer climate',
    images: [
      {
        src: `${IMG}/08e_table8-1_transfer_recommendations.png`,
        alt: 'Table 8.1: four recommendations for ensuring training transfer after training — remove obstacles to transfer and give trainees a chance to apply what they learned; provide support to supervisors; use real-world debriefs; provide supports like access to databases and resources.',
        caption: 'Table 8.1 — Salas et al.’s (2012) recommendations for ensuring transfer AFTER training is administered.'
      }
    ],
    content: (
      <>
        <Callout kind="danger" title="The term the whole chapter orbits">
          <strong>Transfer of training</strong> — glossary: <em>the degree to which training leads to
          improvements in ON-THE-JOB behavior.</em> Learning in the training room is not the goal; changed
          behavior back at work is.
        </Callout>

        <Table
          headers={['Concept', 'Glossary definition', 'The chapter’s example']}
          rows={[
            [
              <strong key="i">Identical elements</strong>,
              'The degree to which the TRAINING CONTEXT is similar to the TRANSFER ENVIRONMENT. More similarity → smoother transfer.',
              'Training people who repair deep-sea oil drilling platform machinery: classroom lectures alone make transfer difficult; a SIMULATION of actual rig conditions improves it.'
            ],
            [
              <strong key="ps">Psychological fidelity</strong>,
              'The degree to which the training ELICITS THE KSAs NEEDED to do the job.',
              'Does the training pull the same thinking and skills the job demands?'
            ],
            [
              <strong key="ph">Physical fidelity</strong>,
              'The degree to which the training RESEMBLES THE PHYSICAL ASPECTS of the job.',
              'Equipment used in training should match equipment used at work as much as possible.'
            ],
            [
              <strong key="tp">Transfer through principles</strong>,
              'Training employees to understand WHY they should perform their job in a certain way, and the underlying principles behind what they do.',
              'Customer service: not just "tell the customer you will look into it," but explaining company policy and WHY deliveries are handled a certain way — so the agent can handle UNIQUE SITUATIONS NOT COVERED IN TRAINING.'
            ],
            [
              <strong key="tc">Transfer climate</strong>,
              'The degree to which the SOCIAL CLIMATE among employees back in the work situation SUPPORTS training.',
              'The hospital nursing example below.'
            ]
          ]}
        />

        <Callout kind="danger" title="Transfer climate — the quote worth remembering">
          <p>
            Learners may be taught a correct and efficient method and know it well. But{' '}
            <strong>if the supervisor and coworkers do not accept it as the right way, transfer will not
            happen.</strong> The chapter&rsquo;s line:{' '}
            <em>&ldquo;I know that&rsquo;s what they told you in training, but this is how we do it
            here.&rdquo;</em>
          </p>
          <p className="mt-2">
            <strong>The nursing example:</strong> newly hired hospital nurses are taught a new way to ensure
            patients receive the correct medication. If the ward&rsquo;s existing, well-accepted system
            conflicts, <strong>the new method cannot transfer</strong>. Blume et al. (2010) found
            meta-analytically that <strong>a supportive environment enhances transfer</strong>.
          </p>
          <p className="mt-2">
            <strong>The fix:</strong> assess the transfer situation <strong>during the needs
            assessment</strong> to find misalignments. Then either <strong>adapt the training to fit actual
            work practices</strong>, or <strong>address the transfer climate / work practices
            themselves</strong>.
          </p>
        </Callout>

        <Card title="Table 8.1 — four post-training transfer recommendations">
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li>
              <strong>Remove obstacles</strong> to transfer from the work environment and ensure trainees{' '}
              <strong>have a chance to apply</strong> what they learned.
            </li>
            <li>
              <strong>Provide support to SUPERVISORS</strong> so they can help employees apply learned
              skills.
            </li>
            <li>
              Use <strong>real-world debriefs</strong> where employees discuss how they applied the
              training.
            </li>
            <li>
              Provide <strong>supports like access to databases and resources</strong> for questions.
            </li>
          </ol>
        </Card>

        <Callout kind="tip" title="One more transfer booster">
          <strong>Error management training</strong> — which <strong>explicitly treats errors during
          training as a NATURAL PART OF LEARNING</strong> — can enhance transfer,{' '}
          <strong>particularly for NOVEL tasks</strong> (Keith &amp; Frese, 2008).
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 5
  {
    id: 'trainee-motivation',
    title: 'Trainee Motivation & SMART Goals',
    subtitle: 'The motivation theories behind training, and the meaningfulness finding',
    images: [
      {
        src: `${IMG}/08f_fig8-5_smart_goals.png`,
        alt: 'Figure 8.5: the SMART acronym — Specific, Measurable, Attainable (aggressive and achievable), Relevant, Timely.',
        caption: 'Figure 8.5 — SMART goals in training.'
      }
    ],
    content: (
      <>
        <p>
          <strong>Trainee motivation</strong> — glossary: <em>the degree to which the learner is motivated
          to gain the KSAs provided in training or to succeed in training.</em>
        </p>

        <Callout kind="danger" title="Colquitt et al. (2000) meta-analysis — two findings">
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              Training motivation <strong>affects training outcomes (knowledge and skill acquisition) EVEN
              BEYOND the effects of cognitive ability.</strong>
            </li>
            <li>
              Motivation is itself a function of <strong>pre-training self-efficacy, locus of control, and
              conscientiousness</strong> — plus the contextual variable of <strong>climate</strong>. So
              training motivation is <strong>a function of both the person AND the situation</strong>.
            </li>
          </ol>
        </Callout>

        <Table
          headers={['Motivation theory', 'What it implies for training']}
          rows={[
            [
              <strong key="n">Need theories</strong>,
              'E.g., Maslow’s hierarchy. The point they illustrate: TRAINING WILL APPEAL TO DIFFERENT EMPLOYEES FOR DIFFERENT REASONS — promotion, doing the job better, or simply enjoying learning. The trainer should understand what motivates individual employees BEFORE implementing.'
            ],
            [
              <strong key="g">Goal-setting theory</strong>,
              'People perform best given a SPECIFIC, DIFFICULT goal (Locke & Latham, 2002). Learners should be told the specific training goals AND given FEEDBACK so they can adjust effort. Remember SMART: Specific, Measurable, Attainable (aggressive but achievable), Relevant, Timely.'
            ],
            [
              <strong key="e">Expectancy / VIE theory</strong>,
              'Vroom (1964). Learners must believe (a) effort → mastery, and (b) mastery → an outcome they want. Requires that training be seen as MEANINGFUL/relevant.'
            ],
            [
              <strong key="r">Reinforcement theory</strong>,
              'Learners need to believe their learning efforts WILL BE REINFORCED with outcomes they want — job knowledge, skills, or staying safe.'
            ],
            [
              <strong key="s">Social learning theory</strong>,
              'Bandura (1965). Much human learning comes from OBSERVING OTHERS. This is the basis of BEHAVIOR MODELING TRAINING, used for interpersonal skills and supervisor training.'
            ]
          ]}
        />

        <Callout kind="danger" title="Meaningfulness — and the safety training finding">
          <strong>Meaningfulness</strong> — glossary: <em>the degree to which the training is seen as
          relevant to the workplace or to the learner.</em>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>Smith-Jentsch et al. (1996):</strong> airplane pilots{' '}
              <strong>improved their training performance when they had experienced a &ldquo;negative
              pre-training event&rdquo;</strong> — a dangerous situation. They likely perceived the training
              as more <strong>instrumental or meaningful</strong> to their safety.
            </li>
            <li>
              <strong>Burke et al. (2011) meta-analysis:</strong> if trainees{' '}
              <strong>had been exposed to hazards in the past, it often ENHANCED the effectiveness of safety
              training</strong>. The same study found{' '}
              <strong>highly engaging safety training relates to higher safety knowledge and actual safety
              behaviors</strong>.
            </li>
          </ul>
        </Callout>

        <Callout kind="warn" title="Stress and learning">
          When individuals are <strong>exhausted, they have less attention and mental capacity for
          learning</strong>. Stress of the training environment influences motivation to learn and
          exhaustion, which in turn affect learning outcomes (LePine et al., 2004).
          <p className="mt-2">
            <strong>Watson et al. (2013):</strong> monitoring people during online learning meant those{' '}
            <strong>high in PERFORMANCE goal orientation worried about being evaluated poorly, which
            resulted in LOWER learning.</strong>
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 6
  {
    id: 'learning-principles',
    title: 'Learning Principles in Training Design',
    subtitle: 'Massed vs. spaced, feedback, schemata, overlearning, and decay',
    images: [
      {
        src: `${IMG}/08g_fig8-6_decay_of_learning.png`,
        alt: 'Figure 8.6: a line chart with job knowledge on the y-axis rising from 1.5 at Time 1 baseline to 3.5 at Time 2 immediately after training, then declining to 2.5 at Time 3 six months after training.',
        caption: 'Figure 8.6 — Decay of learning over time. Performance peaks right after training, then drops by six months.'
      }
    ],
    content: (
      <>
        <Callout kind="danger" title="Massed vs. spaced — know which wins and why organizations still choose the loser">
          <Table
            headers={['', 'Massed learning', 'Spaced learning']}
            rows={[
              [
                <strong key="d">Definition</strong>,
                'The delivery of training in a CONDENSED session or sessions.',
                'The delivery of training in SMALL SESSIONS over a LONGER period of time.'
              ],
              [
                <strong key="e">Effectiveness</strong>,
                'Inferior for retention.',
                'GENERALLY SUPERIOR for retaining material, because it lets learners ORGANIZE AND INTEGRATE what they have learned.'
              ],
              [
                <strong key="w">Why pick massed anyway?</strong>,
                'PRAGMATIC reasons: effects on organizational resources; a trainer or expert is only available one day; trainees can only be flown in once; trainees must learn the material QUICKLY. It also facilitates FASTER delivery of new skills.',
                '—'
              ]
            ]}
          />
        </Callout>

        <Table
          headers={['Principle', 'Definition & why it works']}
          rows={[
            [
              <strong key="f">Feedback</strong>,
              'Providing learners with information about how they are doing, leading to KNOWLEDGE OF RESULTS. Essential for all learners (especially those with poor meta-cognitive skills) and central to goal-setting theory. The chapter’s analogy: a 14-week course with two exams and a final where you never got feedback along the way.'
            ],
            [
              <strong key="s">Learning schema (pl. schemata)</strong>,
              'A FRAMEWORK FOR ORGANIZING learning content. Helps learners see the big picture and how content fits together; research shows providing schemata helps trainees learn MORE QUICKLY. As learners become expert, their schemata become MORE SIMILAR TO AN EXPERT’S.'
            ],
            [
              <strong key="a">Advanced organizers</strong>,
              'Providing learners with the OUTLINE AND LOGIC of the material PRIOR TO training. The textbook points at itself — chapter learning goals and the table of contents are advanced organizers.'
            ],
            [
              <strong key="o">Overlearning</strong>,
              'A training approach in which the trainee practices a behavior SO MUCH THAT IT BECOMES AUTOMATIC — requiring little attentional capacity (Kanfer & Ackerman, 1989).'
            ],
            [
              <strong key="t">Tailoring</strong>,
              'Whether training fits the AVERAGE trainee or is TAILORED to individuals. Tailoring is theoretically most effective and engaging, but is a practical/cost matter — though computerized and online media are making it more achievable.'
            ]
          ]}
        />

        <Callout kind="danger" title="When is overlearning worth the cost?">
          Overlearning <strong>requires more training time and more organizational resources</strong>, so it
          is <strong>NOT recommended for all skills</strong>. It is especially important for:
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li><strong>Highly critical skills</strong></li>
            <li><strong>Behaviors that RARELY OCCUR on the job</strong></li>
            <li><strong>Behaviors used under STRESSFUL conditions</strong> (where cognitive resources are depleted)</li>
          </ul>
          <p className="mt-2">
            The chapter&rsquo;s example: <strong>emergency procedures at a nuclear power plant</strong> —
            very rare, highly stressful, so training to automaticity makes sense. &ldquo;For these limited
            types of behaviors, overlearning can be lifesaving.&rdquo;
          </p>
        </Callout>

        <Callout kind="warn" title="Decay of learning (Figure 8.6)">
          <strong>Definition:</strong> the process in which learned knowledge, skills, and behaviors{' '}
          <strong>become less accessible as time passes after training</strong>.
          <p className="mt-2">
            In Figure 8.6, trainees handling a grouchy client perform <strong>well at Time 2 (immediately
            after training)</strong> — better than at Time 1 baseline — but the ability has{' '}
            <strong>declined by Time 3 (six months later)</strong>. Decay is <strong>especially an issue
            when the behavior is not practiced frequently on the job</strong>.
          </p>
          <p className="mt-2">
            <strong>Two fixes:</strong> (1) <strong>overlearning</strong>, and (2) periodic{' '}
            <strong>&ldquo;booster&rdquo; training</strong> to briefly review content.
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 7
  {
    id: 'training-methods-core',
    title: 'Training Methods I: OJT, Simulators, Lecture, Programmed Instruction',
    subtitle: 'The core delivery methods and the trade-offs of each',
    content: (
      <>
        <Callout kind="tip" title="Two framing rules the chapter states up front">
          <ol className="list-decimal pl-5 space-y-1">
            <li>Find a <strong>balance between learner needs and organizational constraints</strong>.</li>
            <li>
              <strong>Combining multiple methods will increase learning</strong>, since the strengths of each
              complement the others and address a range of learner needs.
            </li>
          </ol>
        </Callout>

        <Card title="On-the-job training (OJT)">
          <p className="text-sm">
            <strong>Glossary:</strong> <em>putting the learner into the job to learn how to do it.</em>{' '}
            <strong>Perhaps the most common type of training in organizations.</strong>
          </p>
          <div className="grid md:grid-cols-2 gap-3 mt-2">
            <div className="border border-emerald-200 bg-emerald-50 rounded p-3">
              <div className="font-semibold text-emerald-900 text-sm mb-1">In theory</div>
              <p className="text-sm">
                <strong>No better method exists.</strong> It has <strong>nearly perfect psychological and
                physical fidelity</strong> and thus <strong>should lead to perfect transfer</strong>.
              </p>
            </div>
            <div className="border border-red-200 bg-red-50 rounded p-3">
              <div className="font-semibold text-red-900 text-sm mb-1">In practice</div>
              <ul className="list-disc pl-4 text-sm space-y-1">
                <li>
                  The &ldquo;trainer&rdquo; employee is usually <strong>not told how to train</strong> —
                  there is typically <strong>no formal train-the-trainer program</strong>.
                </li>
                <li>
                  That trainer must <strong>keep up all their regular job responsibilities</strong> on top of
                  training, which is difficult and <strong>may cause resentments</strong>.
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm mt-2">
            <strong>Verdict:</strong> excellent <em>if the proper resources are invested</em>, and it{' '}
            <strong>may work best when preceded by some other training</strong> (e.g., a lecture).
            Apprenticeships and internships are common forms of OJT.
          </p>
        </Card>

        <Card title="Machine simulators">
          <p className="text-sm">
            <strong>Glossary:</strong> <em>a training environment that reflects the job situation as closely
            as possible, both psychologically and physically.</em> Used{' '}
            <strong>when the cost of a mistake is high or catastrophic</strong> in human lives and property —
            the chapter&rsquo;s example being an <strong>airline pilot</strong>.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
            <li>
              A flight simulator means an <strong>entire cockpit</strong> matching the exact plane, in a room
              that <strong>tilts and bumps</strong> to reflect turbulence. Cost:{' '}
              <strong>upwards of millions of dollars</strong>.
            </li>
            <li>
              <strong>Two advantages:</strong> it is <strong>safer</strong> than learning on the job, AND it
              lets learners experience <strong>critical but INFREQUENTLY OCCURRING situations</strong> — the
              example being <strong>wind shear</strong>.
            </li>
            <li>
              <strong>Simulations need not involve machinery.</strong> The European Space Agency had six
              astronauts <strong>live in underground caves in Italy for a week</strong> — total isolation,
              complete darkness, physical danger — to prepare for the ISS.
            </li>
          </ul>
          <Callout kind="danger" title="Debriefing — do not skip this term">
            <strong>Glossary:</strong> <em>talking with trainees about what happened in the training program,
            what could have been done better, and what was learned as a result.</em>{' '}
            <strong>Critical to maximize learning in simulation-based training</strong> — it is how
            individuals and teams <strong>turn experiences into actual learning</strong> (Villado &amp;
            Arthur, 2013). Routinely used in <strong>Army training exercises and training of surgical
            teams</strong>.
          </Callout>
        </Card>

        <Card title="Lecture">
          <p className="text-sm">
            <strong>Glossary:</strong> <em>the oral presentation of information to trainees, either with or
            without feedback and discussion.</em>
          </p>
          <Table
            headers={['Form', 'Effectiveness']}
            rows={[
              ['TWO-WAY communication (learners can ask questions)', 'More effective for learning — "lecture at its best."'],
              ['ONE-WAY communication (no questions or feedback)', 'Provides little chance for feedback and is NOT effective for training behaviors and skills.']
            ]}
          />
          <p className="text-sm mt-2">
            <strong>Where lecture genuinely works:</strong> disseminating <strong>facts or basic
            knowledge</strong> to a <strong>large number of learners</strong>, making it{' '}
            <strong>relatively inexpensive and practical</strong>. It is also great{' '}
            <strong>combined with other methods</strong> — e.g., to communicate a{' '}
            <strong>learning schema</strong> or give <strong>advanced organizers</strong>. The chapter notes
            it is best in <strong>relatively small doses</strong>, because adult learners{' '}
            <strong>process information they hear more slowly</strong> than what they read or experience.
          </p>
        </Card>

        <Card title="Programmed instruction">
          <p className="text-sm">
            Material presented in <strong>modules</strong>; after each, trainees{' '}
            <strong>must take and pass a quiz</strong> before continuing. Fail, and they repeat the module
            and retake the quiz.
          </p>
          <Callout kind="warn" title="The name is a trap">
            <strong>&ldquo;Programmed&rdquo; does NOT mean delivered by computer</strong> — although often it
            is. The method was developed <strong>in the 1950s</strong> as a <em>program of structured
            instruction</em>, originally presented as a <strong>booklet of written content</strong>.
          </Callout>
          <Table
            headers={['Variant', 'How it handles a wrong answer']}
            rows={[
              [<strong key="l">Linear programmed instruction</strong>, 'The learner either CONTINUES to the next module or REPEATS the previous one.'],
              [<strong key="b">Branching programmed instruction</strong>, 'The learner may repeat the module, repeat PART of the module, or go to a "REMEDIAL" module. MORE EXPENSIVE to develop because of its complexity.']
            ]}
          />
          <div className="grid md:grid-cols-2 gap-3 mt-3">
            <div className="border border-emerald-200 bg-emerald-50 rounded p-3">
              <div className="font-semibold text-emerald-900 text-sm mb-1">Advantages</div>
              <ul className="list-disc pl-4 text-sm space-y-1">
                <li>Learners <strong>go at their own pace</strong>, accommodating individual differences in ability and job knowledge.</li>
                <li>It <strong>gives feedback</strong> — especially useful for learners with <strong>poor meta-cognitive skills</strong>.</li>
                <li>Often available <strong>off-the-shelf</strong>, saving development money.</li>
                <li>Used with a live trainer, it <strong>frees the trainer's time</strong> for individual needs.</li>
              </ul>
            </div>
            <div className="border border-red-200 bg-red-50 rounded p-3">
              <div className="font-semibold text-red-900 text-sm mb-1">Drawbacks</div>
              <ul className="list-disc pl-4 text-sm space-y-1">
                <li><strong>Costly to develop</strong>, especially branching.</li>
                <li>Some learners <strong>prefer an actual trainer</strong> to a booklet or computer.</li>
                <li>It is <strong>only as good as the content and the quality of the quizzes</strong>.</li>
              </ul>
            </div>
          </div>
        </Card>
      </>
    )
  },

  // ------------------------------------------------------------------ 8
  {
    id: 'training-methods-specialized',
    title: 'Training Methods II: BMT, Diversity, Managerial, Onboarding, e-Learning, Teams',
    subtitle: 'The specialized methods and what the research says about each',
    content: (
      <>
        <Card title="Behavior modeling training (BMT)">
          <p className="text-sm">
            Based on <strong>Bandura&rsquo;s (1977) social learning theory</strong>, typically used to train{' '}
            <strong>behaviorally complex skills such as interpersonal skills</strong>, which is why it is
            often part of <strong>supervisor training</strong>.
          </p>
          <p className="text-sm mt-2">
            <strong>The sequence:</strong> learners <strong>observe (model)</strong> a person performing the
            desired behavior → the learner <strong>role-plays</strong> a similar situation →{' '}
            <strong>gets feedback</strong> from other learners and the trainer.
          </p>
          <Callout kind="tip" title="Taylor et al. (2005) meta-analysis">
            <ul className="list-disc pl-5 space-y-1">
              <li>BMT affects <strong>learning outcomes</strong>, and <strong>to a lesser extent, on-the-job behavior</strong>.</li>
              <li>The effects on job behavior <strong>do not seem to decay very quickly</strong>.</li>
              <li>
                Presenting <strong>BOTH positive AND negative models</strong> (a supervisor doing a good job{' '}
                <em>and</em> one doing a poor job) <strong>seems to help with transfer</strong> (confirming
                Baldwin, 1992).
              </li>
            </ul>
          </Callout>
        </Card>

        <Card title="Diversity training">
          <p className="text-sm">
            <strong>Glossary:</strong> <em>focused on the better functioning of diverse groups of employees;
            includes sensitivity to different groups.</em>
          </p>
          <Table
            headers={['Study', 'Finding']}
            rows={[
              ['Kalinoski et al. (2013)', 'Diversity training increased AFFECTIVE (attitudes, motivation), SKILL-BASED (behaviors), and COGNITIVE (knowledge) outcomes. Training using SOCIAL INTERACTION had greater effects on trainee affect — they liked it more.'],
              ['Bezrukova et al. (2016)', 'Most effective when (1) OTHER DIVERSITY INITIATIVES are in place, (2) training focuses on BOTH awareness AND skills development, and (3) it is CONDUCTED OVER A PERIOD OF TIME.'],
              ['Rawski & Conroy (2020)', 'Participants who IDENTIFIED WITH THEIR ORGANIZATION were more likely to participate and more motivated to transfer training back to the job.'],
              ['Roberson (2019) — critique', 'Many organizations treat diversity training as a "ONE-SIZE-FITS-ALL" proposition rather than tailoring it via needs assessment. Also calls for scrutiny of whether such training leads to greater REPRESENTATION of women and minorities.']
            ]}
          />
        </Card>

        <Card title="Managerial training methods">
          <Table
            headers={['Method', 'Definition']}
            rows={[
              [
                <strong key="d">Developmental assessment centers</strong>,
                'Assessment centers (Ch. 6) used NOT for promotion decisions but to GIVE FEEDBACK and provide a DEVELOPMENTAL PLAN for managers.'
              ],
              [
                <strong key="e">Executive coaching</strong>,
                'A manager works INDIVIDUALLY with a coach, at their own or company expense, on issues and challenges at work.'
              ],
              [
                <strong key="c">Case study analysis</strong>,
                'An in-depth analysis of a particular business case.'
              ],
              [
                <strong key="b">Business games and simulations</strong>,
                'Competition among groups of business teams to improve business decisions.'
              ],
              [
                <strong key="r">Role play</strong>,
                'Individuals act out challenging work situations (e.g., a difficult interpersonal situation) to enhance their ability in future situations.'
              ],
              [
                <strong key="cc">Cross-cultural training</strong>,
                'Training to increase managers’ success in OVERSEAS ASSIGNMENTS — from cultural awareness and sensitivity to language training.'
              ]
            ]}
          />
          <Callout kind="warn" title="Two findings on coaching and cross-cultural training">
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Dahling et al. (2016)</strong>, across 1,246 sales reps in 136 teams: managers&rsquo;{' '}
                <strong>coaching SKILL</strong> was related to whether employees made their sales goals — and
                for <strong>LESS SKILLFUL coaches, FREQUENT coaching was related to POORER
                performance</strong>. More coaching is not better if the coach is bad at it. Research on
                coaching remains <strong>sparse</strong>.
              </li>
              <li>
                <strong>Lievens et al. (2003)</strong>, 15 European managers training for overseas
                assignments: <strong>OPENNESS to experience predicted cross-cultural performance</strong>,
                whereas <strong>COGNITIVE ABILITY related to acquisition of LANGUAGE skills</strong>.
              </li>
            </ul>
          </Callout>
        </Card>

        <Card title="New employee onboarding">
          <p className="text-sm">
            <strong>Onboarding</strong> — glossary: <em>a process through which employees become familiar
            with both the TASK and SOCIAL demands of their new roles.</em> It is{' '}
            <strong>the first training most new employees receive</strong>. Newcomers learn the
            organization&rsquo;s <strong>history, language, politics, people, goals/values, and performance
            proficiency</strong> (Chao et al., 1994).
          </p>
          <p className="text-sm mt-2">
            <strong>New employee orientation programs (NEO)</strong> — glossary:{' '}
            <em>a training process that presents basic information to new employees to help get them up and
            running and ready to contribute as quickly as possible.</em>{' '}
            <strong>Almost all organizations conduct some form of NEO</strong>; it might last an hour or
            several months.
          </p>
          <Callout kind="danger" title="Cable et al. (2013) — the counterintuitive onboarding finding">
            In a study of <strong>call center employees in India</strong>, employees who were{' '}
            <strong>brought in and told what a great company they had joined</strong> were{' '}
            <strong>LESS likely to perform well and stay</strong> than employees who were{' '}
            <strong>encouraged to express their AUTHENTIC SELVES</strong>. &ldquo;The difference in the
            emphasis of the NEO content was subtle but led to big differences in results.&rdquo;
          </Callout>
          <Callout kind="tip" title="Bauer et al. (2007) meta-analysis — 70 studies, 12,000+ new employees">
            <strong>Organizations can help by:</strong> giving <strong>clear signals about life within the
            organization</strong>, helping new employees <strong>feel welcomed</strong>, and having{' '}
            <strong>insiders provide valuable information</strong>.
            <br />
            <strong>New employees can help themselves by:</strong>{' '}
            <strong>gathering information, seeking feedback, investing in relationships, and showing success
            early</strong> on the job.
          </Callout>
          <p className="text-sm mt-2">
            <strong>Goldstein &amp; Ford&rsquo;s five orientation goals:</strong> communicating information
            about the job and organization; acquiring essential job and safety skills; typical norms and
            attitudes fitting the culture; understanding how things get done within the structure; and making
            clear who does what.
          </p>
        </Card>

        <Card title="Online training (e-learning)">
          <Callout kind="danger" title="Sitzmann et al. (2006) meta-analysis — the key comparison">
            Online training is <strong>about THE SAME as classroom training for knowledge</strong>. Most
            importantly, online training was <strong>MORE effective than classroom training IF trainees were
            given CONTROL of their training and could PRACTICE and RECEIVE FEEDBACK during it.</strong>
          </Callout>
          <Callout kind="warn" title="The distinction the chapter insists on">
            <strong>&ldquo;Online training is only a training MEDIUM, and not an actual training
            METHOD.&rdquo;</strong> Online training could be used to deliver{' '}
            <strong>programmed instruction OR a lecture</strong> — two very different methods for very
            different skills.
          </Callout>
          <p className="text-sm mt-2">
            <strong>Learner control in training</strong> — providing learners with choices about training
            features. Orvis et al. (2009) found <strong>choice may improve trainee reactions</strong>, but{' '}
            <strong>learners may not always make the best choices</strong>: a less skilled learner may spend
            time on activities that do not increase learning while ignoring more challenging ones. So
            e-learning <strong>might be best when some GUIDANCE is provided</strong> (Brown et al., 2016).
          </p>
        </Card>

        <Card title="Team training">
          <p className="text-sm">
            Methods include <strong>cross-training</strong> (team members{' '}
            <strong>learn each other&rsquo;s jobs</strong>) and{' '}
            <strong>coordination and adaptation training</strong>.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
            <li><strong>Marks et al. (2002):</strong> cross-training <strong>increased the SHARED MODELS for team interaction</strong> across members.</li>
            <li><strong>Salas et al. (2008) meta-analysis:</strong> team training can have <strong>substantial effects on team performance</strong>.</li>
            <li>
              <strong>Hughes et al. (2016) meta-analysis:</strong> training of <strong>medical teams improved
              ALL training outcomes INCLUDING PATIENT MORTALITY.</strong>
            </li>
          </ul>
        </Card>
      </>
    )
  },

  // ------------------------------------------------------------------ 9
  {
    id: 'training-criteria',
    title: 'Evaluating Training I: Kirkpatrick’s Four Criteria',
    subtitle: 'Why evaluation gets skipped, and the four levels',
    images: [
      {
        src: `${IMG}/08h_fig8-7_kirkpatrick_four_levels.png`,
        alt: 'Figure 8.7: four colored bars — Reactions (how did trainees perceive the training? did they like it? was it useful?), Learning (did they gain knowledge and skills? measured by tests), Behavior (did training change on-the-job behavior? did it transfer?), Results (most difficult to assess; did training affect organizational outcomes like profitability?).',
        caption: 'Figure 8.7 — Kirkpatrick’s four levels of training criteria, in increasing order of difficulty to assess.'
      }
    ],
    content: (
      <>
        <Callout kind="info" title="Two purposes of evaluating training">
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              To see <strong>whether the training needs to be CHANGED</strong> to make it more effective —
              e.g., sales training raised customer contacts but not product knowledge, so adjust that part.
            </li>
            <li>
              To <strong>demonstrate its VALUE and determine whether it should be CONTINUED</strong>.
            </li>
          </ol>
        </Callout>

        <Callout kind="danger" title="Three reasons evaluation does not happen — a listing MCQ waiting to happen">
          <ol className="list-decimal pl-5 space-y-1.5">
            <li>
              Some organizations <strong>may not feel the need</strong> — &ldquo;if everyone said they liked
              the training, isn&rsquo;t that good enough?&rdquo; The authors say <strong>no</strong>, since
              decision-makers increasingly demand demonstrated value.
            </li>
            <li>
              Some trainers <strong>may want to AVOID evaluation</strong>. If you were responsible for a{' '}
              <strong>$100,000</strong> training investment, it might be more comfortable not to examine the
              payoff <em>just in case you found an answer you did not like</em>.
            </li>
            <li>
              Evaluation is <strong>time-consuming and challenging, and many trainers are not trained in
              it</strong>.
            </li>
          </ol>
          <Callout kind="warn" title="The asymmetry inside reason 3 — know which direction it runs">
            If <strong>poor (unreliable) measures</strong> are used, which is more likely: a poor program
            looks like it works, or an <strong>excellent program looks as if it did NOT work</strong>?{' '}
            <strong>The latter.</strong> That is what makes evaluation risky to attempt. (This is the Ch. 4
            point that an unreliable criterion cannot detect differences.)
          </Callout>
        </Callout>

        <Callout kind="danger" title="Kirkpatrick (1959, 1998) — the four levels">
          <Table
            headers={['Level', 'Definition', 'Typically measured by']}
            rows={[
              [
                <strong key="1">1. Reactions</strong>,
                'How trainees PERCEIVE the training — from whether the trainer was interesting to whether the training was useful to their work. The MOST BASIC level; does NOT really indicate the training was effective.',
                'Surveys'
              ],
              [
                <strong key="2">2. Learning</strong>,
                'Indicators of whether trainees showed SIGNS OF LEARNING the material.',
                'Tests and other assessments given after training'
              ],
              [
                <strong key="3">3. Behavior</strong>,
                'Indicators of whether the training actually led to CHANGES IN ON-THE-JOB BEHAVIOR — i.e., did it TRANSFER?',
                'Performance ratings or objective measures of work performance'
              ],
              [
                <strong key="4">4. Results</strong>,
                'Whether the training led to a change in ORGANIZATIONAL PERFORMANCE such as profitability. BY FAR THE MOST DIFFICULT to assess, because many other factors besides training affect organizational performance.',
                'Organizational outcome data'
              ]
            ]}
          />
        </Callout>

        <Callout kind="warn" title="The critique of Kirkpatrick — and two refinements">
          <p>
            The model <strong>still dominates</strong> because it is <strong>intuitively appealing</strong>{' '}
            and easy to explain to decision-makers. But it has been criticized for being{' '}
            <strong>four broad categories that largely denote WHEN measures are collected rather than,
            qualitatively, WHAT each measure is</strong>. For instance,
            &ldquo;reactions&rdquo; can mean anything from whether trainees <em>enjoyed</em> the training to
            whether they felt it was <em>relevant to their work</em> (Alliger et al., 1997).
          </p>
          <Table
            headers={['Framework', 'What it adds']}
            rows={[
              [
                'Kraiger et al. (1993)',
                'Defines training outcomes as COGNITIVE, SKILL-BASED, and AFFECTIVE. Affective outcomes include changes in attitudes and in employee motivation and self-efficacy.'
              ],
              [
                'Alliger et al. (1997)',
                'Keeps Kirkpatrick’s four but breaks them down: Reactions → affective reactions + UTILITY JUDGMENTS; Learning → immediate knowledge, knowledge retention, behavior/skill demonstration; Behavior → explicitly defined as TRANSFER; Results → similar to the original.'
              ]
            ]}
          />
          <p className="mt-2">
            <strong>Two findings that come out of that refinement:</strong>
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              Although many consider reactions unimportant, Alliger et al. showed meta-analytically that{' '}
              <strong>trainee perceptions of UTILITY are related to whether transfer takes place</strong> —
              trainees may be able to tell you whether a program is effective.
            </li>
            <li>
              <strong>Learning outcomes are NOT necessarily associated with transfer</strong> into actual job
              behaviors. Just because trainees gain knowledge does not mean it is relevant or can be applied.
            </li>
          </ol>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 10
  {
    id: 'evaluation-designs',
    title: 'Evaluating Training II: Threats & Evaluation Designs',
    subtitle: 'Internal and external validity threats, and the three families of design',
    content: (
      <>
        <p>
          <strong>Threats to experimental validity</strong> — glossary: <em>factors which may affect our
          ability to interpret results of a study such as a training evaluation.</em> Note the chapter&rsquo;s
          warning: these are <strong>different from the measurement/test validity</strong> of Chs. 2, 6, and
          7.
        </p>

        <Callout kind="danger" title="Threats to INTERNAL validity (Cook & Campbell, 1979)">
          <p className="mb-2">
            <strong>Glossary:</strong> <em>factors that can cause us to have concerns with the ACCURACY of
            results obtained in this situation.</em>
          </p>
          <Table
            headers={['Threat', 'Definition', 'Training example']}
            rows={[
              ['History', 'An event occurs between pretest and posttest, at about the same time as training.', 'Employees get a PAY RAISE between pretest and posttest — did training or the raise cause the change?'],
              ['Maturation', 'Trainees actually mature or change between pretest and posttest.', 'New employees working on the job improve through NATURAL MATURATION into the work, not the training.'],
              ['Testing', 'The PRETEST affects results on the posttest.', 'The pretest content tips trainees off to the key learning goals, so posttest gains come from having taken the pretest.'],
              ['Instrumentation', 'A change in the actual MEASURES from pretest to posttest.', 'Non-equivalent tests used at the two points, or DIFFERENT SUPERVISORS (one lenient, one severe) giving the ratings.'],
              ['Statistical regression to the mean', 'People with very high or very low scores on one occasion tend toward the middle on the second.', 'An issue because people are often chosen for training BECAUSE they scored very low (remedial) or very high ("high potentials").'],
              ['Differential selection of participants', 'NON-RANDOM assignment to training or control.', 'Training the San Francisco office and using Seattle as control. FIX: good PRETEST measures so you can statistically control for pre-existing differences.'],
              ['Experimental mortality', 'Participants DROP OUT of the study.', 'Especially a problem if people doing well or poorly drop out at DIFFERENT RATES.'],
              ['Compensatory equalization of treatments', 'Someone outside the program does something "special" for the CONTROL group.', 'Top management gives "perks" to those who did not get the training.'],
              ['Compensatory rivalry', 'The control group realizes it is untrained and COMPETES with the trained group.', 'Teachers without the new technology work harder to "show those researchers." MINIMIZES the apparent training effect.'],
              ['Resentful demoralization', 'The control group RESENTS being excluded and performs LOWER as a result.', 'Teachers "give up," making the trained group look particularly good.'],
              ['Diffusion of treatments', 'Trained employees return to the worksite and TRAIN their control-group coworkers.', 'Good for the workers, bad for the evaluation — it makes effective training look ineffective.']
            ]}
          />
          <p className="mt-2 text-sm">
            <strong>The fix for rivalry and demoralization</strong> is the same in both cases: keep the
            control group <strong>blind to being a control group</strong>, or <strong>tell them they will be
            trained later</strong>.
          </p>
        </Callout>

        <Callout kind="warn" title="Threats to EXTERNAL validity">
          <p className="mb-2">
            <strong>Glossary:</strong> <em>threats that cause us to have concerns about whether results will
            GENERALIZE to other settings.</em> E.g., training validated on office workers may not work for
            construction workers.
          </p>
          <Table
            headers={['Threat', 'What happens']}
            rows={[
              ['Reactive effects of PRETESTING', 'The training worked ONLY because trainees got the pretest and then paid greater attention to the related material. Used elsewhere without a pretest, it may not work as well.'],
              ['Reactive effects of the EXPERIMENTAL SETTING', 'Trained participants know they are part of a study and TRY HARDER — essentially the HAWTHORNE EFFECT from Ch. 1. Outside a "special" evaluation setting they may not do so well.']
            ]}
          />
        </Callout>

        <Callout kind="danger" title="The three design families — ranked by rigor">
          <p className="mb-2">
            <strong>Experimental rigor</strong> — glossary: <em>the degree to which threats to validity can
            be eliminated as the cause of a study&rsquo;s results. Rigor can be increased by the use of
            CONTROL GROUPS, RANDOM ASSIGNMENT, and the use of PRETESTS.</em> Those are the{' '}
            <strong>three characteristics</strong> to look for in any design.
          </p>
          <Table
            headers={['Family', 'Design', 'Notation', 'What it controls']}
            rows={[
              [
                <strong key="p1">Pre-experiment</strong>,
                'Posttest only, no control group',
                'X  T2',
                'ESSENTIALLY NO threats. Use only if you want to confirm trainees possess the KSAs afterward and do not care whether training CAUSED the improvement.'
              ],
              [
                <strong key="p2">Pre-experiment</strong>,
                'Pretest, posttest, no control group',
                'T1  X  T2',
                'Measures CHANGE in KSAs — "a big improvement in terms of rigor" — but cannot rule out history and maturation.'
              ],
              [
                <strong key="t1">True experiment</strong>,
                'Pretest, posttest control group with random assignment',
                'T1 X T2 (R) / T1 __ T2 (R)',
                'Controls many threats including history and maturation, since it has a baseline AND an equivalent control group. Does NOT control TESTING effects.'
              ],
              [
                <strong key="t2">True experiment</strong>,
                'Solomon 4-group design',
                'four rows, two with pretests, two without, all randomized',
                '"Grand and elegant — but often impractical." Has it all: pretests, control groups, random assignment, PLUS it shows how training would work WITHOUT a pretest.'
              ],
              [
                <strong key="q1">Quasi-experiment</strong>,
                'Pretest, posttest control group with NON-random assignment',
                'T1 X T2 / T1 __ T2',
                'Lets you compare two non-equivalent groups (Boston vs. Philadelphia office). The KEY is having T1 baselines to statistically control for pre-existing differences.'
              ],
              [
                <strong key="q2">Quasi-experiment</strong>,
                'Time series design',
                'T1 T2 T3 X T4 T5 T6',
                'No control group needed. If T1–T3 are equivalent and performance bumps at T4, MATURATION is probably not driving results. T4–T6 also show DECAY and whether BOOSTER training is needed.'
              ]
            ]}
          />
        </Callout>

        <Callout kind="tip" title="Sackett & Mullen (1993) — why the most rigorous design is not always right">
          <p className="mb-2">
            Two questions drive the choice: <strong>(1) What is the PURPOSE of the evaluation?</strong> and{' '}
            <strong>(2) What organizational RESOURCES and CONSTRAINTS exist?</strong>
          </p>
          <p className="mb-2">
            <strong>On purpose:</strong> for <strong>police academy training</strong>, the overriding issue is
            whether recruits have the requisite KSAs before being put on the street — not whether training{' '}
            <em>caused</em> the change. A <strong>simple posttest design may suffice</strong>. But for an
            expensive new supervisor training program you may be asked to prove it caused change, requiring a
            rigorous design.
          </p>
          <Table
            headers={['Scenario', 'The constraint', 'The judgment']}
            rows={[
              ['1', 'The organization allows a pretest and posttest but NO control group.', 'Better than NO evaluation at all — especially if threats like history can be ruled out by logical consideration.'],
              ['2', 'A Solomon 4-group design is permitted, but only 20 participants exist.', 'Five people per condition is UNWISE STATISTICALLY — the small sample may keep you from detecting that a good program works.'],
              ['3', '200 employees with random assignment permitted.', 'Sounds great, but invites DIFFUSION, COMPENSATORY RIVALRY, and RESENTFUL DEMORALIZATION. Fix: randomly assign WORK GROUPS rather than individuals, or use a quasi-experiment where the control group is NOT IN CONTACT with the trained group.']
            ]}
          />
          <p className="mt-2 font-semibold">
            The punchline: &ldquo;a rigorous design with random assignment may actually INTRODUCE additional
            threats to validity.&rdquo;
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 11
  {
    id: 'legal-global-current-ch8',
    title: 'Legal, Global & Current Issues',
    subtitle: 'Training as a selection procedure, gamification, microlearning, and informal learning',
    content: (
      <>
        <Callout kind="danger" title="Legal Issues — training can BE a selection procedure">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              To the extent a training program is <strong>used to make hiring or promotion decisions, it is
              CONSIDERED A SELECTION PROCEDURE</strong>, covered by the{' '}
              <strong>Uniform Guidelines and EEO laws</strong>.
            </li>
            <li>
              That means monitoring whether <strong>trainees from protected groups PASS at a differential
              rate</strong>. If a management training program decides who becomes a manager and the pass rate
              for minority trainees is lower (see the <strong>4/5 rule</strong>, Ch. 7), the organization
              should reconsider its use or <strong>be prepared to defend its validity</strong>.
            </li>
            <li>
              Organizations must also be <strong>fair about WHO IS CHOSEN for training</strong> — e.g., men
              selected at a higher rate than women would be problematic.
            </li>
            <li>
              <strong>Training protects the organization legally too.</strong> Safety, diversity, and
              harassment-avoidance training decrease legal liability. In fact,{' '}
              <strong>NOT training employees may itself be a type of NEGLIGENCE</strong>: if an employee
              harms others during job duties, the organization may be{' '}
              <strong>held legally liable for not adequately training them</strong>.
            </li>
          </ul>
        </Callout>

        <Card title="Global Implications">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Aguinis and Kraiger (2009) include a <strong>global view of training</strong>, with the goal of
              understanding its importance to <strong>employees, organizations, AND society</strong>.
            </li>
            <li>
              Drivers: <strong>expatriate assignments</strong>, <strong>multinational teams often working
              remotely</strong>, and <strong>online training enabling a single method across many
              countries</strong>.
            </li>
            <li>
              <strong>We know cross-cultural training generally works</strong>, but much more research is
              needed on <strong>which types are most effective and under which conditions</strong> (Littrell
              et al., 2006). Salas et al. (2012) pose the pointed question:{' '}
              <strong>which specific COMPETENCIES are needed to compete globally?</strong>
            </li>
          </ul>
        </Card>

        <Card title="Current Workplace Issues — gamification & microlearning">
          <Table
            headers={['Trend', 'What it is', 'Status of the evidence']}
            rows={[
              [
                <strong key="g">Gamification</strong>,
                'Making the training process a GAME — awarding "badges" or levels of achievement — to motivate and engage learners (Kapp, 2012).',
                'Landers et al. (2019): FADDISHNESS, a LACK OF CLEAR DEFINITION, and SPARSE RESEARCH have hindered knowledge of how to implement it well. They recommend designers use MOTIVATION THEORIES (expectancy, goal-setting), a robust NEEDS ASSESSMENT, and learner reactions.'
              ],
              [
                <strong key="m">Microlearning</strong>,
                'A form of e-learning, often on mobile devices, presenting SMALL "BITES" of information (e.g., 1–2 minutes) to maintain attention and counter DECAY. Can be paired with classroom training.',
                'Still LITTLE PUBLISHED RESEARCH, but preliminary work suggests it can lead to greater knowledge and learner satisfaction.'
              ]
            ]}
          />
        </Card>

        <Card title="Current Research Issues">
          <ol className="list-decimal pl-5 space-y-1.5 text-sm">
            <li>
              <strong>Does training technology actually work, and why?</strong> Research needs to uncover
              which enhancements (e.g., providing choice) work, and{' '}
              <strong>for which types of employees</strong> (by age group, education, personality).
            </li>
            <li>
              <strong>How does INDIVIDUAL skill acquisition translate into ORGANIZATIONAL improvement?</strong>{' '}
              Understanding that tie-in could help build higher-impact training systems.
            </li>
            <li>
              <strong>Neuroscience</strong> says a lot about how individual learning occurs — how can that
              research be used to build better training? &ldquo;A particularly promising area.&rdquo;
            </li>
            <li>
              <strong>Informal field-based learning (IFBL)</strong> — when people{' '}
              <strong>intentionally take on SELF-DIRECTED learning at work</strong>. Most learning in
              organizations happens informally, but this was largely ignored until recently. Wolfson et al.
              (2018, 2019): whether someone engages in IFBL and whether it affects performance relates to{' '}
              <strong>personality (highly promotion-focused)</strong>,{' '}
              <strong>the nature of the work (time pressure, frequent updating)</strong>, and{' '}
              <strong>context (non-punitive work climates)</strong>.
            </li>
          </ol>
        </Card>
      </>
    )
  }
];
