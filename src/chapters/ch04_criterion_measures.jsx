import React from 'react';
import { Callout, Table, Card } from '../components/Visual.jsx';

const IMG = 'ch04_criterion_measures';

export default {
  id: 4,
  title: 'Measuring Work Performance: Criterion Measures',
  subtitle:
    'Conceptual vs. actual criteria, the criterion problem, deficiency/contamination/relevance, multiple vs. composite criteria, performance dimensions, and objective vs. subjective measures.',

  blocks: [
    // ------------------------------------------------------------------ 1
    {
      id: 'what-are-criteria',
      title: 'What Criteria Are & Why They Matter',
      subtitle: 'Outcome variables that prove HR interventions actually work',
      content: (
        <>
          <Callout kind="danger" title="The definition — note that it is plural/singular sensitive">
            <strong>Criteria</strong> (singular, <strong>&ldquo;criterion&rdquo;</strong>) — glossary:{' '}
            <em>outcome variables such as measures of employee knowledge, job performance, or attitudes. They are
            used to show the effectiveness of HR functions or procedures such as personnel selection (hiring)
            procedures or training systems</em> (Guion, 2011).
          </Callout>

          <p>
            The chapter&rsquo;s framing: in <strong>today&rsquo;s results-driven organizations</strong>, it is not
            enough to develop selection procedures, training programs, or safety interventions —{' '}
            <strong>you must show they are effective</strong>. Criteria are how you show it.
          </p>

          <Table
            headers={['Intervention', 'What the criterion demonstrates']}
            rows={[
              [
                'Selection test',
                'If applicants who score high on the test perform better on the job after being hired, the test should be used. (This is also the basis for establishing the CRITERION-RELATED VALIDITY of a test — Ch. 2.)'
              ],
              [
                'Training program',
                'If employees trained on a new online system perform better than untrained employees, the program is worth keeping and rolling out further.'
              ],
              [
                'Safety program',
                'If the program leads to a decrease in on-site accidents and injuries, the investment is justified.'
              ]
            ]}
          />

          <Callout kind="warn" title="The built-in difficulty">
            <strong>Developing good performance criteria is not easy.</strong> One of the most common criteria for
            validating selection tests is <strong>supervisor performance ratings</strong> — and{' '}
            <strong>to the degree those ratings contain errors, it is harder to evaluate selection and training
            programs</strong>. (Ch. 5 covers how to overcome rating errors and biases.)
          </Callout>

          <Card title="Workplace Application — measuring CEO performance">
            <p className="text-sm">
              Many large organizations tie CEO compensation (pay, bonuses, stock options) to CEO performance, but{' '}
              <strong>measuring CEO performance is a major challenge</strong>. It is commonly assessed in terms of{' '}
              <strong>financial performance such as stock price</strong> — i.e., short-term benefit for
              stockholders. Measures that <strong>might also be considered but often are not</strong>:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
              <li>Product quality</li>
              <li>Workplace safety</li>
              <li>Development of future talent in the company</li>
              <li>Litigation that has happened on the CEO&rsquo;s watch</li>
              <li>Whether the CEO focuses on <strong>long-term results rather than short-term profits</strong></li>
            </ul>
            <p className="text-sm mt-2">
              Researchers continue to find that <strong>firm performance and CEO pay are often not
              aligned</strong> (Aguinis et al., 2018).
            </p>
          </Card>
        </>
      )
    },

    // ------------------------------------------------------------------ 2
    {
      id: 'conceptual-actual',
      title: 'Conceptual vs. Actual Criteria',
      subtitle: 'The abstract essence of a job vs. the imperfect measures you actually collect',
      images: [
        {
          src: `${IMG}/04a_fig4-1_conceptual_actual_overlap.png`,
          alt: 'Figure 4.1: a Venn diagram with a large ellipse labeled Conceptual Criterion (specification of the essence of the job) partially overlapping a second ellipse labeled Actual Criterion (an actual measure of an employee’s performance, e.g., performance ratings).',
          caption: 'Figure 4.1 — Overlap between the conceptual and actual criterion. The goal is to make that overlap as great as possible.'
        }
      ],
      content: (
        <>
          <Table
            headers={['', 'Conceptual criterion', 'Actual criterion']}
            rows={[
              [
                <strong key="d">Glossary definition</strong>,
                'An abstract idea of the "essence" of a job. It CANNOT be measured directly.',
                'The performance measure or measures (e.g., performance ratings, sales figures) you will ACTUALLY use to try to capture the conceptual criterion.'
              ],
              [
                <strong key="w">What it is</strong>,
                'What makes up the job — the KSAOs and job behaviors that would be included IF they could be perfectly measured.',
                'The measures you will use to measure individual employees’ performance.'
              ],
              [
                <strong key="s">Best source</strong>,
                'Job analysis is "the best place to go" — but you can NEVER FULLY CAPTURE the essence of the job.',
                'Supervisor ratings, sales figures, units produced, etc.'
              ],
              [
                <strong key="f">Core flaw</strong>,
                'Our definition of the conceptual criterion is USUALLY NOT PERFECT.',
                'ALL actual criterion measures are flawed in some way because they have some degree of error and unreliability.'
              ]
            ]}
          />

          <Callout kind="info" title="The barista example — three ways a job analysis falls short">
            A careful job analysis for barista would identify the primary tasks and most KSAOs — but it would
            probably (1) <strong>be lacking some details</strong>, (2){' '}
            <strong>include some tasks that some but not all baristas do</strong>, and (3) reflect that{' '}
            <strong>job analysts were not able to accurately describe in writing all that a barista does</strong>.
          </Callout>

          <Callout kind="danger" title="Why even objective criteria are imperfect — a key exam point">
            <p>
              Supervisor ratings carry <strong>biases and inaccuracies inherent when one person rates
              another</strong>. But switching to an objective measure — say, <em>drinks produced per hour</em> —
              does not solve it, because <strong>conditions in the work environment vary</strong>: differences in{' '}
              <strong>equipment</strong> or in the <strong>support received from colleagues</strong>. Even
              objective criteria may not capture all the nuances of the situation the employee works in (Austin
              &amp; Villanova, 1992).
            </p>
            <p className="mt-2">
              The safety research makes the point empirically: employee safety behaviors are a function{' '}
              <strong>not only of individual employee characteristics but of the SAFETY CLIMATE</strong> of the
              work site — the support for safety in the employee&rsquo;s social environment (Christian et al.,
              2009).
            </p>
            <p className="mt-2 font-semibold">
              Bottom line: an individual&rsquo;s performance is a function of (1) that employee&rsquo;s KSAOs and
              motivation, (2) the SOCIAL environment such as climate, and (3) the PHYSICAL environment such as
              tools and equipment.
            </p>
          </Callout>

          <Card title="The customer-complaints example — two ways an actual criterion goes wrong">
            <ol className="list-decimal pl-5 space-y-1.5 text-sm">
              <li>
                <strong>Systematic distortion:</strong> the supervisor always gives the most difficult customers to
                the <em>best</em> employee, because they handle difficult people well. That employee provides
                valuable service <em>and</em> accumulates many complaints.
              </li>
              <li>
                <strong>Simple random error:</strong> one employee may, by chance, have had a large number of
                difficult customers and therefore received more complaints — but they might be a good worker.
              </li>
            </ol>
          </Card>
        </>
      )
    },

    // ------------------------------------------------------------------ 3
    {
      id: 'criterion-problem',
      title: 'The Criterion Problem',
      subtitle: 'Two problems that never fully go away',
      content: (
        <>
          <Callout kind="danger" title="The definition, and its two halves">
            <strong>Criterion problem</strong> — glossary: <em>the difficulty of capturing the conceptual
            criterion with the actual criterion measures. This is because the job analysis does not completely
            define the conceptual criterion, PLUS the actual criterion measures are unreliable and contain some
            measurement error.</em>
            <div className="grid md:grid-cols-2 gap-3 mt-3">
              <div className="bg-white border border-red-200 rounded p-3">
                <div className="font-bold text-red-800 text-sm mb-1">Problem 1 — the conceptual side</div>
                <p className="text-sm">
                  We can <strong>never be sure we have accurately and completely specified the job</strong> to
                  determine the conceptual criterion.
                </p>
              </div>
              <div className="bg-white border border-red-200 rounded p-3">
                <div className="font-bold text-red-800 text-sm mb-1">Problem 2 — the actual side</div>
                <p className="text-sm">
                  We must use actual criterion measures — performance ratings, objective measures —{' '}
                  <strong>all of which contain some error</strong>.
                </p>
              </div>
            </div>
          </Callout>

          <p>
            The chapter calls this <strong>&ldquo;a perennial challenge in I-O psychology&rdquo;</strong> (Guion,
            2011; Ryan &amp; Ployhart, 2014). It is not a solvable problem so much as a permanent constraint that
            good practice mitigates.
          </p>

          <Callout kind="tip" title="Why the criterion problem matters downstream">
            If your criterion is bad, everything built on it is compromised: an unreliable criterion{' '}
            <strong>could make a good selection test look as if it is not predicting performance, or make an
            effective training program look as if it did not work</strong>. Bad criteria produce bad conclusions
            about otherwise good interventions.
          </Callout>
        </>
      )
    },

    // ------------------------------------------------------------------ 4
    {
      id: 'deficiency-contamination-relevance',
      title: 'Deficiency, Contamination & Relevance',
      subtitle: 'The three regions of Figure 4.2 — the single most testable diagram in Chapter 4',
      images: [
        {
          src: `${IMG}/04b_fig4-2_contamination_deficiency_relevance.png`,
          alt: 'Figure 4.2: two overlapping ellipses. The upper red ellipse is the Conceptual Criterion. The lower blue ellipse is the Actual Criterion. Labels point to Criterion Deficiency (not captured by the actual criterion), Criterion Relevance (criterion captured by the performance measure), and Criterion Contamination (error that should not be measured).',
          caption: 'Figure 4.2 — Criterion contamination, deficiency, and relevance.'
        }
      ],
      content: (
        <>
          <Callout kind="danger" title="Memorize which region is which">
            <Table
              headers={['Term', 'Glossary definition', 'Where it sits on Figure 4.2', 'Textbook example']}
              rows={[
                [
                  <strong key="d">Criterion deficiency</strong>,
                  'The degree to which the actual criterion FAILS TO OVERLAP with the conceptual criterion.',
                  'The part of the CONCEPTUAL ellipse NOT covered by the actual criterion.',
                  'A car rental company measures customer service assistants using CUSTOMER COMPLAINTS but leaves out other important parts of the job, such as the number of customer calls each employee processes.'
                ],
                [
                  <strong key="c">Criterion contamination</strong>,
                  'When an actual criterion measure INCLUDES SOMETHING THAT IT SHOULD NOT (e.g., bias), leading to error.',
                  'The part of the ACTUAL ellipse OUTSIDE the conceptual criterion.',
                  'A paper mill uses supervisor ratings as its actual criterion; to the extent the ratings are affected by SUPERVISOR BIAS, there is contamination.'
                ],
                [
                  <strong key="r">Criterion relevance</strong>,
                  'The degree to which the actual criterion DOES OVERLAP with the conceptual criterion.',
                  'The OVERLAP region — the part captured by the performance measure.',
                  'Increased (improved) by REDUCING criterion deficiency AND contamination as much as possible.'
                ]
              ]}
            />
          </Callout>

          <Callout kind="tip" title="A one-line mnemonic">
            <strong>Deficiency = MISSING something you should measure.</strong>{' '}
            <strong>Contamination = INCLUDING something you shouldn&rsquo;t.</strong>{' '}
            <strong>Relevance = the good overlap in the middle.</strong> Relevance goes up when both of the other
            two go down.
          </Callout>
        </>
      )
    },

    // ------------------------------------------------------------------ 5
    {
      id: 'redundancy',
      title: 'Choosing Non-Redundant Criteria',
      subtitle: 'Figures 4.3 and 4.4 — why three good measures beat three overlapping ones',
      images: [
        {
          src: `${IMG}/04c_fig4-3_multiple_criteria_capture.png`,
          alt: 'Figure 4.3: a large ellipse labeled Conceptual Criterion containing three smaller circles labeled Performance Ratings of Effort and Motivation, Number of Customer Service Calls Handled, and Number of Units Produced, each overlapping the conceptual criterion substantially but each other only slightly.',
          caption: 'Figure 4.3 — Many actual criteria capture more of the conceptual criterion when they overlap it but NOT each other.'
        },
        {
          src: `${IMG}/04d_fig4-4_redundant_criteria.png`,
          alt: 'Figure 4.4: a large ellipse labeled Conceptual Criterion with three small circles clustered almost entirely on top of one another, covering only a small portion of the conceptual criterion.',
          caption: 'Figure 4.4 — Redundant actual criteria explain relatively little unique variance in the conceptual criterion.'
        }
      ],
      content: (
        <>
          <Callout kind="danger" title="The recommendation, stated exactly">
            <strong>Choose actual criteria that overlap as much as possible with the conceptual criterion, but{' '}
            NOT with each other</strong> — that is, that are <strong>not redundant with each other</strong>.
          </Callout>

          <Table
            headers={['', 'Figure 4.3 (good)', 'Figure 4.4 (bad)']}
            rows={[
              [
                'Configuration',
                'Three actual criteria overlap the conceptual criterion, and only overlap each other A LITTLE BIT.',
                'The actual criteria are ALMOST ENTIRELY REDUNDANT with each other.'
              ],
              [
                'Result',
                'You capture MUCH of the conceptual criterion.',
                'You do NOT capture very much of the conceptual criterion — they explain little UNIQUE variance.'
              ]
            ]}
          />

          <Callout kind="warn" title="The coffee shop cautionary tale">
            A coffee shop measures barista performance using <strong>three indicators of how well they make
            espresso</strong>. But it fails to measure <strong>how well baristas interact with customers</strong>{' '}
            or <strong>keep the shop well stocked</strong> — both important parts of the job. It is therefore{' '}
            <strong>spending time and money measuring three redundant aspects of performance while failing to
            measure other important aspects</strong>. It should instead use three measures that give a{' '}
            <strong>more complete picture</strong>.
          </Callout>
        </>
      )
    },

    // ------------------------------------------------------------------ 6
    {
      id: 'other-criterion-issues',
      title: 'Dynamic Criteria, Typical vs. Maximum, and Other Good-Criteria Characteristics',
      subtitle: 'Time, effort ceiling, and the practical constraints on measurement',
      content: (
        <>
          <Card title="Dynamic criteria — performance changes over time">
            <p className="text-sm">
              <strong>Glossary:</strong> <em>the concept that performance for an individual employee may change
              over time.</em> Performance can differ shortly after hire versus after long tenure — and an
              individual&rsquo;s performance can change <strong>across weeks or even across a given day</strong>{' '}
              (Dalal et al., 2020).
            </p>
            <p className="text-sm mt-2">
              <strong>Practical implication:</strong> you must decide your <strong>timeframe</strong> for
              measuring the criterion, and that depends on your research question. A company hiring workers for{' '}
              <strong>only six months at a time</strong> would want a selection test predicting performance during{' '}
              <strong>the first six months</strong>; a company interested in <strong>long-term
              performance</strong> would want a test predicting over a longer period.
            </p>
          </Card>

          <Card title="Typical vs. maximum performance">
            <Table
              headers={['', 'Definition', 'Best predicted by']}
              rows={[
                [
                  <strong key="t">Typical performance</strong>,
                  'The job performance that an employee USUALLY exhibits.',
                  'PERSONALITY (see Ch. 6)'
                ],
                [
                  <strong key="m">Maximum performance</strong>,
                  'The performance that an employee is CAPABLE of carrying out.',
                  'COGNITIVE ABILITY (see Ch. 6)'
                ]
              ]}
            />
            <Callout kind="danger" title="The findings you must know">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Sackett et al. (1988)</strong> found that employees&rsquo; typical and maximum
                  performance are <strong>NOT STRONGLY CORRELATED</strong>.
                </li>
                <li>
                  <strong>Marcus et al. (2007)</strong>, studying managers, confirmed they are{' '}
                  <strong>distinct and have different antecedents</strong>.
                </li>
              </ul>
              <p className="mt-2">
                The chapter&rsquo;s student analogy: you can work very hard to finish three large class
                assignments in one week when you must — but that is <strong>not your typical performance
                throughout the term</strong>.
              </p>
              <p className="mt-1">
                <strong>Why it matters:</strong> if you evaluate a training program by measuring its effect on{' '}
                <em>maximum</em> performance, you might not be able to tell whether it affected employees&rsquo;{' '}
                <em>typical</em> day-to-day performance.
              </p>
            </Callout>
          </Card>

          <Callout kind="warn" title="Four characteristics of good criteria (Gatewood et al., 2018)">
            <ol className="list-decimal pl-5 space-y-1.5">
              <li>
                <strong>Reliable.</strong> Low measurement error, which also allows increased validity. An
                unreliable criterion cannot detect differences among employees — it could make a good selection
                test look ineffective or an effective training program look like a failure.
              </li>
              <li>
                <strong>Able to detect differences among employees.</strong> If an organization used a 1&ndash;5
                rating scale and <strong>all employees received a 5</strong>, the ratings would not be useful
                (unless all employees really were outstanding — <em>&ldquo;which is highly unlikely!&rdquo;</em>).
              </li>
              <li>
                <strong>Accepted by employees and supervisors.</strong> Otherwise the criteria will be{' '}
                <strong>resisted and may even be sabotaged</strong>. The example: using a supervisor rating system
                for <strong>layoff decisions</strong> without having told supervisors that was possible when they
                made the ratings would breed resentment — and supervisors might{' '}
                <strong>provide inaccurate, useless ratings in the future</strong>.
              </li>
              <li>
                <strong>Collectible without too much cost or disruption.</strong> The extreme counterexample:
                video-recording all worker performance for months and having trained independent raters score it
                would provide good data but be <strong>prohibitively expensive</strong>, and thus impractical.
              </li>
            </ol>
          </Callout>
        </>
      )
    },

    // ------------------------------------------------------------------ 7
    {
      id: 'multiple-vs-composite',
      title: 'Multiple vs. Composite Criteria',
      subtitle: 'Bottom line vs. deeper understanding — with both worked examples',
      images: [
        {
          src: `${IMG}/04e_fig4-5_composite_vs_multiple.png`,
          alt: 'Figure 4.5: a large blue circle labeled Composite Of — number of units produced, supervisor performance ratings of motivation, number of customer service calls — connected by lines to three separate smaller circles labeled with those same three measures.',
          caption: 'Figure 4.5 — A composite criterion (an average) versus multiple, separate criteria for a customer service job.'
        },
        {
          src: `${IMG}/04h_table4-1_training_eval_data.png`,
          alt: 'Table 4.1: training evaluation data showing performance ratings of effort and motivation moving from 1.5 to 4.5, units processed from 1.4 to 4, customer service calls handled from 1.2 to 2, and the composite average from 1.37 to 3.5.',
          caption: 'Table 4.1 — Using multiple versus composite criteria: data for the training evaluation example.'
        },
        {
          src: `${IMG}/04f_fig4-6_training_eval_graph.png`,
          alt: 'Figure 4.6: a line graph with Performance on the y-axis from Low to High and Pre-Training to Post-Training on the x-axis. Three dashed lines rise at different rates and a solid red composite line rises in the middle.',
          caption: 'Figure 4.6 — Training evaluation. The composite rises, but the customer-service-calls line barely moves.'
        },
        {
          src: `${IMG}/04g_fig4-6_training_eval_legend.png`,
          alt: 'Legend for Figure 4.6: dashed blue = performance ratings of effort and motivation, dashed green = number of units processed, dashed purple = number of customer service calls handled, solid red = composite criterion (average of the three performance measures).',
          caption: 'Legend for Figures 4.6 and 4.7.'
        },
        {
          src: `${IMG}/04i_fig4-7_test_validation_graph.png`,
          alt: 'Figure 4.7: a line graph with Performance on the y-axis and Test Score from Low to High on the x-axis, showing three dashed regression lines with different slopes and a solid red composite line.',
          caption: 'Figure 4.7 — Test validation. The test predicts the composite well, but predicts effort/motivation ratings poorly.'
        }
      ],
      content: (
        <>
          <Table
            headers={['', 'Composite criterion', 'Multiple criteria']}
            rows={[
              [
                <strong key="d">Glossary definition</strong>,
                'A combination of multiple criteria, ADDED OR AVERAGED together — or weighted (usually based on job analysis) and then combined — used to show the "bottom-line" work performance.',
                'Treating EACH criterion measure SEPARATELY in an analysis.'
              ],
              [
                <strong key="u">Use it when…</strong>,
                'Your goal is to see what the "BOTTOM LINE" is — e.g., whether a training program worked. Especially useful for COMMUNICATING WITH NON-RESEARCHERS such as company top management.',
                'You want a DEEPER UNDERSTANDING of what is going on. "Certainly better for organizational research purposes."'
              ]
            ]}
          />

          <Callout kind="tip" title="The chapter's verdict">
            <strong>&ldquo;There is no &lsquo;correct&rsquo; approach.&rdquo;</strong> Each could be acceptable
            depending on the goals of the study (Cascio &amp; Aguinis, 2018; Schmidt &amp; Kaplan, 1971).
          </Callout>

          <Card title="Example 1 — Training evaluation (Figure 4.6 / Table 4.1)">
            <p className="text-sm mb-2">
              A customer service job with three job-analysis-derived criteria:{' '}
              <strong>number of units produced</strong>, <strong>supervisor performance ratings of motivation and
              effort</strong>, and <strong>number of customer service calls</strong>.
            </p>
            <Table
              headers={['Criterion measure', 'Pre-training (1–5)', 'Post-training (1–5)', 'Change']}
              rows={[
                ['Performance ratings of effort and motivation', '1.5', '4.5', 'Large gain'],
                ['Number of units processed', '1.4', '4', 'Large gain'],
                [
                  <strong key="c">Number of customer service calls handled</strong>,
                  <strong key="c1">1.2</strong>,
                  <strong key="c2">2</strong>,
                  <strong key="c3">Barely moved</strong>
                ],
                [<strong key="cm">Composite (average)</strong>, <strong key="cm1">1.37</strong>, <strong key="cm2">3.5</strong>, 'Looks like a clear success']
              ]}
            />
            <Callout kind="danger" title="The lesson">
              The composite says <strong>the training worked</strong> — overall performance is higher afterward.
              But the composite <strong>gives only part of the story: it is MASKING substantial differences</strong>{' '}
              in how the training affected each criterion. Ratings and units rose a lot; calls handled{' '}
              <strong>did not change much at all</strong>. That is{' '}
              <strong>very important information</strong>, because it suggests{' '}
              <strong>the training may need to be revised to also address the number of calls handled</strong>.
            </Callout>
          </Card>

          <Card title="Example 2 — Selection test validation (Figure 4.7)">
            <p className="text-sm">
              Here the relationship between a test and job performance is expressed as a{' '}
              <strong>regression line</strong> (Ch. 2; more in Ch. 6). The test does a{' '}
              <strong>good &ldquo;bottom-line&rdquo; job of predicting the COMPOSITE criterion</strong> — the test
              &ldquo;works&rdquo; and is valid for predicting job performance.
            </p>
            <Callout kind="danger" title="But closer inspection…">
              Although the test <strong>predicts two of the criterion measures well</strong>, it{' '}
              <strong>does not do a very good job of predicting performance ratings of effort and
              motivation</strong>. The organization may want to consider <strong>revising the test (e.g., adding
              questions)</strong> or <strong>adding other tests to the test battery</strong> so it can also
              predict effort/motivation ratings.
            </Callout>
          </Card>
        </>
      )
    },

    // ------------------------------------------------------------------ 8
    {
      id: 'task-contextual',
      title: 'Task Performance vs. Contextual Performance & OCBs',
      subtitle: 'The dominant model of the last three decades',
      images: [
        {
          src: `${IMG}/04j_table4-2_contextual_performance.png`,
          alt: 'Table 4.2: Borman and Motowidlo’s taxonomy of contextual performance — persisting with enthusiasm and extra effort; volunteering to carry out task activities not formally part of own job; helping and cooperating with others; following organizational rules and procedures; endorsing, supporting, and defending organizational objectives.',
          caption: 'Table 4.2 — Borman and Motowidlo’s Taxonomy of Contextual Performance (five behaviors).'
        }
      ],
      content: (
        <>
          <p>
            The model that has <strong>dominated over the last three decades</strong> divides job performance into{' '}
            <strong>task performance</strong> and <strong>contextual performance</strong> (Borman &amp; Motowidlo,
            1993; Motowidlo &amp; Van Scotter, 1994).
          </p>

          <Callout kind="danger" title="The critical contrast">
            <Table
              headers={['', 'Task (core task) performance', 'Contextual performance']}
              rows={[
                [
                  <strong key="d">Glossary definition</strong>,
                  'The core tasks that make up a particular job, typically shown in a job description.',
                  'Behaviors that SUPPORT THE SOCIAL ENVIRONMENT in the workplace.'
                ],
                [
                  <strong key="v">Varies across jobs?</strong>,
                  <strong key="v1">YES — it VARIES for different jobs.</strong>,
                  <strong key="v2">NO — per Borman & Motowidlo (1997), these behaviors are FAIRLY SIMILAR ACROSS JOBS.</strong>
                ],
                [
                  <strong key="e">Examples</strong>,
                  'Barista: making coffee. Computer programmer: writing code. Customer service worker: working with customers to solve problems and providing information about company products.',
                  'Helping team members complete their tasks; following rules; staying late to help on a project.'
                ]
              ]}
            />
          </Callout>

          <Card title="Table 4.2 — the five contextual performance behaviors">
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Persisting with enthusiasm and extra effort as necessary to complete own task activities successfully</li>
              <li>Volunteering to carry out task activities that are not formally part of own job</li>
              <li>Helping and cooperating with others</li>
              <li>Following organizational rules and procedures</li>
              <li>Endorsing, supporting, and defending organizational objectives</li>
            </ol>
          </Card>

          <Callout kind="info" title="Organizational citizenship behaviors (OCBs)">
            <strong>Glossary:</strong> <em>behaviors focused on helping individual coworkers and helping to
            support the organization.</em> Contextual performance <strong>involves a good bit of being a good
            organizational citizen</strong>. OCBs can be directed toward:
            <ul className="list-disc pl-5 mt-1">
              <li><strong>Coworkers</strong> — e.g., helping a coworker</li>
              <li><strong>The organization</strong> — e.g., supporting the organization</li>
            </ul>
            <span className="text-xs">(Williams &amp; Anderson, 1991; more in Ch. 11.)</span>
          </Callout>

          <Callout kind="danger" title="A Deeper Understanding — when MORE OCBs are NOT better">
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                Excessive OCBs can produce <strong>&ldquo;citizenship fatigue,&rdquo;</strong> which may in turn
                cause employees to show <strong>fewer OCBs in the future</strong> (Bolino et al., 2015).
              </li>
              <li>
                Employees who spend too much time supporting the social context{' '}
                <strong>may not give enough attention to core job tasks</strong> — hurting them in advancement and
                promotions.
              </li>
              <li>
                <strong>Bergeron et al. (2013)</strong>, at a professional services firm: employees who spent more
                time on OCBs <strong>spent less time on task performance</strong>. Which mattered more for
                advancement? <strong>Task performance, not OCBs.</strong> Employees who spent more time on OCBs had{' '}
                <strong>fewer salary increases and advanced less quickly</strong>.
              </li>
              <li>
                The chapter&rsquo;s caveat: this does <strong>not</strong> mean employees should avoid OCBs or that
                OCBs always lead to negative outcomes — only that the field should not{' '}
                <strong>always assume that more OCBs are always better</strong>.
              </li>
            </ul>
          </Callout>
        </>
      )
    },

    // ------------------------------------------------------------------ 9
    {
      id: 'other-dimensions',
      title: 'CWBs, Adaptive Behavior & Creative Performance',
      subtitle: 'Three more dimensions that have gained attention',
      images: [
        {
          src: `${IMG}/04k_table4-3_adaptive_performance.png`,
          alt: 'Table 4.3: Pulakos et al.’s eight dimensions of adaptive behavior with examples — handling emergencies in crisis situations, handling work stress, solving problems creatively, dealing with uncertain and unpredictable work situations, learning work tasks technologies and procedures, demonstrating interpersonal adaptability, demonstrating cultural adaptability, and demonstrating physically oriented adaptability.',
          caption: 'Table 4.3 — Pulakos et al.’s (2000) eight dimensions of adaptive behavior.'
        }
      ],
      content: (
        <>
          <Card title="Counterproductive work behavior (CWB)">
            <p className="text-sm">
              <strong>Glossary:</strong> <em>work behaviors such as theft, derailment of others, and abusive
              leadership.</em> The chapter also names <strong>high levels of organizational politicking</strong>{' '}
              (Dalal, 2005; O&rsquo;Boyle et al., 2012; Penney &amp; Spector, 2005).
            </p>
            <Callout kind="danger" title="Two facts about CWBs that generate MCQs">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>CWBs are NOT simply the opposite of OCBs</strong> — but the two are{' '}
                  <strong>negatively correlated at −.32</strong> (Dalal, 2005). Memorize that number.
                </li>
                <li>
                  <strong>Like OCBs, CWBs split into interpersonal vs. organizational:</strong>
                  <ul className="list-disc pl-5 mt-1">
                    <li>
                      <strong>Interpersonal</strong> — gossiping, sexual harassment, verbal abuse
                    </li>
                    <li>
                      <strong>Organizational</strong> — working slowly, stealing
                    </li>
                  </ul>
                  <span className="text-xs">(Mackey et al., 2021.)</span>
                </li>
              </ul>
            </Callout>
          </Card>

          <Card title="Adaptive behavior (Pulakos et al., 2000)">
            <p className="text-sm">
              <strong>Glossary:</strong> <em>includes factors such as adjusting to new social and task
              environments. It includes adapting to work stress, solving problems creatively, handling
              emergencies, and cultural and interpersonal adaptability.</em>
            </p>
            <Table
              headers={['Dimension', 'Example']}
              rows={[
                ['Handling emergencies in crisis situations', 'Making quick decisions based on clear thinking'],
                ['Handling work stress', 'Not overreacting to unexpected situations'],
                ['Solving problems creatively', 'Developing creative solutions from unrelated information'],
                ['Dealing with uncertain and unpredictable work situations', 'Changing course in response to unpredictable or unexpected events'],
                ['Learning work tasks, technologies, and procedures', 'Showing enthusiasm for learning new things'],
                ['Demonstrating interpersonal adaptability', 'Being flexible when interacting with other people'],
                ['Demonstrating cultural adaptability', 'Interacting with different values, customs, and cultures'],
                ['Demonstrating physically oriented adaptability', 'Adjusting to challenging environments']
              ]}
            />
            <Callout kind="warn" title="Why adaptive behavior is a live research area">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  It is <strong>important because jobs change quickly today</strong>, and because{' '}
                  <strong>technology is becoming more and more a part of jobs</strong>, requiring technological
                  savvy.
                </li>
                <li>
                  Empirical research is <strong>still evolving / relatively scant</strong> despite its importance
                  to 21st-century organizations (Ryan &amp; Ployhart, 2014).
                </li>
                <li>
                  <strong>Huang et al. (2014)</strong> meta-analytically identified{' '}
                  <strong>AMBITION and EMOTIONAL STABILITY</strong> as personality variables related to adaptive
                  performance.
                </li>
                <li>
                  There is <strong>currently disagreement among researchers about what adaptive behavior
                  is</strong> (Baard et al., 2014).
                </li>
              </ul>
            </Callout>
          </Card>

          <Card title="Creative performance">
            <p className="text-sm">
              <strong>Glossary:</strong> <em>involves problem-finding, flexibility, originality, and evaluation of
              ideas.</em> The chapter phrases the dimensions as <strong>finding problems, ideation (flexibility and
              originality), and evaluation of ideas</strong> (Davis, 2009). Example behaviors:{' '}
              <strong>taking risks in generating new ideas</strong> and{' '}
              <strong>identifying opportunities</strong> (Tierney et al., 1999). Important{' '}
              <strong>especially for certain types of jobs</strong>. As with adaptive behavior, there has{' '}
              <strong>not been a lot of empirical research on these as criterion measures</strong> (Ryan &amp;
              Ployhart, 2014).
            </p>
          </Card>
        </>
      )
    },

    // ------------------------------------------------------------------ 10
    {
      id: 'campbell-model',
      title: 'Campbell’s Eight-Dimension Model',
      subtitle: '"Perhaps the most influential frameworks of work performance"',
      content: (
        <>
          <p>
            The frameworks of <strong>John Campbell and colleagues</strong> (Campbell, 2012; Campbell et al., 1990,
            1993; Campbell &amp; Wiernik, 2015) are described as <strong>perhaps the most influential frameworks
            of work performance</strong>. They were developed to be <strong>comprehensive models broad enough to
            describe the key dimensions common to ALL jobs while still including sufficient specificity</strong>.
          </p>

          <Callout kind="danger" title="Campbell & Wiernik (2015): the eight broad dimensions">
            <p className="mb-2">
              Campbell&rsquo;s most recent model argues that{' '}
              <strong>most job performance dimensions identified in the literature — including task performance,
              contextual performance, CWBs, adaptive behavior and creative performance — fall under these eight
              dimensions</strong>:
            </p>
            <Table
              headers={['#', 'Dimension', 'What it covers']}
              rows={[
                ['1', <strong key="a">Technical performance</strong>, 'The CORE TASKS of a job. Depending on the job, anything from analyzing data to operating equipment.'],
                ['2', <strong key="b">Communication</strong>, 'Presenting information in a way that is clear and organized — both ORAL and WRITTEN.'],
                ['3', <strong key="c">Initiative, persistence, and effort</strong>, 'Related to citizenship behaviors and OCBs.'],
                ['4', <strong key="d">Counterproductive work behavior</strong>, 'CWBs, as defined above.'],
                ['5', <strong key="e">Supervisory, managerial, executive leadership</strong>, 'Leadership in a HIERARCHICAL relationship — focused interpersonal influence.'],
                ['6', <strong key="f">Hierarchical management performance</strong>, 'Such as allocating organizational resources.'],
                ['7', <strong key="g">Peer/team leadership</strong>, 'Leadership around PEERS or the TEAM.'],
                ['8', <strong key="h">Peer/team member management performance</strong>, 'Working as a member of the team to help MANAGE the team.']
              ]}
            />
          </Callout>

          <Callout kind="tip" title="Notice the 2×2 structure hiding in dimensions 5–8">
            Campbell splits leadership and management along <strong>hierarchical vs. peer/team</strong> lines:{' '}
            <strong>#5 hierarchical LEADERSHIP</strong>, <strong>#6 hierarchical MANAGEMENT</strong>,{' '}
            <strong>#7 peer/team LEADERSHIP</strong>, <strong>#8 peer/team MANAGEMENT</strong>. Half of the model
            is about influencing and organizing others.
          </Callout>

          <p className="text-sm text-slate-600">
            <strong>Reminder:</strong> the chapter opens this section by saying that{' '}
            <strong>one of the best ways to determine the dimensions of a job performance criterion is to look at
            the JOB ANALYSIS</strong> — Campbell&rsquo;s taxonomy is the attempt to identify dimensions common to
            all jobs on top of that.
          </p>
        </>
      )
    },

    // ------------------------------------------------------------------ 11
    {
      id: 'objective-subjective',
      title: 'Objective vs. Subjective Criterion Measures',
      subtitle: 'Seven objective measures and everything that can go wrong with each',
      content: (
        <>
          <Table
            headers={['', 'Definition']}
            rows={[
              [
                <strong key="o">Objective measures</strong>,
                'Performance measures NOT based on the judgment of others — such as number of sales (for a sales job) or number of units produced (for jobs that can be quantified).'
              ],
              [
                <strong key="s">Subjective measures</strong>,
                'Performance measures BASED ON THE JUDGMENT of another person — such as supervisor performance ratings, "perhaps the most used job performance measures in terms of test validation."'
              ]
            ]}
          />

          <Callout kind="warn" title="Which is best? There is no simple answer.">
            <strong>&ldquo;While objective measures might sound good (after all, they are objective, and that
            seems like a good and fair thing, right?), they are not without their flaws.&rdquo;</strong>
          </Callout>

          <Callout kind="danger" title="The seven objective measures and their flaws — a rich source of MCQ scenarios">
            <Table
              headers={['Measure', 'Why it seems good', 'The flaw, with the textbook’s example']}
              rows={[
                [
                  <strong key="1">Sales figures</strong>,
                  'They largely determine the organization’s profitability.',
                  'Not all sales figures are the same. TAMARA sells $40,000 of computer equipment monthly and SAM sells $30,000 — but Tamara INHERITED A CLIENT LIST from a friend who quit. Similarly, CAROLINE outsells JAVIER, but Javier’s store is less busy and in a less wealthy part of town.'
                ],
                [
                  <strong key="2">Units produced</strong>,
                  'An excellent way to assess performance in, e.g., a factory setting.',
                  'EMILE makes 10 units per day and RENEE makes 8 — but Emile works in a MORE MODERN FACTORY.'
                ],
                [
                  <strong key="3">Absenteeism</strong>,
                  'Unexcused absences are an important loss, and leave other employees doing additional work. Integrity tests may predict it (Ch. 6).',
                  'It can be VERY DIFFICULT TO KNOW whether absences are excused. And the very best employee might take an occasional unexcused day off yet provide excellent value anyway. Organizations should NOT penalize employees for using sick days when actually ill — which leads to PRESENTEEISM.'
                ],
                [
                  <strong key="4">Tardiness</strong>,
                  'For some jobs it is critical — "one cannot have an emergency medical person who is an hour late for their shift, possibly leaving people in danger."',
                  'It may not be important for certain jobs. The author’s administrator was late most of the time yet was "one of the most hard-working and dedicated — and effective — people in the agency." Her tardiness was not a strength, but her effectiveness FAR OUTWEIGHED this one issue.'
                ],
                [
                  <strong key="5">Turnover</strong>,
                  'May be one of the GREATEST EXPENSES in many organizations, especially where much has been invested in training and development. Organizations can reduce it via selection, training, and treatment of employees.',
                  'Measuring it is difficult and it can MEAN DIFFERENT THINGS. A TOP performer may quit because they got a better job; a POOR performer may quit because they know they will be fired. Very different circumstances — and simply knowing an employee quit may not be helpful.'
                ],
                [
                  <strong key="6">Customer complaints / commendations</strong>,
                  'Important for an organization to collect.',
                  'An employee may get an excess of complaints or compliments STRICTLY BY CHANCE. And complaints may be due to ORGANIZATIONAL REASONS OUTSIDE the employee’s control — a restaurant server may get complaints because the restaurant is UNDERSTAFFED.'
                ],
                [
                  <strong key="7">Theft</strong>,
                  'A negative performance measure of importance to many organizations, especially retailers.',
                  'Measurement is "a tricky business — and not always accurate." HOW MUCH THEFT GOES UNDETECTED? Organizations measure "SHRINKAGE" — the degree to which materials, inventory, or supplies disappear — but it is incorrect to assume all missing material was stolen, and it is often difficult to tie missing material to any particular employee.'
                ]
              ]}
            />
          </Callout>

          <Callout kind="info" title="Presenteeism — a glossary term worth its own MCQ">
            <strong>Glossary:</strong> <em>a situation in which a worker comes to work sick, perhaps because they
            thought that the boss expected them to do so.</em>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>
                It can result in <strong>serious financial losses</strong> for organizations and society — because
                of the employee&rsquo;s own sickness <strong>and because they can make others ill</strong>.
              </li>
              <li>
                It was a concern in the <strong>Covid-19 pandemic</strong> due to the illness&rsquo;s highly
                contagious nature.
              </li>
              <li>
                <strong>Miraglia &amp; Johns (2016) meta-analysis:</strong> antecedents include{' '}
                <strong>strict absence policies</strong>, <strong>job insecurity</strong>, <em>and also</em>{' '}
                <strong>higher engagement</strong> — suggesting the complexity of presenteeism.
              </li>
            </ul>
          </Callout>

          <Callout kind="tip" title="The chapter's recommended strategy">
            <strong>Use MULTIPLE TYPES of job performance measures that COMPLEMENT EACH OTHER in terms of
            strengths and weaknesses.</strong>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>
                <strong>Objective measures may compensate for biases inherent in subjective ratings.</strong>
              </li>
              <li>
                <strong>Subjective ratings may compensate for factors not captured by objective measures</strong> —
                e.g., a supervisor may know Sam is the better salesperson even though Tamara has better sales
                figures, and can take that into account.
              </li>
            </ul>
            <p className="mt-2">
              &ldquo;Being aware of the limitations of various performance measures, and choosing performance
              measures that complement each other, is a good start.&rdquo;
            </p>
          </Callout>
        </>
      )
    },

    // ------------------------------------------------------------------ 12
    {
      id: 'legal-global-current',
      title: 'Legal, Global, Technology & Current Issues',
      subtitle: 'Privacy, cross-cultural comparability, big data, and multi-level dynamic criteria',
      content: (
        <>
          <Callout kind="danger" title="Legal Issues — criteria can trigger selection law">
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                If job performance measures are <strong>used to make personnel decisions</strong> (e.g., promotion
                decisions), they <strong>can be subject to the same legal guidelines as personnel selection
                methods</strong> (Ch. 7).
              </li>
              <li>
                This is especially an issue if the measures are <strong>shown to be biased against certain legally
                protected groups</strong> and <strong>cannot be demonstrated to be job-related</strong>.
              </li>
              <li>
                Organizations should <strong>carefully document</strong> any criterion measures that might affect
                employees.
              </li>
              <li>
                <strong>Sensitive performance data must be kept secure</strong>, with protocols aligned to national
                and state guidelines. Note that <strong>some European countries have more restrictive rules for the
                collection, use, and protection of personal data</strong> (CIPD, 2020).
              </li>
            </ul>
          </Callout>

          <Card title="Global Implications — criterion measures across countries">
            <p className="text-sm">
              With the growth of <strong>multinational corporations (MNCs)</strong>, one challenge is measuring
              performance across multiple countries and cultures. <strong>The upside of one comprehensive
              measure:</strong> managers could know the strengths and weaknesses of different parts of the
              organization, understand levels of human capital across it, and identify which parts need improvement
              through training or hiring.
            </p>
            <Callout kind="warn" title="But comparability is the problem">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>National culture can have significant effects on performance management systems</strong>{' '}
                  (DeNisi &amp; Smith, 2014), and thus on the measurement of job performance.
                </li>
                <li>
                  Research on managing performance within global organizations is <strong>scant</strong> (Cascio,
                  2006; Maley &amp; Moeller, 2014).
                </li>
                <li>
                  Known complications: <strong>language</strong>, <strong>perceived importance of different
                  performance dimensions</strong>, and the fact that{' '}
                  <strong>the very PURPOSE of evaluating performance can vary significantly from country to
                  country</strong> (Cascio, 2006).
                </li>
              </ul>
            </Callout>
          </Card>

          <Card title="Technology & I-O — job performance through big data">
            <p className="text-sm">
              Growing interest in <strong>high-volume datasets of multiple measures collected in real time</strong>.
              Alongside traditional sources like performance appraisals, this includes{' '}
              <strong>Internet-connected devices, employee badges, workplace sensors, or cameras</strong> (as has
              become commonplace in law enforcement) — enabling analysis of{' '}
              <strong>numbers of face-to-face meetings and more minute behaviors such as keystrokes</strong>.
            </p>
            <p className="text-sm mt-2">
              <strong>The hope:</strong> a deeper, more precise understanding of how well a selection procedure or
              training program is working — e.g., examining not only effects on individual worker performance but{' '}
              <strong>whether it affects the company as a whole, including short- and long-term financial
              performance</strong> (Oswald et al., 2020).
            </p>
            <Callout kind="danger" title="The two cautions">
              <ol className="list-decimal pl-5 space-y-1">
                <li>
                  <strong>Privacy issues</strong> — perceived invasiveness to employees, and company safeguards on
                  the security of such data.
                </li>
                <li>
                  <strong>&ldquo;Just because data are &lsquo;big&rsquo; does not mean that they are of high
                  quality&rdquo;</strong> — a critical issue with all job performance measures.
                </li>
              </ol>
            </Callout>
          </Card>

          <Card title="Current Research Issues — dynamic criteria at multiple levels">
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>
                Greater recognition that <strong>performance changes over time, even within the same day</strong>{' '}
                (Dalal et al., 2020) — helping the field <strong>move beyond a &ldquo;snapshot&rdquo; of
                performance</strong>.
              </li>
              <li>
                <strong>There is more to performance than the individual</strong> — there is performance at the{' '}
                <strong>team and organization levels</strong> as well. A training program&rsquo;s effects could be
                examined on <strong>work units, whole organizations, or even entire countries and
                societies</strong> (Aguinis &amp; Kraiger, 2009).
              </li>
              <li>
                <strong>Relatively few studies have taken this approach</strong> (e.g., Van Iddekinge et al., 2009),
                but there is a push to measure performance beyond the individual (Ryan &amp; Ployhart, 2014). Big
                data approaches can facilitate this more complex, dynamic, multi-level understanding.
              </li>
            </ul>
          </Card>

          <Callout kind="tip" title="What This Means to You — two takeaways">
            <ol className="list-decimal pl-5 space-y-1">
              <li>
                <strong>Performance is multi-dimensional</strong> — core task, contextual, safety, and more. Each
                employee brings different strengths; think about which dimensions matter most to your organization
                and your boss.
              </li>
              <li>
                <strong>Organizations use different measurement MEDIA</strong> — supervisor ratings, objective
                data. Each adds to the picture, and each has limitations. Reflect on how your organization measures
                performance and which measures it considers most important.
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
      title: 'Chapter 4 — Comprehensive Summary',
      wordCount: 1100,
      paragraphs: [
        'Criteria — singular, criterion — are outcome variables such as measures of employee knowledge, job performance, or attitudes, used to demonstrate the effectiveness of human resource functions and procedures like selection systems and training programs. Their importance follows from the results orientation of contemporary organizations: it is not enough to build a selection test, deliver a training curriculum, or roll out a safety intervention; one must be able to show that applicants scoring high on the test subsequently perform better, that trained employees outperform untrained ones, or that accidents and injuries actually declined. Establishing the first of these relationships is precisely what constitutes criterion-related validity. Criteria are therefore essential to demonstrating the value of everything I-O psychologists build, which makes the quality of criterion measurement a foundational concern rather than a technical afterthought. Yet developing good criteria is genuinely difficult. The most common criterion used to validate selection tests is the supervisor performance rating, and to the extent that such ratings contain error, they obscure whether selection and training are working. The chapter’s illustration of the difficulty at the highest organizational level is CEO performance, which is routinely reduced to short-term financial indicators such as stock price while ignoring product quality, workplace safety, development of future talent, and litigation occurring on the CEO’s watch — a narrowness that helps explain why researchers keep finding CEO pay and firm performance poorly aligned.',

        'The conceptual apparatus for thinking about criterion quality rests on a distinction between the conceptual criterion and the actual criterion. The conceptual criterion is an abstract idea of the essence of a job: what the job consists of, what KSAOs it demands, and what behaviors it involves if these could be perfectly measured. It cannot be measured directly. Job analysis is the best available route to specifying it, but even a careful analysis will miss details, include tasks that only some incumbents perform, and suffer from analysts’ inability to describe everything a worker does in writing — so our definition of the conceptual criterion is usually imperfect. The actual criterion is the measure or measures one actually uses to try to capture that essence: performance ratings, sales figures, units produced. Every actual criterion is flawed to some degree, because all psychological measurement carries unreliability and error. Supervisor ratings inherit the biases and inaccuracies inherent when one person judges another. Ostensibly objective substitutes fare no better in principle, because work conditions vary: differences in equipment, or in the support colleagues provide, mean that drinks produced per hour does not isolate the barista’s own contribution. Safety research makes the point empirically, showing that safe behavior depends not only on individual characteristics but on the safety climate of the work site. An employee’s performance is therefore a joint product of their own KSAOs and motivation, the social environment including climate, and the physical environment including tools and equipment. Together these two imperfections constitute the criterion problem: the difficulty of capturing the conceptual criterion with actual criterion measures, because job analysis does not completely define the conceptual criterion and actual measures contain error. The chapter calls this a perennial challenge in the field.',

        'Given that the overlap between conceptual and actual criteria will always be partial, the practical goal is to maximize it. Three terms name the regions of that Venn diagram. Criterion deficiency is the degree to which the actual criterion fails to overlap the conceptual criterion — the part of the job the measure misses, as when a car rental company measures customer service assistants by complaints alone while ignoring the number of calls each employee processes. Criterion contamination occurs when an actual criterion includes something it should not, introducing error, as when supervisor bias infiltrates ratings at a paper mill. Criterion relevance is the degree to which the actual criterion does overlap the conceptual criterion, and it is improved by reducing deficiency and contamination as much as possible. A second recommendation concerns the relationship among multiple actual criteria: they should overlap heavily with the conceptual criterion but only slightly with one another. Three measures that are nearly redundant explain little unique variance and leave large portions of the job unmeasured, as when a coffee shop tracks three indicators of espresso quality while ignoring customer interaction and stocking, spending time and money for a narrow and duplicative picture.',

        'Several further considerations shape criterion selection. Dynamic criteria refers to the recognition that an individual’s performance changes over time — across tenure, across weeks, even within a single day — which forces an explicit decision about measurement timeframe tied to the research question, since a company hiring for six-month stints needs a test predicting short-run performance while a company concerned with careers needs one predicting the long run. Typical performance is the performance an employee usually exhibits; maximum performance is what they are capable of producing. Sackett and colleagues found these are not strongly correlated, and later work on managers confirmed they are distinct constructs with different antecedents — maximum performance being best predicted by cognitive ability and typical performance by personality. The practical consequence is that a training evaluation conducted on maximum performance may say nothing about whether day-to-day performance improved. Beyond reliability, which is necessary because an unreliable criterion cannot detect differences among employees and can make a good test or an effective program appear worthless, good criteria must discriminate among employees (a scale on which everyone receives a 5 is useless), must be accepted by employees and supervisors (otherwise they will be resisted or sabotaged, as when ratings collected for development are quietly repurposed for layoffs), and must be collectible without excessive cost or disruption (videotaping all work for months and having trained raters score it would yield fine data at prohibitive expense).',

        'A recurring decision is whether to combine criteria or keep them separate. A composite criterion adds, averages, or weights multiple criteria into a single bottom-line index; multiple criteria treat each measure separately in analysis. Neither is correct in the abstract. The composite is appropriate when the question is whether something worked overall, and is particularly useful for communicating with non-researchers such as senior management; multiple criteria are better for deeper understanding and for organizational research. The chapter’s training evaluation example makes the trade-off concrete: performance ratings of effort rose from 1.5 to 4.5 and units processed from 1.4 to 4, while customer service calls handled moved only from 1.2 to 2, yet the composite average rose from 1.37 to 3.5 and made the program look like an unqualified success. The composite masked the fact that one criterion barely responded — information the organization needs, since it implies the training should be revised to address call handling. A parallel selection example shows a test predicting the composite well while predicting effort and motivation ratings poorly, suggesting the test be revised or supplemented with additional instruments.',

        'Turning to the content of performance, the dominant framework of the past three decades divides job performance into task performance and contextual performance. Task performance comprises the core tasks that constitute a particular job and varies across jobs — making coffee for a barista, writing code for a programmer, resolving customer problems for a service worker. Contextual performance comprises behaviors that support the social environment of the workplace and, per Borman and Motowidlo, is fairly similar across jobs; their taxonomy lists persisting with enthusiasm and extra effort, volunteering for activities outside one’s formal job, helping and cooperating with others, following organizational rules and procedures, and endorsing, supporting, and defending organizational objectives. Contextual performance overlaps substantially with organizational citizenship behaviors, which are directed either toward coworkers or toward the organization. Importantly, more citizenship is not automatically better: excessive OCBs can produce citizenship fatigue that reduces future OCBs, and can crowd out attention to core tasks. Bergeron and colleagues found that employees devoting more time to OCBs spent less on task performance and, at a professional services firm, received fewer salary increases and advanced more slowly — task performance, not citizenship, drove advancement. Counterproductive work behavior encompasses theft, derailment of others, abusive leadership, and heavy organizational politicking; CWBs are not simply the inverse of OCBs, though the two correlate at −.32, and like OCBs they divide into interpersonal forms such as gossiping, harassment, and verbal abuse and organizational forms such as working slowly and stealing. Adaptive behavior, from Pulakos and colleagues, spans eight dimensions including handling emergencies, handling work stress, solving problems creatively, dealing with unpredictable situations, learning new tasks and technologies, and interpersonal, cultural, and physical adaptability; it matters increasingly because jobs change quickly and technology permeates work, though the empirical literature remains thin, researchers disagree about its definition, and meta-analytic work has linked it to ambition and emotional stability. Creative performance involves problem-finding, ideation encompassing flexibility and originality, and evaluation of ideas. Campbell and colleagues’ framework, described as perhaps the most influential, argues that essentially all of these dimensions fall under eight broad headings: technical performance, communication, initiative/persistence/effort, counterproductive work behavior, supervisory-managerial-executive leadership, hierarchical management performance, peer/team leadership, and peer/team member management performance.',

        'Finally, actual criterion measures divide into objective measures, which are not based on others’ judgments, and subjective measures, which are — most prominently supervisor performance ratings, the most-used criterion in test validation. Objectivity is not the same as accuracy. Sales figures reward inherited client lists and wealthy territories; units produced reward newer equipment; absenteeism is hard to classify as excused or unexcused and, if policed too strictly, produces presenteeism, in which sick employees come to work and infect others at substantial cost, with meta-analytic antecedents including strict absence policies, job insecurity, and paradoxically higher engagement; tardiness matters critically in some jobs and trivially in others; turnover conflates a star leaving for a better offer with a poor performer quitting ahead of dismissal; customer complaints accrue by chance and from organizational causes such as understaffing; and theft measurement rests on shrinkage figures that cannot distinguish stolen from merely missing material or attribute losses to individuals. There is thus no single best way to measure performance. The recommended strategy is to combine measure types so their strengths and weaknesses complement one another: objective data offsetting rater bias, and supervisor judgment supplying the situational knowledge objective figures omit. Legally, performance measures used for personnel decisions can fall under the same guidelines as selection procedures, must be documented, and must protect sensitive data, with stricter rules in some European jurisdictions. Globally, national culture affects performance management systems and even the purpose of evaluation, making cross-country comparability difficult. Current directions include big data collected from badges, sensors, and devices — with attendant privacy concerns and the reminder that big data is not necessarily good data — and a push toward dynamic, multi-level measurement extending beyond the individual to teams, organizations, and even societies.'
      ]
    },

    numbers: [
      { value: '−.32', what: 'Correlation between OCBs and CWBs (Dalal, 2005) — negative, but not simple opposites' },
      { value: '8', what: 'Dimensions in Pulakos et al.’s (2000) adaptive behavior taxonomy' },
      { value: '8', what: 'Broad dimensions in Campbell & Wiernik’s (2015) model of work performance' },
      { value: '5', what: 'Behaviors in Borman & Motowidlo’s contextual performance taxonomy (Table 4.2)' },
      { value: '1.5 → 4.5', what: 'Performance ratings of effort/motivation, pre → post training (Table 4.1)' },
      { value: '1.4 → 4', what: 'Number of units processed, pre → post training' },
      { value: '1.2 → 2', what: 'Customer service calls handled — the criterion that BARELY MOVED' },
      { value: '1.37 → 3.5', what: 'Composite (average) — masks the failure on calls handled' },
      { value: '$40,000 vs. $30,000', what: 'Tamara vs. Sam sales — but Tamara inherited a client list' },
      { value: '10 vs. 8 units', what: 'Emile vs. Renee — but Emile’s factory is more modern' },
      { value: '1988', what: 'Sackett et al. — typical and maximum performance NOT strongly correlated' },
      { value: '2007', what: 'Marcus et al. — typical vs. maximum are distinct with different antecedents' },
      { value: '1993 / 1994', what: 'Borman & Motowidlo; Motowidlo & Van Scotter — task/contextual split' },
      { value: '2000', what: 'Pulakos et al. — adaptive behavior taxonomy' },
      { value: '2015', what: 'Campbell & Wiernik — the eight-dimension model' },
      { value: '3', what: 'Regions of Figure 4.2: deficiency, relevance, contamination' }
    ],

    vocab: [
      { term: 'Criteria (sing. criterion)', tag: 'Core', tagColor: 'sky', def: 'Outcome variables such as measures of employee knowledge, job performance, or attitudes. Used to show the effectiveness of HR functions or procedures such as selection or training systems.' },
      { term: 'Conceptual criterion', tag: 'Core', tagColor: 'sky', def: 'An abstract idea of the "essence" of a job. It cannot be measured directly. Job analysis is the best route to specifying it, but it is never fully captured.' },
      { term: 'Actual criterion', tag: 'Core', tagColor: 'sky', def: 'The performance measure or measures (e.g., performance ratings, sales figures) you will actually use to try to capture the conceptual criterion. All actual criteria have some degree of unreliability and measurement error.' },
      { term: 'Criterion problem', tag: 'Core', tagColor: 'sky', def: 'The difficulty of capturing the conceptual criterion with the actual criterion measures — because the job analysis does not completely define the conceptual criterion, PLUS the actual criterion measures are unreliable and contain measurement error.' },
      { term: 'Criterion deficiency', tag: 'Quality', tagColor: 'red', def: 'The degree to which the actual criterion FAILS TO OVERLAP with the conceptual criterion — i.e., part of the job goes unmeasured.' },
      { term: 'Criterion contamination', tag: 'Quality', tagColor: 'red', def: 'When an actual criterion measure INCLUDES SOMETHING IT SHOULD NOT (e.g., supervisor bias), leading to error.' },
      { term: 'Criterion relevance', tag: 'Quality', tagColor: 'red', def: 'The degree to which the actual criterion OVERLAPS with the conceptual criterion. Increased by reducing deficiency and contamination as much as possible.' },
      { term: 'Dynamic criteria', tag: 'Quality', tagColor: 'red', def: 'The concept that performance for an individual employee may change over time — across tenure, weeks, or even within a single day.' },
      { term: 'Typical performance', tag: 'Quality', tagColor: 'red', def: 'The job performance that an employee USUALLY exhibits. Best predicted by personality.' },
      { term: 'Maximum performance', tag: 'Quality', tagColor: 'red', def: 'The performance that an employee is CAPABLE of carrying out. Best predicted by cognitive ability. Not strongly correlated with typical performance.' },
      { term: 'Composite criterion', tag: 'Design', tagColor: 'blue', def: 'A combination of multiple criteria, added or averaged together (or weighted, usually based on job analysis, then combined), used to show "bottom-line" work performance.' },
      { term: 'Multiple criteria', tag: 'Design', tagColor: 'blue', def: 'Treating each criterion measure separately in an analysis — better for deeper understanding and for organizational research.' },
      { term: 'Task performance (core task performance)', tag: 'Dimension', tagColor: 'green', def: 'The core tasks that make up a particular job, typically shown in a job description. VARIES for different jobs.' },
      { term: 'Contextual performance', tag: 'Dimension', tagColor: 'green', def: 'Behaviors that support the social environment in the workplace. Per Borman & Motowidlo (1997), these behaviors are FAIRLY SIMILAR ACROSS JOBS.' },
      { term: 'Organizational citizenship behaviors (OCBs)', tag: 'Dimension', tagColor: 'green', def: 'Behaviors focused on helping individual coworkers and helping to support the organization. Can be directed toward coworkers OR toward the organization (Williams & Anderson, 1991).' },
      { term: 'Citizenship fatigue', tag: 'Dimension', tagColor: 'green', def: 'Bolino et al. (2015) — fatigue from excessive OCBs, which may in turn cause employees to show FEWER OCBs in the future.' },
      { term: 'Counterproductive work behavior (CWB)', tag: 'Dimension', tagColor: 'green', def: 'Work behaviors such as theft, derailment of others, and abusive leadership (plus high levels of organizational politicking). Not simply the opposite of OCBs, but correlated −.32 with them.' },
      { term: 'Adaptive behavior', tag: 'Dimension', tagColor: 'green', def: 'Includes adjusting to new social and task environments: adapting to work stress, solving problems creatively, handling emergencies, and cultural and interpersonal adaptability (Pulakos et al., 2000).' },
      { term: 'Creative performance', tag: 'Dimension', tagColor: 'green', def: 'Involves problem-finding, flexibility, originality, and evaluation of ideas. Example behaviors: taking risks in generating new ideas and identifying opportunities.' },
      { term: 'Objective measures', tag: 'Measure type', tagColor: 'amber', def: 'Performance measures NOT based on the judgment of others — such as number of sales or number of units produced.' },
      { term: 'Subjective measures', tag: 'Measure type', tagColor: 'amber', def: 'Performance measures BASED on the judgment of another person — such as supervisor performance ratings, the most-used measure in test validation.' },
      { term: 'Presenteeism', tag: 'Measure type', tagColor: 'amber', def: 'A situation in which a worker comes to work sick, perhaps because they thought the boss expected them to. Antecedents include strict absence policies, job insecurity, and (paradoxically) higher engagement.' },
      { term: 'Shrinkage', tag: 'Measure type', tagColor: 'amber', def: 'The degree to which organizational materials, inventory, or supplies disappear — used as a proxy for theft, though not all missing material is necessarily stolen.' },
      { term: 'Safety climate', tag: 'Context', tagColor: 'violet', def: 'The support for safety in the employee’s social environment at work. Safety behavior is a function of both the individual and this climate (Christian et al., 2009).' },
      { term: 'Value-added measurement', tag: 'Case study', tagColor: 'violet', def: 'A method of assessing teacher performance: a model predicts how well a student should perform based on past history, ties performance to individual teachers and subjects, and rates the teacher by whether students exceed or fall short of expectation.' }
    ],

    laws: [
      { name: 'The purpose of criteria', desc: 'Criteria exist to show that HR interventions actually work — that selection tests predict performance, training improves knowledge, and safety programs reduce accidents. Without good criteria you cannot demonstrate value.' },
      { name: 'All actual criteria are flawed', desc: 'Every actual criterion measure contains some degree of unreliability and error. Objective measures are not exempt: work conditions, equipment, and colleague support vary.' },
      { name: 'Performance = person + social environment + physical environment', desc: 'An employee’s performance is a function of their KSAOs and motivation, the social environment (e.g., safety climate), and the physical environment (tools, equipment).' },
      { name: 'Deficiency vs. contamination', desc: 'Deficiency = the actual criterion MISSES part of the conceptual criterion. Contamination = the actual criterion INCLUDES something it should not. Relevance = the overlap, improved by reducing both.' },
      { name: 'Overlap the concept, not each other', desc: 'Choose actual criteria that overlap as much as possible with the conceptual criterion but NOT with each other. Redundant criteria explain little unique variance.' },
      { name: 'Typical ≠ maximum', desc: 'Typical and maximum performance are not strongly correlated, are distinct constructs with different antecedents — maximum predicted by cognitive ability, typical by personality.' },
      { name: 'Unreliable criteria hide real effects', desc: 'An unreliable criterion cannot detect differences among employees. It could make a good selection test look invalid or an effective training program look like a failure.' },
      { name: 'Composites hide variation', desc: 'A composite gives the bottom line and communicates well to management, but it MASKS differences among the individual criteria — the training example, where calls handled barely moved.' },
      { name: 'Contextual performance generalizes; task performance does not', desc: 'Core task performance varies across jobs by definition. Contextual performance behaviors are fairly similar across jobs (Borman & Motowidlo, 1997).' },
      { name: 'More OCBs are not always better', desc: 'Excessive citizenship produces citizenship fatigue and crowds out task performance. Bergeron et al. (2013): OCB-heavy employees had fewer salary increases and advanced less quickly.' },
      { name: 'CWBs are not the inverse of OCBs', desc: 'They are distinct constructs, correlated −.32. Both split into interpersonal and organizational targets.' },
      { name: 'No single best measure — combine them', desc: 'Use multiple types of performance measures that complement each other: objective data offsets rater bias; supervisor judgment supplies situational knowledge objective figures miss.' },
      { name: 'Big ≠ good', desc: 'Just because data are "big" does not mean they are of high quality — a critical issue with all job performance measures.' }
    ],

    methods: [
      { name: 'D-C-R', expand: 'Deficiency, Contamination, Relevance', desc: 'The three regions of Figure 4.2. Deficiency = missing; Contamination = shouldn’t be there; Relevance = the overlap.' },
      { name: 'Conceptual = ideal, Actual = available', expand: '', desc: 'The conceptual criterion is the abstract essence of the job (unmeasurable); the actual criterion is what you can really collect (always flawed).' },
      { name: 'Composite for the boardroom, multiple for the lab', expand: '', desc: 'Use a composite for bottom-line communication with management; keep criteria separate for research depth and diagnostic value.' },
      { name: 'Task varies, contextual generalizes', expand: '', desc: 'Core task performance differs by job; contextual performance behaviors are fairly similar across jobs.' },
      { name: 'PVHFE', expand: 'Persist, Volunteer, Help, Follow rules, Endorse objectives', desc: 'Borman & Motowidlo’s five contextual performance behaviors (Table 4.2).' },
      { name: 'Campbell’s eight', expand: 'Technical, Communication, Initiative/effort, CWB, Hierarchical leadership, Hierarchical management, Peer/team leadership, Peer/team management', desc: 'Note the 2×2 in the last four: leadership vs. management × hierarchical vs. peer/team.' },
      { name: 'Objective measures and their confounds', expand: 'Sales→territory; Units→equipment; Absence→excused?; Tardiness→job relevance; Turnover→why?; Complaints→staffing; Theft→undetected', desc: 'For each objective measure, name the situational factor that contaminates it.' },
      { name: 'Cognitive → maximum, Personality → typical', expand: '', desc: 'The antecedent split between maximum and typical performance (Marcus et al., 2007).' }
    ]
  },

  // ==================================================================== QUESTIONS
  questions: [
    {
      q: 'In I-O psychology, "criteria" are best defined as:',
      type: 'mcq',
      choices: [
        'The minimum qualifications an applicant must meet to be considered for a job',
        'Outcome variables such as measures of employee knowledge, job performance, or attitudes, used to show the effectiveness of HR functions',
        'The standards used to determine whether a test is legally defensible',
        'The tasks and KSAOs identified through a job analysis'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'This is the glossary definition (Guion, 2011). Option A describes job specifications (Ch. 3); option D describes job analysis output.'
    },
    {
      q: 'Showing that applicants who score high on a selection test perform better on the job after being hired establishes:',
      type: 'mcq',
      choices: ['Content validity', 'Criterion-related validity', 'Discriminant validity', 'Interrater reliability'],
      correct: 1,
      difficulty: 'M',
      explanation: 'The chapter explicitly links this back to Chapter 2: demonstrating that a test predicts an outcome you care about is the basis for criterion-related validity. It is also why good criteria matter so much.'
    },
    {
      q: 'The Workplace Application on CEO performance notes that CEO performance is commonly assessed in terms of:',
      type: 'mcq',
      choices: [
        'Employee engagement survey scores',
        'Financial performance such as stock price — the short-term benefit for stockholders',
        'Workplace safety and litigation records',
        'Development of future talent in the company'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Options C and D are among the measures that "might also be considered — but often are not." Researchers continue to find that firm performance and CEO pay are often not aligned.'
    },
    {
      q: 'The conceptual criterion is best described as:',
      type: 'mcq',
      choices: [
        'The average of several actual performance measures',
        'An abstract idea of the "essence" of a job that cannot be measured directly',
        'The supervisor’s written performance appraisal',
        'The set of tasks listed in a job description'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'It is a concept — what makes up the job, what KSAOs it involves, what behaviors it includes, IF these could be perfectly measured. Job analysis is the best route to specifying it, but it can never be fully captured.'
    },
    {
      q: 'Which statement about actual criterion measures is correct?',
      type: 'mcq',
      choices: [
        'Objective measures are free of error; only subjective measures contain error',
        'ALL actual criterion measures are flawed in some way because they have some degree of error',
        'Actual criteria are error-free if derived from a thorough job analysis',
        'Actual criteria contain error only when collected from a single source'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'The chapter is emphatic. Even "objective" measures such as drinks produced per hour are affected by differences in equipment and colleague support — they "may not be able to capture all the nuances of the particular situation" (Austin & Villanova, 1992).'
    },
    {
      q: 'Christian et al. (2009) found that employee safety behaviors are a function of individual characteristics AND:',
      type: 'mcq',
      choices: [
        'The employee’s cognitive ability',
        'The safety "climate" of the work site — the support for safety in the employee’s social environment',
        'The employee’s tenure with the organization',
        'The frequency of supervisor performance ratings'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'This supports the chapter’s broader claim that performance is a function of the employee’s KSAOs and motivation, the SOCIAL environment such as climate, and the PHYSICAL environment such as tools and equipment.'
    },
    {
      q: 'The "criterion problem" refers to:',
      type: 'mcq',
      choices: [
        'The difficulty of getting supervisors to complete performance appraisals on time',
        'The difficulty of capturing the conceptual criterion with the actual criterion measures, because job analysis does not completely define the conceptual criterion AND actual measures contain error',
        'The legal challenge of defending performance measures in court',
        'The problem of employees gaming objective performance metrics'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'The problem has exactly two halves — an incomplete conceptual specification and error-laden actual measures. The chapter calls it a perennial challenge in I-O psychology (Guion, 2011; Ryan & Ployhart, 2014).'
    },
    {
      q: 'A car rental company measures customer service assistants using only customer complaints, leaving out the number of customer calls each employee processes. This is an example of:',
      type: 'mcq',
      choices: ['Criterion contamination', 'Criterion deficiency', 'Criterion relevance', 'Dynamic criteria'],
      correct: 1,
      difficulty: 'M',
      explanation: 'Deficiency is the degree to which the actual criterion FAILS TO OVERLAP with the conceptual criterion — part of the job goes unmeasured. This is the textbook’s own example.'
    },
    {
      q: 'A paper mill uses supervisor ratings as its actual criterion, and those ratings are affected by supervisor bias. This is an example of:',
      type: 'mcq',
      choices: ['Criterion deficiency', 'Criterion contamination', 'Criterion relevance', 'Criterion redundancy'],
      correct: 1,
      difficulty: 'M',
      explanation: 'Contamination is when an actual criterion measure includes something that it should not — here, bias — leading to error. It is the region of the actual-criterion ellipse lying OUTSIDE the conceptual criterion.'
    },
    {
      q: 'Criterion relevance can be increased by:',
      type: 'mcq',
      choices: [
        'Adding more redundant measures of the same job aspect',
        'Reducing criterion deficiency and criterion contamination as much as possible',
        'Switching entirely to objective measures',
        'Increasing the number of raters providing supervisor ratings'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Relevance is the overlap region. Shrinking the part of the job you miss (deficiency) and the error you wrongly include (contamination) both enlarge the overlap.'
    },
    {
      q: 'A coffee shop measures barista performance with three indicators of espresso quality but ignores customer interaction and stocking. The chapter uses this to illustrate:',
      type: 'mcq',
      choices: [
        'Criterion contamination from supervisor bias',
        'Redundant actual criteria that explain little unique variance while leaving important job aspects unmeasured',
        'The difference between typical and maximum performance',
        'The advantage of composite over multiple criteria'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'The recommendation is to choose criteria that overlap as much as possible with the conceptual criterion but NOT with each other. Figure 4.4 shows this failure mode; Figure 4.3 shows the desirable configuration.'
    },
    {
      q: '"Dynamic criteria" refers to the idea that:',
      type: 'mcq',
      choices: [
        'Criterion measures should be updated whenever the job analysis is revised',
        'Performance for an individual employee may change over time — across tenure, weeks, or even within a single day',
        'Different employees require different criterion measures',
        'Criteria should be weighted differently in different organizational units'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Alessandri et al. (2015); Dalal et al. (2020). The practical implication is that you must choose a measurement timeframe suited to your research question — six months versus the long run, for instance.'
    },
    {
      q: 'Sackett et al. (1988) found that employees’ typical and maximum performance are:',
      type: 'mcq',
      choices: [
        'Nearly perfectly correlated',
        'Not strongly correlated',
        'Negatively correlated',
        'Identical for jobs with objective performance measures'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Later research on managers (Marcus et al., 2007) confirmed they are distinct constructs with different antecedents. This is why measuring a training program’s effect on maximum performance may say nothing about typical day-to-day performance.'
    },
    {
      q: 'According to the chapter, maximum performance may be best predicted by ____, and typical performance by ____.',
      type: 'mcq',
      choices: [
        'personality; cognitive ability',
        'cognitive ability; personality',
        'job tenure; cognitive ability',
        'training; personality'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'Marcus et al. (2007). Cognitive ability predicts what you CAN do; personality predicts what you routinely DO. Both predictor types are covered in Chapter 6.'
    },
    {
      q: 'An organization uses a 1–5 performance rating scale, and all employees receive a 5. Which characteristic of good criteria has been violated?',
      type: 'mcq',
      choices: [
        'The criterion must be accepted by employees and supervisors',
        'The criterion must be able to detect differences among employees',
        'The criterion must be collectible without excessive cost',
        'The criterion must be free of contamination'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'The chapter adds the aside "unless, of course, all employees really were outstanding — which is highly unlikely!" A criterion with no variance cannot support any evaluation of selection or training.'
    },
    {
      q: 'An organization decides to use supervisor performance ratings for layoff decisions, without having told supervisors this was possible when they made the ratings. The chapter warns that:',
      type: 'mcq',
      choices: [
        'The ratings will become statistically more reliable',
        'Supervisors and employees may resent it, and supervisors might in future provide inaccurate, useless ratings',
        'The ratings will be legally protected from challenge',
        'Employees will inflate their self-ratings to compensate'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'This illustrates the requirement that criteria be ACCEPTED by employees and supervisors; otherwise their use will be resisted and may even be sabotaged.'
    },
    {
      q: 'The chapter’s example of video-recording all worker performance for months and having trained independent raters score it is used to illustrate which requirement?',
      type: 'mcq',
      choices: [
        'Criteria must be reliable',
        'Criteria must detect differences among employees',
        'Criteria must be collectible without too much cost or disruption',
        'Criteria must be accepted by employees'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'The method might provide good data but would be prohibitively expensive and therefore impractical. Practical feasibility is one of the four characteristics of good criteria.'
    },
    {
      q: 'A composite criterion is:',
      type: 'mcq',
      choices: [
        'The single most valid criterion measure available for a job',
        'A combination of multiple criteria, added or averaged together (or weighted and combined), used to show "bottom-line" performance',
        'A criterion measure collected from more than one rater',
        'A criterion that combines objective and subjective data from the same source'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'Weighting is usually based on job analysis. The alternative is MULTIPLE criteria — treating each measure separately in an analysis.'
    },
    {
      q: 'According to the chapter, a composite criterion is especially useful when:',
      type: 'mcq',
      choices: [
        'You need a deeper understanding of what is happening on each performance dimension',
        'You need the "bottom line" — for example, to present training results to decision-makers in the organization',
        'You are conducting basic organizational research',
        'The criteria are highly redundant with each other'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'The composite is best for bottom-line understanding and for communicating with non-researchers like top management. Multiple, separate criteria are better for deeper understanding and for organizational research.'
    },
    {
      q: 'In Table 4.1, which criterion measure showed almost no improvement from pre- to post-training?',
      type: 'mcq',
      choices: [
        'Performance ratings of effort and motivation (1.5 → 4.5)',
        'Number of units processed (1.4 → 4)',
        'Number of customer service calls handled (1.2 → 2)',
        'The composite average (1.37 → 3.5)'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'Calls handled barely moved. The composite rose from 1.37 to 3.5, making the training look uniformly successful — which is exactly what the chapter warns composites can mask.'
    },
    {
      q: 'What does the training evaluation example demonstrate about composite criteria?',
      type: 'mcq',
      choices: [
        'Composites are always superior because they reduce measurement error',
        'The composite gives only part of the story — it masks substantial differences in how the training affected each individual criterion',
        'Composites cannot be used when criteria are on different scales',
        'Composites should be used only for selection, not training evaluation'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'The masking is consequential: it suggests the training may need to be revised so that it also addresses the number of calls handled — information invisible in the composite alone.'
    },
    {
      q: 'In the Figure 4.7 test validation example, what does closer inspection reveal beyond the composite result?',
      type: 'mcq',
      choices: [
        'The test predicts none of the individual criteria well',
        'The test predicts two criterion measures well but does NOT predict performance ratings of effort and motivation well',
        'The test only predicts performance for high scorers',
        'The composite and individual criteria produce identical conclusions'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'The remedy the chapter suggests is to revise the test (e.g., adding questions) or add other tests to the battery so that effort and motivation ratings can also be predicted.'
    },
    {
      q: 'Task performance and contextual performance differ in that:',
      type: 'mcq',
      choices: [
        'Task performance is similar across jobs while contextual performance varies',
        'Contextual performance behaviors are fairly similar across jobs, while task performance varies by job',
        'Only task performance is captured in supervisor ratings',
        'Contextual performance is always measured objectively'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Borman & Motowidlo (1997). Core task performance is job-specific by definition — coffee for a barista, code for a programmer. Contextual performance supports the social environment and generalizes across jobs.'
    },
    {
      q: 'Which of the following is NOT one of the five behaviors in Borman and Motowidlo’s taxonomy of contextual performance (Table 4.2)?',
      type: 'mcq',
      choices: [
        'Volunteering to carry out task activities that are not formally part of own job',
        'Helping and cooperating with others',
        'Meeting or exceeding assigned production quotas',
        'Endorsing, supporting, and defending organizational objectives'
      ],
      correct: 2,
      difficulty: 'H',
      explanation: 'The five are: persisting with enthusiasm and extra effort; volunteering for non-formal activities; helping and cooperating; following organizational rules and procedures; and endorsing/supporting/defending organizational objectives. Production quotas are TASK performance.'
    },
    {
      q: 'Organizational citizenship behaviors (OCBs) can be directed toward:',
      type: 'mcq',
      choices: [
        'Coworkers or the organization',
        'Customers or competitors',
        'Supervisors or subordinates only',
        'Tasks or contexts'
      ],
      correct: 0,
      difficulty: 'M',
      explanation: 'Williams and Anderson (1991) distinguished OCBs directed at coworkers (e.g., helping a coworker) from those directed at the organization (e.g., supporting the organization).'
    },
    {
      q: 'Bergeron et al. (2013) studied employees at a professional services firm and found that:',
      type: 'mcq',
      choices: [
        'Employees who spent more time on OCBs had faster advancement and larger salary increases',
        'Employees who spent more time on OCBs spent less time on task performance, and had FEWER salary increases and advanced LESS quickly',
        'OCBs and task performance were unrelated to advancement',
        'Only contextual performance predicted advancement'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'Task performance, not OCBs, drove advancement in this study. The chapter is careful to add that this does not mean employees should avoid OCBs — only that the field should not always assume more OCBs are better.'
    },
    {
      q: 'The term "citizenship fatigue" (Bolino et al., 2015) refers to:',
      type: 'mcq',
      choices: [
        'Supervisors becoming tired of rating citizenship behaviors',
        'Fatigue from excessive OCBs, which may in turn cause employees to show fewer OCBs in the future',
        'Employees becoming cynical about the organization’s mission',
        'The decline of civic engagement among younger workers'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'It is one of two mechanisms the chapter names by which more OCBs may not be better; the second is that time spent supporting the social context may crowd out attention to core job tasks.'
    },
    {
      q: 'What is the correlation between OCBs and CWBs reported in the chapter?',
      type: 'mcq',
      choices: ['−.32', '−.51', '+.32', '−.72'],
      correct: 0,
      difficulty: 'H',
      explanation: 'Dalal (2005). The chapter stresses that CWBs are NOT simply the opposite of OCBs — a correlation of −.32 leaves a great deal of independent variance.'
    },
    {
      q: 'Like OCBs, CWBs can be classified as either interpersonal or organizational. Which pairing is correct?',
      type: 'mcq',
      choices: [
        'Interpersonal: working slowly, stealing. Organizational: gossiping, verbal abuse',
        'Interpersonal: gossiping, sexual harassment, verbal abuse. Organizational: working slowly, stealing',
        'Interpersonal: theft. Organizational: absenteeism',
        'Interpersonal: abusive leadership only. Organizational: everything else'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'Mackey et al. (2021). Interpersonal CWBs target people; organizational CWBs target the organization itself.'
    },
    {
      q: 'Which of the following is one of Pulakos et al.’s (2000) dimensions of adaptive behavior?',
      type: 'mcq',
      choices: [
        'Endorsing and defending organizational objectives',
        'Demonstrating cultural adaptability',
        'Allocating organizational resources',
        'Meeting production targets under pressure'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'The eight dimensions are handling emergencies, handling work stress, solving problems creatively, dealing with uncertain situations, learning new tasks/technologies, interpersonal adaptability, cultural adaptability, and physically oriented adaptability. Option A is contextual performance; option C is Campbell’s hierarchical management performance.'
    },
    {
      q: 'Huang et al. (2014) identified which personality variables as related to adaptive performance?',
      type: 'mcq',
      choices: [
        'Extraversion and agreeableness',
        'Ambition and emotional stability',
        'Conscientiousness and openness',
        'Openness and agreeableness'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'This meta-analytic finding is one of the few firm results in a literature the chapter describes as still evolving and marked by disagreement about what adaptive behavior even is (Baard et al., 2014).'
    },
    {
      q: 'Creative performance is described as involving which dimensions?',
      type: 'mcq',
      choices: [
        'Speed, accuracy, and consistency',
        'Problem-finding, ideation (flexibility and originality), and evaluation of ideas',
        'Planning, organizing, and controlling',
        'Persistence, cooperation, and rule-following'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Davis (2009). Example behaviors include taking risks in generating new ideas and identifying opportunities (Tierney et al., 1999). It is important especially for certain types of jobs.'
    },
    {
      q: 'Which framework is described as "perhaps the most influential" of work performance, containing eight broad dimensions?',
      type: 'mcq',
      choices: [
        'Borman and Motowidlo’s contextual performance taxonomy',
        'Pulakos et al.’s adaptive behavior taxonomy',
        'Campbell and colleagues’ model',
        'Williams and Anderson’s OCB taxonomy'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'Campbell et al.’s frameworks were developed to be comprehensive — broad enough to describe dimensions common to all jobs while including sufficient specificity. The most recent version is Campbell & Wiernik (2015).'
    },
    {
      q: 'Which is NOT one of Campbell and Wiernik’s (2015) eight dimensions?',
      type: 'mcq',
      choices: [
        'Technical performance',
        'Communication',
        'Adaptive performance',
        'Peer/team leadership'
      ],
      correct: 2,
      difficulty: 'H',
      explanation: 'The eight are technical performance, communication, initiative/persistence/effort, counterproductive work behavior, supervisory-managerial-executive leadership, hierarchical management performance, peer/team leadership, and peer/team member management performance. Adaptive behavior is one of the dimensions Campbell argues FALLS UNDER these eight.'
    },
    {
      q: 'In Campbell’s model, "hierarchical management performance" is exemplified by:',
      type: 'mcq',
      choices: [
        'Allocating organizational resources',
        'Presenting information clearly in writing',
        'Helping a coworker complete a task',
        'Working as a team member to help manage the team'
      ],
      correct: 0,
      difficulty: 'H',
      explanation: 'Option B is communication; option D is peer/team member management performance. Note the structure: dimensions 5–8 cross leadership vs. management with hierarchical vs. peer/team.'
    },
    {
      q: 'Subjective performance measures are defined as measures:',
      type: 'mcq',
      choices: [
        'That employees complete about themselves',
        'Based on the judgment of another person, such as supervisor performance ratings',
        'That cannot be quantified numerically',
        'Collected through unstructured interviews'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'Supervisor performance ratings are described as "perhaps the most used job performance measures in terms of test validation" — and they are subjective because they rest on one person’s judgment of another.'
    },
    {
      q: 'Tamara sells $40,000 of computer equipment per month and Sam sells $30,000, but Tamara inherited a client list from a departing colleague. This scenario illustrates:',
      type: 'mcq',
      choices: [
        'That objective measures such as sales figures are not without flaws',
        'Criterion deficiency in supervisor ratings',
        'The difference between typical and maximum performance',
        'A composite criterion masking individual differences'
      ],
      correct: 0,
      difficulty: 'M',
      explanation: 'The parallel example is Javier and Caroline, where Caroline sells more but Javier works in a less busy store in a less wealthy part of town. Objectivity does not guarantee fairness or accuracy.'
    },
    {
      q: 'Emile makes 10 units per day and Renee makes 8. What complication does the chapter raise?',
      type: 'mcq',
      choices: [
        'Emile may have inflated his self-report',
        'Emile works in a more modern factory than Renee, which could affect productivity',
        'Units produced is a subjective measure',
        'Renee may have higher maximum performance'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'The physical work environment — equipment — contaminates an apparently objective count. This is the same logic as the barista drinks-per-hour example.'
    },
    {
      q: 'Presenteeism is defined as:',
      type: 'mcq',
      choices: [
        'Attending meetings without contributing',
        'A situation in which a worker comes to work sick, perhaps because they thought the boss expected them to',
        'Working excessive overtime to appear committed',
        'Remaining physically present but mentally disengaged'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'It can cause serious financial losses because of the employee’s own illness AND because they can make others ill. It was a particular concern during the Covid-19 pandemic given the illness’s contagiousness.'
    },
    {
      q: 'Miraglia and Johns’s (2016) meta-analysis found that antecedents of presenteeism include:',
      type: 'mcq',
      choices: [
        'Generous sick leave and low job demands',
        'Strict absence policies and job insecurity — but also higher engagement',
        'Only strict absence policies',
        'High pay and strong union protection'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'The inclusion of higher engagement is what makes the finding interesting — it suggests the complexity of presenteeism, since highly engaged employees may come in sick out of commitment rather than fear.'
    },
    {
      q: 'Why does the chapter say turnover is difficult to use as a criterion measure?',
      type: 'mcq',
      choices: [
        'Turnover is rarely recorded by organizations',
        'It can mean very different things — a top performer leaving for a better job versus a poor performer quitting before being fired',
        'Turnover is a subjective measure',
        'Turnover cannot be predicted by any selection procedure'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'When a person quits it is often hard to know why, or it may not be well documented. Note the chapter also says organizations DO try to predict turnover — e.g., by asking applicants how many jobs they have held in the last five years (biodata, Ch. 6).'
    },
    {
      q: '"Shrinkage" refers to:',
      type: 'mcq',
      choices: [
        'A decline in workforce size due to attrition',
        'The degree to which organizational materials, inventory, or supplies disappear',
        'A reduction in the range of performance ratings over time',
        'The narrowing of a job’s task set as automation increases'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'It is used as a theft proxy, but the chapter cautions that it would be incorrect to assume all missing material was necessarily stolen, and that it is often difficult to tie missing material to any particular employee.'
    },
    {
      q: 'The chapter’s example of the frequently late but highly effective administrator is used to argue that:',
      type: 'mcq',
      choices: [
        'Tardiness should never be measured',
        'Tardiness may not be that important for certain jobs, and effectiveness in other aspects can far outweigh it',
        'Objective measures are more valid than subjective ones',
        'Supervisors should not be evaluated on the same criteria as employees'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'The chapter contrasts her with an emergency medical worker an hour late for a shift, "possibly leaving people in danger" — job relevance determines whether a measure is meaningful.'
    },
    {
      q: 'What does the chapter recommend as the best strategy given that no single performance measure is best?',
      type: 'mcq',
      choices: [
        'Use only supervisor ratings, since they are most common',
        'Use multiple types of job performance measures that complement each other in terms of strengths and weaknesses',
        'Use only objective measures, since they avoid rater bias',
        'Use a single composite of all available measures'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Objective measures may compensate for biases in subjective ratings, while subjective ratings may capture factors objective measures miss — such as a supervisor knowing Sam is the better salesperson despite Tamara’s higher figures.'
    },
    {
      q: 'According to the Legal Issues box, job performance measures used to make personnel decisions such as promotions:',
      type: 'mcq',
      choices: [
        'Are exempt from selection law because they concern current employees',
        'Can be subject to the same legal guidelines as personnel selection methods',
        'Must be approved by an institutional review board',
        'Must be based exclusively on objective data'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'This is especially an issue if the measures are shown to be biased against legally protected groups and cannot be demonstrated to be job-related. Organizations should carefully document any criterion measures affecting employees.'
    },
    {
      q: 'Regarding data protection for performance data, the chapter notes that:',
      type: 'mcq',
      choices: [
        'US and European rules are essentially identical',
        'Some European countries have MORE restrictive rules for the collection, use, and protection of personal data',
        'Only healthcare organizations face data security requirements',
        'Performance data are exempt from privacy law'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'CIPD (2020). The chapter recommends developing protocols aligned with national and state guidelines for keeping sensitive performance data secure.'
    },
    {
      q: 'What is the central challenge in measuring performance across multinational corporations?',
      type: 'mcq',
      choices: [
        'Time zone differences in data collection',
        'Comparability across countries and cultures — national culture affects performance management systems, and even the PURPOSE of evaluation varies by country',
        'The unavailability of supervisor ratings outside the US',
        'Legal prohibitions on cross-border data analysis'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'DeNisi & Smith (2014); Cascio (2006). Complications include language and the perceived importance of different performance dimensions. The chapter notes research in this area is scant.'
    },
    {
      q: 'The Technology & I-O box warns that with big data approaches to performance measurement:',
      type: 'mcq',
      choices: [
        'Sample sizes are typically too small for meaningful analysis',
        'Just because data are "big" does not mean they are of high quality — a critical issue with all job performance measures',
        'Only objective measures can be collected',
        'Legal guidelines prohibit their use in the US'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'The box also flags privacy issues — perceived invasiveness to employees and the security of such data. Sources named include Internet-connected devices, employee badges, workplace sensors, and cameras.'
    },
    {
      q: 'The Current Research Issues section argues for measuring performance:',
      type: 'mcq',
      choices: [
        'Only at the individual level, to avoid ecological fallacy',
        'Dynamically and at multiple levels — individual, team, organization, and even entire countries and societies',
        'Exclusively through supervisor ratings, for comparability',
        'Once per year, to reduce measurement burden'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Recognizing the dynamic nature of work helps move beyond a "snapshot" of performance, and Aguinis & Kraiger (2009) argue for examining effects on work units, organizations, and societies. Relatively few studies have taken this approach.'
    },
    {
      q: 'A hospital evaluates ER nurses using only patient satisfaction scores. Based on Chapter 4, the most accurate critique is that this criterion is likely:',
      type: 'mcq',
      choices: [
        'Contaminated but not deficient, because satisfaction is subjective',
        'Deficient, because it fails to capture important parts of the conceptual criterion such as clinical task performance and adaptive behavior in emergencies',
        'Relevant, because patients directly observe nurse performance',
        'A composite criterion by definition'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'Deficiency is the failure to overlap the conceptual criterion. It is also plausibly contaminated (satisfaction reflects understaffing and wait times outside the nurse’s control), which is why the chapter recommends multiple complementary measures.'
    },
    {
      q: 'A researcher evaluating a sales training program has sales numbers, customer ratings of helpfulness, and supervisor ratings of team effectiveness. Based on the chapter, the best approach is to:',
      type: 'mcq',
      choices: [
        'Use only the composite, since management needs a bottom line',
        'Use only sales numbers, since they are objective',
        'Examine both the composite and the separate criteria — the composite for the bottom line, the separate measures to see which dimensions the training actually moved',
        'Discard supervisor ratings because they are subjective'
      ],
      correct: 2,
      difficulty: 'H',
      explanation: 'This is exactly the lesson of the Figure 4.6 example, where the composite obscured that call handling barely improved. There is no single correct approach, but examining both gives the bottom line AND the diagnostic detail needed to revise the program.'
    },
    {
      q: 'Value-added measurement of teacher performance uses:',
      type: 'mcq',
      choices: [
        'Classroom observations by trained raters',
        'Statistical analysis predicting how well a student should perform based on past history, then attributing deviations to individual teachers',
        'Peer ratings from other teachers in the school',
        'Student self-reports of learning'
      ],
      correct: 1,
      difficulty: 'H',
      explanation: 'Critics note it does not capture what teachers actually do in the classroom; the case study also reports that the wealthiest districts are three times more likely to have teachers with high value-added scores — a strong hint of contextual contamination.'
    }
  ]
};
