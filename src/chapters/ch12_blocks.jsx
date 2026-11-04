import React from 'react';
import { Callout, Table, Card } from '../components/Visual.jsx';

const IMG = 'ch12_stress_ohp';

export default [
  // ------------------------------------------------------------------ 1
  {
    id: 'ohp-and-stress-basics',
    title: 'Occupational Health Psychology & What Stress Is',
    subtitle: 'The cost of stress, the definitions, and eustress',
    content: (
      <>
        <Callout kind="info" title="What OHP is">
          <strong>Occupational health psychology (OHP)</strong> is a relatively new discipline{' '}
          <strong>primarily concerned with the health and safety of workers</strong> — both their{' '}
          <strong>psychological AND physical</strong> health and safety. It has its own journals and
          societies, and draws on health psychology, industrial engineering, and public health.
        </Callout>

        <Callout kind="danger" title="The numbers that open the chapter">
          <Table
            headers={['Figure', 'Detail']}
            rows={[
              ['$300 billion+ per year', 'Estimated cost of job stress to US organizations — absenteeism, turnover, reduced productivity, medical bills (Rosch, 2001)'],
              ['15.4 million workdays', 'Lost to stress in Great Britain alone in 2018/19'],
              ['2.8 million cases', 'Non-fatal occupational injury and illness in US private industry, 2018 — about 900,000 resulting in days away from work'],
              ['5,250 workers', 'Killed at work in the US in 2018'],
              ['Stress and mortality', 'A seven-year study found workers in jobs with HIGH DEMANDS and LOW CONTROL were more inclined to have died (Gonzalez-Mulé & Cockburn, 2017)']
            ]}
          />
        </Callout>

        <Card title="The core definitions">
          <Table
            headers={['Term', 'Glossary definition']}
            rows={[
              ['Well-being', 'A concept that includes workers’ HEALTH, SAFETY, SATISFACTION, and ENGAGEMENT.'],
              ['Stress', 'The body’s reaction to a CHANGE that requires a physical, mental, or emotional adjustment or response.'],
              ['Stressor', 'Events, contexts, or demands which CAUSE a stress reaction by elevating levels of adrenaline and other responses.'],
              ['Strain', 'A RESPONSE to stress.'],
              ['Eustress', '"GOOD" stress, caused by a POSITIVE response to a DESIRED stressor — such as a wedding or a new job.']
            ]}
          />
          <p className="mt-2 text-sm">
            <strong>Eustress is the one students miss.</strong> A wedding is a happy event and still
            stressful — stress is about <strong>adjustment required</strong>, not about whether the
            event is good or bad.
          </p>
        </Card>

        <Callout kind="warn" title="How pervasive it is">
          <ul className="list-disc pl-5 space-y-0.5">
            <li>
              <strong>64 percent</strong> of working adults reported that work is a significant source
              of stress
            </li>
            <li>
              <strong>75 percent</strong> of employees believe workers have{' '}
              <strong>more on-the-job stress than a generation ago</strong>
            </li>
            <li>
              <strong>42 percent</strong> reported that{' '}
              <strong>yelling and other verbal abuse is common</strong>
            </li>
          </ul>
          <p className="mt-2">
            And the chapter&rsquo;s framing claim: <strong>not all people respond to stress in the same
            ways</strong> — some become stressed at the slightest challenge while others stay calm in
            extreme situations, which is why individual differences get their own section.
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 2
  {
    id: 'stress-models',
    title: 'The Stress Process: Four Models',
    subtitle: 'GAS, the transactional model, COR, and job demands–resources',
    images: [
      {
        src: `${IMG}/12a_fig12-1_general_adaptation_syndrome.png`,
        alt: 'Figure 12.1: a curve of resistance to stress over time, dipping below homeostasis when the stressor occurs, rising through the alarm and resistance phases, then falling steeply in exhaustion.',
        caption: 'Figure 12.1 — Selye’s General Adaptation Syndrome: alarm, resistance, exhaustion.'
      },
      {
        src: `${IMG}/12b_fig12-2_job_demands_resources.png`,
        alt: 'Figure 12.2: a balance beam tipping, with job resources (rewards, supervisor support, job security and control) on one side and job demands (unpredictable work schedule, environment, time pressure, physical workload) on the other.',
        caption: 'Figure 12.2 — The job demands–resources model: balancing resources against demands.'
      }
    ],
    content: (
      <>
        <Callout kind="danger" title="Model 1 — General Adaptation Syndrome (Hans Selye)">
          Predicts that when confronted with a threat, the body responds instinctively via the{' '}
          <strong>&ldquo;fight or flight&rdquo; response</strong>, which boils down to one question:{' '}
          <strong>&ldquo;Can I handle this or should I flee?&rdquo;</strong>
          <Table
            headers={['Stage', 'What happens']}
            rows={[
              ['1. Alarm', 'An outside stressor is DETECTED and the body prepares by increasing CORTISOL and ADRENALINE. If an effective response is given, the person relaxes and the body returns to its resting state.'],
              ['2. Resistance', 'The body CONTINUES releasing cortisol and begins TAPPING STORES of sugars and eventually FATS to meet ongoing demands. Not an effective long-term strategy.'],
              ['3. Exhaustion', 'The body has RUN OUT of fats and sugars, and long-term cortisol has taken its toll, leaving the individual WEAKENED. Maladaptive quick fixes (energy drinks, caffeine, drugs, alcohol, junk food) become tempting — creating a vicious cycle of short-term solutions to long-term needs.']
            ]}
          />
          <p className="mt-2 text-xs">
            Why it misfires today: the body&rsquo;s response is{' '}
            <strong>the same for a wild animal attack or an important test</strong>, so raised heart
            rate and adrenaline do not serve us well before a presentation.
          </p>
        </Callout>

        <Card title="Model 2 — Transactional model of stress and coping (Lazarus)">
          <p className="text-sm mb-2">
            The question it answers: why can one person work on a single project and be very stressed
            while another works on four and shows no signs?
          </p>
          <p className="text-sm">
            <strong>Stress does NOT originate from the event itself but from one&rsquo;s
            INTERPRETATION of the event</strong> — the <strong>appraisal</strong> of what it means and
            whether it is a threat, along with an evaluation of{' '}
            <strong>what resources the individual has</strong> to react. <strong>Coping follows
            appraisal</strong> and represents the emotional response to that perceived meaning. A key
            aspect is that <strong>stress and coping are a PROCESS.</strong>
          </p>
          <p className="text-sm mt-2">
            <strong>Criticism:</strong> little applied use, and researchers have been unable to find
            solid evidence pointing to <strong>what determines how well a person will cope</strong>.
          </p>
        </Card>

        <Card title="Model 3 — Conservation of Resources (Hobfoll)">
          <p className="text-sm mb-2">
            A set of <strong>resources individuals seek to acquire and maintain</strong> in order to
            accommodate, withstand, or overcome potential threats:
          </p>
          <Table
            headers={['Resource type', 'Examples']}
            rows={[
              ['Objects', 'A home, clothing'],
              ['Conditions', 'Living arrangements, financial security'],
              ['Personal characteristics', 'Self-esteem, feelings of autonomy'],
              ['Energies', 'Time, knowledge']
            ]}
          />
          <p className="mt-2 text-sm">
            <strong>Stress occurs when there is a LOSS of resources or a THREAT of losing them.</strong>
          </p>
          <Callout kind="warn" title="The criticism worth knowing">
            Some have criticized COR as <strong>so broad and general that it includes nearly
            everything</strong> and is not sufficiently specific — it is{' '}
            <strong>difficult to think of something that might NOT fit the definition of a
            stressor</strong>, which undermines its usefulness.
          </Callout>
        </Card>

        <Callout kind="tip" title="Model 4 — Job demands–resources (JDR)">
          Grew out of <strong>Karasek&rsquo;s job demands–CONTROL model</strong>, which established
          that <strong>job control can mitigate the effects of demands on stress</strong>.
          <p className="mt-2">
            <strong>JDR&rsquo;s claim:</strong> strain results from{' '}
            <strong>MISMATCHES between job demands and the resources available</strong>. The model is
            explicit that <strong>ALL jobs have demands that require resources to be expended</strong>{' '}
            — strain appears when <strong>demands OUTWEIGH resources</strong>.
          </p>
          <Table
            headers={['Demands', 'Resources that buffer them']}
            rows={[
              ['Role conflict and ambiguity', 'Support from supervisors and coworkers'],
              ['Interpersonal conflicts', 'Job security'],
              ['Work–life conflict', 'Control'],
              ['High workload, poor conditions, emotional demands', 'Participation']
            ]}
          />
          <p className="mt-2">
            <strong>The worked example:</strong> Greg and Max face the same tight deadline on the same
            complex project. <strong>Greg&rsquo;s boss is available to answer questions; Max&rsquo;s
            boss is not answering email.</strong> Max&rsquo;s strain is greater because Greg has an
            additional resource.
          </p>
        </Callout>

        <Callout kind="danger" title="Challenge vs. hindrance stressors">
          <Table
            headers={['Type', 'Definition', 'Examples', 'Effect']}
            rows={[
              [
                'Hindrance stressors — the "BAD" ones',
                'Job demands NEGATIVELY linked to work engagement.',
                'Job constraints, hassles, lack of resources, organizational politics. E.g. struggling to learn a complicated reimbursement system at a new job — it only gets in the way.',
                'Linked to DECREASED learning performance; HURT sleep quality'
              ],
              [
                'Challenge stressors — the "GOOD" ones',
                'Job demands that are DEVELOPMENTAL and POSITIVELY related to engagement.',
                'Role demands, time urgency, workload. E.g. a tough assignment that includes meeting with clients — stressful, but it strengthens performance long-run.',
                'Linked to INCREASED learning performance; AIDED sleep quality'
              ]
            ]}
          />
          <p className="mt-2">
            Two meta-analytic findings: <strong>challenge stressors account for job outcomes BEYOND
            what hindrance stressors explain</strong>, and <strong>both types relate to strain and
            burnout — but hindrance stressors have the BIGGER influence</strong> on those negative
            outcomes (Podsakoff et al., 2007).
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 3
  {
    id: 'stressors',
    title: 'Stressors: The Antecedents of Strain',
    subtitle: 'Role demands, information overload, work–life tradeoffs, interpersonal challenges, evaluation apprehension',
    images: [
      {
        src: `${IMG}/12c_fig12-3_stressors_antecedents_strain.png`,
        alt: 'Figure 12.3: five boxes — role demands, information overload, work–life tradeoffs, interpersonal challenges, evaluation apprehension — all pointing arrows into a central circle labeled Strain.',
        caption: 'Figure 12.3 — Five stressors that act as antecedents of strain.'
      }
    ],
    content: (
      <>
        <Callout kind="danger" title="The principle that governs all of them: stressors are CUMULATIVE">
          <strong>The more stressors a person has, and over a greater length of time, the more likely
          negative outcomes will manifest.</strong>
          <p className="mt-2">
            One stressor might not be a big deal, and maybe even 10 small ones are handleable —{' '}
            <strong>but sometimes that one additional little thing is too much</strong>. A one-time
            disagreement with a coworker is easy to handle; the same disagreement continuing over a
            long period wears you down, because{' '}
            <strong>a person&rsquo;s resistance to stressors breaks down over time.</strong>
          </p>
        </Callout>

        <Card title="1. Role demands">
          <Table
            headers={['Stressor', 'Definition', 'Example']}
            rows={[
              [
                'Role ambiguity',
                'A LACK OF CLARITY regarding one’s work roles — the organization does not give enough information about what is expected.',
                'Your supervisor tells you to "Make the client happy" with no parameters or guidance.'
              ],
              [
                'Role conflict',
                'Having MULTIPLE CONTRADICTORY demands at work. Doing one task to one person’s specifications means disappointing someone else.',
                'Betina is told by the regional director to maximize salesforce hours this quarter — but also has a mandate from the COO not to offer any overtime.'
              ]
            ]}
          />
          <p className="mt-2 text-sm">Research findings:</p>
          <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
            <li>
              Role AMBIGUITY correlated negatively with job satisfaction, which in turn predicted{' '}
              <strong>organizational citizenship behavior</strong>; role CONFLICT was negatively
              associated with both (Eatough et al., 2011).
            </li>
            <li>
              Role CONFLICT had significant associations with{' '}
              <strong>five of eight physical symptoms</strong> studied — including{' '}
              <strong>back pain, gastrointestinal problems, and sleep disturbances</strong> — while
              role AMBIGUITY correlated with <strong>fatigue</strong> (Nixon et al., 2011).
            </li>
            <li>
              Role conflict lowered engagement, but <strong>transformational leadership may reduce
              this effect</strong> (Breevaart &amp; Bakker, 2018).
            </li>
          </ul>
        </Card>

        <Callout kind="info" title="2. Information overload">
          <strong>Glossary:</strong> exposure to <strong>too much information or data</strong>.
          Multitasking and fragmented attention are related to{' '}
          <strong>decreases in focus, efficiency, and mental acuity</strong>.
          <Table
            headers={['Finding', 'Value']}
            rows={[
              ['Americans check their phones', 'Up to 96 times per day — once every 10 minutes'],
              ['Go to sleep with phone within reach', '70 percent'],
              ['Check work email during non-working hours', '59 percent — though most do not think it impacts their well-being']
            ]}
          />
          <p className="mt-2 text-xs">
            European responses: <strong>Volkswagen and Deutsche Telekom</strong> curbing evening email;
            the German Labor Ministry telling its own managers to stop contacting employees after
            hours; France discouraging emails after 6 p.m.; and{' '}
            <strong>Britain&rsquo;s Rentokil Initial paying an employee 60,000 euros</strong> for
            breaking a law guaranteeing a break from emails. <strong>Daimler</strong> goes furthest —
            messages sent to a vacationing employee are <strong>deleted</strong>, with the sender told
            to contact a colleague or resend later.
          </p>
        </Callout>

        <Callout kind="warn" title="3. Work–life tradeoffs — the arithmetic">
          There are exactly <strong>168 hours in a week</strong>. 25 percent of Americans work more
          than 40 hours, <strong>the average is 46</strong>, and 7 percent work 60 or more — leaving{' '}
          <strong>122 or fewer hours</strong> for everything else. Sleep the recommended eight hours a
          night and <strong>only 76 hours remain</strong>. Caregivers have even less.
          <p className="mt-2">
            <strong>Work–family conflict:</strong> when demands from work and nonwork domains are{' '}
            <strong>negatively affecting one another</strong>. Split into{' '}
            <strong>work-to-family conflict</strong> (work harms nonwork) and{' '}
            <strong>family-to-work conflict</strong> (nonwork harms work).
          </p>
          <p className="mt-2 text-xs">
            Risk factors: <strong>neuroticism and negative affect</strong>. Protective:{' '}
            <strong>internal locus of control, optimism, higher self-efficacy, positive affect</strong>{' '}
            (Allen et al., 2012). Job factors: <strong>longer commute, bringing work home, being
            contacted about work at home</strong>. And working parents with greater{' '}
            <strong>mindfulness</strong> had better work–family balance, slept better, and had more
            vitality.
          </p>
        </Callout>

        <Card title="The Holmes–Rahe scale — cumulative life change">
          <p className="text-sm mb-2">
            Holmes and Rahe (1967) found those reporting <strong>more life-changing events over one
            year</strong> were more likely to experience negative health outcomes. The scale assigns
            point values across <strong>43 life events</strong>, from a vacation (13 points) to the
            death of a spouse (100 points).
          </p>
          <Table
            headers={['Score', 'Chance of stress-related illness in the near future']}
            rows={[
              ['Fewer than 150 points', '30 percent'],
              ['150–299 points', '50 percent'],
              ['300 or more points', '80 percent']
            ]}
          />
          <p className="mt-2 text-sm">
            It is the clearest illustration of the <strong>cumulative</strong> principle — and note that{' '}
            <strong>positive events carry points too</strong> (marriage 50, vacation 13, outstanding
            personal achievement 28).
          </p>
        </Card>

        <Callout kind="danger" title="4 & 5 — Interpersonal challenges and evaluation apprehension">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Interpersonal challenges.</strong>{' '}
              <em>&ldquo;People don&rsquo;t quit their jobs; they quit their managers.&rdquo;</em> Mild
              forms include simply not liking a manager or coworkers; serious forms include{' '}
              <strong>abusive supervision (Ch. 10) and workplace bullying</strong>. A{' '}
              <strong>climate of mistreatment</strong> — an organizational climate supporting bullying
              and aggression — leads to <strong>increased strain and more negative job
              attitudes</strong>.
            </li>
            <li>
              <strong>Evaluation apprehension.</strong> People&rsquo;s concerns about being{' '}
              <strong>evaluated or judged by others</strong>. Being evaluated{' '}
              <strong>can help by creating arousal and motivating effort</strong>, but high levels{' '}
              <strong>reduce employees&rsquo; willingness to SHARE KNOWLEDGE</strong> at work (Bordia
              et al., 2006). Cultural norms matter: Asian-Americans and Chinese respondents reported
              more favorable self-evaluations when apprehension was low, while European Americans
              showed no difference between public and private contexts.
            </li>
          </ul>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 4
  {
    id: 'stress-consequences',
    title: 'Consequences of Stress',
    subtitle: 'Physiological, psychological, behavioral — and the inverted-U',
    images: [
      {
        src: `${IMG}/12d_fig12-4_stress_performance.png`,
        alt: 'Figure 12.4: an inverted-U curve of performance against work-induced stress, labeled inactive and laidback on the low side, fully engaged and motivated at the peak, and anxious and stressed past the stress zone on the high side.',
        caption: 'Figure 12.4 — The stress–performance relationship is an inverted U.'
      }
    ],
    content: (
      <>
        <Card title="Physiological consequences">
          <p className="text-sm mb-2">
            Much stress research was traditionally done by <strong>medical doctors</strong>, since they
            had experience measuring bodily change. Short- and long-term effects include:
          </p>
          <p className="text-sm">
            <strong>Increased heart rate, rapid and shallow breathing, slowed metabolism, physical
            aches and pains, headaches, skin problems, and greater risk of heart attacks.</strong>
          </p>
          <p className="text-sm mt-2">
            Elevated <strong>cortisol</strong> is related to a higher incidence of{' '}
            <strong>cardiovascular disease, cognitive impairment, and Type II diabetes</strong>
            (Lundberg, 2005), plus <strong>asthma, stomach ulcers, alcohol and tobacco misuse</strong>,
            and <strong>insomnia</strong>.
          </p>
        </Card>

        <Callout kind="warn" title="Psychological consequences">
          <Table
            headers={['Outcome', 'Definition / detail']}
            rows={[
              ['Depression', 'A condition in which a person continually feels SAD and HOPELESS.'],
              ['Anxiety', 'A FEAR or NERVOUSNESS about what might happen in the future. Highly correlated with depression; both are growing — 91 PERCENT of Gen Z report at least one physical or emotional symptom.'],
              ['Rumination', 'The inability to stop continually thinking about PAST events. Ruminators have greater difficulty LEARNING NEW TASKS, and ruminating at night about negative customer interactions affects mood the NEXT DAY. It both raises stress AND surfaces more when already stressed.'],
              ['Burnout', 'Long-term EXHAUSTION and diminished interest in work. Someone PREVIOUSLY ENGAGED becomes unable to cope with job demands due to low energy and dissatisfaction. Individuals with HIGH ASPIRATIONS who are driven to get things done are MORE likely to experience it.']
            ]}
          />
          <p className="mt-2">
            Demsky et al. (2019) found forest service employees with the{' '}
            <strong>greatest outside-of-work recovery habits</strong> had the{' '}
            <strong>lowest insomnia and least rumination</strong> — indicating{' '}
            <strong>detaching from work is an important way to buffer stress.</strong>
          </p>
        </Callout>

        <Callout kind="danger" title="The inverted-U — stress is a matter of DEGREE">
          <strong>&ldquo;Our level of stress should be just right: not too much and not too
          little.&rdquo;</strong>
          <Table
            headers={['Stress level', 'What happens']}
            rows={[
              ['LOW (underload)', 'You "might not care enough to expend the effort necessary to perform well" — inactive, laidback'],
              ['MEDIUM', 'FULLY ENGAGED AND MOTIVATED — the target for optimal performance'],
              ['HIGH (overload)', 'Past the "stress zone," where performance is impaired — anxious, stressed']
            ]}
          />
        </Callout>

        <Card title="Behavioral consequences">
          <Table
            headers={['Behavior', 'Detail']}
            rows={[
              [
                'Withdrawal',
                'Lack of engagement, tardiness, absenteeism, or leaving. Of 17,000 employees across 19 industries, 33 PERCENT said they miss work due to stress "sometimes," "often," or "always." Turnover costs US businesses upwards of $1 TRILLION each year.'
              ],
              [
                'Anger, moodiness, counterproductive behavior, violence',
                'The chapter notes these employees — who stay and create problems — are "even worse" than those who withdraw.'
              ],
              [
                'Substance abuse',
                'About 23 PERCENT of the American workforce drank enough to be hung over the next day, and employees are TWICE as likely to be absent after drinking the previous day. Following a stressful day people drank more, and each additional stressor increased the desire to drink. Frone (2016): people drink in response to work stressors to SELF-MEDICATE.'
              ]
            ]}
          />
        </Card>

        <Callout kind="tip" title="Workplace Application — Microsoft and the demand–control sweet spot">
          Microsoft&rsquo;s HR research team could not change the <strong>level of demands</strong> on
          employees, but they could vary <strong>how much CONTROL</strong> employees had over how,
          when, and where work was done — drawing directly on{' '}
          <strong>Karasek&rsquo;s job demand–control model</strong>.
          <p className="mt-2">
            <strong>What they found:</strong> those with <strong>high demands and LOW control</strong>{' '}
            reported high strain, while <strong>most employees were in &ldquo;active jobs&rdquo;</strong>{' '}
            — demanding but engaging. <strong>High control made a big difference</strong>, which means
            training managers and employees to build greater personal control over how, when, and
            where to work can matter a great deal.
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 5
  {
    id: 'individual-differences-stress',
    title: 'Individual Differences in Stress',
    subtitle: 'Type A, Type B, Type D, and workaholism',
    content: (
      <>
        <Callout kind="info" title="Why this section exists">
          <strong>No two people react to the same set of stressors in the same way.</strong> One person
          might be stressed by a job analysis of 10 jobs in two months; another with experience would
          find it routine. Of the personality variables considered,{' '}
          <strong>none has received more attention than Type A vs. Type B.</strong>
        </Callout>

        <Card title="Type A vs. Type B (measured by the Jenkins Activity Scale)">
          <Table
            headers={['Type', 'Characteristics']}
            rows={[
              [
                'Type A',
                'High levels of IMPATIENCE, do things QUICKLY, HIGHLY INVOLVED in their jobs, and HIGHLY COMPETITIVE. These individuals are PRONE to experiencing stress.'
              ],
              [
                'Type B',
                'A WEAKER sense of time urgency, LESS devoted to their work, and LESS competitive than Type A individuals.'
              ]
            ]}
          />
        </Card>

        <Callout kind="danger" title="Two findings that reverse the obvious expectation">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>On health:</strong> early research found Type A at{' '}
              <strong>higher risk for heart attacks</strong> (Friedman &amp; Rosenman, 1959). But{' '}
              <strong>more recent research has found different results, with Type As being LESS
              susceptible to heart problems</strong> — possibly because in an era of online medical
              advice they are more likely to seek medical help. The chapter is careful to note{' '}
              <strong>this explanation is just a hypothesis.</strong>
            </li>
            <li>
              <strong>On success:</strong> you might expect Type A individuals to be more successful.{' '}
              <strong>Research has NOT identified such a difference.</strong> People are complex, two
              categories is a crude metric, and behavior is partly situational — a{' '}
              <strong>Type B may produce better results in teamwork-oriented or collaborative
              jobs</strong>, while Type A might outperform in fast-paced ones, and a Type A may be{' '}
              <strong>perceived as overbearing</strong> and therefore less effective.
            </li>
          </ol>
        </Callout>

        <Callout kind="warn" title="Type D — the newer focus">
          <strong>Type D</strong> represents people with a <strong>NEGATIVE OUTLOOK and SOCIAL
          INHIBITIONS</strong>. Several studies have found a{' '}
          <strong>significant relationship between Type Ds and negative cardiovascular
          outcomes</strong> (Bunker et al., 2003; Denollet et al., 2000).
        </Callout>

        <Card title="Workaholism">
          <p className="text-sm mb-2">
            <strong>Glossary:</strong> a condition where individuals work{' '}
            <strong>EXCESSIVELY and COMPULSIVELY</strong>, and{' '}
            <strong>feel GUILTY as if they have not worked enough when they stop</strong>. They might
            not even enjoy the work they do.
          </p>
          <Table
            headers={['Clark et al. (2016) meta-analysis', 'Finding']}
            rows={[
              ['RELATED to workaholism', 'Achievement-oriented characteristics — TYPE A personality and PERFECTIONISM'],
              ['NOT related', 'Conscientiousness, self-esteem, gender, and marital status'],
              ['Associated outcomes', 'Negative individual outcomes (burnout, job stress, lower job satisfaction) and organizational outcomes (counterproductive work behaviors)']
            ]}
          />
          <p className="mt-2 text-sm">
            It also relates to worse physical and mental health and higher work–family conflict — but
            the chapter notes it may relate to <strong>higher work satisfaction</strong> too.
          </p>
        </Card>

        <Callout kind="tip" title="The profile LEAST prone to stress">
          Someone who has a <strong>Type B personality</strong>, <strong>high positive affect and
          self-efficacy</strong>, and <strong>low negative affect and neuroticism</strong> (Jamal, 1990;
          Ong et al., 2006).
          <p className="mt-2">
            The same split appears in work–family conflict: <strong>negative affect and
            neuroticism</strong> made individuals MORE vulnerable, while{' '}
            <strong>positive affect and self-efficacy BUFFERED</strong> them (Allen et al., 2012).
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 6
  {
    id: 'individual-stress-management',
    title: 'Individual Stress Management',
    subtitle: 'Diet, exercise, sleep, time management, social support',
    images: [
      {
        src: `${IMG}/12e_fig12-5_exercise_types.png`,
        alt: 'Figure 12.5: four columns — Endurance (walking, jogging, swimming, biking, climbing, basketball, dancing), Strength (lifting weights, resistance band, leg and arm lifts, Pilates), Flexibility (stretching, yoga, Pilates), and Breathing (yoga, Pilates, equal breathing, deep breathing).',
        caption: 'Figure 12.5 — Examples of different types of exercise.'
      }
    ],
    content: (
      <>
        <Callout kind="danger" title="The gap that motivates this section">
          A 2019 APA survey found <strong>84 percent</strong> of participants reported stress{' '}
          <strong>equal to or greater than the year before</strong>, but{' '}
          <strong>only 35 percent thought they were managing their stress levels well.</strong>
        </Callout>

        <Card title="1. Diet">
          <p className="text-sm">
            In a study of over <strong>80,000 individuals</strong>, the amount of{' '}
            <strong>fruits and vegetables consumed</strong> was related to overall happiness levels.
          </p>
          <p className="text-sm mt-2">
            <strong>The candy bar mechanism:</strong> sugar is received as fuel but only briefly.{' '}
            <strong>Insulin is produced to process it, and when too much is released, blood sugar drops
            BELOW normal</strong> — which is why you feel lousy afterward. The same applies beyond
            candy: <strong>white rice increases Type II diabetes by 16 percent, but brown rice does
            not</strong>, because it contains more fiber and does not spike sugar levels.
          </p>
        </Card>

        <Card title="2. Exercise — four types">
          <Table
            headers={['Type', 'What it is', 'How it helps']}
            rows={[
              ['Endurance (aerobic)', 'Low enough in intensity to SUSTAIN for several minutes.', 'Increases blood flow and strengthens heart muscles. Sustained aerobic exercise produces ENDORPHINS — the "runner’s high."'],
              ['Strength (anaerobic)', 'INTENSE and SHORT — under two minutes.', 'Triggers formation of LACTIC ACID, which helps build muscle over time.'],
              ['Flexibility', 'Elongates muscles and tendons.', 'Builds and maintains an appropriate RANGE OF MOTION.'],
              ['Breathing', 'Equal breathing (in 4 seconds, out 4), deep breathing through the nose until the diaphragm inflates.', 'The fourth type the chapter adds to the standard three.']
            ]}
          />
          <p className="mt-2 text-sm">
            <strong>Walking just 30 minutes every day</strong> reduces coronary heart disease risk and
            improves blood pressure, blood sugar, and mental well-being. The{' '}
            <strong>walking desk</strong> (1.5–2 mph while working) produces{' '}
            <strong>around 8 pounds of weight loss per year</strong> and better work performance over
            time.
          </p>
        </Card>

        <Callout kind="warn" title="3. Sleep — the newest I-O focus">
          <Table
            headers={['Finding', 'Value']}
            rows={[
              ['Sleep needed', 'Young adults and adults: 7–9 hours. Older adults: 7–8 hours.'],
              ['US adults reporting insufficient sleep', 'More than 30 percent'],
              ['Sleep debt accumulation', 'FOUR consecutive nights of FIVE hours affects functioning as much as a BLOOD ALCOHOL LEVEL OF .06 PERCENT — above the legal limit in many states']
            ]}
          />
          <p className="mt-2">
            How work harms sleep: <strong>extended shifts, travel across time zones, work–life demands,
            ruminating about work problems</strong>. Consequences include{' '}
            <strong>performance decrements, impaired cognitive functioning, less innovative thinking,
            and safety issues</strong> — and <strong>both leader AND follower sleep deprivation
            negatively impact follower perceptions of charismatic leadership</strong>.
          </p>
          <p className="mt-2 text-xs">
            Personal fixes: work with your <strong>circadian rhythms</strong> by sleeping and waking at
            similar times, limit afternoon and evening caffeine, exercise during the day, and{' '}
            <strong>avoid screens before bed</strong> — their light wavelengths fight the body&rsquo;s
            natural release of <strong>melatonin</strong>.
          </p>
        </Callout>

        <Card title="4. Time management & 5. Social support">
          <p className="text-sm mb-2">
            <strong>Time management.</strong> Those with better strategies have lower stress. One
            successful intervention used <strong>task prioritizing, goal-setting (proximal, challenging,
            specific goals with monitoring), mental simulations</strong> of next-day tasks, and{' '}
            <strong>structuring the next workday</strong> by deciding where and when to work.
          </p>
          <Table
            headers={['Type of social support', 'Who provides it', 'Example']}
            rows={[
              ['Emotional support', 'A close friend or family member', 'Support during a difficult personal experience'],
              ['Informational support', 'A helpful manager', 'Constructive feedback on job performance'],
              ['Instrumental support', 'A coworker or subordinate', 'Helping an employee actually perform a task']
            ]}
          />
          <p className="mt-2 text-sm">
            Social support <strong>moderated the relationship between stressors and job
            performance</strong> (Siu et al., 2013) and between{' '}
            <strong>job insecurity and job satisfaction</strong>, proactive job search, and life
            satisfaction (Lim, 1996).
          </p>
        </Card>
      </>
    )
  },

  // ------------------------------------------------------------------ 7
  {
    id: 'organizational-approaches',
    title: 'Organizational Approaches to Health & Well-Being',
    subtitle: 'Healthy environments, flexible work, recovery, and employee resource programs',
    images: [
      {
        src: `${IMG}/12f_fig12-6_recovery_opportunities.png`,
        alt: 'Figure 12.6: five panels — paid sabbaticals, personal days, evenings and weekends, naps, and micro breaks — each with a short description of the recovery opportunity.',
        caption: 'Figure 12.6 — Different types of recovery opportunities.'
      }
    ],
    content: (
      <>
        <Callout kind="info" title="1. Healthy work environments">
          Start with <strong>job design</strong> (Ch. 9): jobs with{' '}
          <strong>clear expectations (low role conflict and ambiguity)</strong> and{' '}
          <strong>a great deal of autonomy</strong> lower stress. The chapter notes an inherent
          tradeoff — customer-facing work relates positively to a sense of personal accomplishment and
          satisfaction, but also to <strong>anger and burnout</strong>.
        </Callout>

        <Card title="Job crafting">
          <p className="text-sm mb-2">
            <strong>Glossary:</strong> employees&rsquo; <strong>PROACTIVE attempts at changing the
            cognitive, task, and/or relational boundaries of their jobs</strong> to shape their roles
            and relationships at work (Wrzesniewski &amp; Dutton, 2001).
          </p>
          <p className="text-sm">
            It celebrates the idea that <strong>employees are NOT always passive recipients of job
            assignments</strong>. Meta-analysis (Rudolph et al., 2017) found it relates{' '}
            <strong>positively to job satisfaction, work engagement, and performance</strong> and{' '}
            <strong>negatively to job strain</strong>. Contextual factors (job autonomy, workload) and{' '}
            <strong>all the Big Five except neuroticism</strong> were associated with it. Notably,{' '}
            <strong>women and younger employees were more likely to engage in it.</strong>
          </p>
        </Card>

        <Callout kind="danger" title="Fairness, light, noise, and ergonomics">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Unfairness</strong> relates to health problems and burnout. Research across{' '}
              <strong>41 hospital units and 357 nurses</strong> shows that{' '}
              <strong>simply WITNESSING bullying traumatizes bystanders</strong>. And unfair treatment{' '}
              <strong>raises cortisol, which in turn leads to deviant behavior.</strong>
            </li>
            <li>
              <strong>Light:</strong> employees with <strong>a window</strong> in their workspace get{' '}
              <strong>46 more minutes of sleep per night</strong> than those in windowless spaces.
            </li>
            <li>
              <strong>Open offices</strong> are rising in popularity but research indicates they are{' '}
              <strong>NOT healthy environments</strong> — higher stress, lower satisfaction, less
              privacy, more chaos. Workers exposed to noisier environments{' '}
              <strong>gave up after only a few attempts</strong> at a problem-solving task. And while
              proponents argue they promote communication,{' '}
              <strong>more information IS shared but it tends to be more SUPERFICIAL.</strong>
            </li>
            <li>
              <strong>Ergonomic design</strong> ensures the physical workplace{' '}
              <strong>fits the worker</strong>, reducing musculoskeletal injuries — critical because
              worker health, safety, and emotional well-being are intertwined.
            </li>
          </ul>
        </Callout>

        <Card title="2. Flexible work arrangements">
          <Table
            headers={['Arrangement', 'Definition / data']}
            rows={[
              [
                'Telecommuting',
                'Working a portion of time AWAY from the conventional workplace. Offered by 69% of employers on an "as-needed" basis, 42% part-time, 27% full-time. Of those who telecommute: 91% chose it for better work–life balance, 79% for improved productivity, 78% for less stress — and remote workers are 29% HAPPIER than on-site coworkers.'
              ],
              [
                'Hoteling',
                'Employees are provided FLEXIBLE, UNASSIGNED office space as needed — so those working from home have a place to work without underutilized space while away.'
              ],
              [
                'Predictable scheduling',
                'After a New York Times article on a Starbucks barista whose unpredictable schedule made her life "a chronic crisis over the clock," Starbucks revised its policies WITHIN 24 HOURS to end irregular schedules and give at least one week’s notice to 130,000 baristas.'
              ]
            ]}
          />
        </Card>

        <Callout kind="tip" title="3. Recovery opportunities">
          <strong>Detachment and recovery are vital</strong> for coping with day-to-day stressors and
          avoiding exhaustion. Employees able to <strong>&ldquo;unwind&rdquo;</strong> when not working
          are <strong>healthier and have higher well-being</strong> (Sonnentag &amp; Fritz, 2007).
          <p className="mt-2">
            The range runs from long-term to very short:{' '}
            <strong>paid sabbaticals, vacations, personal days, evenings and weekends, naps, and
            micro-breaks</strong> — and the chapter is explicit that detaching for{' '}
            <strong>evenings, weekends, or even micro-breaks</strong> helps combat stress.
          </p>
        </Callout>

        <Callout kind="info" title="4. Employee resource programs">
          <Table
            headers={['Program', 'Definition', 'Uptake']}
            rows={[
              [
                'Employee assistance programs (EAPs)',
                'A CONFIDENTIAL counseling benefit to help employees maintain well-being — free referrals and short-term help with workplace conflict, stressful life events, financial challenges, alcohol or chemical dependencies.',
                'Offered by 94% of large companies — but usage rates have historically been LOW. Technology (e.g. videoconferencing with therapists) is raising it.'
              ],
              [
                'Workplace wellness programs (WWPs)',
                'Support on- or off-site for gym memberships, smoking cessation, weight loss, disease management, or financial counseling. May include rewards or penalties for behaviors such as completing health risk assessments.',
                'Increasing in popularity. The Affordable Care Act created new incentives, and when done correctly they can produce high ROI.'
              ]
            ]}
          />
          <p className="mt-2 text-xs">
            Why EAP usage is low: supervisor attitudes, social support, confidentiality, and perceived
            helpfulness drive the decision. Many companies therefore keep EAP information{' '}
            <strong>completely private from employers</strong>, and federally assisted substance abuse
            services are <strong>required by law to protect confidentiality</strong> absent written
            consent.
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 8
  {
    id: 'workplace-safety',
    title: 'Workplace Safety',
    subtitle: 'Measuring safety, and the antecedents of safe behavior',
    images: [
      {
        src: `${IMG}/12g_fig12-7_safety_antecedents.png`,
        alt: 'Figure 12.7: safety climate and conscientiousness feeding into safety knowledge and safety motivation, which feed into safety performance, which leads to accidents and injuries.',
        caption: 'Figure 12.7 — A model of the antecedents of workplace safety (Christian et al., 2009).'
      }
    ],
    content: (
      <>
        <Callout kind="info" title="Why organizations care">
          Beyond the obvious, <strong>employee accidents and injuries can lead to bad publicity,
          government fines, and increased insurance rates.</strong> And while accidents are often the
          result of the <strong>physical environment</strong>, they are also a function of the{' '}
          <strong>psychological characteristics of the work environment and the worker.</strong>
        </Callout>

        <Card title="Measuring safety — objective measures and their problem">
          <p className="text-sm mb-2">
            Like performance (Ch. 4), safety behavior splits into objective and subjective measures.
            Common objective measures: <strong>number of accidents</strong>,{' '}
            <strong>workers&rsquo; compensation claims</strong>, and{' '}
            <strong>size of insurance payouts</strong>.
          </p>
          <Callout kind="danger" title="The low base rate problem">
            <strong>Accidents do not happen very often and thus are hard to predict
            statistically.</strong> If a company has only one or two accidents in a year, these may be{' '}
            <strong>just chance occurrences</strong>.
            <p className="mt-2">
              Which is why researchers also study <strong>near misses</strong> — when an accident{' '}
              <strong>almost occurred but did not</strong>, such as a worker tripping on a loose
              electrical cord without being injured.
            </p>
          </Callout>
          <p className="mt-2 text-sm">
            The underlying logic — the <strong>&ldquo;criterion problem&rdquo;</strong> from Ch. 4
            again: not all unsafe behaviors lead to accidents, but{' '}
            <strong>unsafe behaviors are the ANTECEDENTS of workplace accidents and injuries</strong>.
            So <strong>measuring safety BEHAVIORS is important — perhaps just as important as measuring
            actual accidents.</strong>
          </p>
        </Card>

        <Callout kind="tip" title="Safety performance splits in two — and it mirrors Ch. 4">
          <Table
            headers={['Behavior type', 'What it is', 'Parallel in Ch. 4']}
            rows={[
              [
                'Safety compliance behavior',
                'Performing CORE safety behaviors — following the safety rules and using safety equipment.',
                'TASK performance'
              ],
              [
                'Safety participation behavior',
                'Supporting COWORKERS and safety NORMS within the organization.',
                'CONTEXTUAL performance'
              ]
            ]}
          />
          <p className="mt-2">
            Framing safety this way recognizes that{' '}
            <strong>safe behaviors affect not only the employee but coworkers as well</strong> —
            performing safety behaviors yourself <em>and</em> helping coworkers stay safe.
          </p>
        </Callout>

        <Callout kind="danger" title="Safety climate — the strongest predictor">
          <strong>Glossary:</strong> the <strong>SHARED UNDERSTANDING that workers have about the
          PRIORITY of safety in the organization</strong> (Christian et al., 2009; Zohar &amp; Luria,
          2005).
          <p className="mt-2">
            If managers tell workers — <strong>verbally or by the rewards they give</strong> — that
            doing work quickly is more important than safety, a{' '}
            <strong>poor safety climate</strong> develops.
          </p>
          <p className="mt-2">
            Meta-analysis found <strong>safety climate is the STRONGEST predictor of workplace
            accidents</strong>, and another found it had a consistent effect on both safety
            participation and compliance.
          </p>
        </Callout>

        <Card title="The rest of the antecedents">
          <Table
            headers={['Level', 'Factor', 'Detail']}
            rows={[
              [
                'Environment',
                'Leadership',
                'Leaders are essential to safety climate because they COMMUNICATE safety information and allow OPEN COMMUNICATION about safety issues. Training supervisors to be good safety leaders and giving them feedback about their communication improves safety.'
              ],
              [
                'Individual',
                'Safety motivation',
                'An employee’s DESIRE to behave safely and the valence or degree to which they want to. Itself affected by whether there is a strong safety climate.'
              ],
              [
                'Individual',
                'Safety knowledge',
                'Also found through meta-analysis to be an antecedent of safety performance.'
              ],
              [
                'Individual',
                'Personality',
                'Among the Big Five: AGREEABLENESS and CONSCIENTIOUSNESS relate NEGATIVELY to unsafe behaviors; EXTRAVERSION and NEUROTICISM relate POSITIVELY to them (Beus et al., 2015).'
              ]
            ]}
          />
          <p className="mt-2 text-sm">
            The summary: <strong>a good bit of responsibility for safety falls on the organization and
            on supervisors.</strong> Besides training workers, supervisors should be given the
            resources to be effective leaders who support a safe workplace.
          </p>
        </Card>
      </>
    )
  },

  // ------------------------------------------------------------------ 9
  {
    id: 'legal-global-current-ch12',
    title: 'Legal, Global & Current Issues',
    subtitle: 'OSHA and NIOSH, global stress and aging, and Total Worker Health',
    content: (
      <>
        <Callout kind="danger" title="Legal — OSHA and NIOSH">
          <Table
            headers={['Agency / law', 'Detail']}
            rows={[
              [
                'Occupational Safety and Health Act (1970)',
                'The law that created OSHA.'
              ],
              [
                'OSHA',
                'An agency of the US DEPARTMENT OF LABOR. Its mandate is to PROTECT EMPLOYEES by overseeing working conditions and developing and enforcing MINIMUM SAFETY STANDARDS. Provides training and materials so employers understand their responsibilities and workers understand their rights.'
              ],
              [
                'NIOSH',
                'The National Institute for Occupational Safety and Health — a FEDERAL AGENCY that SUPPORTS RESEARCH on worker safety, health, and well-being to provide solutions and interventions.'
              ]
            ]}
          />
          <p className="mt-2">
            Two enforcement points: employees who report violations are{' '}
            <strong>legally protected from retaliation</strong> such as firing or discipline, and{' '}
            <strong>OSHA can conduct workplace inspections WITHOUT advance notice</strong> and impose
            penalties. A 2010 study of Pennsylvania violations showed{' '}
            <strong>OSHA penalties did lead to reduced workplace injuries</strong>, though not always
            with a direct link between the specific violation and the injuries reduced — possibly
            because the company increased its <strong>overall</strong> safety efforts after a penalty.
          </p>
          <p className="mt-2 text-xs">
            Breaks are also a legal matter. Walmart and Sam&rsquo;s Club were found guilty of denying
            regular bathroom breaks, with a judge determining that{' '}
            <strong>1.5 million shortened or missed breaks</strong> occurred between 1998 and 2004.
          </p>
        </Callout>

        <Callout kind="warn" title="Global — job insecurity, downsizing, and aging">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Over <strong>6.5 million US jobs</strong> were eliminated after the 2008 recession, and
              millions more in the 2020 Covid-19 period. <strong>Downsizing is surprisingly common in
              Japan, China, South Korea, and Taiwan</strong>, where lifetime employment was so recently
              the norm.
            </li>
            <li>
              In October 2019, <strong>youth unemployment</strong> was 27.8 percent in Italy, 32.8
              percent in Spain, and 33.1 percent in Greece.
            </li>
            <li>
              <strong>The key finding:</strong> across 24 countries, perceptions of job insecurity are{' '}
              <strong>BUFFERED by a country&rsquo;s SOCIAL SAFETY NET</strong> — training
              opportunities for the unemployed, unemployment benefits (Debus et al., 2012).
            </li>
            <li>
              Gallup found the <strong>highest-stress countries</strong> were largely those dealing with{' '}
              <strong>core livability issues</strong> — high homicide rates, low GDP per capita, large
              income inequity, high unemployment.
            </li>
            <li>
              <strong>Aging workforce:</strong> industrialized countries face an aging workforce as
              people live longer, retirement systems become unsustainable, and many work longer because
              they cannot afford to retire. Critically,{' '}
              <strong>chronic stress is associated with WORSE health outcomes in older adults</strong>{' '}
              than younger ones, including higher blood pressure.
            </li>
          </ul>
        </Callout>

        <Callout kind="tip" title="Current — Total Worker Health™">
          The recognition that <strong>worker stress, health, safety, and well-being are conceptualized
          SEPARATELY, while in reality they are INTERTWINED.</strong> An organization whose culture
          supports worker health will likely care about safety too, and worker health may be related to
          safety outcomes.
          <p className="mt-2">
            <strong>The example that makes the case:</strong> recent railway fatalities in New York and
            New Jersey were attributed to <strong>sleep apnea</strong> — a medical condition that
            disrupts sleep and causes daytime drowsiness. A <strong>health</strong> condition produced a{' '}
            <strong>safety</strong> outcome.
          </p>
          <p className="mt-2">
            NIOSH&rsquo;s <strong>Total Worker Health™</strong> emphasizes not only health promotion but{' '}
            <strong>worker safety AND psychological well-being</strong> together. There have been{' '}
            <strong>relatively few published intervention studies</strong> taking this focus so far.
          </p>
        </Callout>

        <Card title="Current research — what interventions actually work">
          <p className="text-sm mb-2">
            These are tested like field or quasi-experiments with intervention and control conditions:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong>Job crafting training</strong> for nurses (self-reflection plus a workshop){' '}
              <strong>led to increased engagement</strong> (Kuijpers et al., 2020).
            </li>
            <li>
              A comprehensive intervention for <strong>long-range truckers</strong> — weight-loss
              competition, online training, self-monitoring —{' '}
              <strong>increased vegetable consumption and lowered BMI</strong> (Olson et al., 2016).
            </li>
            <li>
              <strong>Training supervisors to support employees&rsquo; use of mental health
              resources</strong> made supervisors more likely to encourage EAP use, and employees more
              willing to use it (Dimoff &amp; Kelloway, 2019) — directly addressing the low-uptake
              problem.
            </li>
          </ul>
        </Card>

        <Callout kind="info" title="The chapter's conclusion">
          Stress affects <strong>on-the-job measures such as job performance and absenteeism, as well as
          employees&rsquo; physical and mental health.</strong> There are many ways to combat it —
          personal measures like diet and exercise, and organizational measures like{' '}
          <strong>flexible work arrangements and employee assistance programs</strong>. The chapter
          closes on the broader frame: the legal environment, the global ramifications including job
          insecurity and workplace aging, and <strong>Total Worker Health™</strong>.
        </Callout>
      </>
    )
  }
];
