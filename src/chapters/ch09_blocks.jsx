import React from 'react';
import { Callout, Table, Card } from '../components/Visual.jsx';

const IMG = 'ch09_work_motivation';

export default [
  // ------------------------------------------------------------------ 1
  {
    id: 'what-is-motivation',
    title: 'What Motivation Is — and What It Cannot Do',
    subtitle: 'The definition, the performance equation, and intrinsic vs. extrinsic',
    images: [
      {
        src: `${IMG}/09a_fig9-1_performance_equation.png`,
        alt: 'Figure 9.1: three circles labeled Motivation, Ability, and Environment joined by plus signs, equaling a fourth circle labeled Performance.',
        caption: 'Figure 9.1 — Performance is the SUM of motivation, ability, and environment.'
      }
    ],
    content: (
      <>
        <Callout kind="danger" title="The glossary definition — learn it word for word">
          <strong>Work motivation:</strong> a set of energetic forces that originate{' '}
          <strong>both within as well as beyond an individual</strong> to <strong>initiate</strong>{' '}
          work-related behavior and to determine its <strong>form, direction, intensity, and
          duration</strong> (Pinder, 2008).
          <p className="mt-2">
            Four things it determines — form, direction, intensity, duration — and two places it comes
            from: inside and outside. Both halves are testable.
          </p>
        </Callout>

        <Callout kind="warn" title="The single most exam-friendly fact in this section">
          Performance is the <strong>SUM</strong> of motivation, ability, and environment. A recent
          meta-analysis (Van Iddekinge et al., 2018) found support for <strong>adding</strong> these
          factors <strong>rather than multiplying them, which had previously been thought to be the
          relationship.</strong>
          <p className="mt-2">
            Contrast this with <strong>motivational force in expectancy theory, which IS multiplicative
            (V × I × E)</strong>. The chapter uses both, and swapping them is an easy trap.
          </p>
        </Callout>

        <Card title="Why the equation matters — the chapter's own examples">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong>Ability ceiling:</strong> someone may be very motivated to play in the NBA, but at
              5 feet tall, no amount of motivation makes that a viable career.
            </li>
            <li>
              <strong>Environment ceiling:</strong> a highly capable and motivated barista still performs
              poorly if the order was misheard over noise, or the espresso maker is broken.
            </li>
            <li>
              The takeaway: a motivated person <strong>will try hard but may not reach the goal or
              perform well</strong> on a given attempt.
            </li>
          </ul>
        </Card>

        <Callout kind="info" title="Intrinsic vs. extrinsic — the distinction that runs the whole chapter">
          <Table
            headers={['Type', 'Glossary definition', "The chapter's example"]}
            rows={[
              [
                'Intrinsic motivation',
                'Motivation that comes from INSIDE the individual such that they are engaging in behavior because it is personally rewarding to them.',
                'Social workers, who are paid relatively less than other occupations especially given the cost of their education, but report doing the work because they enjoy and value helping others.'
              ],
              [
                'Extrinsic motivation',
                'Motivation originating from OUTSIDE the individual.',
                'Doing a job one does not especially like because the pay is good.'
              ]
            ]}
          />
          <p className="mt-2">
            The chapter immediately flags that <strong>most of the time our motivation comes from some
            combination of both</strong> (Deci &amp; Ryan, 1985) — which is exactly what
            self-determination theory formalizes later.
          </p>
        </Callout>

        <Card title="Scale of the field">
          <p className="text-sm">
            Over <strong>194,000 journal articles and dissertations</strong> on motivation appear in the
            PsycINFO database for psychology alone. The chapter notes motivation{' '}
            <strong>pervades all I-O issues</strong>, since nearly all behavior is at least partially
            determined by individual motivation — and it is often at the top of the list of what both
            managers and academics care about.
          </p>
        </Card>

        <Callout kind="tip" title="The organizing map for the rest of the chapter">
          Three headings, and every theory belongs to exactly one:
          <ol className="list-decimal pl-5 mt-1 space-y-0.5">
            <li><strong>Needs-based</strong> — WHICH needs must be fulfilled</li>
            <li><strong>Process-based</strong> — HOW motivation develops (cognitive)</li>
            <li><strong>Application-based</strong> — WHAT can actually be changed at work</li>
          </ol>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 2
  {
    id: 'maslow-erg',
    title: 'Needs I: Hierarchy of Needs & ERG Theory',
    subtitle: 'Five needs, then three — and why frustration-regression beat the strict climb',
    images: [
      {
        src: `${IMG}/09b_fig9-2_maslow_hierarchy.png`,
        alt: "Figure 9.2: Maslow's hierarchy drawn as a five-level pyramid — Physiological, Safety, Social, Ego, Self-Actualization — with contents listed inside each band.",
        caption: 'Figure 9.2 — Maslow’s hierarchy of needs is often depicted as a pyramid.'
      },
      {
        src: `${IMG}/09c_fig9-3_erg_vs_maslow.png`,
        alt: "Figure 9.3: the same Maslow pyramid with brackets on the right collapsing the five levels into ERG's three — Existence, Relatedness, Growth.",
        caption: 'Figure 9.3 — ERG theory consists of the three needs on the right rather than Maslow’s five on the left.'
      }
    ],
    content: (
      <>
        <Callout kind="info" title="Needs-based theories in one sentence">
          They <strong>define motivated behavior as needs satisfaction</strong>: individuals have needs
          and are motivated to satisfy them, so if a manager can identify what an employee&rsquo;s needs
          are, the manager can understand what motivates that employee.
        </Callout>

        <Card title="Maslow (1943) — the five needs, bottom to top">
          <Table
            headers={['#', 'Need', 'Glossary contents']}
            rows={[
              ['1', 'Physiological needs', 'Water, food, and air'],
              ['2', 'Safety/security needs', 'Safe housing, steady employment, healthcare benefits'],
              ['3', 'Social needs', 'Friendships, feeling accepted at work, romantic attachments'],
              ['4', 'Ego/esteem needs', 'Social recognition, feeling one has done a good job, accomplishment'],
              ['5', 'Self-actualization needs', 'Being self-aware, focusing on personal growth, doing meaningful work']
            ]}
          />
          <p className="mt-2 text-sm">
            The climb itself has a name: <strong>fulfillment progression</strong> — lower-level (basic)
            needs must be fulfilled before moving up to higher-order needs.
          </p>
        </Card>

        <Callout kind="warn" title="Two side-connections the chapter makes here">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Belongingness theory</strong> (Baumeister &amp; Leary, 1995) — the need humans have
              to affiliate with one another. Sits alongside <strong>social needs</strong>.
            </li>
            <li>
              <strong>Social entrepreneurship</strong> is offered as a modern example of{' '}
              <strong>self-actualization</strong>, since it lets people combine work with social causes
              they value.
            </li>
          </ul>
        </Callout>

        <Callout kind="danger" title="The evidence — this is the testable part, not the pyramid">
          <Table
            headers={['Study', 'What it found']}
            rows={[
              ['Hall (1968), AT&T employees over 5 years', 'NO strong evidence for the hierarchy. DID find that as managers moved up, need for safety DECREASED while affiliation, achievement/esteem, and self-actualization INCREASED.'],
              ['Wahba & Bridwell (1976), full literature review', '"Some support, but not much." This was the general consensus for decades.'],
              ['Tay & Diener (2011), Gallup data across 123 countries', 'Ordering of need fulfillment was "fairly consistent across country conditions" and showed "a tendency, but not a strong one, to fulfill the needs in a specific order."']
            ]}
          />
          <p className="mt-2">
            The chapter&rsquo;s own verdict: <strong>at a minimum, Maslow&rsquo;s theory can be a helpful
            heuristic</strong> — a reminder that fulfillment or lack of fulfillment of needs does motivate
            behavior, and that different people focus on different needs.
          </p>
        </Callout>

        <Card title="Alderfer — ERG theory collapses five into three">
          <Table
            headers={['ERG need', 'Covers which Maslow levels', 'Glossary']}
            rows={[
              ['Existence', 'Physiological + Safety (levels 1–2)', 'Includes Maslow’s first two levels of physiological and security needs.'],
              ['Relatedness', 'Social (level 3)', 'Subsumes Maslow’s levels of social needs.'],
              ['Growth', 'Ego/esteem + Self-actualization (levels 4–5)', 'Needs that satisfy an individual’s desire to develop as a person — inner esteem and self-actualization.']
            ]}
          />
        </Card>

        <Callout kind="tip" title="Frustration-regression — Alderfer's real contribution">
          <strong>Frustration-regression principle:</strong> if a need is not met, a person may focus on
          other, <strong>LOWER-level</strong> needs to compensate for this.
          <p className="mt-2">
            So a person focused on <strong>growth</strong>, if frustrated, might fall back to{' '}
            <strong>relatedness</strong> rather than working their way up the hierarchy. Alderfer also
            argued all three ERG needs <strong>may operate at the same time</strong> — a direct break with
            Maslow&rsquo;s strict sequence.
          </p>
        </Callout>

        <Callout kind="warn" title="Know the caveat on Alderfer's own test">
          Alderfer (1969) used data from <strong>110 bank employees</strong>. The chapter says plainly
          that <strong>by today&rsquo;s research standards, his was not a strong research design</strong>{' '}
          — but it showed <strong>more support for his theory than for Maslow&rsquo;s</strong>. Tay and
          Diener (2011) later supported frustration-regression over strict ordering too, and argued the
          key to happiness and well-being is a <strong>balanced life that shifts between the different
          aspects of ERG</strong>.
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 3
  {
    id: 'twofactor-acquired',
    title: 'Needs II: Two-Factor Theory & Acquired Needs Theory',
    subtitle: 'Separate continua for satisfaction and dissatisfaction, then the three-need constellation',
    images: [
      {
        src: `${IMG}/09d_fig9-4_hygiene_vs_motivators.png`,
        alt: 'Figure 9.4: two columns. Hygiene Factors lists work policies and rules, supervision and relationships at work, working conditions, salary, job security. Motivators lists achievement, recognition, interesting work, responsibility, advancement opportunities.',
        caption: 'Figure 9.4 — The two-factor theory posits that absent hygiene factors cause dissatisfaction, while motivators cause satisfaction.'
      }
    ],
    content: (
      <>
        <Callout kind="danger" title="Two-factor theory is a theory of SATISFACTION, not motivation">
          Herzberg&rsquo;s <strong>two-factor theory</strong> (also known as{' '}
          <strong>motivator-hygiene theory</strong>) is explicitly described as{' '}
          <strong>a theory of job satisfaction</strong>. Expect this framing to be tested.
        </Callout>

        <Card title="The two factor types">
          <Table
            headers={['Factor type', 'Glossary definition', 'Examples (Figure 9.4)']}
            rows={[
              [
                'Hygiene factors',
                'Elements which do NOT motivate when they are present, but may serve to LOWER motivation if they are not met. High levels of hygiene factors do not motivate.',
                'Work policies and rules; supervision and relationships at work; working conditions; SALARY; job security'
              ],
              [
                'Motivator factors',
                'Elements which DO motivate employees if they are present.',
                'Achievement; recognition; interesting work; responsibility; advancement opportunities'
              ]
            ]}
          />
          <p className="mt-2 text-sm">
            Note that <strong>salary is a hygiene factor</strong>, not a motivator — a frequent test item.
          </p>
        </Card>

        <Callout kind="warn" title="Why this was revolutionary">
          It proposed that <strong>dissatisfaction (low motivation) and satisfaction (high motivation) are
          NOT on one continuum</strong>, but rather on <strong>different ones</strong>, and that{' '}
          <strong>different factors lead to satisfaction and dissatisfaction</strong>.
          <p className="mt-2">
            Practical consequence: <strong>fixing hygiene factors never produces motivation.</strong> It
            only removes a source of dissatisfaction.
          </p>
        </Callout>

        <Card title="The trash can example — the chapter's own illustration">
          <p className="text-sm">
            You would not jump up and down saying &ldquo;I love my job&rdquo; because your trash can was
            emptied. But imagine it is <strong>not</strong> emptied, for weeks. Suddenly the thing that
            never made you feel positive becomes <strong>a major distractor and dissatisfier</strong> that
            gets in the way of focusing on anything else. That is a hygiene factor.
          </p>
          <p className="text-sm mt-2">
            By contrast, <strong>being recognized for excellent performance</strong> is not something you
            expect daily, but it is nice to hear occasionally. That is a <strong>motivator</strong>.
          </p>
        </Card>

        <Callout kind="info" title="The cultural caveat — recognition is not universal">
          In <strong>collectivist countries such as China, Japan, or Panama</strong>, singling out an
          individual for special recognition can actually serve to <strong>embarrass</strong> them rather
          than motivate them, because self-image tends to be defined as <strong>&ldquo;we&rdquo; rather
          than &ldquo;I&rdquo;</strong> (Hofstede, 2001). Recognizing the <strong>group or team</strong> is
          the recommended alternative.
        </Callout>

        <Callout kind="danger" title="The evidence problem">
          Two-factor theory <strong>has not found overwhelming support</strong> (Salancik &amp; Pfeffer,
          1977; Wigdor, 1967). Critics argue the underlying research is <strong>weak</strong> and that
          limited support may be due to <strong>priming</strong> and to the <strong>particular samples
          </strong> in the original studies. Most research on it is <strong>decades old</strong>, and many
          have discounted it on that basis.
        </Callout>

        <Card title="McClelland — acquired needs theory">
          <p className="text-sm mb-2">
            Human motivation is determined by the needs of that person, and{' '}
            <strong>each person has a different constellation of three needs</strong>. Each individual has
            a <strong>dominant need</strong>, and that most dominant need motivates them more than the
            others.
          </p>
          <Table
            headers={['Need', 'Definition', 'Research on who has it and where they fit']}
            rows={[
              [
                'Need for achievement (N-Ach)',
                'Wanting to excel and succeed.',
                'Enjoy success; set goals that are CHALLENGING BUT REALISTIC; desire a great deal of FEEDBACK; persist long after others give up (Campbell, 1982); attracted to MERIT-based rather than seniority-based rewards; do well in sales, entrepreneurship, science, engineering.'
              ],
              [
                'Need for power (N-Pow)',
                'Wanting to influence others and make an impact. Posited as a key motivator for leadership and politics.',
                'They "walk a fine line" — damaging to the organization and their own relationships when aimed at simply getting what they want (Spreier, 2006), but quite effective when focused on change for the greater good.'
              ],
              [
                'Need for affiliation (N-Affil)',
                'Wanting friendships, to feel accepted, and to engage with others.',
                'Good fit where they interact with others who need them — social work, teaching. For a MANAGER it can challenge effectiveness, since the desire to be liked and avoid conflict makes the job unpleasant and difficult (Harrell, 1984).'
              ]
            ]}
          />
        </Card>

        <Callout kind="tip" title="The comparison the chapter wants you to make">
          <strong>Of all the needs theories covered, acquired needs theory has consistently received the
          MOST research support.</strong> Maslow has weak support, two-factor has weak support — but
          McClelland holds up. If an item asks which needs theory is best supported, this is it.
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 4
  {
    id: 'self-determination',
    title: 'Needs III: Self-Determination Theory & the Needs Summary',
    subtitle: 'The extrinsic-to-intrinsic continuum, and why the field moved on to process theories',
    images: [
      {
        src: `${IMG}/09e_fig9-5_motivation_regulation_spectrum.png`,
        alt: 'Figure 9.5: a left-to-right spectrum from External Regulation through Introjected, Identified, and Integrated Regulation to Intrinsic Motivation, labeled External Regulation on the left and Internal Regulation on the right.',
        caption: 'Figure 9.5 — The motivation regulation spectrum.'
      }
    ],
    content: (
      <>
        <Callout kind="info" title="Self-determination theory (Deci & Ryan, 1985)">
          Motivation sits on a <strong>continuum of fully extrinsic to fully intrinsic</strong>. Of
          greatest importance, the figure illustrates that{' '}
          <strong>intrinsic motivation is key to SUSTAINED motivation at work.</strong>
        </Callout>

        <Card title="The five points on the spectrum (Figure 9.5), left to right">
          <Table
            headers={['Stage', 'What characterizes it']}
            rows={[
              ['External regulation', 'Compliance; external rewards and punishments'],
              ['Introjected regulation', 'Self-control; internal rewards and punishments'],
              ['Identified regulation', 'Personal importance; conscious valuing'],
              ['Integrated regulation', 'Value congruence; synthesis with self-image'],
              ['Intrinsic motivation', 'Interest, enjoyment; inherent satisfaction']
            ]}
          />
          <p className="mt-2 text-sm">
            The left end is labeled <strong>External Regulation</strong> and the right end{' '}
            <strong>Internal Regulation</strong>. The continuum was supported by a meta-analysis of{' '}
            <strong>486 samples representing over 205,000 respondents</strong> (Howard et al., 2017).
          </p>
        </Card>

        <Callout kind="warn" title="Grant's prosocial motivation findings">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Firefighters</strong> who reported high <strong>prosocial (helping)</strong> and{' '}
              <strong>intrinsic</strong> motivation were more likely to work overtime a month later.
            </li>
            <li>
              <strong>Paid call center fundraisers</strong> raised more money when high in prosocial and
              intrinsic motivation — and the relationship was{' '}
              <strong>mediated by the number of calls made</strong>. More intrinsically motivated → more
              calls → more donations.
            </li>
          </ul>
        </Callout>

        <Callout kind="danger" title="Do not overstate intrinsic motivation">
          A meta-analysis of <strong>183 studies</strong> found that{' '}
          <strong>BOTH intrinsic and extrinsic motivation matter for performance</strong> (Cerasoli et al.,
          2014). The chapter&rsquo;s claim is that intrinsic motivation is key to{' '}
          <em>sustained</em> motivation — not that extrinsic motivation is worthless.
        </Callout>

        <Card title="Goal, intensity, duration — the rest of the definition at work">
          <p className="text-sm">
            Returning to the definition, the chapter notes motivation has a <strong>goal it is directed
            at</strong>, an <strong>intensity</strong>, and a <strong>duration</strong>. Doing well on an
            upcoming exam is <strong>inwardly directed</strong> and needs a lot of effort over a short
            period. Stopping world hunger is <strong>outwardly directed</strong>, requires the effort of
            many, and even a lifetime of effort may not be enough.
          </p>
        </Card>

        <Callout kind="tip" title="Summary of needs-based theories — and the pivot to process">
          <Table
            headers={['Theory', 'One-line summary']}
            rows={[
              ['Hierarchy of needs', 'A pyramid of five basic human needs (physiological, security, social, esteem, self-actualization).'],
              ['ERG theory', 'A more streamlined approach — existence, relatedness, growth needs.'],
              ['Two-factor theory', 'Differentiates aspects likely to lead to SATISFACTION (motivators) from those likely to lead to DISSATISFACTION (hygiene factors).'],
              ['Acquired needs theory', 'Examines which of three needs dominates an individual’s behavior.'],
              ['Self-determination theory', 'Focuses on the importance of intrinsic motivation.']
            ]}
          />
          <p className="mt-2">
            <strong>The stated weakness that drove the field forward:</strong> needs-based theories treat
            motivation as a result of <strong>relatively stable elements within the individual — needs —
            rather than more dynamic processes.</strong> That is why process-based theories emerged.
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 5
  {
    id: 'equity-theory',
    title: 'Process I: Equity Theory & Equity Sensitivity',
    subtitle: 'Ratios, referent others, and the three orientations toward exchange',
    images: [
      {
        src: `${IMG}/09f_fig9-6_equity_ratio.png`,
        alt: "Figure 9.6: two balance diagrams set equal — My Outcome over My Input equals Referent Other's Outcome over Referent Other's Input.",
        caption: 'Figure 9.6 — Equity compares the ratio of one’s own outcomes and inputs to a referent other’s.'
      },
      {
        src: `${IMG}/09g_fig9-7_entitleds_benevolents.png`,
        alt: 'Figure 9.7: two labeled panels. Entitleds show my ratio greater than the referent other\'s; Benevolents show my ratio less than the referent other\'s.',
        caption: 'Figure 9.7 — Entitleds prefer a higher ratio than others; benevolents tolerate a lower one.'
      }
    ],
    content: (
      <>
        <Callout kind="info" title="Process-based theories in one sentence">
          They differ from needs-based theories in that they focus on{' '}
          <strong>HOW motivation develops and what factors cause motivation to exist</strong>. They have a{' '}
          <strong>cognitive component</strong> — motivation as either a cognitive <em>choice</em> or a
          cognitive <em>appraisal and self-regulation</em> process. The three are{' '}
          <strong>equity, justice, and expectancy</strong>.
        </Callout>

        <Card title="Equity theory (Adams, 1963)">
          <p className="text-sm mb-2">
            <strong>Glossary:</strong> the comparison that individuals make to determine if what they are
            receiving is <strong>fair compared to the amount they are giving</strong>.
          </p>
          <Table
            headers={['Term', 'Definition', 'Examples given']}
            rows={[
              ['Inputs', 'Things the person brings to and contributes to the situation.', 'Education, experience, effort'],
              ['Outcomes', 'Things the person gets from the organization.', 'Recognition, pay, promotions']
            ]}
          />
        </Card>

        <Callout kind="danger" title="The two things that make equity theory work">
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              <strong>It is the RATIO, not the absolute amount.</strong> An employee who feels they
              contribute little and receive little in return may perceive{' '}
              <strong>a high sense of equity</strong>. Someone contributing enormously and receiving little
              will feel unfairly treated.
            </li>
            <li>
              <strong>It is COMPARED to a referent other.</strong> This could be a coworker, a person from
              a different organization, or <strong>a combination of people in the employee&rsquo;s
              mind</strong>. Put in little and get paid little — fine. But if your{' '}
              <strong>coworker</strong> puts in little and gets paid a lot, that causes inequity.
            </li>
          </ol>
        </Callout>

        <Callout kind="warn" title="Where the motivation actually comes from">
          Because <strong>inequity is an unpleasant state</strong>, the lack of equity{' '}
          <strong>initiates behavior</strong> in the focal person. Four responses the chapter names:
          <ul className="list-disc pl-5 mt-1 space-y-0.5">
            <li>Ask for a raise</li>
            <li>Quit their job</li>
            <li>Put in less effort</li>
            <li>
              <strong>Change their referent comparison person</strong> to get the ratio back in balance
            </li>
          </ul>
        </Callout>

        <Card title="Equity sensitivity — not everyone wants the same ratio">
          <p className="text-sm mb-2">
            <strong>Equity sensitivity:</strong> how much an individual prefers to receive an outcome
            relative to his or her inputs in comparison to a relevant other. It represents an
            individual&rsquo;s <strong>orientation toward exchange relationships</strong> (Sauley &amp;
            Bedeian, 2000).
          </p>
          <Table
            headers={['Orientation', 'Preference', 'Figure 9.7']}
            rows={[
              ['Benevolents', 'Greater tolerance for, and comfortable with, GIVING MORE inputs than the outcomes they receive.', 'My ratio < referent other’s ratio'],
              ['Equity sensitives', 'Prefer an EQUAL ratio of inputs and outcomes.', 'Ratios balanced (Figure 9.6)'],
              ['Entitleds', 'Prefer to receive MORE in outcomes than they put in as inputs.', 'My ratio > referent other’s ratio']
            ]}
          />
        </Card>

        <Callout kind="tip" title="The self-assessment scoring — note the direction">
          The equity preference survey runs <strong>16 to 80</strong>, and the scale runs{' '}
          <strong>opposite to intuition</strong> — a LOW score means entitled, a HIGH score means
          benevolent:
          <Table
            headers={['Score', 'Orientation']}
            rows={[
              ['16–39', 'Entitlement orientation'],
              ['40–56', 'Equity sensitivity'],
              ['57–80', 'Benevolence']
            ]}
          />
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 6
  {
    id: 'organizational-justice',
    title: 'Process II: Organizational Justice Theory',
    subtitle: 'Three kinds of fairness, and why injustice bites harder than justice',
    content: (
      <>
        <Callout kind="info" title="How justice theory extends equity theory">
          Organizational justice theory <strong>grew out of equity theory</strong>. Where equity theory
          focused <strong>primarily on the fairness of OUTCOMES</strong>, justice theory{' '}
          <strong>expands the focus to include the fairness of PROCESS and INTERPERSONAL TREATMENT as
          well.</strong>
          <p className="mt-2 text-xs">
            Cross-reference: mentioned briefly in Ch. 2, returned to in Ch. 11.
          </p>
        </Callout>

        <Card title="The three justices — know which is which">
          <Table
            headers={['Type', 'Glossary definition', 'The promotion example']}
            rows={[
              [
                'Distributive justice',
                'Perceptions of fairness regarding the actual OUTCOMES of a decision or action. With its focus on outcomes, it is SIMILAR TO EQUITY THEORY.',
                'You did not get the promotion — the outcome itself.'
              ],
              [
                'Procedural justice',
                'The fairness of the POLICIES AND GUIDELINES used to make decisions.',
                'You might not get the promotion, but you would feel better if a FAIR PROCESS was used.'
              ],
              [
                'Interactional/interpersonal justice',
                'The way in which one is TREATED by others within the organization.',
                'You would feel better about not getting it if you were TREATED WITH RESPECT during the process.'
              ]
            ]}
          />
          <p className="mt-2 text-sm">
            <strong>Justice</strong> itself is defined as <strong>how fair an employee believes the
            employer is to its employees</strong> — and as the idea that an action or decision is fair and
            just.
          </p>
        </Card>

        <Callout kind="warn" title="What justice perceptions predict">
          Justice perceptions are <strong>powerful predictors of how much motivation and trust an
          individual will have</strong> (Colquitt et al., 2007), and are important antecedents to:
          <ul className="list-disc pl-5 mt-1 space-y-0.5">
            <li>Organizational commitment</li>
            <li>Perceived organizational support</li>
            <li>Quality of one&rsquo;s relationship with one&rsquo;s supervisor</li>
            <li>
              Task performance, <strong>helping behaviors</strong>, and{' '}
              <strong>counterproductive work behaviors</strong> (Colquitt et al., 2013; Rupp et al., 2014)
            </li>
          </ul>
        </Callout>

        <Callout kind="danger" title="The two findings most likely to be tested">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Procedural justice DEPLETES; interpersonal justice REPLENISHES.</strong> Johnson et
              al. (2014) found that individuals enacting procedural justice over time may suffer{' '}
              <strong>energy depletion</strong> from &ldquo;fighting the good fight,&rdquo; while those
              engaging in <strong>interpersonal justice behaviors see their energy replenished</strong>{' '}
              from the social relationships that are enhanced.
            </li>
            <li>
              <strong>Injustice is felt much more strongly than justice.</strong> So{' '}
              <strong>much like hygiene factors</strong>, organizational justice{' '}
              <strong>can lead to a LACK of motivation when it is violated</strong> — rather than
              producing motivation when it is present.
            </li>
          </ol>
        </Callout>

        <Callout kind="tip" title="Global note — where justice matters most">
          Shao et al. (2013), meta-analyzing <strong>190,000 employees in 32 countries</strong>, found
          justice effects are <strong>strongest</strong> among nations characterized by{' '}
          <strong>individualism, a nurturing orientation, uncertainty avoidance, and LOW power
          distance</strong> (relatively little power difference between employees and supervisors).
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 7
  {
    id: 'expectancy-theory',
    title: 'Process III: Expectancy Theory (VIE)',
    subtitle: 'Three beliefs multiplied together — and the three diagnostic questions managers use',
    images: [
      {
        src: `${IMG}/09h_fig9-8_expectancy_vie.png`,
        alt: 'Figure 9.8: a vertical chain from Effort to Performance to Reward to Motivation, with Expectancy, Instrumentality, and Valence labeled on the left joined by multiplication signs, and the three diagnostic questions on the right.',
        caption: 'Figure 9.8 — Expectancy theory consists of three components: Expectancy, Instrumentality, and Valence.'
      }
    ],
    content: (
      <>
        <Callout kind="info" title="Expectancy theory (Vroom, 1964/1994)">
          Also called <strong>VIE theory</strong>. It explains <strong>what motivates people to behave one
          way instead of another</strong>, focusing on their goals and where they put their efforts.
        </Callout>

        <Card title="The three components">
          <Table
            headers={['Component', 'The belief', 'What influences it']}
            rows={[
              [
                'Expectancy (E)',
                'The extent to which individuals believe that their EFFORT will lead to their desired PERFORMANCE.',
                'How capable a person believes he is at performing this behavior, how difficult it is, and how much CONTROL he believes he has over the results.'
              ],
              [
                'Instrumentality (I)',
                'The degree to which individuals expect their PERFORMANCE to lead to an OUTCOME or reward — external (a bonus) or internal (satisfaction from doing a task well).',
                'Requires TRUST in the effort–outcome connection: a formal company policy outlining terms, or a supervisor who consistently rewards good performance. Promoting on STRICT SENIORITY destroys instrumentality.'
              ],
              [
                'Valence (V)',
                'The VALUE that a person places on that reward.',
                'A person’s values, needs, and goals. Extrinsically motivated employees may value a promotion or paid time off; intrinsically motivated ones may most value choosing their next assignment or being entrusted with meaningful work.'
              ]
            ]}
          />
        </Card>

        <Callout kind="danger" title="Motivational force is MULTIPLICATIVE — the key contrast in the chapter">
          <strong>Motivational force = V × I × E.</strong>
          <p className="mt-2">
            Because this is a <strong>multiplicative</strong> formula,{' '}
            <strong>if any one of V, I, or E goes to 0, motivation will fall.</strong>
          </p>
          <p className="mt-2">
            Compare to <strong>Figure 9.1</strong>, where performance = motivation{' '}
            <strong>+</strong> ability <strong>+</strong> environment, which is{' '}
            <strong>additive</strong>. One equation adds, the other multiplies. Do not mix them up.
          </p>
        </Callout>

        <Callout kind="warn" title="The $5 gift card">
          If Janice wants a bonus, she should be motivated — but if the bonus is small, say a{' '}
          <strong>$5 gift card</strong>, it probably will not do much to motivate her and{' '}
          <strong>might even lead to feelings of injustice</strong>. Low valence does not just fail to
          motivate; it can actively backfire.
        </Callout>

        <Card title="The three diagnostic questions — why managers find VIE useful">
          <Table
            headers={['Question', 'Component', 'If the answer is no…']}
            rows={[
              ['Has this employee done this job effectively in the past?', 'Expectancy', 'It may be an issue of the employee NOT HAVING ENOUGH RESOURCES, such as good training — rather than motivation.'],
              ['Does an employee’s good performance lead to good outcomes in this organization?', 'Instrumentality', 'The REWARD SYSTEM may need to be redesigned to make the job more motivating.'],
              ['Does this employee appear to value the reward for a job well done?', 'Valence', 'An opportunity to RECONSIDER what employees find valuable — additional time off, recognition by upper management, a bonus.']
            ]}
          />
        </Card>

        <Callout kind="tip" title="Two subtleties worth a question each">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              The theory is based on <strong>an individual&rsquo;s BELIEF in V, I, and E — not necessarily
              the reality of the situation.</strong>
            </li>
            <li>
              Van Eerde and Thierry&rsquo;s (1996) meta-analysis of <strong>77 studies</strong> concluded
              the VIE components <strong>do predict work-related criteria</strong>, but that{' '}
              <strong>a simple multiplicative relationship may not work — it is more of an ADDITIVE
              relationship.</strong> Research has still consistently found VIE affects training motivation
              (Mathieu et al., 1992) and test-taking motivation (Sanchez et al., 2000).
            </li>
          </ul>
        </Callout>

        <Callout kind="info" title="Summary of process-based theories">
          <Table
            headers={['Theory', 'What demotivates / motivates']}
            rows={[
              ['Equity theory', 'Employees are DEMOTIVATED when the ratio of their inputs to outcomes, compared to a key other person, is not the ratio they prefer — and they work to restore equity.'],
              ['Organizational justice', 'Takes equity one step further to consider not only outcomes (distributive) but also the procedures used and interpersonal treatment received.'],
              ['Expectancy theory (VIE)', 'Employees are MOTIVATED when they see a clear link between effort and performance (E), between performance and outcomes (I), and when they value the outcomes (V).']
            ]}
          />
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 8
  {
    id: 'goal-setting',
    title: 'Application I: Goal-Setting, SMART Goals & the Dark Side',
    subtitle: 'The best-supported theory in the chapter — and the conditions under which it backfires',
    content: (
      <>
        <Callout kind="danger" title="The status claim — memorize this one">
          <strong>&ldquo;There are few theories in I-O which have been studied more or garnered more
          support than the goal-setting theory of motivation.&rdquo;</strong> Mitchell and Daniels (2003,
          p. 231) called goal-setting <strong>&ldquo;quite easily the single most dominant theory in the
          field.&rdquo;</strong>
          <p className="mt-2">
            Contrast with Maslow and two-factor theory, which the chapter says have weak support. This
            comparison is prime exam material.
          </p>
        </Callout>

        <Card title="SMART goals — the five components">
          <Table
            headers={['Letter', 'Component', 'Why the chapter says it matters']}
            rows={[
              ['S', 'Specific', '"Just do your best" is "some of the worst advice we can give someone" if we want higher performance — it is simply TOO GENERAL to be useful.'],
              ['M', 'Measurable', 'If a goal is not measurable, HOW WILL YOU KNOW when you reach it?'],
              ['A', 'Attainable (Aggressive but Achievable)', 'A CHALLENGING goal is great for motivation — but an IMPOSSIBLE goal leads to giving up in the face of failure. A challenging one pushes someone beyond what they felt was possible.'],
              ['R', 'Relevant', 'Pairs with attainable in the chapter’s own sentence about why impossible goals fail.'],
              ['T', 'Time-Bound', 'Goals should have a time frame so a person knows HOW LONG they have to achieve it.']
            ]}
          />
          <p className="mt-2 text-sm">
            SMART goals also appear in <strong>Ch. 8</strong>, in training design.
          </p>
        </Card>

        <Card title="The GRE example — how a vague goal becomes SMART">
          <p className="text-sm">
            James wants to score well on the GRE. If friends and family just encourage him to{' '}
            <strong>do his best</strong>, he will never know if he achieved his goal. Instead he researches
            and determines he needs <strong>at least the 90th percentile on verbal reasoning and the 85th
            percentile on quantitative reasoning</strong>.
          </p>
          <p className="text-sm mt-2">
            Now it is <strong>specific</strong>, <strong>measurable</strong> (he will know if he made it),
            plausibly <strong>attainable</strong> (he is doing well in college and had high SAT scores),
            and <strong>timely</strong> (he knows the test date and whether he has time to retake it).
          </p>
        </Card>

        <Callout kind="info" title="Other documented effects of goal-setting">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>A necessary narrowing of attention</strong> — goals cause individuals to focus on
              them <strong>at the expense of other tasks</strong>, which may help or hurt depending on
              whether the goal is appropriate.
            </li>
            <li>
              Goals may encourage people to <strong>use existing knowledge</strong> or to{' '}
              <strong>seek out new knowledge</strong> needed to reach them.
            </li>
            <li>
              <strong>Learning goals</strong> rather than pure <strong>performance goals</strong> help
              people succeed on long-term, difficult goals.
            </li>
            <li>
              Framing goals <strong>positively as challenges rather than threats</strong> produces higher
              performance (Locke &amp; Latham, 2006).
            </li>
            <li>
              Real-world examples: <strong>faster typing, truck drivers increasing loads, loggers cutting
              trees more quickly</strong> (Latham, 2012).
            </li>
          </ul>
        </Callout>

        <Callout kind="warn" title="Goal commitment">
          <strong>Glossary:</strong> the determination of an individual to reach his or her goal.
          <p className="mt-2">
            <strong>If no commitment is present, the goal&rsquo;s power to motivate will be absent.</strong>{' '}
            If James did not really want a top graduate school, his preparation would flag. The key
            finding: <strong>the highest performance results from BOTH high goal commitment AND high
            difficulty goals.</strong> Factors positively related to goal commitment include{' '}
            <strong>expectancy</strong> (VIE), <strong>goal attractiveness</strong>, and{' '}
            <strong>motivational force</strong> (Klein et al., 1999).
          </p>
        </Callout>

        <Callout kind="danger" title="The dark side — the chapter is unusually blunt here">
          Using goals <strong>inappropriately</strong> — such as{' '}
          <strong>increasing goal targets as soon as the last one is reached</strong>, so that
          &ldquo;good&rdquo; performance becomes increasingly challenging over time — leads to a multitude
          of negative outcomes, including <strong>increased stress and unethical behavior</strong>.
          <Table
            headers={['Study', 'Finding']}
            rows={[
              ['Soman & Cheema (2004)', 'NOT MEETING goals around personal savings and deadlines led to DECLINES in future behavior.'],
              ['Welsh & Ordóñez (2014)', 'Striving too much toward goals leads to DEPLETION — people get tired, which diminishes their ability to regulate their own resources. With depleted resources it is more challenging to make ethical choices, and the OVERUSE of challenging goals led to HIGHER instances of UNETHICAL BEHAVIOR.']
            ]}
          />
          <p className="mt-2">
            The conclusion: goal-setting is a tool that <strong>should not be used blindly</strong>, but
            in the context of the larger organizational environment and the mental and physical health of
            employees.
          </p>
        </Callout>

        <Card title="What managers should actually do">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong>Challenging goals assigned WITHOUT employee input and acceptance are likely to be
              unsuccessful.</strong>
            </li>
            <li>Include goal-setting in the review process and development plan.</li>
            <li><strong>Give feedback about goal progress.</strong></li>
            <li><strong>Remove obstacles</strong> to achieving goals.</li>
          </ul>
        </Card>

        <Callout kind="tip" title="Self-regulation, self-efficacy, and goal orientation">
          <Table
            headers={['Concept', 'Definition / components']}
            rows={[
              [
                'Self-regulation',
                'The capacity to control one’s impulses. Bandura’s (1998) social cognitive theory of self-regulation rests on three factors: SELF-OBSERVATION (attention to our own behavior), SELF-EVALUATION (attention to feedback), and SELF-REACTIONS (internal processes used in response to self-evaluation).'
              ],
              [
                'Self-efficacy',
                'A person’s belief in one’s own abilities. The chapter says it is SIMILAR TO EXPECTANCY in expectancy theory. Also an antecedent of learning success in Ch. 8.'
              ],
              [
                'Learning goal orientation',
                'How much one is motivated by opportunities to DEVELOP AND LEARN. Can lead to higher performance IF the individual has high ability — recall performance = motivation + ability + environment.'
              ],
              [
                'Performance goal orientation',
                'Wanting to DO WELL as the primary motivation.'
              ]
            ]}
          />
          <p className="mt-2">
            Sitzmann and Ely (2011) meta-analyzed hundreds of studies and found{' '}
            <strong>goal level, persistence, effort, and self-efficacy</strong> had the strongest effects
            on learning — accounting for <strong>17 percent of the variance in learning</strong> even after
            controlling for prior knowledge and cognitive ability (g).
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 9
  {
    id: 'job-characteristics',
    title: 'Application II: Job Characteristics Theory & Job Redesign',
    subtitle: 'Five characteristics, three psychological states, the MPS formula, and three redesign tools',
    images: [
      {
        src: `${IMG}/09i_fig9-9_job_characteristics_model.png`,
        alt: 'Figure 9.9: three stacked bands with arrows. Core Job Characteristics (skill variety, task identity, task significance, autonomy, feedback) leads to Psychological States (meaningfulness, responsibility, knowledge of results) leads to Outcomes (motivation, performance, satisfaction, absenteeism, turnover).',
        caption: 'Figure 9.9 — The job characteristics model.'
      },
      {
        src: `${IMG}/09j_fig9-10_mps_formula.png`,
        alt: 'Figure 9.10: the MPS formula — skill variety plus task significance plus task identity, all divided by three, multiplied by autonomy, multiplied by feedback, equals MPS.',
        caption: 'Figure 9.10 — The formula for the Motivating Potential Score (MPS).'
      }
    ],
    content: (
      <>
        <Callout kind="info" title="Job characteristics theory (Hackman & Oldham, 1975, 1980)">
          Helpful in both <strong>understanding jobs</strong> and <strong>changing or redesigning
          them</strong> to make them more meaningful and thus motivating. The model posits that to
          understand work motivation, one must examine <strong>key contextual features of both the job and
          the individual</strong>. A comprehensive review found the accumulated evidence{' '}
          <strong>largely supports</strong> the theory (Kanfer et al., 2017).
        </Callout>

        <Card title="The five core job characteristics">
          <Table
            headers={['Characteristic', 'Glossary definition', 'The chapter’s high example']}
            rows={[
              ['Skill variety', 'The degree of variety in job tasks and differing abilities the job requires. Greater skill variety is MORE MEANINGFUL to the employee.', 'University professor — must navigate teaching, research, and service.'],
              ['Task identity', 'How well an employee is able to associate his or her assigned task with the job’s ULTIMATE OUTCOME. Employees who participate in MULTIPLE PARTS of a process have higher motivation.', 'Artists such as painters or sculptors.'],
              ['Task significance', 'How strongly employees perceive their job to IMPACT OTHERS’ LIVES, whether others in the company or externally.', 'Medical professions, social workers.'],
              ['Autonomy', 'The extent to which employees have the FREEDOM to dictate their own approach to job tasks, and how much results depend on their own efforts rather than outside factors.', 'Freelance writer.'],
              ['Feedback', 'How well employees can receive DIRECT INFORMATION regarding how effective their job performance is.', 'Customer service — the feedback may not all be positive, but they know how they are performing.']
            ]}
          />
        </Card>

        <Callout kind="warn" title="The chain: characteristics → states → outcomes">
          <strong>Five core job characteristics</strong> → <strong>three critical psychological
          states</strong> (meaningfulness, responsibility, knowledge of results) →{' '}
          <strong>work outcomes</strong> (motivation, performance, satisfaction, absenteeism, turnover).
          <p className="mt-2">
            Fried and Ferris (1987) confirmed that <strong>the psychological states MEDIATE these
            relationships</strong> — the characteristics do not act directly.
          </p>
        </Callout>

        <Callout kind="danger" title="The MPS formula — and which factors carry the most weight">
          <strong>MPS = [(Skill Variety + Task Significance + Task Identity) ÷ 3] × Autonomy ×
          Feedback</strong>
          <p className="mt-2">
            The most important two factors are <strong>AUTONOMY and FEEDBACK</strong>, because their
            influence has more &ldquo;mathematical weight&rdquo; than skill variety, task identity, and
            task significance — <strong>which are divided by three</strong>.
          </p>
        </Callout>

        <Card title="The Bionicles experiment — task identity made concrete">
          <p className="text-sm">
            Participants built characters from Lego&rsquo;s Bionicles series for pay, receiving{' '}
            <strong>$3 for the first one and 30 cents less for each subsequent one</strong>. One group had
            their creations <strong>taken apart in front of them as soon as they finished</strong>; the
            other was told creations would be taken apart <strong>at the end</strong>, but not until they
            were all done.
          </p>
          <p className="text-sm mt-2">
            That was the <strong>only difference</strong> between the groups. Those who saw their creations
            destroyed in front of them built <strong>seven</strong>; the other group built{' '}
            <strong>eleven</strong> (Gross, 2015).
          </p>
        </Card>

        <Callout kind="info" title="More supporting evidence">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Grant (2008b):</strong> call center fundraisers given a simple{' '}
              <strong>task significance intervention</strong> — sharing specific stories about the positive
              benefits of the dollars raised — increased donations generated. Task significance also
              increased the <strong>job dedication and helping behavior of lifeguards</strong>.
            </li>
            <li>
              <strong>Humphrey et al. (2007)</strong>, meta-analyzing <strong>256 studies</strong> of job
              design, found the <strong>14 work characteristics</strong> they examined explained on average{' '}
              <strong>14 percent</strong> of attitudinal and behavioral outcome variance —{' '}
              <strong>25 percent</strong> of the variance in subjective performance ratings and{' '}
              <strong>34 percent</strong> of the variance in job satisfaction.
            </li>
            <li>
              Later work added further characteristics: <strong>job complexity</strong>,{' '}
              <strong>social characteristics</strong> (social support, task interdependence), and{' '}
              <strong>work context characteristics</strong> (ergonomics, working conditions).
            </li>
          </ul>
        </Callout>

        <Callout kind="warn" title="Growth needs strength — the model's weak point">
          <strong>Growth needs strength (GNS):</strong> how much an individual wants or needs higher-level
          needs, such as recognition or self-actualization. Hackman and Oldham proposed it to answer{' '}
          <strong>whether all employees actually want an enriched job</strong>, arguing those high in GNS
          would be more strongly motivated by a job&rsquo;s motivating potential.
          <p className="mt-2">
            <strong>However, this is the MOST CONTROVERSIAL aspect of the model.</strong> While Fried and
            Ferris (1987) found GNS changed the relationship between job characteristics and job
            performance, <strong>overall GNS has NOT seen a great deal of research support.</strong>
          </p>
        </Callout>

        <Card title="Job redesign — three tools, and the enlargement/enrichment distinction">
          <Table
            headers={['Tool', 'Glossary definition', 'What it does and does not add']}
            rows={[
              [
                'Job rotation',
                'The policy of employees performing one of several assigned job tasks, with responsibility rotating on a set schedule, such as monthly.',
                'Can be seen as a type of ON-THE-JOB TRAINING (Ch. 8). An alternative to producing highly specialized employees.'
              ],
              [
                'Job enlargement',
                'Expanding an employee’s duties and responsibilities beyond those previously performed.',
                'Increases VARIETY and may reduce monotony — but does NOT increase the "DEPTH" and RESPONSIBILITY of the tasks performed.'
              ],
              [
                'Job enrichment',
                'Increasing the motivational potential of a job, such as by increasing the level of AUTHORITY AND CONTROL the person has over the job.',
                'Its core dimensions are the five core job characteristics from the model.'
              ]
            ]}
          />
          <p className="mt-2 text-sm">
            <strong>Enlargement = wider. Enrichment = deeper.</strong> That one-line contrast is a
            classic test item.
          </p>
        </Card>
      </>
    )
  },

  // ------------------------------------------------------------------ 10
  {
    id: 'reinforcement',
    title: 'Application III: Reinforcement, Nudging & Schedules',
    subtitle: 'Four reinforcers, four schedules, and when punishment becomes abusive supervision',
    images: [
      {
        src: `${IMG}/09k_fig9-11_reinforcement_types.png`,
        alt: 'Figure 9.11: a two-by-two grid crossing Introduce Something versus Remove Something with Positive versus Negative, producing positive reinforcement, punishment, extinction, and negative reinforcement with manager examples.',
        caption: 'Figure 9.11 — Summarizing types of reinforcement.'
      },
      {
        src: `${IMG}/09l_fig9-12_reinforcement_schedules.png`,
        alt: 'Figure 9.12: a table of reinforcement schedules — Continuous, Fixed Ratio, Fixed Interval, Variable Ratio — with definitions and workplace examples (sales bell, free coffee after ten, weekly paycheck, slot machine).',
        caption: 'Figure 9.12 — Examples of different reinforcement schedules.'
      }
    ],
    content: (
      <>
        <Callout kind="info" title="Reinforcement theory's basic premise">
          <strong>Behavior that is reinforced tends to be repeated, while behaviors that are punished or
          ignored tend to be extinguished or curbed.</strong> Behaviors are dependent upon{' '}
          <strong>what happens as a result of them</strong>.
          <p className="mt-2">
            Reinforcement theory grew out of <strong>behaviorism</strong>. B. F. Skinner — identified in a
            2002 <em>Review of General Psychology</em> survey as one of the{' '}
            <strong>most influential psychologists of the twentieth century</strong> — is best known in I-O
            for <strong>operant conditioning</strong>: learning in which behavior is influenced by its{' '}
            <strong>antecedents and consequences</strong> (such as rewards and punishments).
          </p>
        </Callout>

        <Card title="The four reinforcers — build them from the 2×2">
          <p className="text-sm mb-2">
            A <strong>reinforcer</strong> is anything that has an effect on the behavior preceding it,
            making that behavior <strong>more or less likely</strong> to happen in the future.
          </p>
          <Table
            headers={['Type', 'Definition', 'The chapter’s group-project example', 'Figure 9.11 manager example']}
            rows={[
              [
                'Positive reinforcement',
                'INTRODUCTION of something POSITIVE after a DESIRED behavior.',
                'Your classmate thanks you for doing a great job on the first draft.',
                'Manager praises an employee for a job well done.'
              ],
              [
                'Negative reinforcement',
                'REMOVAL of something UNPLEASANT after a DESIRED behavior.',
                'Classmates keep calling, texting, and emailing about the draft — and STOP as soon as you send it. The negative reinforcer was the CESSATION of the nagging.',
                'Manager stops nagging an employee once their report is submitted.'
              ],
              [
                'Punishment',
                'INTRODUCTION of an UNPLEASANT consequence after an UNDESIRED behavior.',
                'You turn the paper in a day late and the professor lowers your grade a letter.',
                'Manager gives an employee fewer hours due to poor performance.'
              ],
              [
                'Extinction',
                'REMOVAL of a POSITIVE consequence, which results in decreases in the behavior.',
                'A coworker makes inappropriate jokes; coworkers laughing unintentionally rewards it. When they STOP laughing, the behavior stops.',
                'Manager ignores an employee’s great performance.'
              ]
            ]}
          />
          <p className="mt-2 text-sm">
            <strong>Negative reinforcement is not punishment.</strong> Both involve something unpleasant,
            but negative reinforcement <strong>removes</strong> it to <strong>encourage</strong> a desired
            behavior, while punishment <strong>introduces</strong> it to <strong>discourage</strong> an
            undesired one.
          </p>
        </Card>

        <Callout kind="tip" title="Nudging — a modern extension">
          <strong>Nudge (Thaler &amp; Sunstein, 2008):</strong> a relatively small change to one&rsquo;s
          environment that <strong>encourages them to behave in a certain way while also giving them the
          freedom to choose otherwise</strong>. Examples given: a reminder email, a display of information,{' '}
          <strong>automatic enrollment with the option to opt out</strong>.
          <p className="mt-2">
            Research shows nudges positively impact <strong>healthy eating</strong> (Feuerstein-Simon et
            al., 2020), <strong>physical activity</strong> (Van der Meiden et al., 2019), and{' '}
            <strong>enrollment in employer-provided life insurance</strong> (Harris &amp; Yelowitz, 2017).
          </p>
        </Callout>

        <Callout kind="danger" title="The warnings about misuse">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Overused positive reinforcement wears off.</strong> Someone who thanks you for every
              little thing eventually gets tuned out.
            </li>
            <li>
              If you <strong>always reward someone and then suddenly stop</strong>, they are likely to stop
              too.
            </li>
            <li>
              <strong>Punishment should be used sparingly if at all</strong>, since it generally only works
              while there is someone to administer it — <strong>once the punishment stops, the undesired
              behavior often resumes.</strong>
            </li>
            <li>
              A manager who <strong>regularly uses punishment to motivate can be seen as an ABUSIVE
              manager</strong>. Abusive supervision — nonphysical forms of hostility by managers toward
              employees (Tepper, 2007) — is covered in <strong>Ch. 10</strong>. The recommended
              alternative: <strong>&ldquo;catching&rdquo; someone doing the right things and praising
              them</strong>, which is much more effective than punishment that may work short-run but
              damage the relationship long-run.
            </li>
          </ul>
        </Callout>

        <Card title="If you do punish — the three keys">
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li>
              <strong>Timely.</strong> Punishment should always be <strong>paired with the act</strong>; if
              a long period passes between behavior and punishment, it is less effective.
            </li>
            <li>
              <strong>Consistent.</strong> As with justice theory, <strong>being consistent is a key
              component of fairness</strong> — punish all employees who engage in the behavior.
            </li>
            <li>
              <strong>Infrequent.</strong> Use the technique rarely.
            </li>
          </ol>
        </Card>

        <Callout kind="warn" title="Reinforcement schedules — how and when reinforcers are applied">
          Two categories, each split into <strong>ratio</strong> (count of behaviors) and{' '}
          <strong>interval</strong> (passage of time):
          <Table
            headers={['Schedule', 'Definition', 'Example']}
            rows={[
              ['Continuous', 'Reward or punish a behavior EVERY time it occurs — a predictable cycle.', 'Sales organizations ringing a bell every time a sale is made.'],
              ['Fixed ratio', 'Reinforcement applied after a specific NUMBER of behaviors.', 'A free cup of coffee after purchasing 10.'],
              ['Fixed interval', 'Reinforcement applied after a specific PERIOD OF TIME.', 'Receiving a weekly paycheck.'],
              ['Variable ratio', 'Reward after a RANDOM NUMBER of responses, unknown to the person.', 'Casinos — feeding quarters into a slot machine.'],
              ['Variable interval', 'Reinforcing behaviors on a RANDOM TIME schedule.', '(Defined in the margin glossary.)']
            ]}
          />
        </Callout>

        <Callout kind="danger" title="The schedule trade-off — a very likely exam item">
          <strong>Continuous reinforcement helps us ACQUIRE new skills QUICKLY</strong> — but once you stop
          reinforcing the behavior, it <strong>tends to extinguish</strong>.
          <p className="mt-2">
            <strong>Variable reinforcement leads to the MOST PERSISTENT behavior</strong> — the skills least
            likely to extinguish.
          </p>
          <p className="mt-2">
            Teach with continuous; sustain with variable.
          </p>
        </Callout>

        <Callout kind="info" title="Criticisms of behaviorism — and the practical defense">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Too simplistic</strong> for twenty-first-century work. Rewards work well for{' '}
              <strong>simple tasks</strong> but may <strong>interfere with complex, creative tasks</strong>{' '}
              that knowledge workers do daily.
            </li>
            <li>
              Too dependent on <strong>publicly observable stimuli and behaviors</strong>, at the expense of
              internal processes vital to understanding motivation (Moore, 2013).
            </li>
            <li>
              It is <strong>manipulative</strong> to view human behavior this way (Kohn, 1999).
            </li>
            <li>
              <strong>The defense:</strong> organizations often{' '}
              <strong>inadvertently reward bad behavior and wonder why it continues.</strong> If people who
              check in with their boss always receive tough assignments, word gets around and workers stop
              checking in. Organizations should ensure reward systems reinforce the behaviors they actually
              want.
            </li>
          </ul>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 11
  {
    id: 'compensation-summary',
    title: 'Compensation & the Application-Based Summary',
    subtitle: 'Money is not the whole story — and the map of all three theory families',
    images: [
      {
        src: `${IMG}/09m_fig9-13_theory_summary.png`,
        alt: 'Figure 9.13: Work Motivation at the center branching to Need-Based Theories (hierarchy of needs, ERG, two-factor, acquired needs, self-determination), Process-Based Theories (equity, organizational justice, expectancy), and Application-Based Theories (goal setting, job characteristics, reinforcement and incentives).',
        caption: 'Figure 9.13 — Summary of theories of work motivation. This is the chapter’s own study map.'
      }
    ],
    content: (
      <>
        <Callout kind="info" title="Compensation is not a theory — but it is on the exam">
          <strong>Compensation:</strong> the total amount of both <strong>monetary and non-monetary</strong>{' '}
          pay provided to an employee by an employer. The chapter says plainly it would be remiss not to
          include it, and links back to <strong>job evaluation in Ch. 3</strong>.
        </Callout>

        <Callout kind="warn" title="Money does not seem to be the only reason we go to work">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              When <strong>eight ConAgra meatpacking workers in Nebraska won $365 million</strong> in the
              Powerball lottery, <strong>three immediately stopped working</strong> — but{' '}
              <strong>several reported straight back to work at their graveyard shifts.</strong>
            </li>
            <li>
              Asked &ldquo;What motivates you at work?&rdquo;: <strong>29 percent</strong> said{' '}
              <strong>doing something meaningful</strong>, <strong>25 percent</strong> said{' '}
              <strong>money</strong>, and <strong>17 percent</strong> said{' '}
              <strong>recognition</strong> (Lavinsky, 2010).
            </li>
            <li>
              Only <strong>11 percent</strong> of survey respondents said their company{' '}
              <strong>involved employees in the design of reward programs</strong> — despite asking
              employees being &ldquo;a great way to make sure you are meeting their expectations.&rdquo;
            </li>
          </ul>
        </Callout>

        <Card title="Three company examples worth remembering">
          <Table
            headers={['Organization', 'What they did']}
            rows={[
              [
                'The Container Store',
                'Pays retail employees ALMOST TWICE the national average and hires about 3 PERCENT of applicants. Looks first among its own CUSTOMERS; pays $500 for referrals who reach the 90-day full-time mark and $200 for part-time. Referrals make up 40 PERCENT of hiring, and employees get a 40 PERCENT discount.'
              ],
              [
                'Nucor Steel',
                'Over 26,000 employees whose stated goal is to "take care of our customers." Since the 1980s, rewarded through generous pay and bonuses based on ANNUAL COMPANY PERFORMANCE for being safe, producing high-quality steel, keeping costs low, being productive, and remaining profitable. Production incentive bonuses can MORE THAN DOUBLE take-home pay.'
              ],
              [
                'Bob’s Red Mill / Gravity Payments',
                'Bob’s Red Mill’s founder created an EMPLOYEE STOCK OWNERSHIP PLAN making employees owners. At Gravity Payments in 2015, CEO Dan Price took a $9,930,000 PAY CUT to raise every employee’s income to $70,000 a year. Both unusual — and both companies continue to do well financially.'
              ]
            ]}
          />
        </Card>

        <Callout kind="tip" title="Figure 9.13 — the whole chapter on one page">
          <Table
            headers={['Family', 'Theories it contains']}
            rows={[
              ['Need-based theories', 'Hierarchy of Needs · ERG · Two-Factor · Acquired Needs · Self-Determination'],
              ['Process-based theories', 'Equity · Organizational Justice · Expectancy'],
              ['Application-based theories', 'Goal Setting · Job Characteristics · Reinforcement and Incentives']
            ]}
          />
          <p className="mt-2">
            If you can rebuild this table from memory, you can place any theory the exam names.
          </p>
        </Callout>

        <Callout kind="info" title="Summary of application-based theories">
          They <strong>focus directly on ways to help make employees more motivated at work</strong>:{' '}
          <strong>goal-setting</strong> and SMART goals to focus and energize employees toward specific
          work goals; <strong>job characteristics</strong>, since the way a job is designed matters to many
          outcomes including motivation; and <strong>reinforcement and incentives</strong>, covering how
          schedules of reinforcement influence behavior and how compensation relates to motivation.
        </Callout>

        <Card title="Technology and I-O — gamification">
          <p className="text-sm mb-2">
            <strong>Gamification:</strong> using <strong>game-based mechanics and game thinking</strong> to
            engage people, motivate action, promote learning, and solve problems (Kapp, 2012) — or, as
            Deterding et al. (2011) put it, to &ldquo;apply game design elements in non-game contexts such
            as the workplace.&rdquo; Elements include points, virtual rewards or kudos, badges, levels and
            leaderboards, all called <strong>&ldquo;digital achievements.&rdquo;</strong>
          </p>
          <Table
            headers={['Statistic', 'Value']}
            rows={[
              ['Data breaches due to human error', 'Up to 90 percent — estimated to cost organizations upwards of $6 trillion by 2021'],
              ['Would feel more productive if work were gamified', '87 percent'],
              ['Gamified recruitment would make the company more desirable', '78 percent'],
              ['Happier at work with gamification', '82 percent'],
              ['More engaged at work with gamification', '84 percent'],
              ['More motivated with gamified than non-gamified training', '62 percent']
            ]}
          />
          <p className="mt-2 text-sm">
            Tips for successful gamification: <strong>make it fun, use rewards, keep training short and to
            the point, use visuals, know your audience.</strong> PwC&rsquo;s &ldquo;Game of
            Threats&rdquo; is the named cybersecurity example.
          </p>
        </Card>
      </>
    )
  },

  // ------------------------------------------------------------------ 12
  {
    id: 'legal-global-current-ch9',
    title: 'Legal, Global & Current Issues',
    subtitle: 'Pay discrimination law, cross-cultural motivation, CEO pay, and time-varying motivation',
    content: (
      <>
        <Callout kind="danger" title="Legal issues — the three pay statutes">
          <Table
            headers={['Law', 'Year', 'What it does']}
            rows={[
              [
                'Equal Pay Act',
                '1963',
                'Signed by President Kennedy; AMENDED THE FAIR LABOR STANDARDS ACT. An employer may not pay an employee less than another employee of the OPPOSITE GENDER if they engage in the same work and have the same qualifications and performance level.'
              ],
              [
                'Civil Rights Act',
                '1964',
                'Prohibits discrimination in employment conditions, INCLUDING PAY AND ADVANCEMENT, based on sex.'
              ],
              [
                'Lilly Ledbetter Fair Pay Act',
                '2009',
                'AMENDS the Civil Rights Act of 1964. EVERY DISCRIMINATORY PAYCHECK RESETS THE 180-DAY LIMIT to file — creating an incentive for organizations to proactively avoid and correct discrimination.'
              ]
            ]}
          />
        </Callout>

        <Card title="Ledbetter v. Goodyear Tire & Rubber Co. — the case behind the Act">
          <p className="text-sm">
            Ms. Ledbetter was <strong>originally awarded $3.3 million</strong> by a jury for compensatory
            and punitive damages because of blatant sex discrimination in pay during her{' '}
            <strong>20 years</strong> at the company. But because the <strong>180-day period</strong> to
            file had passed — <strong>since the discrimination was decades long</strong> — higher courts{' '}
            <strong>reversed the verdict</strong>.
          </p>
          <p className="text-sm mt-2">
            The problem that created: such a ruling could{' '}
            <strong>incentivize employers to keep discrimination SECRET long enough to pass the 180-day
            limit.</strong> The Fair Pay Act closed that loophole.
          </p>
        </Card>

        <Callout kind="warn" title="The pay gap figures">
          In the United States, women are paid <strong>on average 80 cents for every dollar paid to
          men</strong>, which over a <strong>40-year career</strong> translates into{' '}
          <strong>$406,760 less</strong>. That means a woman on average must work an{' '}
          <strong>additional 9.7 years</strong> to make what the average man makes in 40 (Brown, 2019).
          <p className="mt-2 text-xs">
            Cross-reference: <strong>comparable worth</strong> was covered in Ch. 3, and detecting and
            avoiding discrimination based on protected classes in Chs. 6 and 7.
          </p>
        </Callout>

        <Callout kind="info" title="Global implications — motivation around the world">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Japan:</strong> <strong>lifetime employment</strong> has traditionally been a major
              motivator that generally does not exist among North American employees, with emphasis on{' '}
              <strong>internal promotion and job security above all else</strong> (Brislin et al., 2005).
              The mindset may be shifting toward <strong>personal employability</strong> and learning
              marketable skills.
            </li>
            <li>
              <strong>Bulgaria:</strong> results were generally comparable to Americans, but Bulgarian
              employees reported <strong>HIGHER satisfaction of their need for autonomy</strong> and{' '}
              <strong>LESS job pressure — despite POORER working conditions</strong> (Deci et al., 2001).
            </li>
            <li>
              <strong>DeVoe &amp; Iyengar (2004):</strong> employees from North America, Asia, and Latin
              America all tended to report being <strong>more INTRINSICALLY than extrinsically
              motivated</strong>. But <strong>North American managers typically perceived their employees
              as more EXTRINSICALLY motivated</strong>, Asian managers perceived equal levels, and{' '}
              <strong>only Latin American managers perceived the same intrinsic motivation their employees
              actually reported.</strong>
            </li>
          </ul>
          <p className="mt-2">
            The conclusion: <strong>managers are not always accurate in assessing what motivates
            employees</strong>, and it is <strong>not &ldquo;one size fits all.&rdquo;</strong>
          </p>
        </Callout>

        <Callout kind="danger" title="Current workplace issue — CEO compensation">
          Part of the <strong>Dodd-Frank Act</strong> requires publicly traded organizations to disclose to
          the SEC the <strong>ratio of CEO compensation to the median compensation of employees</strong>.
          <Table
            headers={['Figure', 'Value']}
            rows={[
              ['US CEO-to-average-worker pay ratio', '265 : 1 — the WORST in the world'],
              ['Average annual US CEO wage', '$14.25 million'],
              ['India and the United Kingdom', 'Both above 200 : 1'],
              ['South Korea, Mexico, Sweden, Singapore', 'All under 70 : 1'],
              ['Safra Catz, Oracle CEO, 2019', '$40 million — highest-paid CEO in the world that year'],
              ['Larry Ellison, former Oracle CEO, 2013', '$96.2 million — highest-paid CEO that year']
            ]}
          />
          <p className="mt-2">
            The tension is framed through <strong>internal equity</strong> (fairness of CEO pay relative to
            other workers) and <strong>external equity</strong> (fairness relative to the job market) —
            both from Ch. 3. And through <strong>equity theory</strong>: if employees feel the CEO
            contributes a great deal in inputs and brings them along in pay and benefits, the higher
            outcomes are deemed warranted — but <strong>&ldquo;it is hard to imagine that anyone can put in
            500 times more than an entry-level employee who works full-time.&rdquo;</strong>
          </p>
        </Callout>

        <Callout kind="tip" title="Current research — motivation varies over TIME">
          Historically psychologists <strong>ignored how individual motivation varies over time</strong>,
          tending instead to compare individuals (Judge et al., 2014). Newer work examines{' '}
          <strong>daily variations</strong>:
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>
              Over <strong>10 days</strong>, individuals did vary in motivation due both to their own
              personalities and to workplace experiences. <strong>Intrinsic motivation positively predicted
              how agreeable and conscientious someone was the NEXT DAY.</strong>
            </li>
            <li>
              Lee et al. (2014) studied <strong>weather</strong>: <strong>&ldquo;bad&rdquo; weather days
              were related to HIGHER productivity</strong>, perhaps because employees were less
              distracted — consistent across Japan and the US, and in both field and lab.
            </li>
            <li>
              Across the <strong>lifespan</strong> (Kanfer &amp; Ackerman, 2004), different types of
              motivation take precedence at different life stages. One meta-analysis found{' '}
              <strong>younger workers are more EXTRINSICALLY motivated, while older workers may focus more
              on INTRINSIC motives</strong> (Kooij et al., 2011).
            </li>
          </ul>
        </Callout>

        <Card title="Case study — Wegmans, a motivating place to work for over 100 years">
          <Table
            headers={['Fact', 'Value']}
            rows={[
              ['Founded / stores', '1916 / over 100 across MD, NJ, NY, PA, VA'],
              ['Turnover rate', '4 percent for nearly 50,000 employees — vs. an industry average closer to 100 PERCENT'],
              ['Consecutive years on "100 Best Companies to Work For"', '22'],
              ['College tuition assistance', '$120 million to more than 38,500 employees'],
              ['Training and development spending', '$50 million'],
              ['Company motto', '"Employees first. Customers second." — when employees feel cared for, they show concern for customers'],
              ['Other programs', 'Job sharing, compressed workweek, telecommuting, health insurance for PART-TIME employees, robust non-discrimination policy, a 50-acre organic research farm']
            ]}
          />
          <p className="mt-2 text-sm">
            Why it surprised the industry: grocery is characterized by{' '}
            <strong>low profit margins, low-paying and often tedious jobs, and demanding customer
            interactions</strong> — the conditions under which you would predict high turnover.
          </p>
        </Card>

        <Callout kind="info" title="The chapter's own conclusion">
          Motivation <strong>pervades other areas such as selection, training, performance appraisal, and
          leadership</strong>. The systems that are most motivating are{' '}
          <strong>perceived as fair and useful, fit the company strategy, and are practical</strong>.
          <p className="mt-2">
            And the closing warning: <strong>one of the key things to consider is UNINTENDED
            CONSEQUENCES.</strong> A new program or incentive plan introduced hoping to raise motivation{' '}
            <strong>may lead to unwanted outcomes unless carefully considered and revisited</strong>, given
            the complexities of the workplace and the science of human motivation.
          </p>
        </Callout>
      </>
    )
  }
];
