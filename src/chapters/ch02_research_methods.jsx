import React from 'react';
import { Callout, Table, Card } from '../components/Visual.jsx';

const IMG = 'ch02_research_methods';

export default {
  id: 2,
  title: 'Research Methods',
  subtitle:
    'Theory and the research process, designs, data collection, the five core statistics, measurement scales, reliability, validity, and research ethics.',

  blocks: [
    // ------------------------------------------------------------------ 1
    {
      id: 'theory-research-practice',
      title: 'Theory, Research & Practice',
      subtitle: 'Why journal articles are structured the way they are — and how theories evolve',
      images: [
        {
          src: `${IMG}/02a_fig2-1_theory_research_practice.png`,
          alt: 'Figure 2.1: three green boxes labeled Research, Theory, and Practice, connected by double-headed gray arrows in a triangle.',
          caption: 'Figure 2.1 — Theory, research, and practice inform each other and build upon each other.'
        }
      ],
      content: (
        <>
          <p>
            <strong>Theory</strong> — glossary: <em>a description of the relationship among variables and how
            they influence each other in order to explain a phenomenon.</em> <strong>Empirical research</strong>{' '}
            — <em>research based on direct or indirect observations; often done to see if a theory stands up
            when tested.</em>
          </p>

          <Callout kind="info" title="Why the standard journal-article structure exists">
            A top-tier I-O article (1) reviews past theory and research, (2) describes study methods and
            results, and (3) concludes with implications for practice, theory, and future research. That
            structure exists because <strong>theory informs research, and research informs theory</strong> —
            and, per the scientist-practitioner model from Ch. 1, both inform practice while issues arising in
            practice set the agenda for future research.
          </Callout>

          <p>
            The textbook opens with a general claim worth quoting on an exam:{' '}
            <strong>&ldquo;Although there are exceptions, good research is based on a good theory.&rdquo;</strong>{' '}
            Theory tells you where to begin so you do not have to study a phenomenon &ldquo;from
            scratch.&rdquo; Its example: if you wanted to study how fair treatment affects worker health, you
            would build on existing organizational justice research (Colquitt et al., 2001; Robbins et al.,
            2012), picking up where past work left off to <em>support</em> the theory or show how it needs{' '}
            <em>tweaking</em>.
          </p>

          <Card title="The organizational justice case study — the chapter's worked example of theory evolution">
            <ol className="list-decimal pl-5 space-y-1.5 text-sm">
              <li>
                <strong>Roots: equity theory</strong>, developed in the <strong>early 1960s by Adams (1965)</strong>.
                It focused on how the <em>perceived fairness of the outcomes a person receives relative to
                others</em> affects motivation and behavior — initially applied mostly to{' '}
                <strong>pay</strong>, and only to the fairness of <strong>outcomes</strong>.
              </li>
              <li>
                <strong>Expansion 1 — process.</strong> Researchers discovered it was not just the pay decision
                (e.g., a raise), but <strong>the process the company used to make it</strong>.
              </li>
              <li>
                <strong>Expansion 2 — interpersonal treatment.</strong> Later still, people were also concerned
                with the fairness of <strong>interpersonal treatment</strong> — being treated with respect.
              </li>
              <li>
                <strong>Expansion 3 — scope.</strong> The theory applies beyond pay: promotions, treatment by
                the boss, selection procedures, and the general respect coworkers get from bosses. Fairness
                perceptions affect <strong>job attitudes, performance, and even health</strong>.
              </li>
            </ol>
          </Card>

          <Callout kind="tip" title="The three lessons the authors draw from that story">
            <ol className="list-decimal pl-5 space-y-1">
              <li>Theories <strong>develop over time</strong> to describe a phenomenon in greater detail and accuracy.</li>
              <li>
                A good theory can <strong>explain a phenomenon over a range of very different contexts</strong>.
                Hence Kurt Lewin&rsquo;s famous line: <em>&ldquo;There is nothing so practical as a good
                theory.&rdquo;</em>
              </li>
              <li>
                A robust theory plus strong empirical support is <strong>extremely valuable to practice</strong>:
                organizations should give a fair outcome, use a fair and transparent process,{' '}
                <em>and</em> treat workers with respect — all three matter.
              </li>
            </ol>
          </Callout>

          <p className="text-sm text-slate-600">
            <strong>Greenberg (2006) field study</strong> (Workplace Application box): nurses who experienced a
            salary reduction showed <strong>increased insomnia</strong>. But nurses whose supervisors were
            trained to be more interpersonally fair experienced <strong>less insomnia</strong> — and the effect
            lasted <strong>six months</strong> after the training. A meta-analysis (Robbins et al., 2012) links
            perceived injustice to stress, burnout, and both mental and physical health.
          </p>
        </>
      )
    },

    // ------------------------------------------------------------------ 2
    {
      id: 'inductive-deductive',
      title: 'Deductive vs. Inductive Approaches',
      subtitle: 'Which end do you start from — theory or observation?',
      images: [
        {
          src: `${IMG}/02b_fig2-2_inductive_deductive.png`,
          alt: 'Figure 2.2: a diagram contrasting inductive and deductive research approaches.',
          caption: 'Figure 2.2 — Inductive and deductive research approaches.'
        }
      ],
      content: (
        <>
          <Table
            headers={['Approach', 'Glossary definition', 'Chapter’s example']}
            rows={[
              [
                <strong key="d">Deductive</strong>,
                'A research approach that begins with a THEORY and sets out to test hypotheses based on this theory.',
                'Organizational justice theory is "closer to" a deductive approach because the theory is the starting point — though it includes inductive elements, since empirical research was used to change the theory.'
              ],
              [
                <strong key="i">Inductive</strong>,
                'A research approach that begins with OBSERVING a phenomenon and then developing a theory to explain it.',
                'A company using "big data" to explain employee satisfaction. There may be NO theory guiding the research; the researcher is open to many possible factors.'
              ]
            ]}
          />

          <Callout kind="tip" title="Memory hook">
            <strong>De</strong>ductive <strong>de</strong>scends <em>from</em> theory. <strong>In</strong>ductive
            builds theory <em>in</em>to existence from observations. Both advance theory, which can lead to
            better organizational practices — neither is presented as superior.
          </Callout>

          <Card title="Technology & I-O box: big data visualization">
            <p className="text-sm">
              <strong>Big data visualization methods</strong> — glossary: <em>sophisticated methods that
              graphically illustrate the relationships among variables to aid in data interpretation.</em>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>
                Example of the analytic power: an organization wanting more workforce diversity might
                traditionally examine only a few factors (e.g., hiring procedures); big data analytics let it
                examine <strong>recruiting sources, hiring procedures, onboarding, training, and work team
                composition</strong> at once, uncovering strategies traditional methods would miss.
              </li>
              <li>
                I-O psychologists matter here because of their training in <strong>how to measure employee
                data, interpret it accurately/ethically/legally, and develop workplace solutions</strong>.
              </li>
              <li>
                Simple charts and scatterplots &ldquo;may have been good enough in the past,&rdquo; but complex
                analytics require sophisticated visuals — some <strong>interactive</strong> (see how a small
                change in one variable, e.g. reduced stress, drives an outcome, e.g. decreased turnover) or{' '}
                <strong>real-time</strong> (Caughlin &amp; Bauer, 2019; Oswald et al., 2020).
              </li>
            </ul>
          </Card>
        </>
      )
    },

    // ------------------------------------------------------------------ 3
    {
      id: 'iv-dv',
      title: 'Independent & Dependent Variables — and When Neither Applies',
      subtitle: 'IV, DV, and the predictor/criterion, antecedent/outcome vocabulary',
      content: (
        <>
          <Table
            headers={['Term', 'Definition']}
            rows={[
              [<strong key="i">Independent variable (IV)</strong>, 'The variable that is MANIPULATED by the researcher to see its effects on a given dependent variable.'],
              [<strong key="d">Dependent variable (DV)</strong>, 'The variable that is AFFECTED by the independent variable.']
            ]}
          />

          <p>
            The chapter&rsquo;s running example: give employees a <strong>stress-reduction
            intervention</strong> and see if it improves health versus employees who receive none. The
            intervention is the IV, with <strong>two levels (conditions)</strong> — intervention and control.{' '}
            <strong>Health</strong> is the DV, perhaps measured by taking blood pressure over time.
          </p>

          <Callout kind="danger" title="The rule that generates the hardest MCQ in this section">
            Many I-O studies examine <strong>existing relationships</strong> between variables that{' '}
            <em>cannot be manipulated</em> — personality, job satisfaction. In that case there is{' '}
            <strong>technically no IV</strong>. And <strong>if there is no IV, there is technically no DV
            either.</strong> Different vocabulary is used instead.
          </Callout>

          <Table
            headers={['Situation', 'What the "cause-side" variable is called', 'What the "effect-side" variable is called']}
            rows={[
              ['True experiment (variable is manipulated)', 'Independent variable (IV)', 'Dependent variable (DV)'],
              ['Job satisfaction predicting job performance', 'Antecedent', 'Outcome'],
              ['Personality predicting job performance (selection research)', 'Predictor', 'Criterion variable']
            ]}
          />
          <p className="text-sm text-slate-600">
            That last row is the bridge to Chapter 4, where &ldquo;criterion&rdquo; becomes the whole subject.
          </p>
        </>
      )
    },

    // ------------------------------------------------------------------ 4
    {
      id: 'true-experiments',
      title: 'True Experiments: The Three Conditions',
      subtitle: 'Experimental group, control group, random assignment — and confounds',
      images: [
        {
          src: `${IMG}/02c_fig2-3_true_experiment_conditions.png`,
          alt: 'Figure 2.3: three boxes feeding into a central statement — there is an experimental group receiving a manipulation, there is a control group not receiving a manipulation, and participants are randomly assigned to groups. There is a true experiment only when all of these are met.',
          caption: 'Figure 2.3 — Conditions for a true experiment. ALL three must be met.'
        }
      ],
      content: (
        <>
          <Callout kind="danger" title="Memorize the definition verbatim">
            <strong>Experiment:</strong> <em>a type of study which includes random assignment to experimental
            conditions and contains at least one experimental group that receives the manipulation of the IV,
            and a control group that does not receive the IV and is used for comparison.</em> Figure 2.3 stresses
            that there is a true experiment <strong>only when ALL of these are met</strong>.
          </Callout>

          <Table
            headers={['Term', 'Definition']}
            rows={[
              [<strong key="e">Experimental group</strong>, 'The group that receives the manipulation of the IV.'],
              [<strong key="c">Control group</strong>, 'The group that does not receive the IV and is used for comparison.'],
              [<strong key="r">Random assignment</strong>, 'Participants are randomly assigned to the experimental or control group.'],
              [
                <strong key="cf">Confound variable</strong>,
                'A variable that covaries with the IV and whose effects on the DV are not easily disentangled from the IV.'
              ],
              [
                <strong key="x">Extraneous variables</strong>,
                'Other variables that might affect the dependent variable.'
              ]
            ]}
          />

          <Callout kind="warn" title="The gender confound example — know this one">
            In a goal-setting/training study, suppose the experimental group is all men and the control group
            all women. The researcher <strong>cannot disentangle the effects of goal-setting from the effects of
            gender</strong> — gender is a confound. <strong>Random assignment controls confounds and other
            extraneous variables</strong> by assuring their levels are <em>evenly distributed</em> across
            conditions (e.g., workers with more and less job tenure end up spread across both groups).
          </Callout>

          <p>
            The chapter&rsquo;s goal-setting illustration: a researcher trains two groups; the experimental
            group is provided with goals and the control group is not. <strong>The provision of goals is the
            IV.</strong>
          </p>
        </>
      )
    },

    // ------------------------------------------------------------------ 5
    {
      id: 'field-lab-quasi',
      title: 'Field, Laboratory & Quasi-Experiments',
      subtitle: 'Why the "gold standard" is rare, and what gets used instead',
      content: (
        <>
          <Card title="Field experiments">
            <p className="text-sm">
              <strong>Glossary:</strong> <em>when an experimental design is used in an organizational setting.
              This usually means when an organization allows researchers to randomly assign employees to
              experimental and control conditions.</em> The book calls these a{' '}
              <strong>&ldquo;gold standard&rdquo;</strong> for evaluating a workplace policy or intervention:
              if differences appear only in the experimental group, we can conclude it was due to the treatment.
            </p>
            <Callout kind="warn" title="The three reasons true field experiments are less common">
              <ol className="list-decimal pl-5 space-y-1">
                <li>
                  They are <strong>more difficult to carry out</strong>: the researcher must find an
                  organization whose characteristics fit the question <em>and</em> that trusts researchers
                  enough to work with them.
                </li>
                <li>
                  They require an organization <strong>willing and able to assign workers to conditions</strong>.
                  Supervisors may refuse to give randomly chosen employees a health intervention while leaving
                  others out, for reasons of <strong>fairness and morale</strong>.
                </li>
                <li>
                  Certain manipulations might be <strong>unethical or illegal</strong>. The authors&rsquo; own
                  example: randomly assigning actual job applicants for the same job to be{' '}
                  <em>treated differently</em> might not be legal in a real-world setting.
                </li>
              </ol>
            </Callout>
          </Card>

          <Card title="Laboratory experiments">
            <p className="text-sm">
              <strong>Glossary:</strong> <em>a type of experiment that in psychology often involves the use of
              undergraduate students or online samples</em> (e.g., Amazon Mechanical Turk™, where participants
              are paid small amounts for research tasks and surveys).
            </p>
            <div className="grid md:grid-cols-2 gap-3 mt-2">
              <div className="border border-emerald-200 bg-emerald-50 rounded p-3">
                <div className="font-semibold text-emerald-900 text-sm mb-1">Advantages</div>
                <ul className="list-disc pl-4 text-sm space-y-1">
                  <li>Far <strong>less costly</strong> than a field setting — e.g., test a workplace redesign on students before redesigning a whole company workplace.</li>
                  <li>Samples are <strong>easy to obtain</strong>.</li>
                  <li>Great <strong>experimental control</strong> (e.g., ease of random assignment).</li>
                </ul>
              </div>
              <div className="border border-red-200 bg-red-50 rounded p-3">
                <div className="font-semibold text-red-900 text-sm mb-1">The core problem</div>
                <p className="text-sm">
                  Results may not be <strong>generalizable</strong> — glossary: <em>how well the results from a
                  study using one population transfer to another.</em> Students may be{' '}
                  <strong>younger</strong> than the working population, may be <strong>unemployed</strong>, and
                  are <strong>reacting to an artificial situation, not a work situation</strong>.
                </p>
              </div>
            </div>
          </Card>

          <Card title="Quasi-experimental designs">
            <p className="text-sm">
              &ldquo;Almost&rdquo; experimental. <strong>Close to a true experiment, but missing one aspect —
              typically random assignment to conditions.</strong> The chapter&rsquo;s example: employees in the
              Northeastern division receive a health promotion intervention while Midwest employees serve as
              the control group.
            </p>
            <p className="text-sm mt-2">
              It lacks the advantages of random assignment but is <strong>far more practical in a field
              setting</strong>. Discussed further in Ch. 8 because <strong>training was one of the first I-O
              research areas to use quasi-experimental designs</strong>.
            </p>
          </Card>
        </>
      )
    },

    // ------------------------------------------------------------------ 6
    {
      id: 'correlational-studies',
      title: 'Correlational Studies, Causality & Inflated Relationships',
      subtitle: 'The workhorse design of field I-O research, and its two big problems',
      content: (
        <>
          <p>
            <strong>Correlational studies</strong> — glossary: <em>studies where there is no definite IV or DV;
            these studies look at the relationships among the variables.</em> They dominate I-O field research
            because many topics involve <strong>stable employee characteristics such as personality</strong> that
            simply cannot be manipulated.
          </p>

          <Callout kind="tip" title="Their advantages">
            They can be done <strong>in organizations using samples of actual working people</strong>, and they
            typically involve <strong>practical, relatively inexpensive data collection such as surveys</strong>.
            Example: examining the relationship between employee <em>adaptability</em> (a stable characteristic)
            and <em>advancement</em> in the company.
          </Callout>

          <Card title="Problem 1 — Causality">
            <p className="text-sm mb-2">
              <strong>Causality</strong> — glossary: <em>determining which variable is affecting the other
              variable.</em> The chapter gives two contrasting cases:
            </p>
            <Table
              headers={['Case', 'Is direction clear?', 'Why']}
              rows={[
                [
                  'Neuroticism → job satisfaction',
                  'Reasonably clear',
                  'Neuroticism is a fairly stable personality trait that remains stable in adulthood, so it likely affects job satisfaction, not the reverse. (The authors concede one could argue low satisfaction causes neurotic questionnaire responses.)'
                ],
                [
                  'Job satisfaction ↔ job performance',
                  'A genuine challenge',
                  'BOTH are fairly dynamic variables that can change a lot within a person, even day to day. Satisfaction could affect performance, but performing well produces positive outcomes that could raise satisfaction.'
                ]
              ]}
            />
          </Card>

          <Card title="Problem 2 — Inflated relationships">
            <p className="text-sm">
              The concern arises particularly with correlational studies using <strong>a single survey on a
              single occasion</strong>. Relationships get inflated because of factors like the employees&rsquo;{' '}
              <strong>mood</strong>, or something going on that day that affects <em>all</em> the variables on
              the survey.
            </p>
            <p className="text-sm mt-2">
              The example: an employee having a very good day gives fewer neurotic responses <em>and</em> reports
              higher satisfaction; an employee who just had a nasty encounter with a customer gives more neurotic
              responses <em>and</em> reports lower satisfaction. Either way, responses to items that{' '}
              <strong>should be fairly stable</strong> get distorted, producing a relationship{' '}
              <strong>stronger than it actually should be</strong>.
            </p>
          </Card>

          <Callout kind="danger" title="The four fixes — a very likely MCQ">
            Beyond simply using an experimental design (which the chapter calls perhaps one of the best ways to
            show causality and reduce inflation):
            <ol className="list-decimal pl-5 space-y-1 mt-1">
              <li>
                <strong>Temporal ordering</strong> — glossary: <em>when two variables are placed in a particular
                order that helps with their interpretation, e.g., the predictor placed first and the outcome
                second.</em> It is <strong>necessary but NOT sufficient</strong> to show causality — a first step
                only.
              </li>
              <li>
                <strong>Separate the measurement of different variables in time</strong>, decreasing inflation
                due to mood or chance factors.
              </li>
              <li>
                <strong>Use multiple sources of data</strong> — e.g., job performance from supervisor ratings or
                company records, neuroticism rated by coworkers.
              </li>
              <li>
                <strong>Use a series of surveys</strong> (daily or weekly) to examine processes and changes{' '}
                <em>within individuals over time</em> — e.g., how workplace stress changes day to day with home
                challenges.
              </li>
            </ol>
          </Callout>

          <Callout kind="info" title="Which design is best?">
            <strong>Each has strengths and weaknesses, and some combination is probably best</strong> — and it
            depends heavily on the phenomenon. You would not use an experiment to study a stable personality
            variable (you cannot manipulate personality); you <em>would</em> use a lab study with students to
            pilot a hiring policy before implementing it. The chapter&rsquo;s term for using multiple methods is{' '}
            <strong>&ldquo;triangulation&rdquo; of results</strong>.
          </Callout>
        </>
      )
    },

    // ------------------------------------------------------------------ 7
    {
      id: 'data-collection',
      title: 'Data Collection Methods',
      subtitle: 'Surveys, qualitative methods, tests, and archival sources',
      content: (
        <>
          <p>
            The prevalent norm in I-O research has been <strong>quantitative</strong> data collection rather
            than <strong>qualitative methods</strong> (methods not involving statistical calculations) — but the
            chapter notes this <em>appears to be changing</em>, with greater appreciation of qualitative work and
            its role in triangulation.
          </p>

          <Table
            headers={['Method', 'Definition & strengths', 'Limitations']}
            rows={[
              [
                <strong key="s">Survey methods</strong>,
                'People report responses on a paper or online questionnaire — "perhaps the most frequently used methods in I-O research." Generally uses pre-established items/scales with demonstrated reliability and validity. Collects a large amount of data from many participants relatively easily, enabling a wide range of statistical techniques.',
                'May fail to ask all the relevant questions, so they may not provide the RICHEST data — detailed data about the individual and their experiences that the researcher had not considered.'
              ],
              [
                <strong key="q">Qualitative methods</strong>,
                'Data sources such as interviews with employees, focus groups, and observational methods that provide RICH data about a phenomenon. Useful when there is little existing research (you would only be guessing at survey items), for building new theory from the ground up, and because they look at the WHOLE PERSON rather than a list of variables (Weiss & Rupp, 2011). With extra work, interview/observation data can be coded for statistical analysis.',
                'Relatively time-consuming; large numbers of employees cannot be sampled all at once.'
              ],
              [
                <strong key="o">Observational methods</strong>,
                'Observing employees while they are working; can provide insights that might not emerge from a survey.',
                'Same time cost as other qualitative work.'
              ],
              [
                <strong key="t">Tests</strong>,
                'Measures of individual differences such as skills, personality, or cognitive ability — frequently used to make personnel selection decisions and to research selection.',
                '—'
              ],
              [
                <strong key="a">Archival sources</strong>,
                'Datasets already collected by others and made available for analysis — from organizations willing to share, from other researchers, or from government-sponsored survey projects. These can be very large and sample an entire population well (workers, retirees); available in the US and many European countries, some sampling the entire EU.',
                'Rarely collected with an individual researcher’s questions in mind, so they may not include all the variables needed for a given project.'
              ]
            ]}
          />

          <Callout kind="tip" title="The job-application think-aloud example">
            To study what applicants are thinking as they apply online — a topic with little existing research —
            you could not write good survey items because you would be guessing. Better to{' '}
            <strong>interview applicants</strong> or have them <strong>&ldquo;think aloud&rdquo;</strong> while
            moving through the application website. This illustrates qualitative research&rsquo;s
            theory-building role.
          </Callout>

          <p className="text-sm text-slate-600">
            Note the forward link: <strong>job analysis</strong> (Ch. 3) deliberately uses{' '}
            <strong>multiple sources of data — interviews, observations, and surveys</strong> — to understand
            what a job involves. Even survey-focused researchers do some interviews and observations to
            understand the organization.
          </p>
        </>
      )
    },

    // ------------------------------------------------------------------ 8
    {
      id: 'descriptive-stats',
      title: 'Descriptive Statistics & Statistical Significance',
      subtitle: 'Mean, median, mode, range, standard deviation — with the worked example',
      images: [
        {
          src: `${IMG}/02d_table2-1_mean_sd_calculation.png`,
          alt: 'Table 2.1: worked example computing a mean and standard deviation from nine scores — 5,5,4,4,3,3,1,1,1 — showing deviations from the mean and squared deviations totaling 22, divided by 8 to give 2.75, square root 1.66.',
          caption: 'Table 2.1 — Example calculation of a mean and standard deviation.'
        }
      ],
      content: (
        <>
          <p>
            The chapter&rsquo;s data: nine employees rate job satisfaction on a five-point scale as{' '}
            <strong>5, 5, 4, 4, 3, 3, 1, 1, 1</strong>.
          </p>

          <Table
            headers={['Statistic', 'Definition', 'Value in the example']}
            rows={[
              [<strong key="1">Mean</strong>, 'A statistic measuring central tendency (the average) — the sum of scores divided by the number of scores.', '27 ÷ 9 = 3'],
              [<strong key="2">Median</strong>, 'The centermost score in a group or distribution of scores.', '3 (the middle of nine scores)'],
              [<strong key="3">Mode</strong>, 'The most frequently occurring number in a group of scores.', '1 (occurs three times)'],
              [<strong key="4">Range</strong>, 'Measures the spread of scores; the highest score minus the lowest score.', '5 − 1 = 4'],
              [<strong key="5">Standard deviation</strong>, 'A measure of variability of scores around the mean, based on the average squared deviation from the mean.', '√(22 ÷ 8) = √2.75 = 1.66']
            ]}
          />

          <Callout kind="warn" title="Follow the SD arithmetic — it is exam-testable">
            Sum the squared deviations (<strong>22</strong>), divide by <strong>n − 1</strong> (9 − 1 ={' '}
            <strong>8</strong>) to get <strong>2.75</strong>, then take the square root:{' '}
            <strong>1.66</strong>. Note the <em>n − 1</em>, not <em>n</em>.
          </Callout>

          <Callout kind="danger" title="Statistical significance — the definition and the 5% norm">
            <strong>Statistical significance</strong> means <em>the results of a study are not simply due to
            chance</em>. <strong>The norm among most researchers is that there is a less than 5 percent chance
            that the results occurred at random.</strong>
          </Callout>

          <Callout kind="tip" title="…and it is NOT the same as practical significance">
            <strong>Practical significance</strong> — glossary: <em>whether a result is meaningful or important
            in a real-world application.</em> The chapter&rsquo;s example: a training program has a{' '}
            <strong>statistically significant</strong> effect on job knowledge — but knowledge moved from{' '}
            <strong>75/100 to 75.5/100</strong> at a cost of <strong>$10,000 per employee</strong>. Statistically
            significant, practically worthless.
          </Callout>
        </>
      )
    },

    // ------------------------------------------------------------------ 9
    {
      id: 'five-statistics',
      title: 'The Five Statistical Tools (Figure 2.4)',
      subtitle: 'Correlation, regression, t-test, ANOVA, meta-analysis — what each is FOR',
      images: [
        {
          src: `${IMG}/02e_fig2-4_common_statistics.png`,
          alt: 'Figure 2.4: a table listing correlation, linear regression, t-test, analysis of variance, and meta-analysis with the purpose of each.',
          caption: 'Figure 2.4 — Common statistics and what they are used for.'
        }
      ],
      content: (
        <>
          <Callout kind="danger" title="If you memorize one table in Chapter 2, make it this one">
            The exam will almost certainly give you a research scenario and ask which statistic answers it.
          </Callout>

          <Table
            headers={['Statistic', 'Purpose', 'Give-away words in a question stem']}
            rows={[
              [
                <strong key="1">Correlation</strong>,
                'Determine the DEGREE of relationship between two variables X and Y, and whether it is statistically significant — including both the magnitude and the direction.',
                '"relationship between", "association", "degree to which X is related to Y"'
              ],
              [
                <strong key="2">Linear regression</strong>,
                'Same as correlation, PLUS it describes the "best fit" line via an equation, which lets you calculate a PREDICTED score on Y from a given X.',
                '"predict a score", "estimate Y from X"'
              ],
              [
                <strong key="3">t-test</strong>,
                'Determine whether the difference between TWO means is statistically significant. Works for two groups (experimental vs. control) OR the same group at two times (before vs. after an intervention).',
                '"difference between two groups", "pre vs. post"'
              ],
              [
                <strong key="4">ANOVA</strong>,
                'Determine whether the difference among THREE OR MORE means is statistically significant. Calculates an F-test / F-ratio.',
                '"three groups", "across the 10 offices", "several conditions"'
              ],
              [
                <strong key="5">Meta-analysis</strong>,
                'Statistically summarize the results of a GROUP OF STUDIES.',
                '"across many studies", "summarize a literature"'
              ]
            ]}
          />
        </>
      )
    },

    // ------------------------------------------------------------------ 10
    {
      id: 'correlation',
      title: 'Correlation in Detail',
      subtitle: 'The −1 to +1 scale, squared correlation, and the "which test is better" trap',
      images: [
        {
          src: `${IMG}/02f_fig2-5_scatterplot.png`,
          alt: 'Figure 2.5: a scatter plot with job satisfaction on the x-axis from 1 to 5 and job performance on the y-axis from 1 to 5, showing red dots with a positive elliptical trend.',
          caption: 'Figure 2.5 — Simple scatter plot of the relationship between job satisfaction and performance.'
        }
      ],
      content: (
        <>
          <p>
            <strong>Correlation</strong> — glossary: <em>indicates the magnitude of the relationship between two
            variables as well as the direction of that relationship, on a scale of −1.0 to 1.0.</em> Values{' '}
            <strong>closer to −1.00 or 1.00 indicate a stronger relationship</strong>.
          </p>

          <Callout kind="info" title="The chapter's r = .30 example">
            With 100 employees, satisfaction on X and performance on Y, suppose <strong>r = .30</strong>. That
            suggests higher satisfaction scores tend to be related to higher performance scores. But{' '}
            <strong>there is no way to tell if one causes the other, or if some variable affects them both —
            only that they coincide.</strong>
            <p className="mt-2">
              The <strong>squared correlation</strong> gives the <strong>percentage of variance in one variable
              accounted for by the other</strong> — sometimes called the{' '}
              <strong>coefficient of determination</strong>. Here .30² = .09, so job satisfaction accounts for{' '}
              <strong>9 percent of the variance</strong> in job performance.
            </p>
          </Callout>

          <Callout kind="danger" title="The negative-correlation trap — this exact item is in the textbook">
            <p className="mb-2">
              You must choose between two tests as predictors of job performance:{' '}
              <strong>Test A: r = .30</strong> and <strong>Test B: r = −.40</strong>. Which is the better
              predictor?
            </p>
            <p>
              <strong>Test B.</strong> Square both: Test B accounts for <strong>16 percent</strong> of the
              variance, Test A only <strong>9 percent</strong>. The <em>sign</em> tells you direction; the{' '}
              <em>absolute magnitude</em> tells you strength. A negative correlation is not a weak one.
            </p>
          </Callout>
        </>
      )
    },

    // ------------------------------------------------------------------ 11
    {
      id: 'regression',
      title: 'Linear Regression',
      subtitle: 'Y = bx + a, and Marcia’s predicted score of 11',
      images: [
        {
          src: `${IMG}/02g_fig2-6_regression_best_fit_line.png`,
          alt: 'Figure 2.6: the same scatter plot of job satisfaction and job performance with a black best-fit straight line drawn through the points.',
          caption: 'Figure 2.6 — Best-fit regression line explaining the relationship between job satisfaction and performance.'
        }
      ],
      content: (
        <>
          <p>
            <strong>The limitation of correlation:</strong> you can tell the degree of relationship, but{' '}
            <strong>you cannot estimate or predict a person&rsquo;s score on Y from their score on X</strong>.
            Even knowing that someone&rsquo;s satisfaction score is 4, you cannot predict their performance.
          </p>

          <p>
            <strong>Linear regression</strong> — glossary: <em>used to determine the degree of relationship
            between two variables X and Y and whether it is statistically significant. It also describes the
            best-fit line that describes the relationship in terms of an equation, which allows one to calculate
            a predicted score on the Y variable from a given X variable.</em>
          </p>

          <Card title="The equation">
            <div className="bg-slate-100 rounded p-4 text-center font-mono text-lg text-slate-900 mb-3">
              Y = bx + a
            </div>
            <Table
              headers={['Symbol', 'Meaning']}
              rows={[
                ['Y', 'The PREDICTED job performance score'],
                ['b', 'The relative weight of the predictor (the SLOPE of the line)'],
                ['x', 'The job satisfaction score'],
                ['a', 'The y-INTERCEPT, or constant']
              ]}
            />
          </Card>

          <Callout kind="tip" title="Work the chapter's example">
            If the equation is <strong>Y = 2x + 3</strong> and Marcia has a job satisfaction level of{' '}
            <strong>4</strong>, then Y = 2(4) + 3 = <strong>11</strong>. Her predicted job performance is 11.
          </Callout>

          <Callout kind="warn" title="The caveat the chapter insists on">
            11 is Marcia&rsquo;s <strong>predicted</strong> score — <strong>we do not know for sure what her
            actual job performance score would be</strong>. It is our best guess; depending on the strength of
            the relationship, her actual score could be quite different. (There is a{' '}
            <strong>standard deviation around the predicted score</strong>, depending on how strong the
            correlation between X and Y is.)
          </Callout>

          <p>
            <strong>One more capability:</strong> regression also lets you predict a Y value from{' '}
            <strong>multiple X scores</strong> — e.g., using both job satisfaction (X₁) and engagement (X₂) to
            predict job performance (Y).
          </p>
        </>
      )
    },

    // ------------------------------------------------------------------ 12
    {
      id: 'ttest-anova',
      title: 't-Tests, ANOVA & Meta-Analysis',
      subtitle: 'Two means, three-or-more means, and summarizing whole literatures',
      images: [
        {
          src: `${IMG}/02h_table2-2_ttest_example.png`,
          alt: 'Table 2.2: t-test example with a control group (mean 58.00) and a classroom-trained group (mean 69.40), each with ten job knowledge scores.',
          caption: 'Table 2.2 — t-test example. Control mean = 58.00; trained mean = 69.40; t = 2.7, statistically significant with n = 10.'
        },
        {
          src: `${IMG}/02i_table2-3_anova_example.png`,
          alt: 'Table 2.3: ANOVA example with three groups — control (mean 58.00), classroom training (mean 69.40), and online training (mean 69.60).',
          caption: 'Table 2.3 — ANOVA example. Both trained groups beat control; the two training types do not differ significantly.'
        }
      ],
      content: (
        <>
          <Card title="t-test">
            <p className="text-sm">
              <strong>Glossary:</strong> <em>used to determine whether the difference between two means is
              statistically significant. This can be for two groups (e.g., an experimental and control group), or
              two means of the same group at different times (e.g., the mean of one group before an intervention
              compared with its mean after an intervention).</em>
            </p>
            <p className="text-sm mt-2">
              In the worked example, the control mean is <strong>58.00</strong> and the trained mean is{' '}
              <strong>69.40</strong>; the <strong>t-value was 2.7</strong>, which with a sample size of 10 is
              statistically significant — the trained group had higher job knowledge, and the difference was{' '}
              <strong>big enough that it was not just due to chance</strong>. Note the chapter&rsquo;s aside
              that comparing the <em>same</em> group before and after uses{' '}
              <strong>a different formula</strong> but is still a t-test.
            </p>
          </Card>

          <Card title="ANOVA (Analysis of Variance)">
            <p className="text-sm">
              <strong>Glossary:</strong> <em>used to compare the means of more than two groups. ANOVA calculates
              an F-ratio that tells you whether the differences among three or more groups are statistically
              significant.</em>
            </p>
            <Callout kind="tip" title="The follow-up logic — a favorite MCQ">
              In the three-group example (control 58.00, classroom 69.40, online 69.60), the ANOVA is
              significant. <strong>The researcher would then follow up with t-tests to see WHERE those
              differences are.</strong> Result: <strong>both trained groups scored better than control, but the
              two trained groups do not differ significantly</strong> — the two types of training are equally
              effective, and both beat no training.
            </Callout>
          </Card>

          <Card title="Meta-analysis">
            <p className="text-sm">
              <strong>Glossary:</strong> <em>a statistical analysis of a group of studies by researchers so that
              conclusions might be drawn about a phenomenon.</em>{' '}
              <strong>Pioneered in I-O psychology by Frank Schmidt and John Hunter</strong> (e.g., Schmidt &amp;
              Hunter, 1981).
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>
                It <strong>takes sample size into account</strong>: one reason some studies fail to show a strong
                relationship is that their samples were too small. Accounting for this yields{' '}
                <strong>more precise estimates and makes sense of inconsistent findings</strong>.
              </li>
              <li>
                It lets you test whether different results across studies are due to other variables, called{' '}
                <strong>moderators</strong> — e.g., whether the sample is from one industry versus another, or
                whether studies were run in the lab versus the field.
              </li>
              <li>
                It is now <strong>indispensable</strong> not only in I-O but in many areas such as medicine
                (DerSimonian &amp; Laird, 1986).
              </li>
            </ul>
            <Callout kind="danger" title="Barrick & Mount (1991) — how a meta-analysis changed HR practice">
              For years I-O psychologists considered <strong>personality tests to be of low value for hiring</strong>,
              because most research had focused on tests of <strong>abnormal</strong> personality. Barrick and
              Mount&rsquo;s <strong>landmark 1991 meta-analysis</strong> found that tests of{' '}
              <strong>normal adult personality can predict job performance</strong>. This{' '}
              <strong>dramatically changed HR practice</strong> — personality testing is now part of hiring for
              many jobs, and some work even measures personality using gaming technology (Ihsan &amp; Furnham,
              2018). This is the direct set-up for Chapter 6.
            </Callout>
          </Card>
        </>
      )
    },

    // ------------------------------------------------------------------ 13
    {
      id: 'measurement-scales',
      title: 'Types of Measurement Scales',
      subtitle: 'Relative vs. absolute, and the nominal → ordinal → interval → ratio continuum',
      content: (
        <>
          <p className="text-sm text-slate-600">
            The chapter&rsquo;s framing: measurement issues are grounded in{' '}
            <strong>&ldquo;true score theory&rdquo;</strong> (Lord &amp; Novick, 1968), the most commonly used
            approach to measurement in psychological research.
          </p>

          <Card title="Relative vs. absolute scales — the Chris example">
            <Table
              headers={['Scale type', 'Definition', 'What Chris learns']}
              rows={[
                [
                  <strong key="r">Relative scale</strong>,
                  'Indicates only a person’s level on a variable RELATIVE to other people.',
                  '"You are not doing as well as Maya, but better than Jaime." Chris may not even know Jaime and Maya — this does not tell him whether he is doing well or poorly.'
                ],
                [
                  <strong key="a">Absolute scale</strong>,
                  'Also indicates a person’s level on a variable in SPECIFIC terms.',
                  '"You are a 4 out of 5." That tells him a lot more about how he is performing — and is far more useful as feedback.'
                ]
              ]}
            />
          </Card>

          <Callout kind="danger" title="The four-point continuum — know the order and what each adds">
            <Table
              headers={['Scale', 'What it does', 'Example', 'Statistical limits']}
              rows={[
                [
                  <strong key="n">Nominal</strong>,
                  'Simply CLASSIFIES a person into a category.',
                  'Male/female; ethnicity',
                  'Categorical variables are limited in terms of the statistics that can be performed on them.'
                ],
                [
                  <strong key="o">Ordinal</strong>,
                  'Indicates where someone falls on a scale RELATIVE to others (this is the "relative scale").',
                  'Ranking employees best to worst',
                  'More enriched than nominal, but NOT sufficient for most research purposes. Does not provide a meaningful difference between positions.'
                ],
                [
                  <strong key="i">Interval</strong>,
                  'Has MEANINGFUL DIFFERENCES between positions: 1→2 equals 2→3 equals 3→4.',
                  'Most psychological variables (or they are assumed to be)',
                  'These are the scales best analyzed using t-tests, correlations, ANOVAs, and regressions.'
                ],
                [
                  <strong key="ra">Ratio</strong>,
                  'Assumed to have an ABSOLUTE ZERO, plus meaningful differences between positions.',
                  'Age, income',
                  'Not common with most psychological measures — it is highly unlikely someone has "zero" conscientiousness or intelligence.'
                ]
              ]}
            />
          </Callout>
        </>
      )
    },

    // ------------------------------------------------------------------ 14
    {
      id: 'reliability',
      title: 'Reliability: Consistency of Measurement',
      subtitle: 'The 0–1 scale, the inverse relationship with error, and the five estimates',
      images: [
        {
          src: `${IMG}/02j_fig2-7_reliability_error_variance.png`,
          alt: 'Figure 2.7: a gray box with the word Reliability above an upward blue arrow and the words Error Variance above a downward blue arrow.',
          caption: 'Figure 2.7 — The inverse relationship between reliability and error variance.'
        },
        {
          src: `${IMG}/02k_table2-4_reliability_estimates_summary.png`,
          alt: 'Table 2.4: summary of reliability estimates — test-retest, parallel forms, split-halves, coefficient alpha, and interrater — with what each involves and points to consider.',
          caption: 'Table 2.4 — Summary of reliability estimates and the caveats for each.'
        }
      ],
      content: (
        <>
          <p>
            <strong>Reliability</strong> — glossary: <em>refers to the dependability of a measure, or its
            consistency in measurement</em> (its consistency in measuring people relative to others in a group).
          </p>

          <Callout kind="info" title="The Carmela and Virgil example">
            Administer a 1–10 conscientiousness measure twice, a week apart. <strong>Carmela scores 9 then
            2</strong>; <strong>Virgil scores 3 then 10</strong>. You should worry: the test{' '}
            <strong>seems to be giving you random numbers rather than any kind of consistent
            measurement</strong>.
          </Callout>

          <Table
            headers={['Fact about reliability', 'Detail']}
            rows={[
              ['Scale', '0 (not reliable, PURE measurement error) to 1 (perfect reliability, NO measurement error).'],
              ['Relationship to error', 'INVERSE. The more unreliable a measure, the higher its measurement error / error variance.'],
              ['Can you know "the" reliability?', 'No — "you cannot really know the reliability of a measure; all you can do is come up with estimates of it."'],
              ['Reality check', 'In the real world, FEW IF ANY psychological measures have perfect reliability.'],
              ['Two things a reliable measure does', '(1) People give consistent responses each time they complete it. (2) The measure is consistent in its ORDERING of a group of individuals — who gets the highest and lowest scores.']
            ]}
          />

          <Callout kind="danger" title="How much is enough?">
            <strong>There is no definite way to answer that</strong>, and there has been controversy (Lance et
            al., 2006). Some researchers say <strong>.70 is a minimum</strong> for measures used in most I-O
            research (Nunnally, 1978). But it varies by use: reliability for{' '}
            <strong>measures used for hiring should be higher</strong>, given the importance of the decisions
            (Gatewood et al., 2018). In any case, <strong>more reliability is always better, because that means
            less error variance.</strong>
          </Callout>

          <Callout kind="danger" title="The single most important reliability fact">
            <strong>Reliability is a NECESSARY condition for validity: if a test is not reliable, it cannot be
            valid.</strong> If a conscientiousness test were all error variance, it could not possibly be
            measuring a specific construct. (Note the asymmetry — reliability is necessary but not sufficient.
            See the bathroom-scale example in the validity block.)
          </Callout>
        </>
      )
    },

    // ------------------------------------------------------------------ 15
    {
      id: 'reliability-estimates',
      title: 'The Five Reliability Estimates',
      subtitle: 'Test-retest, parallel forms, split-halves, coefficient alpha, interrater',
      images: [
        {
          src: `${IMG}/02l_table2-5_test_retest_scores.png`,
          alt: 'Table 2.5: test scores for 15 employees at Time 1 and Time 2, one week apart, used to compute a test-retest reliability of .95.',
          caption: 'Table 2.5 — Test scores for 15 employees at two occasions one week apart; correlating them gives r = .95.'
        },
        {
          src: `${IMG}/02m_table2-6_interrater_ratings.png`,
          alt: 'Table 2.6: ratings of 20 job applicants for a software engineer job by two interviewers, used to compute an interrater reliability of .73.',
          caption: 'Table 2.6 — Ratings of 20 applicants by two interviewers; correlating them gives r = .73.'
        }
      ],
      content: (
        <>
          <Table
            headers={['Estimate', 'What it involves', 'Points to consider (the caveats you will be tested on)']}
            rows={[
              [
                <strong key="1">Test–retest</strong>,
                'Administer the test to a group on TWO occasions and correlate the scores. In Table 2.5, 15 employees tested one week apart give r = .95.',
                '(a) Participants may not come back for the second administration, or may refuse. (b) If administrations are TOO CLOSE, participants remember what they put and you get an OVERESTIMATE. (c) If TOO FAR APART, people genuinely change (maturation effects) and you get an UNDERESTIMATE — the 3rd-grade reading example: fall vs. spring testing would show real change, not unreliability.'
              ],
              [
                <strong key="2">Parallel forms</strong>,
                'Administer TWO parallel forms of the measure to a group on a SINGLE occasion (Form A and Form B on the same day) and correlate the two sets of scores. Common practice for test publishers who need multiple versions to preserve test security.',
                '(a) Difficult — twice the work — to develop two measures; you would not build a second version just to compute reliability. (b) Tests are never COMPLETELY parallel, so this may UNDERESTIMATE reliability. (c) Participants must sit through two versions and may become FATIGUED and lose motivation.'
              ],
              [
                <strong key="3">Split-halves</strong>,
                'An INTERNAL CONSISTENCY estimate. Administer once; treat two halves (usually odd-numbered vs. even-numbered items) as two small tests and correlate them. Convenient — one administration, one version.',
                '(a) Gives the reliability of a test only HALF as long, so it is an UNDERESTIMATE — correct it upward with the SPEARMAN-BROWN formula. (A 100-item test split in half computes the reliability of a 50-item test.) (b) May not be suitable for measures assessing multiple constructs.'
              ],
              [
                <strong key="4">Coefficient alpha</strong>,
                'An INTERNAL CONSISTENCY estimate: an index of the intercorrelation among scale items, or the AVERAGE OF ALL POSSIBLE SPLIT-HALVES. Very commonly used because most social-science statistical software computes it.',
                'Based on the assumption that the test measures only ONE dimension, so it is NOT appropriate when a test measures more than one construct — e.g., a "scholastic achievement" test measuring both mathematical and verbal ability. See Cortina (1993) on uses and misuses.'
              ],
              [
                <strong key="5">Interrater</strong>,
                'Used when two people rate a series of job candidates or employees. Correlate Rater 1’s scores with Rater 2’s. In Table 2.6, two senior engineers rating 20 software-engineer applicants give r = .73.',
                'Raters should be TRAINED and STRUCTURED METHODS should be used to help enhance reliability.'
              ]
            ]}
          />

          <Callout kind="tip" title="Two anchors to memorize">
            <strong>Test–retest in Table 2.5 = .95.</strong>{' '}
            <strong>Interrater in Table 2.6 = .73.</strong> The chapter also notes the internal consistency
            estimates <em>assume the test assesses one thing</em>, so items should be intercorrelated — i.e.,
            each respondent answered each item similarly.
          </Callout>
        </>
      )
    },

    // ------------------------------------------------------------------ 16
    {
      id: 'validity',
      title: 'Validity: What a Scale Is Actually Measuring',
      subtitle: 'Content, criterion-related, construct — and why construct validity subsumes them',
      images: [
        {
          src: `${IMG}/02n_fig2-8_construct_validity.png`,
          alt: 'Figure 2.8: a green oval labeled Construct Validity with three arrows pointing up from boxes labeled Content Validity (measure adequately samples a domain), Criterion-Related Validity (measure has an empirical relationship with an outcome), and Classic Construct Validity Evidence (measure shows convergent and discriminant validity).',
          caption: 'Figure 2.8 — Construct validity subsumes other types of validity evidence.'
        }
      ],
      content: (
        <>
          <p>
            <strong>Validity</strong> — glossary: <em>the extent to which the measure is actually measuring what
            it is supposed to measure.</em>
          </p>

          <Callout kind="danger" title="The bathroom scale analogy — the cleanest way to hold reliability vs. validity apart">
            A scale that <strong>consistently says you weigh 20 pounds</strong> is <strong>reliable</strong> — it
            gives the same reading every time. But as an adult it is <strong>highly unlikely you actually weigh
            20 pounds</strong>, so it is <strong>not valid</strong>. Reliability says the measure is measuring{' '}
            <em>something</em> consistently; validity says <em>what</em> it is measuring.
          </Callout>

          <Table
            headers={['Type of evidence', 'Definition', 'Chapter’s example', 'Statistical or documentary?']}
            rows={[
              [
                <strong key="c">Content validity</strong>,
                'A PROCESS demonstrating a measure was developed in a way that SAMPLED THE DOMAIN of interest — documenting that the test actually samples the desired domain.',
                'Ask personality-psychology experts to supply item content for a conscientiousness test. Or, for a college algebra test, refer to algebra textbooks and consult college algebra instructors.',
                'Involves relatively LITTLE statistical analysis; heavy on DOCUMENTATION (Colquitt et al., 2019).'
              ],
              [
                <strong key="cr">Criterion-related validity</strong>,
                'The EMPIRICAL demonstration that the test predicts a criterion or outcome you care about, usually via a correlation between test and criterion.',
                'Give an introversion measure to 400 new hires in a sales job; correlate scores with whether the person left within six months. Result: r = .32, statistically significant. That .32 is the VALIDITY COEFFICIENT.',
                'Statistical. Sub-designs (Ch. 7): CONCURRENT (data collected at one time point) vs. PREDICTIVE (two time points).'
              ],
              [
                <strong key="cv">Construct validity</strong>,
                'The ACCUMULATION OF EVIDENCE that the measure really is measuring what it is supposed to measure. "At the heart of validity."',
                'Includes convergent and discriminant evidence (below), plus findings such as a conscientiousness test relating to supervisor ratings of dependability.',
                'Accumulated across MULTIPLE studies.'
              ]
            ]}
          />

          <Card title="Convergent vs. discriminant validity — the algebra-test example">
            <Table
              headers={['', 'Definition', 'Algebra test example', 'You WANT the coefficient to be…']}
              rows={[
                [
                  <strong key="cv">Convergent validity</strong>,
                  'The degree to which a measure CORRELATES with measures it SHOULD have a relationship with.',
                  'The algebra test correlates with other algebra measures, and to a lesser extent with geometry and trigonometry measures.',
                  <strong key="h">HIGH</strong>
                ],
                [
                  <strong key="dv">Discriminant (divergent) validity</strong>,
                  'The degree to which the measure does NOT show a relationship with things it should NOT be related to.',
                  'The algebra test should NOT correlate with a measure of verbal fluency. A strong relationship would set off alarms that the test contains a strong verbal component.',
                  <strong key="l">LOW</strong>
                ]
              ]}
            />
          </Card>

          <Callout kind="warn" title="Landy (1986): validity is really ONE concept, not three">
            The textbook presents three types &ldquo;because this is a straightforward way to explain the
            validation process to people who are not experts in psychometrics.&rdquo; But it emphasizes there are{' '}
            <strong>not three &ldquo;types&rdquo; of validity — there are many different types of
            evidence</strong> that a measure is valid, and <strong>construct validity overarches or subsumes the
            others</strong> because of its focus on accumulating evidence from multiple studies.
            <p className="mt-2">
              Its illustration of the blur: a conscientiousness test relating to supervisor ratings of
              dependability could be called <em>criterion-related</em> (it predicts an important outcome){' '}
              <em>or</em> good <em>construct</em> evidence (it correlates with another measure of dependability).
            </p>
          </Callout>
        </>
      )
    },

    // ------------------------------------------------------------------ 17
    {
      id: 'ethics',
      title: 'Ethical Issues in I-O Research',
      subtitle: 'Informed consent, voluntariness, anonymity vs. confidentiality, IRBs, and professional codes',
      content: (
        <>
          <Callout kind="danger" title="The basic principles, in the chapter's own words">
            <strong>&ldquo;These basic principles behind research ethics — voluntary, informed consent — are
            important to keep in mind.&rdquo;</strong>
          </Callout>

          <Table
            headers={['Requirement', 'What it means']}
            rows={[
              [
                <strong key="ic">Informed consent</strong>,
                'Provide participants with informed consent BEFORE they agree to participate, so they know what the study will require before they begin.'
              ],
              [
                <strong key="v">Voluntary participation</strong>,
                'Participation must be COMPLETELY voluntary. For I-O research in organizations, this includes informing participants that participation is voluntary AND that participating — or not — will not have negative effects.'
              ],
              [
                <strong key="a">Anonymity</strong>,
                'Some I-O studies include anonymity so that it will NOT BE POSSIBLE to identify who participated or their responses.'
              ],
              [
                <strong key="cf">Confidentiality</strong>,
                'Rather than removing all identifying information, some studies simply require the researcher to KEEP responses confidential.'
              ],
              [
                <strong key="irb">Institutional review board (IRB)</strong>,
                'A board or group of people who govern the research process at an institution. Most universities have one. Some organizations (e.g., Microsoft) have created their own internal procedures to ensure research is done appropriately (Goel, 2014).'
              ]
            ]}
          />

          <Callout kind="warn" title="Why ethics is especially hard in applied I-O settings">
            <strong>Ethical issues can take so many forms in organizations because of the diversity of issues
            I-O psychologists are involved in</strong> — selection, occupational safety and health, and training
            all present <em>very different</em> ethical issues. Lowman (2006, 2012) provides discussion and case
            studies.
          </Callout>

          <Table
            headers={['Professional code', 'What it covers']}
            rows={[
              [
                <strong key="a">APA ethical code (2017)</strong>,
                'A detailed code including principles such as JUSTICE and INTEGRITY. Addresses I-O-relevant issues: balancing organizational demands with ethical principles, working only within areas of competence, avoiding harm, and conflicts of interest.'
              ],
              [
                <strong key="aom">Academy of Management code of ethics (2010)</strong>,
                'Guidelines for the treatment of research participants, students, and employees, as well as managers and people within the community.'
              ]
            ]}
          />

          <p className="text-sm text-slate-600">
            <strong>Legal Issues box:</strong> validating tests used for hiring is not a purely academic subject.
            Procedures are stipulated by professional guidelines (SIOP&rsquo;s{' '}
            <em>Principles for the Validation and Use of Personnel Selection Procedures</em>, 2018) and by federal
            court cases and guidelines (<em>Uniform Guidelines on Employee Selection Procedures</em>, 1978).{' '}
            <strong>Failing to comply can result in costly lawsuits and bad publicity</strong> (Ch. 7).
          </p>
        </>
      )
    },

    // ------------------------------------------------------------------ 18
    {
      id: 'global-current-issues',
      title: 'Global & Current Research Issues',
      subtitle: 'Translation/back-translation, interventions, open science, and online samples',
      images: [
        {
          src: `${IMG}/02o_fig2-9_translation_backtranslation.png`,
          alt: 'Figure 2.9: three steps — original English item "I am happy with my boss," translated into Spanish by one person as "Estoy contento con mi jefe," then back-translated into English by another person as "I am happy with my boss."',
          caption: 'Figure 2.9 — Simple example of translation and back-translation. Matching original and back-translated items means the process succeeded.'
        }
      ],
      content: (
        <>
          <Card title="Global: two cross-cultural research problems (Truxillo & Fraccaroli, 2014)">
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>
                <strong>Measurement equivalence.</strong> When comparing findings across countries you must know
                the survey measures are equivalent — that English and Spanish job-satisfaction items measure the
                same thing. The solution is <strong>translation and back-translation</strong> (Brislin, 1970):
                translate the item into the target language, have <strong>a different person</strong>{' '}
                back-translate it into the original, then compare. Matching meaning means the items have{' '}
                <strong>the same semantic meaning</strong>.
              </li>
              <li>
                <strong>The more fundamental issue: whether concepts that exist in one culture even exist in
                another.</strong> Many personality frameworks were developed in Western cultures and{' '}
                <strong>may not even be relevant in some cultures</strong>. Researchers must be careful not to be
                overly biased by their own cultural background.
              </li>
            </ol>
          </Card>

          <Card title="Current Workplace Issues: intervention research">
            <p className="text-sm">
              Growing interest in <strong>what employers can actually do</strong> to improve worker attitudes,
              well-being, health, and performance. Challenging because it requires{' '}
              <strong>coordination and trust between researchers and organizations</strong>.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>
                <strong>Extensive intervention:</strong> Crain et al. (2019) implemented work&ndash;life balance
                training for supervisors and employees at an IT company, <strong>leading to improvements in
                sleep</strong>.
              </li>
              <li>
                <strong>Simple intervention:</strong> McCarthy et al. (2017) gave{' '}
                <strong>brief explanations to test-takers before an employment test</strong>, affecting
                perceptions of test fairness and of being treated with respect.
              </li>
              <li>
                <strong>The big question — for whom does it work?</strong> Hammer et al. (2019) found a worker
                safety and health intervention (supervisor + team training) benefited team members{' '}
                <strong>primarily for teams with LOW cohesion and POOR leader relationships to begin with</strong>.
              </li>
            </ul>
          </Card>

          <Card title="Current Research Issues: open science and online samples">
            <p className="text-sm">
              <strong>Open science</strong> — ensuring that research practices used in a study are{' '}
              <strong>transparent and fully reported</strong> and that findings can be{' '}
              <strong>reproduced by other scientists</strong> (Banks et al., 2019). The tension the chapter names:{' '}
              <strong>many journals tend not to publish replications</strong>, focusing on &ldquo;what&rsquo;s
              new&rdquo; — yet replications are valuable for confidence in findings and necessary to ensure the
              credibility of the research (Grand et al., 2018).
            </p>
            <Table
              headers={['Online samples (e.g., mTurk) — the debate', 'Position']}
              rows={[
                ['Advantage', 'Convenient way to pilot research studies that might be too costly to pilot in field settings (Buhrmester et al., 2011).'],
                ['Criticism', 'Challenged as being artificial.'],
                ['Rebuttal', 'Studies find online samples can produce results similar to conventional sources (Walter et al., 2019) — and one could make the same artificiality argument about using unemployed college sophomores, a practice used for a long time.'],
                ['Data quality concern', 'Those who do online surveys may be CARELESS — but there are ways to check the quality of online datasets.'],
                ['Ethical concern', 'Questions about whether the pay these online gig workers receive is a LIVING WAGE (Semuels, 2018).'],
                ['The chapter’s conclusion', '"Online samples have their place for certain research questions when used ethically and appropriately" (Cheung et al., 2017) — though the debates are likely to continue.']
              ]}
            />
          </Card>

          <Callout kind="tip" title="What This Means to You — three consumer cautions">
            <ol className="list-decimal pl-5 space-y-1">
              <li>
                <strong>One study usually cannot prove something definitively.</strong> Small samples and limited
                populations make generalization uncertain; <strong>in most fields, multiple studies are required
                to draw definite conclusions</strong>.
              </li>
              <li>
                <strong>Results can be presented misleadingly.</strong> &ldquo;70 percent of doctors surveyed said
                this product is effective&rdquo; — but <em>which</em> doctors? All US physicians, or people
                already using the product? Be a little skeptical and ask questions.
              </li>
              <li>
                <strong>Statistical significance ≠ practical significance.</strong> See the $10,000 training that
                moved knowledge from 75 to 75.5.
              </li>
            </ol>
          </Callout>
        </>
      )
    }
  ],

  // ==================================================================== KEY REVIEW
  keyReview: {
    summary: {
      title: 'Chapter 2 — Comprehensive Summary',
      wordCount: 1200,
      paragraphs: [
        'Research methods are described as the cornerstone of industrial and organizational psychology, and the chapter’s framing is deliberately practical: its goal is not to produce research experts but informed consumers of research, because I-O research is conducted by practitioners inside organizations as well as by professors, and its findings shape decisions about training, work-life balance programs, hiring, and promotion for millions of workers. The chapter begins with the relationship between theory and research. A theory is a description of the relationships among variables and how these variables influence each other in order to explain a phenomenon, and empirical research is research based on direct or indirect observations, often conducted to see whether a theory holds up when tested. Although exceptions exist, good research rests on good theory, because theory tells a researcher where to begin rather than forcing them to start from scratch. Theory informs research, research informs theory, and — per the scientist-practitioner model — both inform practice while practical problems set the agenda for future research. This circular relationship explains the standard structure of a journal article: a review of prior theory and research, a description of methods and results, and a concluding discussion of implications for practice, theory, and future research.',

        'The evolution of organizational justice theory illustrates how this works. Its roots lie in Adams’s equity theory from the early 1960s, which examined how the perceived fairness of outcomes received relative to others affects motivation and behavior, and which was initially applied mainly to pay. Successive empirical studies broadened it: researchers found that the process used to reach an outcome mattered as much as the outcome itself, and later that the fairness of interpersonal treatment — being treated with respect — mattered too. The theory also proved applicable well beyond pay, to promotions, treatment by supervisors, selection procedures, and everyday collegial respect, with fairness perceptions predicting job attitudes, performance, and health. Three lessons follow: theories develop over time toward greater detail and accuracy; a good theory explains a phenomenon across very different contexts, which is why Kurt Lewin observed that "there is nothing so practical as a good theory"; and a robust, empirically supported theory is extremely valuable to practice, telling organizations to deliver fair outcomes through fair and transparent processes while treating people with respect. Research can proceed deductively, beginning with a theory and testing hypotheses derived from it, or inductively, beginning with observation of a phenomenon and building a theory to explain it — as when a company uses big data to explain employee satisfaction with no guiding theory at all. Both approaches advance theory and can improve practice.',

        'Turning to design, the independent variable is the one manipulated by the researcher, and the dependent variable is the one affected by it. Crucially, many I-O studies examine variables that cannot be manipulated — personality, job satisfaction — so technically they have no independent variable, and without an independent variable there is no dependent variable either. Different vocabulary applies in those cases: an antecedent and an outcome, or, in selection research, a predictor and a criterion variable. A true experiment requires three things simultaneously: an experimental group receiving the manipulation, a control group that does not, and random assignment of participants to groups. Random assignment matters because it controls confound variables — variables that covary with the independent variable and whose effects on the dependent variable cannot easily be disentangled from it — as well as other extraneous variables, by distributing their levels evenly across conditions. Field experiments apply this design in actual organizations and provide a "gold standard" for evaluating workplace interventions, but they are uncommon for three reasons: they demand substantial effort and a trusting, well-matched organization; organizations may be unwilling to assign workers to conditions for reasons of fairness and morale; and certain manipulations would be unethical or illegal, such as randomly assigning real job applicants to be treated differently. Laboratory experiments using undergraduates or online samples are cheaper, easier to staff, and offer strong experimental control, but their results may not be generalizable, since students may be younger, unemployed, and responding to an artificial rather than a work situation. Quasi-experimental designs sit between these, resembling true experiments but missing an element — usually random assignment — as when one geographic division receives an intervention and another serves as control; they trade rigor for feasibility and were pioneered in I-O through training evaluation.',

        'Because many I-O questions involve stable characteristics that cannot be manipulated, much field research is correlational: studies with no definite independent or dependent variable that examine relationships among variables. Their advantages are real — they use actual working samples and inexpensive data collection such as surveys — but they face two problems. The first is causality, or determining which variable affects which. Direction is reasonably clear when a stable trait like neuroticism predicts job satisfaction, but genuinely ambiguous when both variables are dynamic, as with job satisfaction and job performance. The second is inflated relationships, which arise particularly when a single survey is administered on a single occasion, since mood or circumstances that day distort responses to items that should be stable and inflate the apparent association. Remedies include experimental designs, temporal ordering (necessary but not sufficient for causality), separating measurement of variables in time, drawing on multiple sources such as supervisor ratings or company records, and using repeated daily or weekly surveys to track within-person change. No single design is best; a combination is usually preferable, and using multiple methods is called triangulation. Data collection itself is dominated by surveys — the most frequently used method, efficient for large samples and amenable to many statistical techniques, but sometimes too thin to capture what the researcher did not anticipate. Qualitative methods such as interviews, focus groups, and observation supply that richness, are essential when a topic is too new to write good survey items about, support ground-up theory building, and treat the whole person rather than a list of variables, at the cost of being time-consuming and hard to scale. Archival datasets, already collected by organizations, other researchers, or government survey programs, can be enormous and representative but rarely contain exactly the variables a given project needs.',

        'Statistically, the chapter reviews central tendency (mean, median, mode) and spread (range, standard deviation), working through a nine-score example whose mean is 3, median 3, mode 1, range 4, and standard deviation 1.66, obtained by summing squared deviations, dividing by n minus one, and taking the square root. Statistical significance means results are not simply due to chance, with the conventional threshold being less than a five percent probability of a chance result; it must not be confused with practical significance, meaning whether a result is meaningful in a real-world application — a training program can raise knowledge from 75 to 75.5 out of 100 significantly while costing $10,000 per employee. Five tools cover most research questions. Correlation reports both magnitude and direction of a relationship on a scale from −1.0 to 1.0, with the squared correlation indicating the percentage of variance in one variable accounted for by the other; a correlation of −.40 is a stronger predictor than one of .30, since squaring yields 16 versus 9 percent of variance. Linear regression adds a best-fit line expressed as Y = bx + a, permitting a predicted score on Y from a given X — though the prediction is a best guess with a standard deviation around it — and can accommodate multiple predictors. The t-test evaluates whether the difference between two means is significant, whether two groups or one group at two times. ANOVA evaluates differences among three or more means using an F-ratio, with follow-up t-tests locating where the differences lie. Meta-analysis, pioneered in I-O by Frank Schmidt and John Hunter, statistically summarizes a body of studies, accounts for sample size to produce more precise estimates and reconcile inconsistent findings, and permits testing of moderators; Barrick and Mount’s 1991 meta-analysis showing that normal-personality tests predict job performance transformed hiring practice.',

        'Measurement rests on true score theory. Scales may be relative, locating a person only in relation to others, or absolute, expressing their standing in specific terms — a distinction with real consequences for performance feedback. The classic four-point continuum runs from nominal scales that merely classify, through ordinal scales that rank without meaningful intervals, to interval scales with equal distances between adjacent points (the type most psychological variables use and the type suited to t-tests, correlations, ANOVA, and regression), and finally ratio scales with an absolute zero, which are rare in psychological measurement since no one has zero conscientiousness. Reliability refers to the dependability or consistency of a measure, indexed from 0 (pure error) to 1 (no error), and bears an inverse relationship to error variance; it can only be estimated, never known exactly, and virtually no psychological measure is perfectly reliable. Five estimation approaches each carry characteristic weaknesses: test-retest correlates two administrations but risks attrition, memory-driven overestimates if too close together, and maturation-driven underestimates if too far apart; parallel forms avoids a second sitting but requires double the development work, never achieves true parallelism, and fatigues participants; split-halves correlates odd and even items in a single administration but underestimates reliability because it evaluates a half-length test, requiring the Spearman-Brown correction; coefficient alpha, the average of all possible split-halves, is ubiquitous but invalid for multidimensional measures; and interrater reliability correlates two raters’ scores and improves with rater training and structured methods. A minimum of .70 is often cited, higher for hiring decisions, and more reliability is always better. Most importantly, reliability is a necessary condition for validity — an unreliable test cannot be valid.',

        'Validity is the extent to which a measure actually measures what it is supposed to measure, as the bathroom scale that reliably reads 20 pounds illustrates. Three kinds of evidence are conventionally distinguished. Content validity is a documentary process demonstrating that the measure sampled the intended domain, achieved by consulting subject-matter experts, textbooks, and instructors rather than by statistical analysis. Criterion-related validity is the empirical demonstration that a test predicts an outcome of interest, typically by correlation — in the chapter’s example, an introversion measure correlating .32 with six-month turnover among 400 sales hires, that .32 being the validity coefficient — and it subdivides into concurrent designs collected at one time point and predictive designs collected at two. Construct validity is the accumulation of evidence that a measure really captures its intended construct, and includes convergent validity (correlating with what it should relate to, ideally high) and discriminant or divergent validity (not correlating with what it should not, ideally low). Following Landy, the chapter stresses that validity is really a single concept: construct validity subsumes the others, since accumulating evidence from many studies is what ultimately establishes what a test measures. Ethically, research requires informed consent, genuinely voluntary participation with assurance that declining carries no penalty, and either anonymity or confidentiality; institutional review boards govern the process, and some firms such as Microsoft maintain internal equivalents. Ethical challenges are especially varied in applied settings because selection, safety and health, and training raise different dilemmas, so practitioners look to the APA’s 2017 ethical code and the Academy of Management’s 2010 code. Globally, translation and back-translation establishes measurement equivalence across languages, though the deeper question is whether a construct exists at all in another culture. Current debates concern intervention research, open science and the underpublication of replications, and the legitimacy, quality, and labor ethics of online samples such as Mechanical Turk.'
      ]
    },

    numbers: [
      { value: '< 5%', what: 'Conventional threshold for statistical significance' },
      { value: '−1.0 to +1.0', what: 'Range of a correlation coefficient' },
      { value: '0 to 1', what: 'Range of a reliability estimate' },
      { value: '.70', what: 'Often-cited minimum reliability for I-O research measures (Nunnally, 1978)' },
      { value: 'r = .95', what: 'Test–retest reliability in Table 2.5 (15 employees, one week apart)' },
      { value: 'r = .73', what: 'Interrater reliability in Table 2.6 (2 interviewers, 20 applicants)' },
      { value: 'r = .32', what: 'Validity coefficient: introversion predicting 6-month turnover (400 hires)' },
      { value: 'r = .30 → 9%', what: 'Squared correlation = % variance accounted for (satisfaction & performance)' },
      { value: 'r = −.40 → 16%', what: 'Test B beats Test A (r = .30, 9%) despite the negative sign' },
      { value: 'Mean 3, SD 1.66', what: 'Table 2.1 worked example (scores 5,5,4,4,3,3,1,1,1); median 3, mode 1, range 4' },
      { value: 't = 2.7', what: 'Significant t-value in Table 2.2 (control M = 58.00, trained M = 69.40, n = 10)' },
      { value: '58.00 / 69.40 / 69.60', what: 'ANOVA means: control / classroom training / online training (Table 2.3)' },
      { value: 'Y = 2x + 3, x = 4 → 11', what: 'Marcia’s predicted job performance score' },
      { value: '1965', what: 'Adams’s equity theory (early 1960s) — roots of organizational justice theory' },
      { value: '1991', what: 'Barrick & Mount meta-analysis: normal personality predicts job performance' },
      { value: '1981', what: 'Schmidt & Hunter — meta-analysis pioneered in I-O psychology' },
      { value: '6 months', what: 'Duration of the interpersonal-fairness training effect on nurses’ insomnia (Greenberg, 2006)' },
      { value: '75 → 75.5 / $10,000', what: 'The practical-significance counterexample' }
    ],

    vocab: [
      { term: 'Theory', tag: 'Core', tagColor: 'sky', def: 'A description of the relationship among variables and how they influence each other in order to explain a phenomenon.' },
      { term: 'Empirical research', tag: 'Core', tagColor: 'sky', def: 'Research based on direct or indirect observations. Often done to see if a theory stands up when tested.' },
      { term: 'Deductive approach', tag: 'Design', tagColor: 'blue', def: 'A research approach that begins with a theory and sets out to test hypotheses based on this theory.' },
      { term: 'Inductive approach', tag: 'Design', tagColor: 'blue', def: 'A research approach that begins with observing a phenomenon and then developing a theory to explain it.' },
      { term: 'Independent variable (IV)', tag: 'Design', tagColor: 'blue', def: 'The variable that is manipulated by the researcher to see its effects on a given dependent variable.' },
      { term: 'Dependent variable (DV)', tag: 'Design', tagColor: 'blue', def: 'The variable that is affected by the independent variable.' },
      { term: 'Experiment', tag: 'Design', tagColor: 'blue', def: 'A type of study which includes random assignment to experimental conditions and contains at least one experimental group that receives the manipulation of the IV, and a control group that does not receive the IV and is used for comparison.' },
      { term: 'Experimental group', tag: 'Design', tagColor: 'blue', def: 'The group that receives the manipulation of the IV.' },
      { term: 'Control group', tag: 'Design', tagColor: 'blue', def: 'The group that does not receive the IV and is used for comparison.' },
      { term: 'Random assignment', tag: 'Design', tagColor: 'blue', def: 'Participants are randomly assigned to the experimental or control group. It controls confound and extraneous variables by distributing their levels evenly across conditions.' },
      { term: 'Confound variable', tag: 'Design', tagColor: 'blue', def: 'A variable that covaries with the IV and whose effects on the dependent variable are not easily disentangled from the IV.' },
      { term: 'Extraneous variables', tag: 'Design', tagColor: 'blue', def: 'Other variables that might affect the dependent variable.' },
      { term: 'Field experiments', tag: 'Design', tagColor: 'blue', def: 'When an experimental design is used in an organizational setting — usually meaning an organization allows researchers to randomly assign employees to experimental and control conditions. A "gold standard" for evaluating interventions.' },
      { term: 'Laboratory experiments', tag: 'Design', tagColor: 'blue', def: 'A type of experiment that in psychology often involves the use of undergraduate students or online samples.' },
      { term: 'Quasi-experimental design', tag: 'Design', tagColor: 'blue', def: '"Almost" experimental — close to a true experiment but missing one aspect, such as random assignment to conditions. Far more practical in field settings.' },
      { term: 'Generalizable', tag: 'Design', tagColor: 'blue', def: 'How well the results from a study using one population transfer to another (e.g., from college undergraduates to working professionals).' },
      { term: 'Correlational studies', tag: 'Design', tagColor: 'blue', def: 'Studies where there is no definite IV or DV; these studies look at the relationships among the variables.' },
      { term: 'Causality', tag: 'Design', tagColor: 'blue', def: 'Determining which variable is affecting the other variable.' },
      { term: 'Temporal ordering', tag: 'Design', tagColor: 'blue', def: 'When two variables are placed in a particular order that helps with their interpretation (predictor first, outcome second). Necessary but NOT sufficient to explain causality.' },
      { term: 'Triangulation', tag: 'Design', tagColor: 'blue', def: 'Using multiple methods to answer a research question so as to be most confident in the results.' },
      { term: 'Survey methods', tag: 'Data', tagColor: 'green', def: 'One of the most commonly used research methods, where people report their responses on a paper or online questionnaire.' },
      { term: 'Qualitative methods', tag: 'Data', tagColor: 'green', def: 'Data sources such as interviews with employees, focus groups, and observational methods that can provide rich data about a phenomenon.' },
      { term: 'Observational methods', tag: 'Data', tagColor: 'green', def: 'Observing employees while they are working; can provide insights that might not emerge from a survey.' },
      { term: 'Archival sources', tag: 'Data', tagColor: 'green', def: 'Datasets that have already been collected by others and are made available for analysis.' },
      { term: 'Big data visualization methods', tag: 'Data', tagColor: 'green', def: 'Sophisticated methods that graphically illustrate the relationships among variables to aid in data interpretation.' },
      { term: 'Mean', tag: 'Statistic', tagColor: 'violet', def: 'A statistic measuring central tendency (the average): the sum of the scores divided by the number of scores.' },
      { term: 'Median', tag: 'Statistic', tagColor: 'violet', def: 'The centermost score in a group or distribution of scores.' },
      { term: 'Mode', tag: 'Statistic', tagColor: 'violet', def: 'The most frequently occurring number in a group of scores.' },
      { term: 'Range', tag: 'Statistic', tagColor: 'violet', def: 'Measures the spread of scores; the highest score minus the lowest score.' },
      { term: 'Standard deviation', tag: 'Statistic', tagColor: 'violet', def: 'A measure of variability of scores around the mean based on the average squared deviation from the mean.' },
      { term: 'Statistical significance', tag: 'Statistic', tagColor: 'violet', def: 'Means that the results of a study are not simply due to chance. The norm among researchers is that there is less than a 5 percent chance the results occurred at random.' },
      { term: 'Practical significance', tag: 'Statistic', tagColor: 'violet', def: 'Whether a result is meaningful or important in a real-world application. NOT the same as statistical significance.' },
      { term: 'Correlation', tag: 'Statistic', tagColor: 'violet', def: 'Indicates the magnitude of the relationship between two variables as well as the direction of that relationship, on a scale of −1.0 to 1.0.' },
      { term: 'Coefficient of determination', tag: 'Statistic', tagColor: 'violet', def: 'The squared correlation — the percentage of variance in one variable accounted for by the other.' },
      { term: 'Linear regression', tag: 'Statistic', tagColor: 'violet', def: 'Determines the degree of relationship between X and Y and whether it is significant; also describes the best-fit line as an equation (Y = bx + a), allowing a predicted score on Y from a given X.' },
      { term: 'T-test', tag: 'Statistic', tagColor: 'violet', def: 'Used to determine whether the difference between TWO means is statistically significant — two groups, or the same group at two times.' },
      { term: 'Analysis of Variance (ANOVA)', tag: 'Statistic', tagColor: 'violet', def: 'Used to compare the means of MORE THAN TWO groups. Calculates an F-ratio telling you whether differences among three or more groups are statistically significant.' },
      { term: 'Meta-analysis', tag: 'Statistic', tagColor: 'violet', def: 'A statistical analysis of a group of studies so that conclusions might be drawn about a phenomenon. Pioneered in I-O by Schmidt and Hunter.' },
      { term: 'Moderator', tag: 'Statistic', tagColor: 'violet', def: 'A variable that may explain why different studies get different results (e.g., industry, lab vs. field), testable via meta-analysis.' },
      { term: 'Relative scale', tag: 'Measurement', tagColor: 'amber', def: 'Indicates a person’s level on a variable relative to other people.' },
      { term: 'Absolute scale', tag: 'Measurement', tagColor: 'amber', def: 'Indicates a person’s level on a variable in specific terms.' },
      { term: 'Nominal scale', tag: 'Measurement', tagColor: 'amber', def: 'Classifies a person into a category such as male/female.' },
      { term: 'Ordinal scale', tag: 'Measurement', tagColor: 'amber', def: 'Indicates the place someone falls on a scale relative to others; does NOT provide a meaningful difference between positions on the scale.' },
      { term: 'Interval scales', tag: 'Measurement', tagColor: 'amber', def: 'Have meaningful differences between positions, such that the difference between 1 and 2 is the same as between 2 and 3. Most psychological variables are measured this way.' },
      { term: 'Ratio scales', tag: 'Measurement', tagColor: 'amber', def: 'Assumed to have an absolute zero as well as meaningful differences between positions. Uncommon in psychological measurement (age, income are examples).' },
      { term: 'Reliability', tag: 'Core', tagColor: 'sky', def: 'Refers to the dependability of a measure, or its consistency in measurement. Scaled 0 to 1; inversely related to error variance; a NECESSARY condition for validity.' },
      { term: 'Test–retest reliability', tag: 'Reliability', tagColor: 'red', def: 'Where a test is given to a group of people twice in order to see how stable their scores are by correlating their test scores.' },
      { term: 'Parallel forms reliability', tag: 'Reliability', tagColor: 'red', def: 'Where two forms of a test are given to the same people at the same time and the scores on both measures are correlated to provide a reliability estimate.' },
      { term: 'Internal consistency estimates', tag: 'Reliability', tagColor: 'red', def: 'Measures of reliability that assume the test assesses one thing, so a reliable test will be internally consistent and its items intercorrelated.' },
      { term: 'Split-halves reliability', tag: 'Reliability', tagColor: 'red', def: 'An internal consistency estimate treating two halves of the test (e.g., odd- and even-numbered items) as two small tests. Underestimates reliability, so correct with the Spearman-Brown formula.' },
      { term: 'Spearman-Brown formula', tag: 'Reliability', tagColor: 'red', def: 'The correction used to slightly increase a split-halves reliability estimate, because a shorter test always has lower reliability than a longer one.' },
      { term: 'Coefficient alpha', tag: 'Reliability', tagColor: 'red', def: 'An index of the intercorrelation among scale items, or the average of all possible split-halves reliability estimates. Inappropriate when a test measures more than one construct.' },
      { term: 'Interrater reliability', tag: 'Reliability', tagColor: 'red', def: 'Where ratings of one rater are correlated with the ratings of another rater. Raters should be trained and structured methods used.' },
      { term: 'Validity', tag: 'Core', tagColor: 'sky', def: 'The extent to which the measure is actually measuring what it is supposed to measure.' },
      { term: 'Content validity', tag: 'Validity', tagColor: 'green', def: 'A process demonstrating a measure was developed in a way that sampled the domain of interest; involves documenting that the test actually samples the desired domain.' },
      { term: 'Criterion-related validity', tag: 'Validity', tagColor: 'green', def: 'The empirical demonstration that the test predicts a criterion or outcome you care about, commonly by correlating test and criterion.' },
      { term: 'Validity coefficient', tag: 'Validity', tagColor: 'green', def: 'The coefficient calculated between the test and the criterion, commonly a correlation between the two variables.' },
      { term: 'Construct validity', tag: 'Validity', tagColor: 'green', def: 'The accumulation of evidence that the measure really is measuring what it is supposed to measure. Subsumes the other types.' },
      { term: 'Convergent validity', tag: 'Validity', tagColor: 'green', def: 'The degree to which a measure correlates with measures it SHOULD have a relationship with. You want this HIGH.' },
      { term: 'Discriminant (divergent) validity', tag: 'Validity', tagColor: 'green', def: 'The degree to which the measure does NOT show a relationship with things it should not relate to. You want this coefficient LOW.' },
      { term: 'Concurrent validity study', tag: 'Validity', tagColor: 'green', def: 'A criterion-related validity design where the data are collected at ONE time point (detailed in Ch. 7).' },
      { term: 'Predictive validity study', tag: 'Validity', tagColor: 'green', def: 'A criterion-related validity design where the data are collected at TWO time points (detailed in Ch. 7).' },
      { term: 'Institutional review board (IRB)', tag: 'Ethics', tagColor: 'red', def: 'A board or group of people who govern the research process at an institution.' },
      { term: 'Informed consent', tag: 'Ethics', tagColor: 'red', def: 'Providing participants with information about what the study will require BEFORE they agree to participate.' },
      { term: 'Anonymity', tag: 'Ethics', tagColor: 'red', def: 'Study design such that it is not possible to identify who participated or what their responses were.' },
      { term: 'Confidentiality', tag: 'Ethics', tagColor: 'red', def: 'Rather than removing all identifying information, the researcher keeps participants’ responses confidential.' },
      { term: 'Translation and back-translation', tag: 'Global', tagColor: 'amber', def: 'Brislin’s (1970) procedure: translate an item into the target language, have a DIFFERENT person back-translate it, then compare with the original to confirm the same semantic meaning.' },
      { term: 'Open science', tag: 'Current', tagColor: 'amber', def: 'Ensuring that research practices used in a study are transparent and fully reported and that findings can be reproduced by other scientists.' }
    ],

    laws: [
      { name: 'Good research is based on good theory', desc: 'Theory tells you where to begin so you need not start from scratch — and results should be interpreted to clarify the theory for future researchers and applications.' },
      { name: 'Theory ↔ Research ↔ Practice', desc: 'Theory informs research, research informs theory, both inform practice, and practice sets the agenda for future research (Figure 2.1). Explains the standard journal-article structure.' },
      { name: 'No IV → no DV', desc: 'If a variable cannot be manipulated there is technically no independent variable, and without an IV there is technically no DV either. Use antecedent/outcome or predictor/criterion instead.' },
      { name: 'All three conditions for a true experiment', desc: 'Experimental group + control group + random assignment. Missing any one means it is not a true experiment (a quasi-experiment typically lacks random assignment).' },
      { name: 'Random assignment controls confounds', desc: 'It distributes levels of confound and extraneous variables evenly across conditions, so their effects cannot be mistaken for the effect of the IV.' },
      { name: 'Correlation does not establish causation', desc: 'A correlation tells you variables coincide. There is no way to tell if one causes the other, or if some third variable affects both.' },
      { name: 'Square the correlation to compare predictors', desc: 'r = −.40 (16% of variance) beats r = .30 (9% of variance). Sign gives direction; absolute magnitude gives strength.' },
      { name: 'Reliability–error inverse rule', desc: 'The more unreliable a measure, the higher its measurement error / error variance. Reliability runs 0 (pure error) to 1 (no error).' },
      { name: 'Reliability is necessary but not sufficient for validity', desc: 'An unreliable test cannot be valid. But a perfectly reliable test can still be invalid — the scale that always reads 20 pounds.' },
      { name: 'Construct validity subsumes the rest', desc: 'There are not three "types" of validity but many types of EVIDENCE. Construct validity overarches content and criterion-related evidence because it accumulates evidence across studies (Landy, 1986; Figure 2.8).' },
      { name: 'Statistical ≠ practical significance', desc: 'A result can be statistically significant (< 5% chance of being random) and still be meaningless in application — 75 to 75.5 points at $10,000 per employee.' },
      { name: 'One study rarely proves anything', desc: 'Small samples and limited populations make generalization uncertain; in most fields, multiple studies are required to draw definite conclusions.' }
    ],

    methods: [
      { name: 'ECR', expand: 'Experimental group, Control group, Random assignment', desc: 'The three conditions for a true experiment (Figure 2.3). All three must be present.' },
      { name: 'Which statistic?', expand: 'Relate → correlation; Predict → regression; 2 means → t-test; 3+ means → ANOVA; many studies → meta-analysis', desc: 'The decision rule for Figure 2.4 scenario questions.' },
      { name: 'Y = bx + a', expand: 'Y predicted, b slope, x predictor score, a intercept', desc: 'The regression equation. With Y = 2x + 3 and x = 4, Y = 11.' },
      { name: 'SD in four steps', expand: 'Deviate → square → ÷ (n−1) → √', desc: 'Subtract the mean from each score, square, sum (22), divide by n−1 (8) = 2.75, square root = 1.66.' },
      { name: 'NOIR', expand: 'Nominal, Ordinal, Interval, Ratio', desc: 'The four-point measurement continuum in increasing order of information. Interval is the workhorse for psychological variables.' },
      { name: 'Five reliability estimates', expand: 'Test–retest, Parallel forms, Split-halves, Coefficient alpha, Interrater', desc: 'Table 2.4. Only test–retest requires two occasions; parallel forms, split-halves, and alpha all use a single administration.' },
      { name: 'Over vs. under', expand: 'Too close = OVERestimate; too far = UNDERestimate', desc: 'The test–retest timing trap. Too close, people remember answers; too far, people genuinely change (maturation).' },
      { name: 'Convergent HIGH, discriminant LOW', expand: 'Correlate with what it should; not with what it shouldn’t', desc: 'The two construct-validity coefficients and the direction you want each to run.' },
      { name: 'Content = documentation, Criterion = correlation, Construct = accumulation', expand: '', desc: 'A one-line way to keep the three validity evidence types distinct.' }
    ]
  },

  // ==================================================================== QUESTIONS
  questions: [
    {
      q: 'A "theory" is defined in Chapter 2 as:',
      type: 'mcq',
      choices: [
        'An untested guess about how two variables might be related',
        'A description of the relationship among variables and how they influence each other in order to explain a phenomenon',
        'A statistical model fitted to archival data',
        'A summary of findings from a group of studies'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'This is the glossary definition. Option D describes a meta-analysis. Theory guides where to begin studying a phenomenon so researchers need not start from scratch.'
    },
    {
      q: 'Empirical research is defined as research that is:',
      type: 'mcq',
      choices: [
        'Conducted exclusively in laboratory settings',
        'Based on direct or indirect observations, often done to see if a theory stands up when tested',
        'Funded by an outside organization',
        'Published only in peer-reviewed academic journals'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'The glossary definition emphasizes observation — direct or indirect — and the theory-testing function. Setting and funding source are irrelevant to the definition.'
    },
    {
      q: 'Organizational justice theory grew out of which earlier theory, and who developed it?',
      type: 'mcq',
      choices: [
        'Expectancy theory, developed by Vroom',
        'Equity theory, developed in the early 1960s by Adams',
        'Goal-setting theory, developed by Locke and Latham',
        'Two-factor theory, developed by Herzberg'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Adams (1965) developed equity theory in the early 1960s, focused on the perceived fairness of outcomes received relative to others — initially applied mostly to pay.'
    },
    {
      q: 'The evolution of organizational justice theory added which two concerns beyond the fairness of outcomes?',
      type: 'mcq',
      choices: [
        'The fairness of processes and the fairness of interpersonal treatment',
        'The size of the reward and the timing of the reward',
        'Supervisor personality and organizational size',
        'Job satisfaction and organizational commitment'
      ],
      correct: 0,
      difficulty: 'M',
      explanation: 'Researchers first found that the process used to reach an outcome mattered, then that people also cared about being treated with respect. All three — outcome, process, interpersonal treatment — matter.'
    },
    {
      q: 'Which quotation does the textbook attribute to Kurt Lewin?',
      type: 'mcq',
      choices: [
        '"The best way to predict the future is to invent it."',
        '"There is nothing so practical as a good theory."',
        '"Correlation is not causation."',
        '"Not everything that counts can be counted."'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'The line is used to illustrate the second lesson of the organizational justice story: a good theory explains a phenomenon across a range of very different contexts, which makes it extremely useful.'
    },
    {
      q: 'Greenberg (2006) found that nurses who experienced a salary reduction showed increased insomnia, but that:',
      type: 'mcq',
      choices: [
        'The effect disappeared within two weeks regardless of supervisor behavior',
        'Nurses whose supervisors were trained to be more interpersonally fair experienced less insomnia, with effects lasting six months',
        'Only nurses with high neuroticism showed sleep effects',
        'Restoring the salary fully eliminated the insomnia within one month'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'This classic field study shows that better interpersonal treatment from supervisors mitigated some of the negative sleep effects caused by the unfair outcome, and the effect persisted for six months after the training.'
    },
    {
      q: 'A researcher analyzes a large employee dataset with no guiding theory, remaining open to many possible explanations of job satisfaction. This is best described as:',
      type: 'mcq',
      choices: [
        'A deductive approach',
        'An inductive approach',
        'A quasi-experimental approach',
        'A meta-analytic approach'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Inductive approaches begin with observing a phenomenon and then developing a theory to explain it. The chapter uses exactly this "big data explains employee satisfaction" example.'
    },
    {
      q: 'Which is the correct definition of an independent variable?',
      type: 'mcq',
      choices: [
        'The variable that is affected by another variable',
        'The variable that is manipulated by the researcher to see its effects on a given dependent variable',
        'Any variable measured before the outcome',
        'A variable that covaries with the outcome but is not of interest'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'Option A defines the dependent variable; option D describes a confound. The IV is the manipulated variable — which is why studies of unmanipulable traits technically have no IV.'
    },
    {
      q: 'A researcher examines whether employee personality predicts job performance. According to the chapter, what should personality and job performance be called?',
      type: 'mcq',
      choices: [
        'Independent variable and dependent variable',
        'Confound and extraneous variable',
        'Predictor and criterion variable',
        'Moderator and mediator'
      ],
      correct: 2,
      difficulty: 'H',
      explanation: 'Personality cannot be manipulated, so there is no IV — and without an IV there is no DV. In personnel selection research the terms are predictor and criterion variable. (For job satisfaction predicting performance, the terms would be antecedent and outcome.)'
    },
    {
      q: 'Figure 2.3 states that there is a true experiment ONLY when which conditions are met?',
      type: 'mcq',
      choices: [
        'A large sample, a control group, and statistical significance',
        'An experimental group receiving a manipulation, a control group not receiving it, and random assignment to groups',
        'Random sampling, informed consent, and IRB approval',
        'A field setting, a pretest, and a posttest'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'All three conditions must be present. Missing random assignment typically makes a study quasi-experimental rather than a true experiment.'
    },
    {
      q: 'In a goal-setting training study, the experimental group is all men and the control group is all women. Gender in this study is best described as:',
      type: 'mcq',
      choices: [
        'A moderator variable',
        'A confound variable',
        'A dependent variable',
        'A criterion variable'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'A confound variable covaries with the IV and its effects on the DV cannot easily be disentangled from the IV. Here the researcher could not separate goal-setting effects from gender effects. Random assignment prevents this.'
    },
    {
      q: 'Random assignment works by:',
      type: 'mcq',
      choices: [
        'Guaranteeing that the sample represents the population',
        'Eliminating measurement error from the dependent variable',
        'Assuring that levels of confound and extraneous variables are evenly distributed across conditions',
        'Increasing the statistical power of the t-test'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'The chapter’s example: randomly assigning participants means workers with more and less job tenure end up evenly spread across groups, so job tenure cannot act as a confound. Random assignment is about group equivalence, not sample representativeness.'
    },
    {
      q: 'Which is NOT one of the three reasons the chapter gives for why true field experiments are uncommon?',
      type: 'mcq',
      choices: [
        'The researcher must find an organization that fits the question and trusts them enough to collaborate',
        'The organization must be willing and able to assign workers to different conditions',
        'Certain manipulations might be unethical or illegal in organizational contexts',
        'Field experiments cannot produce statistically significant results with organizational samples'
      ],
      correct: 3,
      difficulty: 'H',
      explanation: 'The chapter lists exactly three barriers: difficulty/trust, willingness to assign conditions (fairness and morale concerns), and ethical/legal limits. It never claims field experiments cannot yield significant results — in fact it calls them a gold standard.'
    },
    {
      q: 'The chief limitation of laboratory experiments using undergraduates in I-O research is that:',
      type: 'mcq',
      choices: [
        'They cannot include a control group',
        'Results may not be generalizable to actual work settings',
        'They require IRB approval that field studies do not',
        'They cannot use random assignment'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Generalizability is the concern: students may be younger, may be unemployed, and are reacting to an artificial situation rather than a work situation. Lab experiments actually offer EASIER random assignment and greater experimental control.'
    },
    {
      q: 'Employees in the Northeastern division of a company receive a health promotion intervention while Midwest employees serve as a comparison. This design is:',
      type: 'mcq',
      choices: [
        'A true field experiment',
        'A quasi-experimental design',
        'A correlational study',
        'A meta-analysis'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'It is close to a true experiment but lacks random assignment to conditions — the defining feature of a quasi-experiment. The chapter notes training was one of the first I-O areas to use these designs (Ch. 8).'
    },
    {
      q: 'The primary advantage of correlational studies in I-O research is that:',
      type: 'mcq',
      choices: [
        'They establish causal direction more confidently than experiments',
        'They can be done in organizations using samples of actual working people, with practical and relatively inexpensive data collection',
        'They eliminate the problem of inflated relationships',
        'They require smaller samples than experiments'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Correlational designs allow research on real employees using inexpensive methods like surveys, and they permit study of stable characteristics (personality, adaptability) that cannot be manipulated. Causality and inflation are their WEAKNESSES.'
    },
    {
      q: 'Why does the chapter say determining causal direction is harder for job satisfaction and job performance than for neuroticism and job satisfaction?',
      type: 'mcq',
      choices: [
        'Satisfaction and performance are both fairly dynamic variables that can change a lot within a person, even day to day',
        'Performance can only be measured by supervisors, introducing rater bias',
        'Neuroticism is measured on a ratio scale while satisfaction is nominal',
        'Job satisfaction has lower reliability than personality measures'
      ],
      correct: 0,
      difficulty: 'H',
      explanation: 'Neuroticism is a fairly stable trait that remains stable in adulthood, so it likely affects satisfaction rather than the reverse. But both satisfaction and performance are dynamic, and performing well produces outcomes that could raise satisfaction.'
    },
    {
      q: 'The problem of "inflated relationships" arises particularly when:',
      type: 'mcq',
      choices: [
        'Sample sizes exceed several thousand participants',
        'A single survey is given on a single occasion, so mood or day-specific factors affect all variables at once',
        'Data are collected from multiple sources such as supervisors and records',
        'The correlation coefficient is negative'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'The chapter’s example: an employee having a good day gives fewer neurotic responses AND reports higher satisfaction, distorting a relationship that should be based on a stable trait. Using multiple sources is one of the FIXES, not the cause.'
    },
    {
      q: 'Regarding temporal ordering, the chapter states that it is:',
      type: 'mcq',
      choices: [
        'Sufficient by itself to establish causality',
        'Necessary to show causality but NOT sufficient — only a first step',
        'Irrelevant in correlational research',
        'Only applicable in laboratory experiments'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'The glossary explicitly notes that temporal ordering alone is not sufficient to explain causality. Placing the predictor first and the outcome second helps interpretation, but is only one requirement.'
    },
    {
      q: 'The chapter’s term for using multiple research methods to increase confidence in results is:',
      type: 'mcq',
      choices: ['Replication', 'Triangulation', 'Convergence', 'Meta-analysis'],
      correct: 1,
      difficulty: 'M',
      explanation: 'Triangulation. The chapter argues that each design has strengths and weaknesses, some combination is probably best, and the right choice depends on the phenomenon under study.'
    },
    {
      q: 'Which data collection method does the chapter identify as "perhaps the most frequently used" in I-O research?',
      type: 'mcq',
      choices: ['Observational methods', 'Focus groups', 'Survey methods', 'Archival sources'],
      correct: 2,
      difficulty: 'E',
      explanation: 'Surveys — paper or online — allow large amounts of data from many participants relatively easily, enabling a wide range of statistical techniques. Their weakness is failing to capture rich data the researcher did not anticipate.'
    },
    {
      q: 'A researcher wants to study what job applicants are thinking as they complete an online application, but almost no prior research exists. Based on the chapter, the best approach is to:',
      type: 'mcq',
      choices: [
        'Write a survey based on the researcher’s best guesses about relevant items',
        'Begin with interviews or "think aloud" protocols, because qualitative methods can build theory from the ground up when a topic has never been examined',
        'Use an archival dataset from a government survey project',
        'Run a laboratory experiment with random assignment'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'The chapter uses precisely this example: with little existing research, the researcher would only be guessing at survey items. Qualitative work provides insights not measurable by other means and is useful for building new theory (Murphy et al., 2017).'
    },
    {
      q: 'The main drawback of archival datasets is that:',
      type: 'mcq',
      choices: [
        'They are always too small to permit statistical analysis',
        'They were rarely collected with an individual researcher’s research questions in mind, so they may lack needed variables',
        'They cannot be shared across countries',
        'They violate informed consent requirements'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Archival datasets can be very large and sample entire populations well — that is their strength. The problem is fit: they may simply not contain the variables a given project needs.'
    },
    {
      q: 'For the scores 5, 5, 4, 4, 3, 3, 1, 1, 1, what are the mean, median, and mode respectively?',
      type: 'mcq',
      choices: ['3, 3, 1', '3, 1, 3', '27, 3, 1', '3, 3, 5'],
      correct: 0,
      difficulty: 'M',
      explanation: 'Mean = 27 ÷ 9 = 3. Median = 3 (middle of nine ordered scores). Mode = 1 (appears three times). The range is 4 and the standard deviation is 1.66.'
    },
    {
      q: 'In Table 2.1, the squared deviations total 22 for nine scores. How is the standard deviation obtained?',
      type: 'mcq',
      choices: [
        'Divide 22 by 9, then take the square root',
        'Divide 22 by 8 (n − 1) to get 2.75, then take the square root to get 1.66',
        'Take the square root of 22, then divide by 9',
        'Divide 22 by the mean of 3'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'The chapter walks through it explicitly: total the final column (22), divide by n − 1 (9 − 1 = 8) to get 2.75, and take the square root to get 1.66. The n − 1 denominator is the detail most often missed.'
    },
    {
      q: 'Statistical significance, as the chapter defines it, means:',
      type: 'mcq',
      choices: [
        'The effect is large enough to matter in practice',
        'The results are not simply due to chance, with the norm being less than a 5 percent chance of a random result',
        'The correlation exceeds .70',
        'The study has been replicated at least twice'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'Statistical significance concerns chance, not importance. Option A describes practical significance, which the chapter is careful to distinguish.'
    },
    {
      q: 'A training program produces a statistically significant improvement in job knowledge from 75/100 to 75.5/100 at a cost of $10,000 per employee. This scenario illustrates:',
      type: 'mcq',
      choices: [
        'Low reliability of the knowledge test',
        'A confound between training and cost',
        'That statistical significance does not equal practical significance',
        'Criterion contamination'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'This is the chapter’s own example. Practical significance is whether a result is meaningful or important in a real-world application — and a half-point gain for $10,000 per person is not.'
    },
    {
      q: 'A company wants to know whether job satisfaction differs across its 10 offices. Which statistic is appropriate?',
      type: 'mcq',
      choices: ['Correlation', 't-test', 'ANOVA', 'Meta-analysis'],
      correct: 2,
      difficulty: 'M',
      explanation: 'ANOVA compares the means of more than two groups, calculating an F-ratio. A t-test handles exactly two means; correlation handles relationships between variables; meta-analysis summarizes a body of studies.'
    },
    {
      q: 'A company wants to know whether satisfaction differs between its New York and New Jersey offices. Which statistic is appropriate?',
      type: 'mcq',
      choices: ['ANOVA', 't-test', 'Linear regression', 'Coefficient alpha'],
      correct: 1,
      difficulty: 'E',
      explanation: 'Two groups, two means — a t-test. The same statistic would apply to comparing one group before and after an intervention, though with a different formula.'
    },
    {
      q: 'Which statistic allows you to calculate a PREDICTED score on Y from a given X?',
      type: 'mcq',
      choices: ['Correlation', 'Linear regression', 't-test', 'ANOVA'],
      correct: 1,
      difficulty: 'E',
      explanation: 'This is exactly what distinguishes regression from correlation. Correlation tells you the degree and direction of relationship; regression adds a best-fit line expressed as an equation that yields predicted scores.'
    },
    {
      q: 'If a correlation between job satisfaction and job performance is r = .30, what percentage of variance in performance is accounted for by satisfaction?',
      type: 'mcq',
      choices: ['30 percent', '9 percent', '3 percent', '60 percent'],
      correct: 1,
      difficulty: 'M',
      explanation: 'Square the correlation: .30² = .09, or 9 percent. This squared value is sometimes called the coefficient of determination. Note that causality still cannot be assumed.'
    },
    {
      q: 'Test A correlates .30 with job performance; Test B correlates −.40. Which is the better predictor?',
      type: 'mcq',
      choices: [
        'Test A, because positive correlations are stronger than negative ones',
        'Test B, because it accounts for 16 percent of the variance versus Test A’s 9 percent',
        'They are equivalent, because the absolute difference is only .10',
        'Neither, because a negative correlation cannot be used for prediction'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'This is the textbook’s own item. The sign gives direction, not strength. Squaring gives .16 versus .09, so Test B is the better predictor. Values closer to −1.00 OR 1.00 indicate a stronger relationship.'
    },
    {
      q: 'Given the regression equation Y = 2x + 3, what is the predicted job performance score for an employee whose job satisfaction is 4?',
      type: 'mcq',
      choices: ['8', '9', '11', '14'],
      correct: 2,
      difficulty: 'M',
      explanation: 'Y = 2(4) + 3 = 11. This is Marcia’s example from the chapter. Remember the caveat: 11 is a predicted score, a best guess with a standard deviation around it — her actual performance could differ.'
    },
    {
      q: 'In Y = bx + a, what does "a" represent?',
      type: 'mcq',
      choices: [
        'The slope of the line',
        'The predicted score on Y',
        'The y-intercept, or constant',
        'The score on the predictor'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'Y is the predicted score, b is the relative weight of the predictor (the slope), x is the predictor score, and a is the y-intercept or constant.'
    },
    {
      q: 'In the ANOVA example (control M = 58.00, classroom M = 69.40, online M = 69.60), the researcher found a significant F. What did the follow-up t-tests reveal?',
      type: 'mcq',
      choices: [
        'Classroom training was significantly better than online training',
        'Both trained groups beat the control, but the two trained groups did not differ significantly',
        'Only online training differed significantly from control',
        'No pairwise differences reached significance'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'Both types of training were more effective than no training, and they were equally effective as each other. The chapter uses this to illustrate that a significant ANOVA requires follow-up t-tests to locate WHERE the differences lie.'
    },
    {
      q: 'Meta-analysis was pioneered in I-O psychology by:',
      type: 'mcq',
      choices: [
        'Barrick and Mount',
        'Frank Schmidt and John Hunter',
        'Roethlisberger and Dickson',
        'Borman and Motowidlo'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Schmidt and Hunter (e.g., 1981). Barrick and Mount (1991) conducted the famous personality meta-analysis; Borman and Motowidlo are associated with contextual performance (Ch. 4).'
    },
    {
      q: 'One reason meta-analysis produces more precise estimates than individual studies is that it:',
      type: 'mcq',
      choices: [
        'Excludes studies with non-significant findings',
        'Takes sample size into account, since some studies fail to show strong relationships simply because their samples were too small',
        'Uses only laboratory studies with strong experimental control',
        'Converts all findings to a nominal scale'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'Accounting for sample size makes sense of inconsistent findings. Meta-analysis also lets researchers test moderators — variables such as industry, or lab versus field setting, that may explain why studies differ.'
    },
    {
      q: 'Barrick and Mount’s (1991) meta-analysis changed HR practice by showing that:',
      type: 'mcq',
      choices: [
        'Cognitive ability tests have adverse impact against some ethnic groups',
        'Tests of NORMAL adult personality can predict job performance, where earlier research had focused on abnormal personality',
        'Structured interviews outperform unstructured interviews',
        'Work samples are the single most valid selection procedure'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'Before this landmark meta-analysis, I-O psychologists considered personality tests low-value for hiring because research had focused on abnormal personality. Today personality testing is part of hiring for many jobs (Ch. 6).'
    },
    {
      q: 'A supervisor tells Chris only that he is doing worse than Maya but better than Jaime. This is an example of:',
      type: 'mcq',
      choices: [
        'An absolute scale',
        'A relative scale',
        'An interval scale',
        'A ratio scale'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'A relative scale indicates a person’s level only relative to other people. It gives Chris little useful feedback — he may not even know Jaime and Maya. A 4-out-of-5 rating would be an absolute scale.'
    },
    {
      q: 'Which measurement scale is characterized by having an absolute zero?',
      type: 'mcq',
      choices: ['Nominal', 'Ordinal', 'Interval', 'Ratio'],
      correct: 3,
      difficulty: 'M',
      explanation: 'Ratio scales assume an absolute zero plus meaningful differences between positions. The chapter notes these are uncommon in psychological measurement — no one has "zero" conscientiousness — but age and income qualify.'
    },
    {
      q: 'Most psychological variables are measured on — or assumed to be measured on — which type of scale?',
      type: 'mcq',
      choices: ['Nominal', 'Ordinal', 'Interval', 'Ratio'],
      correct: 2,
      difficulty: 'M',
      explanation: 'Interval scales have meaningful equal differences between adjacent points, and the chapter notes these are the scales best analyzed with t-tests, correlations, ANOVAs, and regressions.'
    },
    {
      q: 'Reliability is best defined as:',
      type: 'mcq',
      choices: [
        'The extent to which a measure assesses what it is supposed to assess',
        'The dependability of a measure, or its consistency in measurement',
        'The degree to which a measure predicts an important outcome',
        'The proportion of variance a test shares with a criterion'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'Option A is validity; option C is criterion-related validity. Reliability concerns consistency — including consistency in ordering individuals within a group.'
    },
    {
      q: 'The relationship between reliability and error variance is:',
      type: 'mcq',
      choices: ['Direct — as one rises, so does the other', 'Inverse — the more unreliable a measure, the higher its error variance', 'Unrelated', 'Curvilinear'],
      correct: 1,
      difficulty: 'E',
      explanation: 'Figure 2.7 shows reliability rising as error variance falls. Reliability is scaled 0 (pure measurement error) to 1 (no measurement error), and more reliability is always better.'
    },
    {
      q: 'A researcher administers a test twice, one week apart, and correlates the scores. This is:',
      type: 'mcq',
      choices: ['Parallel forms reliability', 'Split-halves reliability', 'Test–retest reliability', 'Interrater reliability'],
      correct: 2,
      difficulty: 'E',
      explanation: 'Test–retest gives a test to a group twice to see how stable their scores are, correlating the two administrations. In Table 2.5, 15 employees tested one week apart yielded r = .95.'
    },
    {
      q: 'If two test administrations are scheduled TOO CLOSE together, the resulting test–retest reliability estimate will likely be:',
      type: 'mcq',
      choices: [
        'An overestimate, because participants remember what they put the first time',
        'An underestimate, because participants become fatigued',
        'Unaffected, because reliability is a property of the test',
        'An underestimate, because of maturation effects'
      ],
      correct: 0,
      difficulty: 'H',
      explanation: 'Memory inflates the correlation between administrations. TOO FAR apart produces the opposite problem — real change (maturation effects), as in the 3rd-grade reading example, produces an UNDERESTIMATE.'
    },
    {
      q: 'Which reliability estimate involves giving two versions of a test to the same people on a single occasion?',
      type: 'mcq',
      choices: ['Test–retest', 'Parallel forms', 'Coefficient alpha', 'Interrater'],
      correct: 1,
      difficulty: 'M',
      explanation: 'Parallel forms has participants take Form A and Form B on the same day and correlates the scores. Drawbacks: double the development work, never truly parallel (so it may underestimate), and participant fatigue across two versions.'
    },
    {
      q: 'The Spearman-Brown formula is used to:',
      type: 'mcq',
      choices: [
        'Convert a correlation into a percentage of variance',
        'Correct (increase) a split-halves reliability estimate, because correlating two halves computes the reliability of a test only half as long',
        'Adjust coefficient alpha for multidimensional tests',
        'Estimate interrater agreement when there are more than two raters'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'A short test always has lower reliability than a longer one. Splitting a 100-item test in half computes the reliability of a 50-item test, so the raw split-halves correlation is a slight UNDERestimate needing upward correction.'
    },
    {
      q: 'Coefficient alpha is best described as:',
      type: 'mcq',
      choices: [
        'The correlation between two raters’ scores',
        'An index of the intercorrelation among scale items, or the average of all possible split-halves',
        'The correlation between a test and a criterion',
        'The proportion of true score variance in a test–retest design'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Alpha is an internal consistency estimate computed from a single administration. It is very commonly reported because most social-science statistical software calculates it.'
    },
    {
      q: 'Coefficient alpha would be INAPPROPRIATE for which of the following measures?',
      type: 'mcq',
      choices: [
        'A 20-item measure of conscientiousness',
        'A 10-item measure of job satisfaction',
        'A "scholastic achievement" test measuring both mathematical ability and verbal ability',
        'A 15-item measure of organizational commitment'
      ],
      correct: 2,
      difficulty: 'H',
      explanation: 'Alpha assumes the test measures only ONE dimension. Computing it for a test that actually measures two subdimensions is inappropriate. Cortina (1993) is cited on the uses and misuses of alpha.'
    },
    {
      q: 'Two senior engineers interview 20 applicants and their ratings correlate .73. This value is the:',
      type: 'mcq',
      choices: ['Validity coefficient', 'Coefficient alpha', 'Interrater reliability estimate', 'Coefficient of determination'],
      correct: 2,
      difficulty: 'M',
      explanation: 'Interrater reliability correlates one rater’s scores with another’s. The chapter notes raters should be trained and structured methods used to enhance it — a direct link to structured interviews in Chapter 6.'
    },
    {
      q: 'Regarding "how much reliability is enough," the chapter states that:',
      type: 'mcq',
      choices: [
        'A universal minimum of .90 applies to all psychological measures',
        'There is no definite answer; some cite .70 as a minimum for I-O research, but reliability for hiring measures should be higher given the importance of the decisions',
        'Reliability below 1.0 is unacceptable for any applied use',
        'Reliability requirements apply only to cognitive tests'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'Nunnally (1978) is cited for the .70 figure and Gatewood et al. (2018) for the higher standard in hiring, with Lance et al. (2006) noting the controversy. More reliability is always better, since it means less error variance.'
    },
    {
      q: 'A bathroom scale consistently reads 20 pounds every time an adult steps on it. This scale is:',
      type: 'mcq',
      choices: [
        'Neither reliable nor valid',
        'Reliable but not valid',
        'Valid but not reliable',
        'Both reliable and valid'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'It is consistent, so it is reliable — but it is not measuring true weight, so it is not valid. This is the chapter’s central illustration that reliability tells you a measure is measuring SOMETHING consistently, while validity tells you WHAT.'
    },
    {
      q: 'Which statement about the reliability–validity relationship is correct?',
      type: 'mcq',
      choices: [
        'Validity is a necessary condition for reliability',
        'Reliability is a necessary condition for validity — if a test is not reliable, it cannot be valid',
        'Reliability and validity are independent properties',
        'A test with reliability of .70 is automatically valid'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'The chapter states this explicitly: a test that is all error variance could not possibly be measuring a specific construct. But the relationship is one-directional — reliability is necessary, not sufficient.'
    },
    {
      q: 'Developing a college algebra test by consulting algebra textbooks and college algebra instructors is an example of establishing:',
      type: 'mcq',
      choices: ['Criterion-related validity', 'Content validity', 'Discriminant validity', 'Interrater reliability'],
      correct: 1,
      difficulty: 'M',
      explanation: 'Content validity is a PROCESS demonstrating the measure sampled the domain of interest. It involves relatively little statistical analysis but heavy documentation that the test actually samples the desired domain.'
    },
    {
      q: 'An introversion measure given to 400 new sales hires correlates .32 with turnover six months later. The .32 is called the:',
      type: 'mcq',
      choices: ['Reliability coefficient', 'Coefficient of determination', 'Validity coefficient', 'Coefficient alpha'],
      correct: 2,
      difficulty: 'M',
      explanation: 'The validity coefficient is the coefficient calculated between the test and the criterion, commonly a correlation. This example demonstrates criterion-related validity.'
    },
    {
      q: 'A criterion-related validity study in which data are collected at TWO time points is called a:',
      type: 'mcq',
      choices: ['Concurrent validity study', 'Predictive validity study', 'Convergent validity study', 'Construct validity study'],
      correct: 1,
      difficulty: 'H',
      explanation: 'Predictive designs collect predictor and criterion data at two time points; concurrent designs collect them at one. Both are detailed further in Chapter 7.'
    },
    {
      q: 'An algebra test correlates strongly with other algebra measures. This is evidence of:',
      type: 'mcq',
      choices: ['Discriminant validity', 'Convergent validity', 'Content validity', 'Face validity'],
      correct: 1,
      difficulty: 'M',
      explanation: 'Convergent validity is the degree to which a measure correlates with measures it SHOULD have a relationship with. It would also be expected to correlate, to a lesser extent, with geometry and trigonometry measures.'
    },
    {
      q: 'You want a discriminant validity coefficient to be:',
      type: 'mcq',
      choices: [
        'High, showing the measure relates to many constructs',
        'Low, showing the measure does not relate to things it should not relate to',
        'Exactly zero, or the measure is invalid',
        'Equal to the convergent validity coefficient'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'The chapter says explicitly that you want a discriminant validity coefficient to be LOW. If an algebra test correlated strongly with verbal fluency, that would set off alarms that it contains a strong verbal component.'
    },
    {
      q: 'According to Figure 2.8 and Landy (1986), the relationship among the validity types is best described as:',
      type: 'mcq',
      choices: [
        'Three entirely separate types that must each be demonstrated independently',
        'Construct validity subsumes content and criterion-related evidence; validity is really one concept with many types of evidence',
        'Content validity subsumes construct and criterion-related evidence',
        'Criterion-related validity is the only legally acceptable form'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'The chapter presents three types only "because this is a straightforward way to explain the validation process to people who are not experts in psychometrics," then stresses that construct validity overarches the others through the accumulation of evidence across studies.'
    },
    {
      q: 'Which is NOT among the basic research ethics requirements described in the chapter?',
      type: 'mcq',
      choices: [
        'Informed consent before participants agree to participate',
        'Participation must be completely voluntary, with no negative effects for declining',
        'Anonymity or confidentiality of participant responses',
        'Compensation of all participants at prevailing local wage rates'
      ],
      correct: 3,
      difficulty: 'M',
      explanation: 'The chapter names voluntary participation and informed consent as the basic principles, along with anonymity or confidentiality. Pay for online gig workers is raised as a separate current-issues concern (Semuels, 2018), not as a stated ethics requirement.'
    },
    {
      q: 'The difference between anonymity and confidentiality in research is that:',
      type: 'mcq',
      choices: [
        'Anonymity means it is not possible to identify participants or their responses; confidentiality means the researcher keeps identifiable responses private',
        'Anonymity applies only to online studies',
        'Confidentiality is required by IRBs while anonymity is optional',
        'They are synonyms in research ethics'
      ],
      correct: 0,
      difficulty: 'H',
      explanation: 'With anonymity, identifying information is removed entirely. With confidentiality, identifying information may exist but the researcher is obligated to keep responses private.'
    },
    {
      q: 'An institutional review board (IRB) is:',
      type: 'mcq',
      choices: [
        'A federal agency that licenses I-O psychologists',
        'A board or group of people who govern the research process at an institution',
        'The peer-review panel for a journal',
        'A SIOP committee that approves selection procedures'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'Most universities have an IRB. The chapter notes that some organizations, such as Microsoft, have created their own internal procedures to ensure research is done appropriately (Goel, 2014).'
    },
    {
      q: 'Which professional codes does the chapter direct I-O psychologists to for ethical guidance?',
      type: 'mcq',
      choices: [
        'The APA ethical code (2017) and the Academy of Management code of ethics (2010)',
        'The Uniform Guidelines (1978) and the ADA (1990)',
        'The EAWOP charter and the EuroPsy standard',
        'The SIOP Principles (2018) only'
      ],
      correct: 0,
      difficulty: 'M',
      explanation: 'The APA code includes principles such as justice and integrity and addresses balancing organizational demands with ethics, working within competence, avoiding harm, and conflicts of interest. The AoM code covers research participants, students, employees, managers, and community members.'
    },
    {
      q: 'In translation and back-translation (Brislin, 1970), the back-translation should be performed by:',
      type: 'mcq',
      choices: [
        'The same person who did the original translation',
        'A different person, so the back-translated item can be compared with the original',
        'Machine translation software to remove human bias',
        'A native speaker of a third language'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'Using a different person is what makes the comparison meaningful. If the original English item and the back-translated English item match, the items have the same semantic meaning and the Spanish version can be used.'
    },
    {
      q: 'Beyond translation equivalence, the chapter identifies a "more fundamental" cross-cultural research problem, namely:',
      type: 'mcq',
      choices: [
        'Whether concepts that exist in one culture even exist in another',
        'Whether participants in other countries will complete online surveys',
        'Whether IRB approval transfers across national borders',
        'Whether statistical software handles non-Latin character sets'
      ],
      correct: 0,
      difficulty: 'H',
      explanation: 'Many personality frameworks were developed in Western cultures and may not even be relevant elsewhere. Researchers must be careful not to be overly biased by their own cultural background (Truxillo & Fraccaroli, 2014).'
    },
    {
      q: 'Hammer et al. (2019) found that a worker safety and health intervention benefited team members:',
      type: 'mcq',
      choices: [
        'Uniformly across all teams regardless of starting conditions',
        'Primarily for teams that already had high cohesion and strong leader relationships',
        'Primarily for teams where there was low team cohesion and poor relationships with the leader to begin with',
        'Only for teams in manufacturing settings'
      ],
      correct: 2,
      difficulty: 'H',
      explanation: 'This illustrates the chapter’s big question in intervention research: understanding WHEN and FOR WHOM a particular intervention works — that is, when it is worth implementing.'
    },
    {
      q: '"Open science" refers to:',
      type: 'mcq',
      choices: [
        'Publishing exclusively in open-access journals',
        'Ensuring research practices are transparent and fully reported and that findings can be reproduced by other scientists',
        'Conducting all research in field rather than laboratory settings',
        'Allowing any researcher to join an ongoing data collection'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Banks et al. (2019) and Grand et al. (2018) are cited. The chapter flags the tension that many journals do not publish replications, focusing on "what’s new," even though replications are essential to confidence in findings.'
    },
    {
      q: 'The chapter’s conclusion about online samples such as Amazon Mechanical Turk is that:',
      type: 'mcq',
      choices: [
        'They should be avoided entirely because they are artificial',
        'They have their place for certain research questions when used ethically and appropriately, though debates will continue',
        'They are superior to organizational samples for all research questions',
        'They cannot be used until federal guidelines are established'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Cheung et al. (2017) is cited for this balanced conclusion. The chapter notes the artificiality criticism, the counterpoint that studies find results similar to conventional sources (Walter et al., 2019), and the living-wage concern (Semuels, 2018).'
    },
    {
      q: 'An HR manager reports that "70 percent of doctors surveyed" endorse a product. The chapter would advise you to ask:',
      type: 'mcq',
      choices: [
        'Whether the survey used an interval or ratio scale',
        'Which physicians were surveyed — all US physicians, or people already using the product?',
        'Whether coefficient alpha exceeded .70',
        'Whether the study received IRB approval'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'This is the chapter’s "What Does This Mean to You" caution that results can be presented misleadingly. Its advice is to be a little skeptical and ask a few questions when you hear about study results.'
    }
  ]
};
