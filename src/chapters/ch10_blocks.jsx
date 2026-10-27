import React from 'react';
import { Callout, Table, Card } from '../components/Visual.jsx';

const IMG = 'ch10_leadership_work';

export default [
  // ------------------------------------------------------------------ 1
  {
    id: 'what-is-leadership',
    title: 'What Leadership Is & Where the Power to Lead Comes From',
    subtitle: 'The definition, and French and Raven’s six bases of power',
    images: [
      {
        src: `${IMG}/10a_fig10-1_bases_of_power.png`,
        alt: 'Figure 10.1: a three-column table listing coercive, expert, information, legitimate, referent, and reward power with the basis of each and a workplace example.',
        caption: 'Figure 10.1 — French and Raven’s bases of power.'
      }
    ],
    content: (
      <>
        <Callout kind="danger" title="The definition — note the word cooperation">
          <strong>Leadership:</strong> the process of influencing the way others act, their
          perceptions, and how they view their environment <strong>through cooperation</strong>.
          <p className="mt-2">
            Jago (1982) defines it as <strong>the use of NON-COERCIVE means</strong> to ensure that
            group tasks are accomplished — influence that ensures{' '}
            <strong>cooperation rather than forcing</strong> others to do something.
          </p>
          <p className="mt-2">
            Smircich and Morgan (1982) add that leadership is the process in which one person{' '}
            <strong>defines the reality of others</strong>. That matters because it means leaders
            influence not only actions but <strong>perceptions</strong>.
          </p>
        </Callout>

        <Card title="The six bases of power (French & Raven, 1959)">
          <Table
            headers={['Type', 'Basis of power', 'Example']}
            rows={[
              ['Coercive power', 'The ability to use FORCE to gain compliance from another.', 'A supervisor threatening to fire an employee if they do not comply.'],
              ['Expert power', 'The ability to use one’s unique and RESPECTED KNOWLEDGE to influence another.', 'A professor is an expert in the classroom.'],
              ['Information power', 'The ability to use one’s UNIQUE KNOWLEDGE.', 'An employee who has early access to information about who will be affected by impending layoffs.'],
              ['Legitimate power', 'An ELECTED, SELECTED, OR APPOINTED position of authority.', 'A supervisor asking an employee to create a new ad campaign by the end of the week.'],
              ['Referent power', 'Possessing POSITIVE AFFECT AND LIKING.', 'A well-liked colleague asking coworkers to support his ideas for a new product.'],
              ['Reward power', 'The use of the right to offer DESIRED INCENTIVES.', 'A peer nominating a colleague for a merit award.']
            ]}
          />
        </Card>

        <Callout kind="warn" title="The split that gets tested">
          <strong>Position power:</strong> legitimate, reward, and coercive power come from a{' '}
          <strong>formal position</strong> in the organization.
          <p className="mt-2">
            <strong>Personal power:</strong> referent power <strong>resides within the person</strong>{' '}
            and results from others liking and admiring them — so{' '}
            <strong>anyone in an organization can possess it</strong>, with or without a title.
          </p>
          <p className="mt-2">
            And the tie back to the definition: <strong>leadership involves the ability to influence
            others through bases of power that are NOT coercive</strong> (Rost, 1993). A manager
            relying on coercion is exercising power, not leading.
          </p>
        </Callout>

        <Callout kind="info" title="Leadership is an old topic with a short science">
          Unlike most topics in this book, which arose in the twentieth century,{' '}
          <strong>leadership as a topic has been around since antiquity</strong> — the chapter opens
          with Aristotle, Lao Tzu, Ovid, Napoleon, and Machiavelli. But{' '}
          <strong>the systematic study of leadership dates back only to early in the twentieth
          century.</strong>
          <p className="mt-2 text-xs">
            Greta Thunberg is the chapter&rsquo;s illustration that{' '}
            <strong>leadership does not require a formal position within an organization</strong>.
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 2
  {
    id: 'leadership-outcomes',
    title: 'Outcomes: Emergence vs. Effectiveness',
    subtitle: 'Two different things — and whether leaders matter at all',
    content: (
      <>
        <Card title="The two outcomes of interest">
          <Table
            headers={['Outcome', 'Definition', 'How it is studied / measured']}
            rows={[
              [
                'Leader emergence',
                'Whether someone is PERCEIVED as a leader within the work group.',
                'Small, LEADERLESS groups engage in a discussion or task, then each person is asked who they perceived to be the leader (Hogan et al., 1994). Studies aim to identify what makes someone seem "leader-like."'
              ],
              [
                'Leader effectiveness',
                'What the leader ACTUALLY ACCOMPLISHES.',
                'Multiple metrics: supervisor or follower ratings of effectiveness, follower satisfaction with the leader, and productivity of the group or unit.'
              ]
            ]}
          />
        </Card>

        <Callout kind="warn" title="They are related — but they can come apart">
          People who <strong>emerge</strong> as leaders are more likely to be{' '}
          <strong>promoted to higher-level positions and later rated as effective</strong> (Foti &amp;
          Hauenstein, 2007).
          <p className="mt-2">
            <strong>However, it is also possible for INEFFECTIVE leaders to emerge.</strong> The
            chapter&rsquo;s example: a leader who emerges from a group of employees might{' '}
            <strong>encourage others to goof off on the job.</strong>
          </p>
        </Callout>

        <Callout kind="danger" title="Do leaders actually matter? The chapter presents both sides">
          <Table
            headers={['Position', 'The argument']}
            rows={[
              [
                'The skeptics — "Romance of Leadership" (Meindl et al., 1985)',
                'TOO MUCH of a group’s or organization’s performance or effectiveness is ATTRIBUTED to the influence of leaders. Some believe that as a society — or even as a species — we LIKE the idea of leaders making a difference, even though it may not be true.'
              ],
              [
                'The evidence that they do',
                'Leaders exert significant influence over organizational performance (Thomas, 1988). The chapter also cites a common saying with research support behind it: "people don’t leave jobs or companies, but they leave managers."'
              ]
            ]}
          />
          <p className="mt-2">
            The chapter&rsquo;s verdict: a manager&rsquo;s leadership ability{' '}
            <strong>greatly matters for happiness, performance, well-being, and retention</strong> of
            the workforce.
          </p>
        </Callout>

        <Card title="Where leadership shows up elsewhere in the book">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><strong>Ch. 11</strong> — the role leaders have in shaping job attitudes and effectiveness</li>
            <li><strong>Ch. 12</strong> — the role leaders play in employee health and safety</li>
            <li><strong>Ch. 13</strong> — team leadership as a key factor in team effectiveness</li>
            <li><strong>Ch. 14</strong> — the influence leaders have on organizational structure and culture</li>
          </ul>
        </Card>
      </>
    )
  },

  // ------------------------------------------------------------------ 3
  {
    id: 'trait-approach',
    title: 'Who Are Leaders? The Trait Approach',
    subtitle: 'Great men, Stogdill’s demolition, and the Big Five comeback',
    content: (
      <>
        <Callout kind="info" title="Where it started">
          Before the twentieth century, historians such as <strong>Thomas Carlyle</strong> popularized
          the notion that leaders are <strong>&ldquo;great men&rdquo;</strong> — leadership was
          something possessed by a small number of people, usually men, different from the general
          population. <strong>Leaders were born, not made.</strong> You either had it or you did not.
        </Callout>

        <Card title="The trait approach and its collapse">
          <p className="text-sm mb-2">
            <strong>Trait approach to leadership:</strong> identifying a{' '}
            <strong>limited number of traits</strong> that would predict leadership{' '}
            <strong>emergence and effectiveness</strong>. Studies explored a seemingly endless number
            of factors — <strong>gender, age, intelligence, height, and personality</strong>.
          </p>
          <Callout kind="danger" title="The turning point">
            The approach <strong>&ldquo;ran out of steam&rdquo;</strong> when an influential review by{' '}
            <strong>Stogdill (1948)</strong> pointed out <strong>inconsistent findings</strong> and
            suggested that <strong>leadership is something that goes beyond possessing particular
            traits.</strong>
          </Callout>
        </Card>

        <Callout kind="tip" title="Why it came back — two reasons">
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              <strong>The five-factor model.</strong> Part of the problem with early trait studies was
              that there was <strong>no comprehensive framework for studying personality</strong>. The
              Big Five let scholars make sense of earlier findings and use more comprehensive and
              reliable instruments.
            </li>
            <li>
              <strong>Meta-analysis.</strong> Earlier reviews <strong>did not have the benefit of
              meta-analytic techniques</strong> (Lord et al., 1986), which made it possible to examine
              patterns of relationships across studies systematically.
            </li>
          </ol>
        </Callout>

        <Card title="Personality and leadership — Colbert et al. (2002)">
          <Table
            headers={['Finding', 'Detail']}
            rows={[
              ['Strongest correlate', 'EXTRAVERSION, by far, at r = .31 — extraverts are socially dominant, assertive, and outgoing'],
              ['Second', 'CONSCIENTIOUSNESS at r = .28 — organized, reliable, and punctual'],
              ['Where those two mattered most', 'Leadership EMERGENCE in STUDENT GROUPS — someone talkative, sociable, and organized quickly earns leader status among students'],
              ['For effectiveness in actual organizations', 'EXTRAVERSION and OPENNESS mattered most — note conscientiousness drops out here'],
              ['Government / military settings', 'OPENNESS mattered relatively LESS, and EMOTIONAL STABILITY (which includes self-confidence) mattered MORE']
            ]}
          />
          <p className="mt-2 text-sm">
            The relationship may be even stronger than measured, since studies typically measure{' '}
            <strong>leader personality from the leader&rsquo;s own perspective</strong>, which may not
            be accurate — supplementing self-reports with <strong>observer ratings</strong> strengthens
            the link (Colbert et al., 2012).
          </p>
        </Card>

        <Callout kind="warn" title="Do not forget the followers — the extraversion reversal">
          Grant et al. (2011) found <strong>extraverted leaders were most successful when followers
          demonstrated LOW levels of proactive behaviors</strong> such as suggesting new ideas.
          <p className="mt-2">
            <strong>In teams where followers displayed HIGH proactivity, leader extraversion acted as a
            DISADVANTAGE.</strong> Extraverted leaders, probably due to their desire to be dominant,
            were <strong>less receptive to ideas coming from their teams</strong>, whereas{' '}
            <strong>introverted leaders were better at harnessing the proactivity of the team.</strong>
          </p>
          <p className="mt-2 text-xs">
            The chapter notes the extraversion advantage is not insurmountable — it points to{' '}
            <strong>Bill Gates</strong> as an introverted CEO.
          </p>
        </Callout>

        <Callout kind="danger" title="Intelligence — perception beats reality">
          <strong>Implicit leadership theories (ILTs)</strong> are the{' '}
          <strong>prototypes of leaders we have in our minds</strong>. When a leader fits our
          prototype, we react more favorably to them.
          <Table
            headers={['Study', 'Finding']}
            rows={[
              ['Lord et al. (1984)', 'Of 59 traits examined (including honesty and charisma), INTELLIGENCE was the ONLY consistent characteristic individuals identified as something all leaders should possess.'],
              ['Judge et al. (2004)', 'People PERCEIVED as intelligent were more likely to be thought of as leaders. But when leaders’ ACTUAL intelligence scores were used (tests such as Wonderlic, Ch. 6), results were NOT as strong. Actual intelligence matters — but PERCEIVED intelligence matters more.'],
              ['Antonakis et al. (2017)', 'A "too much of a good thing" effect — the relationship between mid-level leaders’ measured intelligence and perceived leadership was CURVILINEAR, peaking around an IQ of 120 and then DECLINING.']
            ]}
          />
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 4
  {
    id: 'gender-race-leadership',
    title: 'Gender, Race & Leadership',
    subtitle: 'Small real differences, large differences in how leaders are perceived',
    content: (
      <>
        <Callout kind="danger" title="The representation numbers">
          <Table
            headers={['Figure', 'Value']}
            rows={[
              ['Women as a share of US full-time employees', '43 percent (BLS, 2019)'],
              ['Women as a share of S&P CEOs', '6 percent (Catalyst, 2020)'],
              ['Fortune 500 companies led by an African-American CEO (2020)', 'Four — 0.8 percent of the total. Asian and Latino CEOs are underrepresented as well.']
            ]}
          />
        </Callout>

        <Card title="The shifting prototype">
          <p className="text-sm mb-2">
            The old &ldquo;ideal leader&rdquo; was stereotypically male — assertive, dominant,
            confident — known as the <strong>&ldquo;think manager–think male&rdquo; syndrome</strong>{' '}
            (Schein et al., 1996).
          </p>
          <p className="text-sm">
            With changing jobs, team-based work, and flatter organizations, the prototype has become{' '}
            <strong>increasingly feminine</strong> — collaborative, sensitive, open (Koenig et al.,
            2011) — called <strong>&ldquo;think manager–think female,&rdquo;</strong> leading some to
            speculate about a <strong>feminine advantage</strong>. Others find effective leadership is
            neither feminine nor masculine but <strong>androgynous</strong>, a blend of both (Kark et
            al., 2012).
          </p>
        </Card>

        <Callout kind="warn" title="Are male or female leaders rated more effective?">
          Meta-analytic results: <strong>the magnitude of difference is SMALL and largely determined
          by the situation</strong> (Paustian-Underdahl et al., 2014).
          <ul className="list-disc pl-5 mt-1 space-y-0.5">
            <li>
              <strong>Male-dominated organizations</strong> (such as the military) — male leaders have
              a slight advantage
            </li>
            <li>
              <strong>Female-dominated organizations</strong> (such as social services) — the slight
              advantage belongs to female leaders
            </li>
            <li>
              <strong>Across ALL settings</strong> — women were seen as{' '}
              <strong>somewhat MORE effective</strong> in both top and middle management
            </li>
          </ul>
          <p className="mt-2">
            One explanation for that last point is the <strong>&ldquo;extra competence&rdquo;
            argument</strong> — the presumption that there are so many barriers to women&rsquo;s
            advancement that those who make it to the top must have extra skills.
          </p>
        </Callout>

        <Card title="Style differences, where they exist">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Women had a greater tendency to behave <strong>more democratically</strong>; male leaders
              were somewhat more likely to adopt an <strong>authoritarian</strong> style (Eagly &amp;
              Johnson, 1990).
            </li>
            <li>
              Female leaders were <strong>less likely to adopt passive and ineffective styles</strong>{' '}
              and <strong>more likely to engage in visionary and charismatic styles</strong> (Eagly et
              al., 2003).
            </li>
          </ul>
          <p className="mt-2 text-sm">
            So where differences exist, they are <strong>in a direction that would put women at an
            advantage</strong> — which makes underrepresentation a puzzle that leadership ability does
            not solve.
          </p>
        </Card>

        <Callout kind="danger" title="Three explanations for underrepresentation that are NOT ability">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Perceived work-family conflict.</strong> Managers perceive female employees as
              experiencing greater conflict between job and family and{' '}
              <strong>rate them as less promotable</strong> — and these perceptions{' '}
              <strong>go beyond actual family responsibilities and women&rsquo;s own perceptions</strong>{' '}
              (Hoobler et al., 2009).
            </li>
            <li>
              <strong>Success is penalized.</strong> When women succeed in a traditionally male-typed
              job, they are <strong>liked less and derogated more</strong> — so performance may not
              translate to promotions (Heilman et al., 2004).
            </li>
            <li>
              <strong>The glass cliff.</strong> Women are{' '}
              <strong>overrepresented in top leadership positions that are RISKY AND FRAGILE</strong>,
              such as the CEO role of a company about to go bankrupt (Ryan &amp; Haslam, 2007). Ideal
              managers for poorly performing companies were thought to be female, and women were
              thought more suitable to &ldquo;take the heat&rdquo; during failure and crisis. Outsider
              women brought in after poor performance who then failed were{' '}
              <strong>more likely to be replaced with insider White male leaders</strong> (Cook &amp;
              Glass, 2013).
            </li>
          </ol>
          <p className="mt-2">
            Compare with the <strong>glass ceiling</strong> — a discriminatory barrier that prevents
            women from advancing to senior management. The ceiling keeps you out; the cliff puts you
            somewhere precarious.
          </p>
        </Callout>

        <Callout kind="warn" title="Race — few style differences, large perception differences">
          Research examining leadership <strong>style</strong> differences by race revealed{' '}
          <strong>few, if any, systematic differences</strong> (Ospina &amp; Foldy, 2009). The
          literature instead documents <strong>systematic differences in how minority versus White
          leaders are perceived and evaluated</strong>, using experiments where identical information
          is presented with the leader&rsquo;s race manipulated. These studies assess{' '}
          <strong>unconscious, snap judgments</strong> — respondents are not asked to report biases.
          <Table
            headers={['Study', 'Finding']}
            rows={[
              ['Rosette et al. (2008)', '"Being White" appears to be part of leadership PROTOTYPES. When the person was described as an EMPLOYEE, respondents inferred race from the organization’s racial composition. When described as a MANAGER, composition became less relevant and more participants assumed the person was White.'],
              ['Hekman et al. (2017)', 'Ethnic minority and female leaders are PENALIZED for demonstrating DIVERSITY-VALUING behaviors — judged as less competent. No similar penalty exists for men and White leaders.'],
              ['Rosette & Livingston (2012)', 'INTERSECTIONALITY and "double jeopardy": for a SUCCESSFUL company, ratings were highest for a White male leader. For a FAILING company, the leader rated LEAST effective was the African-American female.'],
              ['Park & Westphal (2013)', 'Not just "paper people" — White CEOs were more likely to blame the poorly performing company’s CEO (rather than external circumstances) when that CEO was a MINORITY, and this tendency was STRONGER when the journalist was White.']
            ]}
          />
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 5
  {
    id: 'behavioral-approach',
    title: 'What Do Leaders Do? The Behavioral Approach',
    subtitle: 'Initiating structure, consideration, and the traits-vs-behaviors verdict',
    content: (
      <>
        <Callout kind="info" title="The question changes">
          Prior to the 1940s, most studies focused on traits. Discouraged by the inability to arrive
          at a fixed set of traits characterizing effective leaders across all situations, scholars
          turned to a different question: <strong>what do leaders DO?</strong>
          <p className="mt-2">
            The <strong>behavioral approach to leadership</strong> sought to identify the{' '}
            <strong>behaviors that distinguished effective from ineffective leaders.</strong>
          </p>
        </Callout>

        <Card title="Two behaviors, found twice independently">
          <p className="text-sm mb-2">
            In the <strong>1950s</strong>, researchers at the <strong>University of Michigan</strong>{' '}
            and <strong>Ohio State University</strong>, independently of each other, arrived at very
            similar answers.
          </p>
          <Table
            headers={['Behavior', 'Glossary definition']}
            rows={[
              [
                'Initiating structure',
                'TASK-ORIENTED leader behaviors — clarifying roles, ensuring that employees perform up to standards, and communicating standards of performance.'
              ],
              [
                'Consideration',
                'RELATIONAL behaviors leaders engage in — looking out for the well-being of members, being approachable, and being a good listener.'
              ]
            ]}
          />
        </Card>

        <Callout kind="warn" title="Why the approach stalled — and then was vindicated">
          Identifying these two behaviors was <strong>a major contribution</strong> because it moved
          the field away from thinking about leadership as innate traits. But it carried{' '}
          <strong>one bad assumption: that these two behaviors would predict effectiveness under ALL
          situations</strong> — which subsequent research did not confirm (Korman, 1966). Interest
          waned, and from the 1960s behavioral approaches gave way to theories accounting for the
          situation.
          <p className="mt-2">
            <strong>But modern meta-analyses rescued them.</strong> They &ldquo;should not be
            dismissed as mere historical artifacts&rdquo;:
          </p>
          <Table
            headers={['Behavior', 'Correlation', 'With']}
            rows={[
              ['Initiating structure', '.40', 'Follower motivation'],
              ['Initiating structure', '.39', 'Leadership effectiveness'],
              ['Consideration', '.78', 'Satisfaction with the leader'],
              ['Consideration', '.52', 'Leader effectiveness']
            ]}
          />
          <p className="mt-2 text-xs">Judge et al. (2004).</p>
        </Callout>

        <Callout kind="danger" title="DeRue et al. (2011) — which behavior predicts what">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Initiating structure is the MOST IMPORTANT leadership predictor of GROUP
              PERFORMANCE</strong>, and its effect is <strong>equivalent to transformational
              leadership</strong>.
            </li>
            <li>
              <strong>Consideration is the biggest predictor of FOLLOWER SATISFACTION with the
              leader</strong>, surpassing the role of all other traits and behaviors.
            </li>
          </ul>
        </Callout>

        <Callout kind="danger" title="Traits or behaviors? The numbers to memorize">
          <Table
            headers={['Outcome', 'Explained by TRAITS', 'Explained by BEHAVIORS']}
            rows={[
              ['Follower job satisfaction', 'Just 2 percent', 'More than 50 percent'],
              ['Satisfaction with the leader', '6 percent', '70 percent']
            ]}
          />
          <p className="mt-2">
            <strong>&ldquo;What leaders do seems to be much more important than who they
            are.&rdquo;</strong>
          </p>
          <p className="mt-2">
            But the two integrate rather than compete:{' '}
            <strong>leader traits are related to effectiveness THROUGH their influence over leader
            BEHAVIORS.</strong> Personality affects the propensity to display task- and
            relationship-oriented behaviors, which shapes follower attitudes and team performance
            (Cavazotte et al., 2012).
          </p>
        </Callout>

        <Card title="Workplace Application — Google’s Project Oxygen (2009)">
          <p className="text-sm mb-2">
            Google set out to answer one question: <strong>do leaders matter?</strong> The People
            Operations team, which included I-O psychologists, examined performance appraisal and
            feedback survey data. Their list, <strong>ordered by importance</strong>:
          </p>
          <ol className="list-decimal pl-5 space-y-0.5 text-sm">
            <li><strong>Being a good coach</strong> — one-on-one meetings to offer feedback and develop employees</li>
            <li><strong>Empowering the team</strong> — not micromanaging</li>
            <li>Care about employees</li>
            <li>Be results-oriented</li>
            <li>Effective communications — listen and engage in dialogue</li>
            <li>Help employees develop in their careers</li>
            <li>Have a vision for the team and communicate it</li>
            <li><strong>Have technical skills to provide advice</strong></li>
          </ol>
          <p className="mt-2 text-sm">
            Two things to notice: <strong>#3 and #4 roughly equate to consideration and initiating
            structure</strong>, and <strong>even at a technically oriented company, technical skill
            was LAST</strong> — how leaders interact and communicate matters much more.
          </p>
        </Card>
      </>
    )
  },

  // ------------------------------------------------------------------ 6
  {
    id: 'contingency-approaches',
    title: 'When Does It Work? Contingency Approaches',
    subtitle: 'Fiedler, path-goal theory, and Vroom’s normative model',
    images: [
      {
        src: `${IMG}/10b_fig10-2_path_goal_predictions.png`,
        alt: 'Figure 10.2: a table matching situations to appropriate and inappropriate path-goal leadership styles.',
        caption: 'Figure 10.2 — Summary predictions of path-goal theory.'
      },
      {
        src: `${IMG}/10c_fig10-3_vroom_normative_model.png`,
        alt: 'Figure 10.3: Vroom’s time-driven decision tree, with seven columns of situational factors funneling to one of five recommended decision processes.',
        caption: 'Figure 10.3 — Vroom’s (2000) normative model of leadership.'
      }
    ],
    content: (
      <>
        <Callout kind="info" title="The third question">
          Following the disappointing results of the trait and behavioral approaches, the 1960s and
          1970s produced theories that explicitly incorporated{' '}
          <strong>situational factors</strong>. <strong>Contingency theories</strong> attempt to{' '}
          <strong>match leadership behaviors with a particular configuration of situational
          factors</strong> — under what circumstances are certain leader behaviors most effective?
        </Callout>

        <Callout kind="warn" title="Fiedler came first — and did not hold up">
          Fiedler (1964) made the <strong>historically first attempt</strong> at a contingency theory,
          predicting effectiveness depends on the match between the situation and the{' '}
          <strong>more or less PERMANENT style of the leader</strong>. Scholars subsequently found{' '}
          <strong>weak empirical support</strong> (Peters et al., 1985), but it{' '}
          <strong>set the stage</strong> for the two theories that follow, which received more support.
        </Callout>

        <Card title="Path-goal theory (House & Mitchell, 1974) — four styles">
          <Table
            headers={['Style', 'Definition', 'Maps onto']}
            rows={[
              ['Directive leadership', 'Clarifying role expectations and coordinating work.', 'Akin to INITIATING STRUCTURE'],
              ['Supportive leadership', 'Providing a friendly and communicative atmosphere.', 'Equivalent to CONSIDERATION'],
              ['Participative leadership', 'Consulting with employees and involving them in decision-making.', '(new)'],
              ['Achievement-oriented leadership', 'Setting goals for subordinates and motivating them to meet challenging goals.', '(new)']
            ]}
          />
          <p className="mt-2 text-sm">
            <strong>The key break from Fiedler:</strong> this model assumes leaders{' '}
            <strong>CAN — and SHOULD — display different styles in different situations.</strong>
          </p>
        </Card>

        <Callout kind="tip" title="Why it is called PATH-GOAL, and its link to Ch. 9">
          The leader&rsquo;s job is to <strong>identify the road blocks in the way of
          subordinates</strong> that prevent them from reaching their goals, and to{' '}
          <strong>ensure that goal accomplishment is rewarding</strong> for that individual.
          <p className="mt-2">
            The theory is <strong>closely linked to expectancy theory (Ch. 9)</strong> — in its
            language, the leader&rsquo;s job is{' '}
            <strong>increasing the expectancy, instrumentality, and valence for followers.</strong>
          </p>
        </Callout>

        <Card title="Figure 10.2 — matching situation to style">
          <Table
            headers={['Situation', 'Appropriate style', 'Inappropriate style']}
            rows={[
              ['Ambiguous task, employees have LOW preference for independence', 'Directive', '—'],
              ['Ambiguous task, employees have HIGH preference for independence', 'Participative', '—'],
              ['Employees feel that they are highly capable', '—', 'Directive'],
              ['Tasks are clear but dissatisfying', 'Supportive', 'Directive'],
              ['The issue at hand is highly relevant to employees', 'Participative', '—'],
              ['Employees are highly independent', 'Achievement-oriented', '—'],
              ['Employees are achievement-oriented', 'Achievement-oriented', '—']
            ]}
          />
        </Card>

        <Callout kind="danger" title="Vroom’s normative model — the only PRESCRIPTIVE theory">
          It answers one question: <strong>who should be involved in making the decision?</strong>{' '}
          Presented as a <strong>decision aid</strong>, the leader answers seven questions in order,
          funnelling to one of five styles.
          <Table
            headers={['Style', 'What the leader does']}
            rows={[
              ['Decide', 'Makes the decision ALONE, with no input from the group.'],
              ['Consult individually', 'Goes to group members INDIVIDUALLY for input, but the decision is made solely by the leader.'],
              ['Consult group', 'Shares the problem with the ENTIRE GROUP, invites opinions, then makes the decision alone.'],
              ['Facilitate', 'Solves the problem WITH the group, acting as a facilitator without dictating the answer.'],
              ['Delegate', 'Completely delegates to the group, playing no direct role beyond answering questions or being there when needed.']
            ]}
          />
          <p className="mt-2">
            The seven situational questions, in order:{' '}
            <strong>decision significance, importance of commitment, leader expertise, likelihood of
            commitment, goal alignment, group expertise, team competence.</strong>
          </p>
        </Callout>

        <Callout kind="warn" title="The model's underlying assumption">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>More PARTICIPATIVE works better</strong> when subordinates{' '}
              <strong>have the information the leader needs</strong>, or when implementing the decision{' '}
              <strong>requires the leader to convince employees</strong>.
            </li>
            <li>
              <strong>More AUTHORITARIAN becomes appropriate</strong> when{' '}
              <strong>employee interests are not aligned with organizational interests</strong>, or the{' '}
              <strong>leader has more information</strong> than employees.
            </li>
          </ul>
          <p className="mt-2">
            Research shows decisions using the prescribed style are{' '}
            <strong>more effective than ones made using different styles</strong> (Field, 1982; Vroom
            &amp; Jago, 2007). The model is valid and useful but{' '}
            <strong>somewhat complicated to actually apply</strong> — and{' '}
            <strong>&ldquo;perhaps no other leadership theory is as explicit in its prescriptions as
            this one.&rdquo;</strong>
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 7
  {
    id: 'transformational-leadership',
    title: 'Contemporary I: Transformational & Transactional Leadership',
    subtitle: 'The most-studied theory of the century, and what charisma actually is',
    images: [
      {
        src: `${IMG}/10d_fig10-4_transformational_transactional.png`,
        alt: 'Figure 10.4: a two-section table listing the four transformational behaviors and the four transactional behaviors with definitions.',
        caption: 'Figure 10.4 — Transformational and transactional leader behaviors (Bass, 1991).'
      }
    ],
    content: (
      <>
        <Callout kind="info" title="The headline distinction">
          <strong>Transactional leaders motivate employees by rewards and punishments</strong> and by
          providing support when needed.
          <p className="mt-2">
            <strong>Transformational leaders TRANSFORM EMPLOYEE VALUES</strong> so that employees become
            loyal to the organization and see <strong>their own well-being and the
            organization&rsquo;s as fully intertwined.</strong>
          </p>
          <p className="mt-2 text-xs">
            Perhaps the <strong>most frequently studied theory of leadership in the twenty-first
            century</strong> (Burns, 1978).
          </p>
        </Callout>

        <Card title="The four transformational behaviors">
          <Table
            headers={['Behavior', 'What the leader does']}
            rows={[
              ['Idealized influence (also known as CHARISMA)', 'Acts as a role model, showing conviction, emphasizes the importance of purpose.'],
              ['Inspirational motivation', 'Articulating an appealing vision, creating excitement around the vision.'],
              ['Intellectual stimulation', 'Questioning old assumptions, encouraging expression of new ideas.'],
              ['Individualized consideration', 'Treating followers as individuals, providing support, caring about their personal development.']
            ]}
          />
        </Card>

        <Card title="The four transactional behaviors">
          <Table
            headers={['Behavior', 'What the leader does']}
            rows={[
              ['Contingent reward', 'Providing rewards and punishments based on performance, providing assistance along the way.'],
              ['Active management by exception', 'Leader PROACTIVELY monitors performance and intervenes if there is a THREAT that something will go wrong.'],
              ['Passive management by exception', 'Leader intervenes AFTER things go wrong.'],
              ['Laissez-faire', 'Leader is largely ABSENT even when needed, avoids managing the team, does not express views to guide the team.']
            ]}
          />
          <p className="mt-2 text-sm">
            <strong>Active vs. passive management by exception</strong> is a timing distinction:
            before vs. after.
          </p>
        </Card>

        <Callout kind="danger" title="The meta-analytic result worth memorizing">
          Across follower motivation, employee satisfaction with the leader, and follower performance,{' '}
          <strong>transformational leadership was the MOST POSITIVE predictor</strong>. But:
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>
              <strong>Contingent reward</strong> — a TRANSACTIONAL behavior — had{' '}
              <strong>almost as positive relations</strong> with these outcomes.
            </li>
            <li>
              <strong>Laissez-faire</strong> behaviors were{' '}
              <strong>NEGATIVELY correlated</strong> with leadership effectiveness.
            </li>
          </ul>
          <p className="mt-2">
            So <strong>different types of transactional leadership have OPPOSING effects</strong>{' '}
            (Judge &amp; Piccolo, 2004). Do not treat &ldquo;transactional&rdquo; as uniformly worse.
          </p>
        </Callout>

        <Callout kind="tip" title="Charisma is learnable — Conger and Kanungo's three behaviors">
          <strong>Charisma:</strong> rare personal qualities of leaders that create{' '}
          <strong>high levels of devotion and enthusiasm</strong> on the part of followers.
          <p className="mt-2">
            A lot of people think charisma is inborn. <strong>Leadership scholars disagree</strong> —
            charismatic leaders do <strong>very specific things, and these can be learned and
            emulated:</strong>
          </p>
          <ol className="list-decimal pl-5 mt-1 space-y-0.5">
            <li>Have an <strong>appealing vision that challenges the status quo</strong></li>
            <li>Communicate the vision <strong>in an inspirational manner</strong></li>
            <li>
              <strong>Execute the vision in unconventional ways</strong> where they serve as{' '}
              <strong>role models</strong>
            </li>
          </ol>
          <p className="mt-2 text-xs">
            The chapter analyzes <strong>Elon Musk</strong> against this framework.
          </p>
        </Callout>

        <Callout kind="info" title="Supporting evidence">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Transformational behaviors relate positively to <strong>work unit effectiveness</strong>{' '}
              (Lowe et al., 1996) and to <strong>job performance, citizenship behaviors, and work
              engagement</strong> (Hoch et al., 2018).
            </li>
            <li>
              In a bank study, when leaders were <strong>TRAINED</strong> to display transformational
              leadership, <strong>employee commitment increased and branch performance improved</strong>{' '}
              (Barling et al., 1996) — evidence it can be developed.
            </li>
            <li>
              In <strong>light infantry platoons</strong>, both transformational leadership and
              contingent reward related to unit performance, because members were{' '}
              <strong>more confident in the team&rsquo;s abilities and more cohesive</strong> (Bass et
              al., 2003).
            </li>
          </ul>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 8
  {
    id: 'lmx-theory',
    title: 'Contemporary II: Leader–Member Exchange (LMX)',
    subtitle: 'Leadership located in the relationship, not the person or the behavior',
    images: [
      {
        src: `${IMG}/10e_fig10-5_lmx_antecedents_consequences.png`,
        alt: 'Figure 10.5: antecedents (employee competence, personality, perceived similarity, leader behaviors, leader fairness, employee impression management) feeding into LMX quality, which feeds into consequences (autonomy, job satisfaction, organizational commitment, turnover negative, career success).',
        caption: 'Figure 10.5 — Antecedents and consequences of LMX quality.'
      }
    ],
    content: (
      <>
        <Callout kind="danger" title="Why LMX is a genuinely novel contribution">
          The theory&rsquo;s premise is that <strong>leaders lead through the unique and DYADIC
          relationships they build with EACH of their employees.</strong>
          <p className="mt-2">
            <strong>&ldquo;The secret&rdquo; of leadership resides NOT in who the leader is or what
            they do, but in the RELATIONSHIPS they build with employees</strong> (Dansereau et al.,
            1975). That is a direct break from both the trait and behavioral approaches.
          </p>
        </Callout>

        <Card title="High- vs. low-quality exchanges">
          <Table
            headers={['', 'High-quality LMX', 'Low-quality LMX']}
            rows={[
              ['Based on', 'Trust, mutual liking, and professional respect', 'Lower levels of liking, loyalty, and respect'],
              ['Felt obligation', 'A certain degree of MUTUAL obligation to support each other and not let each other down', 'The main obligation is to perform the tasks in the JOB DESCRIPTION — no special loyalty or desire to support the manager']
            ]}
          />
          <p className="mt-2 text-sm">
            <strong>The biggest distinction is the degree of TRUST.</strong> LMX development is a{' '}
            <strong>process of trust development</strong> (Bauer &amp; Green, 1996): the early days are
            a <strong>trial period</strong> where the employee shows reliability and competence, the
            manager <strong>delegates</strong>, and continues delegating if the employee performs.
          </p>
        </Card>

        <Callout kind="tip" title="What high-LMX employees get">
          <ul className="list-disc pl-5 space-y-0.5">
            <li>Enjoy their jobs more (Gerstner &amp; Day, 1997)</li>
            <li>Are given <strong>higher autonomy</strong> (Liden et al., 2000) and a more supportive environment</li>
            <li>
              Receive <strong>higher performance ratings, EVEN WHEN their objective performance does
              not warrant it</strong> (Duarte et al., 1993)
            </li>
            <li>Enjoy <strong>faster salary progress</strong> (Wayne et al., 1999)</li>
            <li>Are <strong>more influential at work</strong> (Sparrowe &amp; Liden, 2005)</li>
          </ul>
          <p className="mt-2">
            <strong>In return, organizations get:</strong> more committed and attached employees who
            are <strong>less likely to leave</strong> (Dulebohn et al., 2012) and more likely to{' '}
            <strong>go &ldquo;above and beyond&rdquo;</strong> (Martin et al., 2016).
          </p>
        </Callout>

        <Card title="How a high-quality exchange develops">
          <Table
            headers={['Source', 'What matters']}
            rows={[
              ['Early on', 'PERCEIVED SIMILARITY (Liden et al., 1993) and personality traits — AGREEABLENESS and EXTRAVERSION'],
              ['Later on', 'The EMPLOYEE’S CONTRIBUTIONS become more important (Nahrgang et al., 2009)'],
              ['Leader behaviors', 'Whether leaders engage in CONTINGENT REWARD behaviors, how FAIR they are, and how often they display TRANSFORMATIONAL behaviors (Dulebohn et al., 2012)'],
              ['Employee actions', 'Being reliable, high-performing, and competent'],
              ['Impression management', 'SELF-PROMOTION (bringing one’s effort to the manager’s attention) and INGRATIATION (doing favors, complimenting the manager) help build a better relationship — "leaders are human too"']
            ]}
          />
        </Card>

        <Callout kind="warn" title="Three complications">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>It matters more to some people.</strong> High-quality exchanges matter{' '}
              <strong>much more to INTROVERTED newcomers</strong> (Bauer et al., 2006), because
              extraverts receive support and information through other interactions. It also matters
              more as the <strong>manager gains power</strong> in the organization (Erdogan &amp;
              Enders, 2007).
            </li>
            <li>
              <strong>Mixed quality within one team is a problem.</strong> Employees enjoy even more
              benefits if they feel they have a <strong>BETTER relationship than other
              employees</strong> — but having both high- and low-quality relations in the same team was{' '}
              <strong>problematic for the team, with increased team CONFLICT</strong> (Hooper &amp;
              Martin, 2008). In the <strong>absence of a justice climate</strong>, employees experience
              detachment.
            </li>
            <li>
              <strong>The notable downside.</strong>{' '}
              <strong>When the manager leaves, employees close to them are likely to follow
              suit</strong> (Ballinger et al., 2010).
            </li>
          </ol>
          <p className="mt-2">
            The advice: invest in developing effective relationships, and{' '}
            <strong>if that is not possible, ensure a climate of FAIRNESS</strong> to avoid perceptions
            of favoritism and overly political behavior.
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 9
  {
    id: 'authentic-servant-abusive',
    title: 'Contemporary III: Authentic, Servant & Abusive Supervision',
    subtitle: 'Two positive styles with real criticisms, and the negative one',
    images: [
      {
        src: `${IMG}/10f_fig10-6_servant_leadership.png`,
        alt: 'Figure 10.6: six characteristics of servant leaders — empowering and developing employees, humility and modesty, authenticity, accepting others, providing direction, serving the broader community.',
        caption: 'Figure 10.6 — Characteristics of servant leaders (Van Dierendonck, 2011).'
      }
    ],
    content: (
      <>
        <Callout kind="info" title="Authentic leadership — and the context that produced it">
          <strong>Authentic leaders</strong> are those who <strong>&ldquo;remain true to
          themselves.&rdquo;</strong> The theory emerged{' '}
          <strong>at a time when corporate ethics scandals such as Enron&rsquo;s collapse in 2001
          dominated the news</strong>, which is why it emphasizes the values and ethics of leaders.
          <p className="mt-2">They are, first and foremost:</p>
          <ul className="list-disc pl-5 mt-1 space-y-0.5">
            <li>
              <strong>Self-aware</strong> — aware of their own values, strengths, and limitations, and
              can admit to themselves when they were wrong
            </li>
            <li>
              <strong>Honest and sincere</strong> — they do not hide weaknesses and are{' '}
              <strong>not afraid to display vulnerabilities</strong>
            </li>
            <li>They do not engage in <strong>&ldquo;ego-defensive&rdquo; behaviors</strong></li>
            <li>They have a <strong>strong sense of what is right and wrong</strong> (Walumbwa et al., 2008)</li>
          </ul>
        </Callout>

        <Callout kind="tip" title="What authentic leadership produces">
          Higher chances of satisfying employees&rsquo; needs and thereby improving performance (Leroy
          et al., 2015); a <strong>higher-quality LMX relationship</strong> with employees (Wang et al.,
          2014); and employees who become <strong>more resilient, optimistic, hopeful, and
          confident</strong>, translating into <strong>higher creativity</strong> (Rego et al., 2012).
        </Callout>

        <Callout kind="danger" title="Three criticisms — the chapter calls them paradoxes">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Organizational life may be necessarily INAUTHENTIC.</strong> We monitor our
              behaviors, consider the impact on the group, and manage impressions. Complete authenticity
              may be <strong>unreachable, and even an undesirable ideal</strong> in a workplace (Algera
              &amp; Lips-Wiersma, 2012).
            </li>
            <li>
              <strong>Being true to oneself does not necessarily imply being ETHICAL.</strong> The theory
              suggests moral actions follow from authenticity, but that{' '}
              <strong>would only be true if the leader truly HAS a strong moral compass, which may not
              exist in all leaders</strong> (Sparrowe, 2005).
            </li>
            <li>
              <strong>It is a challenge to TEACH.</strong> Authentic leadership is thought to develop
              from <strong>critical life events and career history</strong>, and it is unclear how it can
              be developed through interventions (Cooper et al., 2005).
            </li>
          </ol>
        </Callout>

        <Card title="Servant leadership">
          <p className="text-sm mb-2">
            In contrast to a leader who takes followers to a destination by inspiring them,{' '}
            <strong>servant leaders lead by SERVING their followers and helping them reach their full
            potential.</strong>
          </p>
          <p className="text-sm mb-2">
            The critical distinction: these leaders care about employees and support their career
            development, but <strong>this interest does NOT necessarily come from a desire to reach
            organizational goals.</strong> They see{' '}
            <strong>follower growth, happiness, and well-being as an END IN AND OF ITSELF rather than a
            means to an end</strong> (Liden et al., 2008). They can{' '}
            <strong>subordinate their self-interests to those of their employees</strong> (Greenleaf,
            1977).
          </p>
          <Table
            headers={['The six characteristics (Figure 10.6)']}
            rows={[
              ['Empowering and developing employees'],
              ['Humility and modesty'],
              ['Authenticity'],
              ['Accepting others'],
              ['Providing direction'],
              ['Serving the broader community']
            ]}
          />
          <p className="mt-2 text-sm">
            Related to organizational commitment, job performance, and even{' '}
            <strong>community volunteering</strong>; at team level to team confidence, performance, and
            citizenship; and <strong>CEO-level servant leadership relates to FIRM performance</strong>{' '}
            (Peterson et al., 2012).
          </p>
        </Card>

        <Callout kind="danger" title="Abusive supervision — how leaders do harm">
          <strong>Glossary:</strong> the <strong>sustained display of hostile and demeaning
          behaviors, EXCLUDING physical contact</strong> (Tepper, 2000).
          <p className="mt-2">
            Examples: <strong>ridiculing employees, reminding them of personal failures and mistakes,
            being rude to employees, and invading their privacy.</strong>
          </p>
          <Table
            headers={['Consequence', 'Detail']}
            rows={[
              ['For the target', 'More likely to QUIT. When unwilling or unable to quit: lower job satisfaction, lower organizational commitment, a sense that work interferes with family life, and stress (Mackey et al., 2017).'],
              ['For third parties', 'Coworkers of abused employees react negatively and are MOTIVATED TO HARM THE MANAGER when they feel the target does not deserve it (Mitchell et al., 2015).'],
              ['From the target', 'Employees are not passive — they often RETALIATE in ways that hurt the supervisor or the organization (Mitchell & Ambrose, 2007).'],
              ['Spillover to home', 'Abused employees are more likely to UNDERMINE THEIR PARTNERS OR SPOUSES when they get home — mistreated people mistreat others (Hoobler & Brass, 2006).'],
              ['Trickle-down', 'When supervisors feel the ORGANIZATION treats THEM unfairly, they are more likely to act abusively toward their own employees (Tepper et al., 2006).']
            ]}
          />
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 10
  {
    id: 'leadership-development',
    title: 'Cultivating Leadership: Development Methods',
    subtitle: 'Born or made, and the 70-20-10 model',
    content: (
      <>
        <Callout kind="warn" title="Born or learned? Both — but there is plenty of room">
          <Table
            headers={['What', 'Attributable to genes']}
            rows={[
              ['Variation in whether someone OCCUPIES a managerial role', '~30 percent (twin studies, Arvey et al., 2006)'],
              ['Variation in self-rated TRANSFORMATIONAL leadership', '58 percent (Johnson et al., 2004)'],
              ['Variation in self-rated TRANSACTIONAL leadership', '47 percent']
            ]}
          />
          <p className="mt-2">
            Genes affect leadership, but this <strong>leaves plenty of room to develop a
            person&rsquo;s leadership abilities.</strong>
          </p>
        </Callout>

        <Callout kind="info" title="Leadership development ≠ management training">
          <strong>Leadership development</strong> provides individual and collective experiences and
          programs so leaders have <strong>greater confidence, are more self-aware, are aware of their
          team&rsquo;s expertise, and create psychological safety</strong> in their teams (Day &amp;
          Dragoni, 2015).
          <p className="mt-2">
            <strong>Management training</strong> is different — it teaches managers how to{' '}
            <strong>plan, organize, coordinate, and control</strong> the work of the group.
          </p>
          <p className="mt-2 text-xs">
            Scale: US businesses spent <strong>over $70 billion</strong> on employee training and
            development in 2014, <strong>35 percent</strong> of it on management and leadership
            development (Bersin, 2014).
          </p>
        </Callout>

        <Card title="The methods">
          <Table
            headers={['Method', 'What it does']}
            rows={[
              [
                '360 feedback',
                'Employees are often NOT good observers of how their actions affect others. Feeding information from subordinates, colleagues, and higher-level managers back to the manager CREATES SELF-AWARENESS. But feedback alone is NOT SUFFICIENT — the leader must be motivated to change and must figure out HOW.'
              ],
              [
                'Coaching',
                'A ONE-ON-ONE, GOAL-BASED method of personal change (Ch. 8). The coach helps the person discover answers to their own problems — this is where feedback becomes action.'
              ],
              [
                'Mentoring',
                'Teaches the norms of the workplace and provides assistance with problems and challenges.'
              ],
              [
                'Developmental assignments',
                'Many major organizations see this as THE MOST IMPORTANT part. Nike, GE, and Coca-Cola craft assignments such as an overseas posting, managing a different team, or a role that stretches different "muscles."'
              ],
              [
                'Formal leadership training',
                'Off-the-job classroom or online. Over 80 PERCENT of companies use it — but "its importance PALES IN COMPARISON to feedback, coaching, mentoring, and learning by doing."'
              ]
            ]}
          />
        </Card>

        <Callout kind="danger" title="The 70-20-10 model — Center for Creative Leadership">
          <Table
            headers={['Share', 'Source of development']}
            rows={[
              ['70 percent', 'ON THE JOB, through novel and challenging assignments'],
              ['20 percent', 'Coaching and mentoring'],
              ['10 percent', 'Classroom training']
            ]}
          />
          <p className="mt-2">
            The reason classroom training is weakest connects to <strong>Ch. 8</strong> — what is
            learned in a classroom <strong>may not always transfer</strong> to the work environment.
          </p>
        </Callout>

        <Callout kind="tip" title="Experience alone is not enough — it needs reflection">
          <strong>&ldquo;Experience, by itself, is unlikely to lead to self-awareness.&rdquo;</strong>{' '}
          Coupled with <strong>reflection</strong>, it leads to new insights.
          <p className="mt-2">
            In an experiment, participants whose leadership behaviors were assessed then took part in an{' '}
            <strong>after-action review</strong>, reflecting with a trained facilitator on their
            challenges, how they behaved, and how they could have behaved differently. Compared to
            controls, they <strong>improved their leadership behaviors in the next assignment</strong>{' '}
            (DeRue et al., 2012).
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 11
  {
    id: 'legal-global-current-ch10',
    title: 'Legal, Global & Current Issues',
    subtitle: 'When abuse becomes illegal, the GLOBE project, and construct proliferation',
    content: (
      <>
        <Callout kind="danger" title="Legal — when abusive supervision becomes unlawful harassment">
          Yelling, bullying, and terrorizing employees are bad and unethical management practices. But{' '}
          <strong>when they target the sex, race, age, or another protected characteristic of the
          employee, they may also constitute ILLEGAL treatment.</strong>
          <p className="mt-2">
            If the abuse is <strong>laced with discriminatory comments</strong> directed at a protected
            characteristic, <strong>it constitutes illegal harassment</strong> under{' '}
            <strong>Title VII of the Civil Rights Act</strong>, the{' '}
            <strong>Age Discrimination Act (ADEA)</strong>, and the{' '}
            <strong>Americans with Disabilities Act</strong>.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>The conduct does NOT need to cause economic harm to be unlawful.</strong>
            </li>
            <li>
              Insults, put-downs, and demeaning behavior based on{' '}
              <strong>sex, race, religion, age (over 40), color, disability status, and national
              origin</strong> that is <strong>persistent and would be offensive to a reasonable
              person</strong> are illegal.
            </li>
            <li>
              Offensive remarks about someone&rsquo;s sex and unwelcome sexual advances constitute{' '}
              <strong>sexual harassment</strong>, unlawful <strong>regardless of the sex of the victim
              and harasser</strong>.
            </li>
            <li>
              Organizations can defend themselves only by showing that{' '}
              <strong>when harassment was brought to their attention, they promptly tried to correct
              it and did not retaliate</strong> — hence the advice to create channels for voicing
              concerns without fear of retaliation.
            </li>
          </ul>
        </Callout>

        <Card title="Ethical leadership sets the tone — the Tylenol case">
          <p className="text-sm">
            Whether an organization develops a culture of doing the right thing{' '}
            <strong>comes down to whether leaders, starting with the CEO, consider the ethical
            consequences of their actions.</strong> Employees take their ethical cues from their
            leaders.
          </p>
          <p className="text-sm mt-2">
            In <strong>1982</strong>, <strong>James Burke</strong>, then CEO of Johnson &amp; Johnson,
            faced a crisis when <strong>seven people died</strong> after taking cyanide-laced Tylenol.
            He issued a <strong>nationwide recall</strong> and spent <strong>over $100 million</strong>{' '}
            on tamper-proof packages, re-releasing the drug two months later. By putting safety first
            he saved the company&rsquo;s reputation and helped create a culture of doing the right
            thing. When leaders behave ethically,{' '}
            <strong>employees speak up and challenge management more</strong> (Walumbwa &amp;
            Schaubroeck, 2009).
          </p>
        </Card>

        <Callout kind="info" title="Global — the GLOBE project">
          A collaboration of <strong>over 170 scholars in 62 countries</strong>, analyzing data from{' '}
          <strong>over 17,000 managers</strong> (House et al., 2002).
          <Table
            headers={['Category', 'Attributes']}
            rows={[
              [
                'UNIVERSALLY endorsed',
                'Characteristics associated with TRANSFORMATIONAL leadership — having foresight, being trustworthy, dynamic, and a confidence builder'
              ],
              [
                'CONTINGENT on culture',
                'Being a risk-taker, being self-effacing, self-sacrificing, and compassionate'
              ],
              [
                'UNIVERSALLY UNDESIRABLE',
                'Being a loner, being irritable, and being dictatorial'
              ]
            ]}
          />
          <p className="mt-2">
            <strong>Power distance</strong> explains much of the variation. High-power-distance
            cultures (Asian and Middle Eastern) view unequal distribution of power as more acceptable,
            so <strong>authoritarian behaviors are more common</strong> and{' '}
            <strong>modesty or being self-effacing may not be valued in leaders</strong>.
            Low-power-distance cultures (Scandinavian) emphasize <strong>egalitarian norms</strong>.
          </p>
          <p className="mt-2 text-xs">
            Van de Vliert (2006) added that in countries with{' '}
            <strong>harsh climates and poor economies</strong>, authoritarian styles were more likely
            to be endorsed — such countries may historically have benefited from them for survival.
            And Dorfman et al. (2012), studying over 1,000 CEOs in 24 countries, found that{' '}
            <strong>when CEO style was ALIGNED with the society&rsquo;s expectations, CEOs were more
            effective</strong>; transformational leadership was universally effective, while{' '}
            <strong>participative leadership&rsquo;s effectiveness depended on culture</strong>.
          </p>
        </Callout>

        <Callout kind="danger" title="Current research — construct proliferation">
          Many scholars argue the leadership literature suffers from{' '}
          <strong>&ldquo;construct proliferation&rdquo;</strong> — we have{' '}
          <strong>many theories, frameworks, and labels that essentially are describing the same
          thing.</strong>
          <p className="mt-2">
            <strong>When all these behaviors and attributes are analyzed together, many LOSE their
            predictive validity</strong>, because the leader behaviors are{' '}
            <strong>highly correlated with each other</strong>.
          </p>
          <p className="mt-2">
            The chapter&rsquo;s own explanation: imagine rating your manager on transformational,
            transactional, authentic, and servant leadership plus LMX quality.{' '}
            <strong>Your answers will not be so different, because if you LIKE AND TRUST your manager,
            you will give positive responses to positively worded questions</strong> and negative
            responses to socially undesirable ones.
          </p>
          <p className="mt-2">
            Hence two current challenges: <strong>integrate the theories</strong>, and{' '}
            <strong>raise the bar</strong> so those proposing new theories must demonstrate novelty
            (DeRue et al., 2011).
          </p>
        </Callout>

        <Callout kind="warn" title="Current workplace — leading gig workers and remote teams">
          Much of the leadership literature comes from{' '}
          <strong>traditional structures</strong> where managers and employees interact regularly, work
          in the same location, and each employee reports to one manager. Today employees often work
          remotely, interact only through technology, and teams may consist of{' '}
          <strong>freelancers instead of employees</strong> — the{' '}
          <strong>unity of command principle</strong> (Ch. 14) is often violated.
          <p className="mt-2">
            <strong>Leading gig workers:</strong> the underlying principles stay the same —{' '}
            <strong>leadership is still essentially taking care of people and getting work done</strong>{' '}
            — but the behaviors differ. Gig workers are more independent but still need{' '}
            <strong>guidance about deliverables</strong> and ways to coordinate with ultimate goals.
            Taking care of their needs may mean being respectful and considerate about setting and
            communicating expectations — companies like TaskRabbit or Instacart showing consideration
            by <strong>scheduling in advance rather than last minute</strong>, or making loans available
            to combat financial insecurity.
          </p>
          <p className="mt-2 text-xs">
            Vidyarthi et al. (2014) studied employees reporting to <strong>TWO managers</strong> and
            found that when the treatment from the two leaders <strong>diverged</strong> (high-quality
            with one, low with the other), employees experienced{' '}
            <strong>more negative job attitudes and turnover</strong>, because they compare and feel
            the loss of what they are missing more keenly.
          </p>
        </Callout>

        <Callout kind="tip" title="The chapter's conclusion">
          Leadership is <strong>the ability to get things done by influencing others</strong>. Leaders
          share certain personality traits, but <strong>more importantly, effective leaders demonstrate
          particular BEHAVIORS and avoid demonstrating others.</strong>
          <p className="mt-2">
            <strong>What seems most important is that effective leadership emerges within the CONTEXT of
            a specific group of employees, organizational structure, and culture.</strong> Effective
            leaders read the situation and modify their behavior accordingly — so{' '}
            <strong>developing the FLEXIBILITY to demonstrate the behaviors required by the context is
            essential.</strong>
          </p>
        </Callout>
      </>
    )
  }
];
