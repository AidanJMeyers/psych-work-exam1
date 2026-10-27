import React from 'react';
import { Callout, Table, Card } from '../components/Visual.jsx';

const IMG = 'ch11_job_attitudes_emotions';

export default [
  // ------------------------------------------------------------------ 1
  {
    id: 'why-attitudes-matter',
    title: 'Why Job Attitudes Matter',
    subtitle: 'Three components, cognitive dissonance, and the theory of planned behavior',
    images: [
      {
        src: `${IMG}/11a_fig11-1_attitude_components.png`,
        alt: 'Figure 11.1: three stacked bars reading Cognitive — beliefs about the object of an attitude; Affective — feelings about the object of an attitude; Behavioral — intentions to act in a certain way.',
        caption: 'Figure 11.1 — Components of job attitudes.'
      },
      {
        src: `${IMG}/11b_fig11-2_theory_planned_behavior.png`,
        alt: 'Figure 11.2: Attitude, Norms, and Control boxes all feeding arrows into Intention, which points to Behavior.',
        caption: 'Figure 11.2 — Theory of planned behavior (Ajzen, 1991).'
      }
    ],
    content: (
      <>
        <Callout kind="danger" title="The definition and the scale of the literature">
          <strong>Job attitudes:</strong> feelings and beliefs about one&rsquo;s{' '}
          <strong>job, organization, supervisor, or another aspect of the workplace</strong>.
          <p className="mt-2">
            A PsycINFO search returns <strong>over 50,000</strong> articles, book chapters, and
            dissertations on <strong>just one</strong> job attitude — job satisfaction. The Conference
            Board found <strong>54 percent of US workers</strong> reported being satisfied with their
            jobs in 2019, higher than the previous year.
          </p>
        </Callout>

        <Card title="The three components of an attitude (Rosenberg & Hovland, 1960)">
          <Table
            headers={['Component', 'What it is', 'The chapter’s example — your manager']}
            rows={[
              ['Cognitive', 'Our BELIEFS about the object of the attitude', 'You believe she is rational and fair'],
              ['Affective', 'Our EMOTIONS about the object', 'You feel a sense of liking and loyalty to her'],
              ['Behavioral', 'Our INTENTIONS to behave in a particular way', 'You intend to keep working with her and work extra hard to help her']
            ]}
          />
          <p className="mt-2 text-sm">
            This structure is <strong>why attitudes relate to behavior at all</strong> — the behavioral
            component is already an intention.
          </p>
        </Card>

        <Callout kind="warn" title="Cognitive dissonance — the mechanism">
          <strong>Cognitive dissonance:</strong> the discomfort experienced when our{' '}
          <strong>attitudes and behaviors are not consistent</strong> (Festinger, 1962). Having
          behaviors that conflict with your attitudes is uncomfortable and{' '}
          <strong>poses a threat to one&rsquo;s self-image</strong> (Steele et al., 1993).
          <p className="mt-2">Four ways out, using the chapter&rsquo;s plastic-bag example:</p>
          <ul className="list-disc pl-5 mt-1 space-y-0.5">
            <li><strong>Rationalize</strong> — &ldquo;I usually bring my own bags, so just once is OK&rdquo;</li>
            <li><strong>Suppress</strong> — push the inconsistent behavior to the back of your mind</li>
            <li><strong>Change the attitude</strong> — &ldquo;maybe I am not so green after all?&rdquo;</li>
            <li><strong>Change the behavior</strong> — go back for your reusable bags</li>
          </ul>
          <p className="mt-2">
            At work: when employees have <strong>negative attitudes toward their manager, doing favors
            for the manager will be stressful</strong> because it misaligns attitude and behavior. We
            justify it — <em>&ldquo;He is really not so bad…&rdquo;</em>
          </p>
        </Callout>

        <Callout kind="danger" title="Two limits on the attitude–behavior link">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Other factors intervene.</strong> Someone happy at work may still leave for a
              desire to try something new, a family move, or an unmissable salary.{' '}
              <strong>&ldquo;The correlation between what we feel and how we act is not always
              high.&rdquo;</strong>
            </li>
            <li>
              <strong>The TARGET must match</strong> (Ajzen &amp; Fishbein, 1977). Attitudes toward
              your <strong>manager</strong> predict actions toward <strong>that manager</strong>, but
              are a <strong>weaker predictor of doing favors for a coworker</strong>. Satisfaction with
              social activities may predict whether you attend the company picnic, but{' '}
              <strong>would not mean you work harder</strong>. Do not expect loving one part of a job
              to produce all kinds of positive behaviors.
            </li>
          </ol>
        </Callout>

        <Callout kind="tip" title="Theory of planned behavior (Ajzen, 1991) — when attitudes DO relate to behavior">
          <strong>Behavior is a direct consequence of INTENTIONS.</strong> Intentions come from three
          inputs:
          <Table
            headers={['Input', 'The question it answers', 'The quitting example']}
            rows={[
              ['Attitude', 'How do I feel and think about this behavior?', 'Your attitudes toward your job and company'],
              ['Norms', 'Is it APPROPRIATE to do? Would others approve or disapprove?', 'With credit card and student loan debt as sole earner, quitting may feel inappropriate; or leaving mid-project would inconvenience colleagues'],
              ['Control', 'CAN I do it? What makes it easier or harder?', 'In a recession with high unemployment, finding a new job is hard, so you may feel unable to quit. With marketable skills, you feel greater control']
            ]}
          />
          <p className="mt-2">
            The takeaway: <strong>the attitude–behavior link is INDIRECT and CONTINGENT</strong> on many
            situational factors.
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 2
  {
    id: 'key-job-attitudes',
    title: 'The Two Key Job Attitudes (and One That Is Not)',
    subtitle: 'Job satisfaction, organizational commitment, and work engagement',
    content: (
      <>
        <Card title="The two attitudes the chapter focuses on">
          <Table
            headers={['Attitude', 'Glossary definition']}
            rows={[
              [
                'Job satisfaction',
                '"A pleasurable or positive emotional state resulting from the APPRAISAL of one’s job or job experiences" (Locke, 1976). Put differently, a sense of CONTENTMENT with one’s job.'
              ],
              [
                'Organizational commitment',
                'The degree to which the employee IDENTIFIES WITH and feels INVOLVED IN the organization (Mowday et al., 1979). The overall ATTACHMENT felt toward the organization.'
              ]
            ]}
          />
        </Card>

        <Callout kind="warn" title="Theoretically distinct, practically overlapping">
          <strong>In theory</strong> these are two distinct attitudes —{' '}
          <strong>it is possible to love your job and dislike your company, and vice versa.</strong>
          <p className="mt-2">
            <strong>In reality</strong> they overlap a great deal: a meta-analysis found organizational
            commitment and overall job satisfaction correlate at{' '}
            <strong>.69</strong> (Mathieu &amp; Zajac, 1990). That is why the chapter{' '}
            <strong>treats their causes and consequences together.</strong>
          </p>
        </Callout>

        <Callout kind="danger" title="Work engagement — related, but NOT a job attitude">
          <strong>Work engagement:</strong> being <strong>dedicated to and absorbed with work</strong>,
          bringing a sense of <strong>excitement and passion</strong> to work (Schaufeli et al., 2006).
          <Table
            headers={['Point', 'Detail']}
            rows={[
              ['It is distinct', 'Meta-analytic correlations of .52 with job satisfaction and .59 with organizational commitment (Christian et al., 2011), and it adds unique value in understanding behavior'],
              ['But it is NOT a job attitude', 'It assesses HOW INVESTED the person is in PERFORMING their job — rather than being an EVALUATION of how much they LIKE it (Judge et al., 2017)'],
              ['Its popularity', 'Over 35 MILLION employees worldwide have taken the Gallup engagement survey, a 12-ITEM questionnaire']
            ]}
          />
          <p className="mt-2">
            That distinction — <strong>investment vs. evaluation</strong> — is exactly the kind of
            conceptual contrast an exam likes.
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 3
  {
    id: 'measuring-attitudes',
    title: 'Measuring Job Satisfaction & Commitment',
    subtitle: 'Global vs. facet, the JDI and MSQ, the faces scale, and three types of commitment',
    images: [
      {
        src: `${IMG}/11c_fig11-3_satisfaction_scale_items.png`,
        alt: 'Figure 11.3: sample items from the Minnesota Satisfaction Questionnaire with a five-point satisfied scale, and from the Job Descriptive Index with yes/no/cannot decide response options.',
        caption: 'Figure 11.3 — Sample items from job satisfaction scales.'
      },
      {
        src: `${IMG}/11d_fig11-4_faces_scale.png`,
        alt: 'Figure 11.4: five faces ranging from smiling to frowning, with the instruction to circle the face representing your feelings about the job in general.',
        caption: 'Figure 11.4 — An example of using faces to measure job satisfaction (Kunin, 1955).'
      },
      {
        src: `${IMG}/11e_fig11-5_commitment_measures.png`,
        alt: 'Figure 11.5: sample items from the Organizational Commitment Questionnaire and from the Multidimensional Commitment Scale broken into affective, continuance, and normative subscales.',
        caption: 'Figure 11.5 — Measurement of organizational commitment.'
      },
      {
        src: `${IMG}/11f_fig11-6_three_types_commitment.png`,
        alt: 'Figure 11.6: a three-circle Venn diagram showing affective (want to commit), continuance (need to commit), and normative (ought to commit).',
        caption: 'Figure 11.6 — Three types of organizational commitment.'
      }
    ],
    content: (
      <>
        <Card title="Two approaches to measuring job satisfaction">
          <Table
            headers={['Approach', 'Definition', 'Named measures']}
            rows={[
              [
                'Global measures',
                'A series of LIKERT-TYPE statements pertaining to OVERALL job satisfaction. Sample item: "All in all, I am satisfied with my job." Respondents evaluate what matters to THEM.',
                'The FACES SCALE (Kunin, 1955) is the classic single-item version'
              ],
              [
                'Facet-based measures',
                'A series of questions about DIFFERENT ASPECTS of the job — pay, promotion opportunities, the work itself, quality of supervision — then AVERAGED into an overall score.',
                'Job Descriptive Index (JDI); Minnesota Satisfaction Questionnaire (MSQ)'
              ]
            ]}
          />
        </Card>

        <Callout kind="info" title="The two named facet measures">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Job Descriptive Index (JDI)</strong> — copyrighted; <strong>five facets</strong>:{' '}
              <strong>pay, promotions, supervision, coworkers, and work itself</strong> (Smith et al.,
              1969).
            </li>
            <li>
              <strong>Minnesota Satisfaction Questionnaire (MSQ)</strong> — copyrighted; a{' '}
              <strong>100-item long form</strong> capturing <strong>20 facets</strong> (ability
              utilization, recognition, security, working conditions), or a{' '}
              <strong>20-item short form</strong> typically used to measure{' '}
              <strong>intrinsic job satisfaction</strong> (the work itself and chances to use one&rsquo;s
              skills) and <strong>extrinsic job satisfaction</strong> (pay, promotion, material
              benefits).
            </li>
          </ul>
        </Callout>

        <Callout kind="danger" title="The measurement fact most likely to be tested">
          <strong>Global job satisfaction is only MODESTLY correlated with the AVERAGE of facet
          satisfaction</strong> (Aldag &amp; Brief, 1978). Averaging facets{' '}
          <strong>will not necessarily give you overall satisfaction.</strong>
          <p className="mt-2">
            <strong>Why?</strong> Different individuals <strong>weigh facets differently</strong>. You
            might be satisfied with your supervisor, coworkers, promotion opportunities, and the work
            itself but <strong>quite unhappy with your pay</strong> — so the facet average is high. But{' '}
            <strong>if all you care about is pay, your global satisfaction will be LOW.</strong>{' '}
            Averaging misses that a person&rsquo;s happiness may be driven through{' '}
            <strong>a single aspect of the job.</strong>
          </p>
        </Callout>

        <Card title="Which measure to use — it depends on the goal">
          <Table
            headers={['Measure', 'Strength', 'Limitation']}
            rows={[
              [
                'Global',
                'Simple and straightforward, asks only a few questions, and can be TRACKED THROUGH TIME. Even SINGLE-ITEM measures are acceptable, correlating OVER .60 with longer measures (Wanous et al., 1997). The faces scale is useful for samples with limited reading ability.',
                'Does NOT let organizations identify WHICH aspects employees are unhappy with. A single item also makes it IMPOSSIBLE to calculate inter-item reliability.'
              ],
              [
                'Facet',
                'Gives the organization a better sense of WHERE the areas of improvement are — pay? supervision? the work itself?',
                'The average may not reflect overall satisfaction (see above).'
              ]
            ]}
          />
          <p className="mt-2 text-sm">
            The chapter&rsquo;s recommendation: if time and space allow,{' '}
            <strong>use BOTH</strong> — a facet measure plus a short global scale.
          </p>
        </Card>

        <Callout kind="tip" title="Three types of organizational commitment (Meyer & Allen, 1991)">
          <Table
            headers={['Type', 'Definition', 'Shorthand', 'Example']}
            rows={[
              [
                'Affective commitment',
                'Commitment because of a sincere EMOTIONAL ATTACHMENT.',
                'WANT to commit',
                'Passionate about helping people, working for a humanitarian organization where you are treated well and can make a difference'
              ],
              [
                'Continuance commitment',
                'Commitment due to a LACK OF OTHER JOB ALTERNATIVES or a feeling that one would LOSE A LOT with a job change.',
                'NEED to commit',
                'A decade at the company; you do not like it much but it would be hard to give up your seniority and find comparable alternatives'
              ],
              [
                'Normative commitment',
                'Commitment due to a sense of OBLIGATION and that it is THE RIGHT THING TO DO.',
                'OUGHT to commit',
                'The company paid your college tuition and accommodated you while caring for a sick family member, though you now feel underutilized'
              ]
            ]}
          />
          <p className="mt-2">
            <strong>AFFECTIVE commitment is the most important</strong> in shaping employee behaviors
            such as on-the-job behaviors and turnover, so it is the type the chapter focuses on.
          </p>
          <p className="mt-2 text-xs">
            The one-dimensional alternative is the{' '}
            <strong>Organizational Commitment Questionnaire (OCQ)</strong>.
          </p>
        </Callout>

        <Card title="Workplace Application — how organizations actually track attitudes">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong>Periodic employee opinion surveys</strong> — Campbell Soup, 3M, Zappos, Google,
              and REI survey regularly and turn results into actions. Besides home-grown and
              academically validated measures, consulting firms (Valtera, Gallup, Towers-Watson,
              Kenexa, Hay Group) sell proprietary measures.
            </li>
            <li>
              <strong>Exit interviews</strong> — interviews conducted with{' '}
              <strong>departing employees</strong> to explore why they are leaving. One last
              conversation may surface <strong>systemic issues that could cost more talent</strong>,
              though the employee may hold back for fear of damaging relationships.
            </li>
          </ul>
        </Card>
      </>
    )
  },

  // ------------------------------------------------------------------ 4
  {
    id: 'antecedents-situational',
    title: 'Antecedents I: Job Characteristics, Leadership, Stress & Support',
    subtitle: 'The situational causes of job attitudes',
    images: [
      {
        src: `${IMG}/11g_fig11-7_attitude_antecedents_consequences.png`,
        alt: 'Figure 11.7: antecedents (job characteristics, leadership, stress, perceived organizational support, justice, personality, person–environment fit) feeding into job satisfaction and organizational commitment, which feed into performance, organizational citizenship behaviors, absenteeism, turnover, and unit performance.',
        caption: 'Figure 11.7 — Summary of antecedents and consequences of job attitudes.'
      }
    ],
    content: (
      <>
        <Callout kind="info" title="The framing">
          Both <strong>personal and situational factors</strong> matter. Aspects of the work
          environment matter, but <strong>to some extent satisfaction is also an individual
          difference</strong> — some people seem happier wherever they go, and{' '}
          <strong>employees themselves have a role</strong> in shaping their own satisfaction. Figure
          11.7 is the chapter&rsquo;s summary map.
        </Callout>

        <Card title="Job characteristics (from Ch. 9)">
          <p className="text-sm mb-2">
            Loher et al. (1985) found a consistent relationship between job characteristics — skill
            variety, task identity, task significance, autonomy, feedback — and job satisfaction.
          </p>
          <Callout kind="tip" title="The standout finding">
            Among these characteristics, <strong>AUTONOMY was the most powerful correlate of job
            satisfaction</strong>, suggesting that <strong>a sense of self-determination is
            particularly important for happiness in the workplace.</strong>
          </Callout>
          <p className="text-sm mt-2">
            Job characteristics mattered <strong>more to employees high in growth need
            strength</strong> — those interested in personal growth, learning, and self-actualization —
            and <strong>much less to those who view their jobs just as a paycheck</strong>. But a
            Gallup study of over 1,000 US adults found <strong>55 percent</strong> said their job is an
            important piece of their <strong>personal identity</strong>, rising to{' '}
            <strong>70 percent among college graduates</strong>.
          </p>
        </Card>

        <Callout kind="warn" title="Leadership — and why most roads lead back to the manager">
          <strong>&ldquo;Many of the other factors that we think are related to satisfaction end up
          being traced back to leadership.&rdquo;</strong> For example,{' '}
          <strong>autonomy matters for satisfaction — and the more your manager trusts you, the more
          autonomy you will have</strong>, so many job features are{' '}
          <strong>not easily separated from the leadership style of the manager.</strong>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              LMX quality matters greatly for the satisfaction employees experience (Gerstner &amp;
              Day, 1997 — see Ch. 10).
            </li>
            <li>
              <strong>Manipulative, insensitive, unreliable, and aggressive leaders</strong> produced{' '}
              <strong>distress</strong>, adding to unhappiness at work (Mathieu et al., 2014).
            </li>
            <li>
              Not all managers are equal in influence: those{' '}
              <strong>perceived to EMBODY the organization</strong> — powerful, at a high hierarchical
              level, regarded as a representative — <strong>have more opportunity to shape
              attitudes</strong> (Eisenberger et al., 2010).
            </li>
          </ul>
        </Callout>

        <Card title="Stress, work–life conflict, and job insecurity">
          <Table
            headers={['Stressor', 'Effect on attitudes']}
            rows={[
              [
                'Emotional exhaustion',
                'When employees feel emotionally drained and exhausted (long hours, poor leadership, daily hassles), they experience UNHAPPINESS and DETACHMENT. MINDFULNESS interventions lowered emotional exhaustion, which INCREASED job satisfaction (Hülsheger et al., 2013).'
              ],
              [
                'Work–life conflict',
                'When work demands make home demands hard to meet, employees experience LOWER ATTACHMENT. Family-supportive practices increase loyalty — partly because the employee’s PARTNER AT HOME develops commitment to the organization too.'
              ],
              [
                'Job insecurity',
                'Mergers, acquisitions, layoffs, and downsizing produce worry about being let go, which is NEGATIVELY related to BOTH job satisfaction and organizational commitment (Sverke et al., 2002).'
              ]
            ]}
          />
        </Card>

        <Callout kind="info" title="Perceived organizational support — read from everyday signals">
          <strong>Perceived organizational support:</strong> the perception that the organization is{' '}
          <strong>committed to and cares about its employees</strong> (Eisenberger et al., 1986). When
          employees feel the organization cares about their well-being and{' '}
          <strong>does not merely see them as a way to increase production</strong>, they feel
          attachment in return.
          <p className="mt-2">The signals the chapter names:</p>
          <ul className="list-disc pl-5 mt-1 space-y-0.5">
            <li>What happens when an employee makes an <strong>honest mistake</strong>?</li>
            <li>What happens when they are <strong>sick and cannot come in for a few days</strong>?</li>
            <li>
              Is the company <strong>considerate toward employees&rsquo; personal lives</strong>, or are
              they expected to forgo family and friends?
            </li>
          </ul>
          <p className="mt-2 text-xs">
            Signals can even arrive <strong>before hire</strong> — one author recalls a big-four audit
            firm refusing to move an interview scheduled on her college graduation day, which signaled
            the support new employees could expect.
          </p>
        </Callout>

        <Callout kind="tip" title="Organizational justice — the same trio as Ch. 9">
          One of the <strong>most important predictors</strong> of job attitudes is perceived fairness.
          <Table
            headers={['Type', 'Definition']}
            rows={[
              ['Interactional justice', 'Fairness of the INTERPERSONAL TREATMENT received from others — named as particularly important here'],
              ['Distributive justice', 'Perceived fairness of REWARDS received from the organization'],
              ['Procedural justice', 'Perceived fairness of the PROCESSES used to make important decisions']
            ]}
          />
          <p className="mt-2">
            Distributive and procedural justice are correlates of organizational commitment (Meyer et
            al., 2002). <strong>When individuals are treated unfairly, it is hard for them to love what
            they do or feel attachment to the company.</strong>
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 5
  {
    id: 'antecedents-personal-pay',
    title: 'Antecedents II: Personality, Fit — and Why Pay Barely Matters',
    subtitle: 'Happiness is partly dispositional, and the pay finding that surprises everyone',
    content: (
      <>
        <Callout kind="info" title="Happiness is partly in the eye of the beholder">
          Some people seem attached to their jobs <strong>regardless of what job they hold</strong>,
          because of personality (Judge et al., 2017).
          <Table
            headers={['Trait', 'Definition', 'Correlation with job satisfaction']}
            rows={[
              ['Positive affectivity', 'A tendency to experience POSITIVE emotions — feeling energetic, enthusiastic, and happy', '.49'],
              ['Negative affectivity', 'A tendency to experience NEGATIVE emotions — anger, sadness, and guilt', '−.33'],
              ['Core self-evaluations', 'Self-esteem, self-efficacy, internal locus of control, and emotional stability (Ch. 7)', '.24 to .45']
            ]}
          />
        </Callout>

        <Callout kind="tip" title="Why core self-evaluations would produce satisfaction">
          Two mechanisms the chapter offers:
          <ol className="list-decimal pl-5 mt-1 space-y-1">
            <li>
              People with a positive opinion of themselves who feel in control of their destiny may be{' '}
              <strong>more PERSISTENT in their job search and not settle</strong> for a job that will
              not make them happy — and once working, may be{' '}
              <strong>more active in removing barriers</strong> to their happiness.
            </li>
            <li>
              They may <strong>perform better</strong>, producing a better relationship with their
              manager, greater access to resources, and better treatment — which further increases
              happiness.
            </li>
          </ol>
        </Callout>

        <Card title="Person–environment fit">
          <Table
            headers={['Type', 'Definition', 'Evidence']}
            rows={[
              [
                'Person–organization fit',
                'The similarity between a person’s own VALUES and values held by the organization.',
                'Correlated with organizational commitment at .28 (Verquer et al., 2003)'
              ],
              [
                'Person–job fit',
                'The degree to which the person’s SKILLS, ABILITIES, AND KNOWLEDGE are aligned with job requirements, so the person is NOT over- or under-qualified.',
                'Each type of fit uniquely relates to job satisfaction (Lauver & Kristof-Brown, 2001)'
              ]
            ]}
          />
          <p className="mt-2 text-sm">
            The illustration: <strong>a person who will be happy in a start-up may feel very unhappy in
            a large government organization.</strong>
          </p>
        </Card>

        <Callout kind="danger" title="How about pay? The finding that contradicts intuition">
          When asked directly what matters about their jobs, employees often bring up pay.{' '}
          <strong>Research does not support this assumption.</strong>
          <Table
            headers={['Finding', 'Value']}
            rows={[
              ['Pay LEVEL correlated with job satisfaction', 'r = .15 — "very weak" (Judge et al., 2010, meta-analysis of 115 studies)'],
              ['PAY SATISFACTION correlated with job satisfaction', 'r = .23 — more strongly correlated, "but the relationship is still modest"'],
              ['Survey of 2,000 professionals', '9 OUT OF 10 said they would sacrifice 23 PERCENT of their future earnings for work that is MEANINGFUL']
            ]}
          />
          <p className="mt-2">
            The explanation: <strong>pay may be something we take for granted on a daily basis — as
            long as our basic needs are met.</strong> A pre-school teacher making under $50,000 may be
            much happier than a lawyer making over $150,000, or vice versa.
          </p>
        </Callout>

        <Callout kind="warn" title="The important qualification — do NOT overstate this">
          <strong>&ldquo;Our discussion should not be taken to mean that money does not matter for job
          attitudes; in fact, for those experiencing financial stress, it matters a great deal.&rdquo;</strong>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Despite holding jobs, <strong>6.9 million people in the US lived below the official
              poverty line in 2017</strong>, and <strong>9 percent of all service workers</strong> were
              classified as <strong>working poor</strong>.
            </li>
            <li>
              For those <strong>not</strong> experiencing financial stress, pay may matter{' '}
              <strong>when CHOOSING a job</strong>, but does not strongly influence opinions{' '}
              <strong>while at work</strong>.
            </li>
            <li>
              And while pay <em>satisfaction</em> does little for job satisfaction,{' '}
              <strong>pay DISSATISFACTION, financial stress, and pay UNFAIRNESS may be bigger NEGATIVE
              influences</strong> on job attitudes.
            </li>
          </ul>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 6
  {
    id: 'consequences',
    title: 'Consequences: Performance, Citizenship, Absence & Turnover',
    subtitle: 'What job attitudes actually predict — and how much',
    images: [
      {
        src: `${IMG}/11h_fig11-8_exit_voice_loyalty_neglect.png`,
        alt: 'Figure 11.8: a two-by-two of employee responses to unhappiness — Exit (leave the situation), Voice (speak up, try to make things better), Loyalty (wait for things to improve), Neglect (reduce quality and quantity of work).',
        caption: 'Figure 11.8 — The Exit, Voice, Loyalty, Neglect model (Farrell, 1983).'
      }
    ],
    content: (
      <>
        <Callout kind="danger" title="Are happy workers productive workers? The numbers">
          <Table
            headers={['Relationship', 'Correlation', 'Note']}
            rows={[
              ['Job satisfaction ↔ performance', 'r = .30 (Judge et al., 2001)', 'STRONGER in COMPLEX jobs — as complexity rises, so does the role of motivation and ability, which is why satisfaction matters more for an ENGINEER than an ASSEMBLY LINE WORKER'],
              ['Organizational commitment ↔ performance', 'r = .13 (Mathieu & Zajac, 1990)', 'Positive but SMALL']
            ]}
          />
        </Callout>

        <Card title="Organizational citizenship behaviors">
          <p className="text-sm mb-2">
            <strong>Glossary:</strong> behaviors that are <strong>not part of an employee&rsquo;s job
            description</strong> but still contribute to the effectiveness of the organization. Closely
            related to <strong>contextual performance</strong> from <strong>Ch. 4</strong>.
          </p>
          <p className="text-sm">
            Examples: <strong>helping a new employee learn their job</strong>, doing one&rsquo;s job{' '}
            <strong>with a positive attitude and without complaint</strong>, and{' '}
            <strong>organizing social activities</strong> so employees build camaraderie. Happier and
            more committed employees do more of them — possibly because{' '}
            <strong>happier employees are in a more positive mood</strong>, which makes them more
            likely to benefit others.
          </p>
        </Card>

        <Callout kind="warn" title="The causal arrow may run BACKWARDS">
          We typically treat performance as a consequence of attitudes, but{' '}
          <strong>the relationship may be reciprocal</strong>. Zablah et al. (2016) found that among
          frontline customer service workers,{' '}
          <strong>CUSTOMER satisfaction was a STRONGER predictor of JOB satisfaction than vice
          versa.</strong>
          <p className="mt-2">
            Mechanisms: high performers <strong>feel more successful</strong>, boosting self-esteem and
            producing recognition, respect, and rewards; they feel they are{' '}
            <strong>making good progress toward career goals</strong>; and feeling successful produces
            positive emotions. <strong>Performance may be the CAUSE of job satisfaction as well as a
            consequence.</strong>
          </p>
        </Callout>

        <Callout kind="info" title="Absenteeism">
          Unscheduled absenteeism costs US businesses{' '}
          <strong>$2,660 per shift worker per year</strong> (Circadian, 2014). Part is involuntary
          (illness, caring for family), but part traces to attitudes — unhappy, detached employees may{' '}
          <strong>feel justified in taking a &ldquo;mental day off.&rdquo;</strong> Job satisfaction is
          negatively related to absenteeism{' '}
          <strong>among employees who are LESS PRONE TO FEELINGS OF GUILT</strong> (Schaumberg &amp;
          Flynn, 2017).
        </Callout>

        <Callout kind="danger" title="Turnover — four things that complicate the obvious story">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Intentions predict better than behavior.</strong> Both satisfaction and
              commitment correlate with turnover intentions and actual turnover, but{' '}
              <strong>relationships with ACTUAL turnover are more modest</strong> — not everyone who
              intends to leave does, and some leave on short notice without reporting high intentions.
            </li>
            <li>
              <strong>A lot has to happen first.</strong> Unhappiness triggers job search, then the
              person assesses the <strong>likelihood of finding a better job</strong> and the{' '}
              <strong>costs of leaving</strong> (seniority, supportive colleagues, a short commute).
            </li>
            <li>
              <strong>Employees may quit WITHOUT leaving.</strong> They start{' '}
              <strong>withholding effort, being absent more often, and detaching
              psychologically</strong> — without changing jobs.
            </li>
            <li>
              <strong>Commitment predicts turnover BETTER than satisfaction</strong> (Porter et al.,
              1974). If you are unhappy with your work but <strong>like the company</strong>, you may
              try to change jobs <strong>within the same organization</strong> and treat leaving as a
              last resort.
            </li>
          </ol>
        </Callout>

        <Callout kind="tip" title="The unfolding model of turnover">
          Current thinking is that <strong>there are forces more powerful than dissatisfaction</strong>{' '}
          driving turnover (Hom et al., 2017). The <strong>unfolding model</strong> views turnover as a
          response to <strong>&ldquo;SHOCKS&rdquo; — jarring events</strong>:
          <ul className="list-disc pl-5 mt-1 space-y-0.5">
            <li><strong>Pre-planned</strong> — deciding to leave when you graduate from college</li>
            <li>
              <strong>A negative event</strong> — a manager pressuring the employee to commit an
              unethical behavior, making them question their values and fit
            </li>
            <li><strong>An unsolicited job offer</strong> that is more appealing</li>
            <li><strong>Or</strong> simple dissatisfaction</li>
          </ul>
          <p className="mt-2">Dissatisfaction is only <strong>one of several routes out.</strong></p>
        </Callout>

        <Card title="Counterproductive work behaviors and unit performance">
          <p className="text-sm mb-2">
            <strong>Counterproductive work behaviors:</strong> behaviors{' '}
            <strong>contrary to an organization&rsquo;s legitimate interests</strong> (Sackett, 2002) —{' '}
            <strong>theft, misuse of information such as revealing confidential information, unsafe
            behaviors in the form of ignoring safety protocols, alcohol and drug use at work, and
            misuse of time and organizational equipment.</strong> They relate to satisfaction and
            commitment, and are <strong>strongly correlated with employee WITHDRAWAL</strong> (Carpenter
            &amp; Berry, 2017).
          </p>
          <Table
            headers={['Study', 'Unit-level finding']}
            rows={[
              ['Chi & Gursoy (2009), 250 hotels', 'Employee satisfaction had INDIRECT effects on financial performance (profitability, ROI, net profit) THROUGH its effects on CUSTOMER satisfaction'],
              ['Harter et al. (2002)', 'Business-unit-level satisfaction and engagement correlated with profitability, productivity, customer satisfaction, turnover, and ACCIDENTS']
            ]}
          />
        </Card>

        <Callout kind="tip" title="Exit, Voice, Loyalty, Neglect (Farrell, 1983)">
          Four responses to unhappiness at work:
          <Table
            headers={['Response', 'What the employee does']}
            rows={[
              ['Exit', 'Leave the situation'],
              ['Voice', 'Speak up, try to make things better'],
              ['Loyalty', 'Wait for things to improve'],
              ['Neglect', 'Reduce quality and quantity of work']
            ]}
          />
          <p className="mt-2">
            The model&rsquo;s point: beyond reducing performance (neglect) and quitting (exit),
            employees may choose <strong>inaction (loyalty)</strong> or{' '}
            <strong>take action to improve things (voice)</strong>. It{' '}
            <strong>reiterates that the relation between behavior and job attitudes is not simple and
            straightforward, but SITUATIONAL.</strong>
          </p>
        </Callout>

        <Callout kind="info" title="Newcomers — the one-time opportunity">
          The first few weeks are <strong>an important time, and there are NO &ldquo;do-overs.&rdquo;</strong>{' '}
          Newcomers feel uncertainty and anxiety (<em>Am I going to fit in? Will I perform well? Did I
          make the right choice?</em>), are <strong>actively seeking information</strong>, and{' '}
          <strong>attribute a lot of meaning to individual events.</strong>
          <p className="mt-2">
            The chapter&rsquo;s example: <strong>if they feel lonely in the first few weeks, it would be
            easy to think the company is not supportive of people</strong> — even if untrue and they
            simply started at a very busy time.
          </p>
          <p className="mt-2">
            Companies following a <strong>structured approach to onboarding</strong> produce newcomers
            with <strong>greater attachment and satisfaction, which relates to higher
            retention</strong> (Bauer et al., 2007 — see Ch. 8).
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 7
  {
    id: 'emotions-at-work',
    title: 'Emotions at Work',
    subtitle: 'Affective events theory, broaden and build, and emotional contagion',
    content: (
      <>
        <Callout kind="danger" title="Emotion vs. mood — the distinction">
          <strong>Emotion:</strong> the <strong>MOMENTARY</strong> feelings and thoughts that arise in
          response to <strong>SPECIFIC EVENTS</strong> in the environment.
          <p className="mt-2">
            They differ from <strong>MOODS</strong>, which have{' '}
            <strong>LESS-CLEAR CAUSES and are LONGER in duration.</strong>
          </p>
        </Callout>

        <Callout kind="info" title="Affective events theory (Weiss & Cropanzano, 1996)">
          Day-to-day emotions are important to understanding job attitudes and behaviors.
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>
              When an employee <strong>frequently experiences positive emotions</strong> — for
              accomplishing things, being recognized, being treated well —{' '}
              <strong>over time those translate into more positive job ATTITUDES.</strong>
            </li>
            <li>
              Emotions also cause <strong>&ldquo;affect-driven behavior.&rdquo;</strong> Feeling happy
              makes you more likely to engage in <strong>spontaneous actions benefiting others</strong>{' '}
              — helping someone, attending an optional meeting, doing a spontaneous favor.
            </li>
          </ul>
          <p className="mt-2 text-xs">
            Note the time structure: <strong>attitudes</strong> develop from experiences over an
            extended period; <strong>emotions</strong> are momentary reactions. Both affect behavior.
          </p>
        </Callout>

        <Card title="Ekman’s six basic emotions">
          <p className="text-sm mb-2">
            Paul Ekman, named one of the 100 most influential people in the world by{' '}
            <em>Time</em>, proposed <strong>six basic categories of emotions with UNIVERSAL signals
            that do not vary by culture:</strong>
          </p>
          <Table
            headers={['The six']}
            rows={[['Anger'], ['Happiness'], ['Disgust'], ['Fear'], ['Sadness'], ['Surprise']]}
          />
          <p className="mt-2 text-sm">
            From a working adult&rsquo;s perspective it may be more useful to think of{' '}
            <strong>positive emotions</strong> (excitement, positive affect, happiness, joy) and{' '}
            <strong>negative emotions</strong> (anxiety, sadness, anger).
          </p>
          <p className="mt-2 text-xs">
            Ekman&rsquo;s work focuses on <strong>micro expressions</strong> — very brief facial
            expressions lasting a fraction of a second, which occur when a person{' '}
            <strong>deliberately or unconsciously conceals a feeling.</strong>
          </p>
        </Card>

        <Callout kind="tip" title="Broaden and build theory (Fredrickson, 1998)">
          When we experience <strong>POSITIVE emotions, we BUILD personal resources</strong>, because we
          switch to a <strong>more flexible, exploratory way of thinking that encourages
          experimentation</strong> — so positive emotions{' '}
          <strong>stimulate creativity and novel thought.</strong>
          <p className="mt-2">
            <strong>This is in DIRECT OPPOSITION to negative emotions</strong>, which stimulate{' '}
            <strong>narrow-mindedness and a fight-or-flight response.</strong>
          </p>
          <p className="mt-2">
            Accumulating over time, positive emotions stimulate{' '}
            <strong>well-being, creativity, and resilience</strong>, raise{' '}
            <strong>employee engagement</strong>, and increase{' '}
            <strong>optimism, hope, and efficacy</strong> — producing higher satisfaction, lower stress,
            and lower intentions to leave. Conversely,{' '}
            <strong>negative emotions over extended periods erode trust in the organization and
            increase the desire to leave</strong> (Kiefer, 2005).
          </p>
        </Callout>

        <Callout kind="warn" title="Emotional contagion — emotions spread">
          <strong>Emotional contagion:</strong> emotions being <strong>spread within the work
          group</strong>, since individuals express their emotions through{' '}
          <strong>verbal and nonverbal mechanisms</strong>.
          <p className="mt-2">
            When you are happy you smile more, do spontaneous favors, and are nicer — and{' '}
            <strong>others around you experience a mood shift</strong>. The opposite also occurs
            (Barsade, 2002), and you can <strong>catch emotions from your manager or
            customers</strong>. The chapter&rsquo;s example:{' '}
            <strong>health care workers may catch negative emotions from their patients, and
            internalizing these could lead to BURNOUT.</strong>
          </p>
        </Callout>

        <Callout kind="danger" title="Emotions change what you PERCEIVE">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              When <strong>angry</strong>, individuals were <strong>more likely to perceive neutral
              objects as GUNS</strong> (Baumann &amp; DeSteno, 2010).
            </li>
            <li>
              Subjects who listened to <strong>sad music</strong> were more likely to hear{' '}
              <strong>&ldquo;morning&rdquo; as &ldquo;mourning&rdquo;</strong> or{' '}
              <strong>&ldquo;pane&rdquo; as &ldquo;pain&rdquo;</strong> (Halberstadt et al., 1995).
            </li>
          </ul>
          <p className="mt-2">
            So if you feel that when you are down the whole world is out to get you,{' '}
            <strong>this may simply be your emotions guiding your perception.</strong>
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 8
  {
    id: 'emotional-labor',
    title: 'Emotional Labor & Emotional Intelligence',
    subtitle: 'Display rules, surface vs. deep acting, and Goleman’s five characteristics',
    content: (
      <>
        <Callout kind="info" title="Emotional display rules">
          <strong>Glossary:</strong> the requirement to <strong>show a particular emotion and monitor
          the use of emotions</strong>. Except for very young children,{' '}
          <strong>it is expected that emotions which are expressed are regulated and monitored.</strong>
          <Table
            headers={['Job', 'Expected display']}
            rows={[
              ['Customer service (especially in the US)', '"Service with a smile" — Southwest Airlines prides itself on SELECTING employees with a positive attitude'],
              ['Collection agent', 'NEGATIVE emotions such as anger at customers who do not pay'],
              ['Funeral home director', 'A reserved, somber, and compassionate demeanor'],
              ['Poker player', 'NEUTRAL emotions, to avoid signaling the quality of their hand']
            ]}
          />
          <p className="mt-2 text-sm">
            Display rules <strong>work for companies</strong> — when employees display positive
            emotions, <strong>customers are more satisfied with service quality</strong> (Pugh, 2001).
          </p>
        </Callout>

        <Callout kind="warn" title="But sometimes LESS friendly is better service">
          Customer service employees may <strong>choose to be not very friendly in order to provide
          BETTER service</strong>. When the line is long and the store is busy,{' '}
          <strong>being less friendly keeps customers from starting a lengthy conversation</strong>,
          which would hold the line and anger those waiting (Sutton &amp; Rafaeli, 1988).
          <p className="mt-2 text-xs">
            The chapter&rsquo;s vivid example is <strong>Voodoo Doughnuts</strong> in Portland, which
            does not rely on repeat business — so employees are allowed to be abrupt, because{' '}
            <strong>service with a smile makes customers linger and holds up the line.</strong>
          </p>
        </Callout>

        <Callout kind="danger" title="Emotional labor and the two acting strategies">
          <strong>Emotional labor:</strong> <strong>having to display emotions you do not feel</strong>.
          It <strong>can be highly stressful and can lead to BURNOUT.</strong>
          <Table
            headers={['Strategy', 'Definition', 'Example', 'Consequences']}
            rows={[
              [
                'Surface acting',
                'Changing the EXPRESSION of emotions WITHOUT changing the emotions themselves.',
                'Feeling frustrated with a customer but still managing to smile and make small talk — the employee CONTINUES TO FEEL the negative emotion but disguises it.',
                'Related to experienced STRESS and FATIGUE (Beal et al., 2013). Surface actors can manage outward expressions day to day but find it difficult, DEVALUE THEMSELVES, and experience negative emotions more (Beal et al., 2006).'
              ],
              [
                'Deep acting',
                'Instead of only changing how one ACTS, the person tries to change the UNDERLYING EMOTION.',
                'Rather than smiling while upset, re-evaluating and rethinking the encounter, trying to feel EMPATHY and see things from the customer’s point of view — changing the emotion as well as its expression.',
                'Received BETTER by customers, probably because it SEEMS MORE GENUINE (Grandey, 2003).'
              ]
            ]}
          />
        </Callout>

        <Card title="Emotional intelligence — Goleman’s five characteristics">
          <p className="text-sm mb-2">
            <strong>Emotional intelligence:</strong> a <strong>personality trait</strong> capturing
            individual differences in <strong>appraising, identifying, and managing one&rsquo;s
            emotions</strong>. (Its use in personnel selection was covered in <strong>Ch. 6</strong>.)
          </p>
          <Table
            headers={['Characteristic', 'Ability']}
            rows={[
              ['Self-awareness', 'Identifying their own emotions at a given time'],
              ['Self-regulation', 'Controlling how they experience and express their emotions'],
              ['Social skills', 'Managing one’s interpersonal relationships'],
              ['Empathy', 'Understanding other people’s emotions'],
              ['Motivation', 'Motivating themselves']
            ]}
          />
        </Card>

        <Callout kind="warn" title="The evidence — and the measurement catch">
          Emotionally intelligent people show <strong>higher job satisfaction and job
          performance</strong> (Sy et al., 2006). A meta-analysis found emotional intelligence{' '}
          <strong>explains variance in job performance BEYOND personality and cognitive
          abilities</strong> —
          <p className="mt-2">
            <strong>BUT this relationship is STRONGER when emotional intelligence is measured using
            SELF-REPORTED or PEER-REPORTED measures as opposed to using TESTS</strong> of emotional
            intelligence (O&rsquo;Boyle et al., 2011). That gap is the heart of the controversy.
          </p>
          <p className="mt-2">
            There is also debate over <strong>whether emotional intelligence is anything new</strong>.
            Popular-press descriptions are <strong>so broad as to make the concept a mishmash of other
            personality traits</strong>, producing an elusive scientific definition and blurring the
            boundary with well-studied traits (Mayer et al., 2008).
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 9
  {
    id: 'legal-global-current-ch11',
    title: 'Legal, Global & Current Issues',
    subtitle: 'Unionization law, cultural differences in attitudes and emotion, and the dark side of happiness',
    content: (
      <>
        <Callout kind="danger" title="Legal — lawsuits and the National Labor Relations Act">
          Having a boring and unchallenging job is <strong>not against the law</strong>. But{' '}
          <strong>unhappy employees, particularly if they feel UNFAIRLY TREATED, are more likely to SUE
          their companies</strong> — and even a judgment in the company&rsquo;s favor costs time,
          money, negative PR, and mental anguish. One side effect of treating employees well is{' '}
          <strong>reducing the chance of a lawsuit</strong> (Bies &amp; Tyler, 1993).
          <p className="mt-2">
            Unhappy workers are also <strong>more likely to join a union</strong> (Tremblay &amp;
            Roussel, 2001). The <strong>National Labor Relations Act</strong> gives employees the right
            to <strong>join and participate in a union without fear of punishment or retaliation.</strong>
          </p>
          <Table
            headers={['The organization may NOT', 'Detail']}
            rows={[
              ['Promise pay raises or better conditions', 'If employees vote to keep the union out'],
              ['Take disciplinary action', 'Against employees supporting union activities'],
              ['Shut down a branch or plant', 'In order to avoid unionizing'],
              ['Restrict discussion', 'Employees ARE allowed to discuss unionization efforts OUTSIDE of work hours and outside the workplace']
            ]}
          />
          <p className="mt-2 text-sm">
            Unions also have limits — for example,{' '}
            <strong>threatening other employees that their jobs would be lost without the
            union</strong> is not allowed.
          </p>
        </Callout>

        <Callout kind="info" title="Global — what makes people happy differs by culture">
          Job attitudes are meaningful around the world (Gelfand et al., 2007), but the factors
          producing them differ. Employees in <strong>developed countries</strong> may look for jobs
          that <strong>challenge them, give meaning, or fit their values</strong>, while employees in{' '}
          <strong>developing countries</strong> may be happy with{' '}
          <strong>a job that is relatively secure.</strong>
          <Table
            headers={['Finding', 'Detail']}
            rows={[
              [
                'Fit matters most in the West',
                'Person–organization and person–job fit matter around the world, but are MORE important in NORTH AMERICA, less in Europe, and LEAST in EAST ASIA — where employees were more attentive to fitting in with their SUPERVISOR and GROUP, likely due to collectivism (Oh et al., 2014)'
              ],
              [
                'Work–family conflict',
                'A meta-analysis in 58 COUNTRIES showed that in countries HIGH IN COLLECTIVISM, work–family conflict had WEAKER negative effects on job satisfaction (Allen et al., 2020)'
              ],
              [
                'How attitudes become behavior',
                'Employees in INDIVIDUALISTIC cultures were more inclined to engage in WITHDRAWAL behaviors such as intending to quit. For individualists, NORMATIVE commitment was a LESS important influence over turnover intentions than for those with collectivistic values (Wasti, 2003)'
              ],
              [
                'Emotional expression',
                'In a study of 33 COUNTRIES, INDIVIDUALISTIC cultures emphasize MORE expressiveness and particularly expect MORE POSITIVE emotions to be expressed (Matsumoto et al., 2008). Many Asian cultures emphasize CONTROLLING ALL EMOTIONS, with emotional displays regarded as childish'
              ]
            ]}
          />
          <p className="mt-2 text-sm">
            A practical consequence: <strong>simply observing facial expressions will not help you
            figure out what someone feels in a collectivistic culture</strong> where the norm is to show
            nothing or politely smile — and <strong>in parts of Asia people may smile when they are
            EMBARRASSED.</strong>
          </p>
          <p className="mt-2 text-xs">
            Disneyland found its rule of <strong>smiling at customers within 60 seconds</strong> of
            entering the park <strong>did not go well in Disneyland Paris</strong>, because of different
            local norms regarding emotional displays (Matusitz, 2010).
          </p>
        </Callout>

        <Callout kind="warn" title="Current research — the dark side of positive emotions">
          With the rise of positive psychology,{' '}
          <strong>&ldquo;we may be losing sight of the fact that negative emotions may also add
          value.&rdquo;</strong>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>
              Forgas and East (2008):{' '}
              <strong>positive moods make us more likely to BELIEVE other people&rsquo;s claims</strong>,
              which may make us <strong>more GULLIBLE and less likely to detect DECEPTION.</strong>
            </li>
            <li>
              Gruber et al. (2011): <strong>happiness may have a dark side</strong> — how we pursue it
              may be inappropriate, and <strong>experiencing and displaying emotions that do not fit
              the context may induce PENALTIES.</strong>
            </li>
          </ul>
          <p className="mt-2 text-xs">
            Also current: as work becomes more knowledge-based,{' '}
            <strong>the definition of citizenship behaviors may need to change</strong>. A study at
            Google (Dekas et al., 2013) found new types emerging, including{' '}
            <strong>participating in health and well-being activities</strong> and{' '}
            <strong>celebrating coworkers&rsquo; life events.</strong>
          </p>
        </Callout>

        <Callout kind="tip" title="Current workplace — remote work">
          Covid-19 pushed businesses worldwide to remote work, and it remains increasingly popular. The
          chapter&rsquo;s assessment: <strong>when done right, remote work is not a barrier to
          productivity and engagement</strong>, and <strong>having control over when and where you work
          likely boosts AUTONOMY</strong> — the strongest job-characteristic correlate of satisfaction.
          <p className="mt-2">
            The risks: <strong>employees may feel LONELY and ISOLATED</strong>. Managers must{' '}
            <strong>communicate more deliberately</strong>, combat loneliness, and build belonging
            through <strong>regular one-on-one meetings and occasional in-person events.</strong>
          </p>
          <p className="mt-2">
            <strong>The drivers of job attitudes — job characteristics, stress, fairness, and
            organizational supportiveness — remain the same; how they are DEMONSTRATED needs
            adjustment.</strong>
          </p>
        </Callout>

        <Callout kind="info" title="The chapter's conclusion">
          Job attitudes matter because they are{' '}
          <strong>an important explanation for why people behave the way they do at work</strong>.
          Organizations can improve them by <strong>enriching jobs, supporting employees, and offering
          work aligned with their interests</strong> — and <strong>a person&rsquo;s own personality is
          also an explanation.</strong>
          <p className="mt-2">
            The two lines worth carrying into the exam:{' '}
            <strong>&ldquo;the level of pay or satisfaction with pay is not very important as an
            explanation for job attitudes, but FAIRNESS of pay and treatment by the organization matter
            a great deal&rdquo;</strong> — and{' '}
            <strong>&ldquo;the GAP between experienced and displayed emotions may make a job stressful
            and erode satisfaction level.&rdquo;</strong>
          </p>
        </Callout>
      </>
    )
  }
];
