import React from 'react';
import { Callout, Table, Card } from '../components/Visual.jsx';

const IMG = 'ch13_teams_at_work';

export default [
  // ------------------------------------------------------------------ 1
  {
    id: 'groups-teams-basics',
    title: 'Groups, Teams, and Why Organizations Use Them',
    subtitle: 'The definitions, formal vs. informal, and the shift toward team-based work',
    content: (
      <>
        <Callout kind="info" title="Why teams at all">
          <p>
            Some things are simply <strong>too big for one person</strong> — landing on the moon,
            same-day global delivery, mobilizing disaster relief. As organizational processes became
            more complex, work design shifted toward <strong>team rather than individual effort</strong>,
            but organizations did not <strong>consistently and intentionally</strong> implement teams
            until the <strong>1980s</strong>.
          </p>
          <p className="mt-2">
            Teams are studied as <strong>dynamic entities inside a larger organizational framework</strong>,
            adapting to evolving demands and to members joining and leaving. The field has produced
            some <strong>130 models</strong> of how teams work, most addressing relationships among the{' '}
            <strong>inputs, processes, and outputs</strong> of the team. And it pays off:{' '}
            <strong>team training improves team performance by about 20 percent</strong>.
          </p>
        </Callout>

        <Card title="The definitions — know all four">
          <Table
            headers={['Term', 'Glossary definition']}
            rows={[
              ['Group', 'A collection of individuals who INTERACT such that one person’s actions have an IMPACT on the others.'],
              ['Formal group', 'DELIBERATE and SYSTEMATIC groupings of people in an organization.'],
              ['Informal group', 'NATURAL and SPONTANEOUS groupings of people.'],
              ['Work team', '"INTERDEPENDENT collections of individuals who share responsibility for SPECIFIC OUTCOMES for their organizations" (Sundstrom, De Meuse & Futrell, 1990).']
            ]}
          />
          <p className="mt-2 text-sm">
            The textbook example: an instructor who assigns you to a group of five creates a{' '}
            <strong>formal group</strong>. Classmates who discover a shared taste in music and plan to
            see a band together form an <strong>informal group</strong>.
          </p>
        </Card>

        <Callout kind="warn" title="Group vs. team — the chapter’s own disclaimer">
          There ARE theoretical differences: <strong>groups are more general</strong> collections of
          interacting people, while <strong>teams are more specific</strong> — interdependent, with
          shared responsibility for outcomes. But the chapter explicitly says it will{' '}
          <strong>use the terms interchangeably</strong> and will not make a large distinction. If an
          exam item asks which is broader, the answer is group.
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 2
  {
    id: 'group-development',
    title: 'Group Development: Tuckman vs. Gersick',
    subtitle: 'Five linear stages, and the challenge from punctuated equilibrium',
    images: [
      {
        src: `${IMG}/13a_fig13-1_tuckman_stages.png`,
        alt: 'Figure 13.1: five labeled stages in sequence — forming, storming, norming, performing, adjourning — each with a short description of what happens in that stage.',
        caption: 'Figure 13.1 — Tuckman’s stages of group development.'
      },
      {
        src: `${IMG}/13b_fig13-2_punctuated_equilibrium.png`,
        alt: 'Figure 13.2: a timeline from the group’s start to its deadline, with a sharp transition marked at the midpoint where the group changes its approach.',
        caption: 'Figure 13.2 — Gersick’s punctuated equilibrium: a change of course at the midpoint.'
      }
    ],
    content: (
      <>
        <Card title="Tuckman’s five stages — in order, with what defines each">
          <Table
            headers={['Stage', 'What happens', 'The giveaway detail']}
            rows={[
              ['Forming', 'Members come together for the FIRST time, share general information, begin to understand the task, and discuss initial norms.', 'Interactions stay relatively SUPERFICIAL.'],
              ['Storming', 'Members work to understand the task and question HOW things will get done. Conflicts arise.', 'The MOST TUMULTUOUS stage. Members TEST one another over who is more powerful and which roles each will take. Includes resistance and both emotional and task conflict.'],
              ['Norming', 'The group has worked through storming enough to develop NORMS and ROLES.', 'Members become MORE likely to express personal opinions.'],
              ['Performing', 'Tasks are completed with competence and dissent is addressed constructively.', 'Where groups spend the GREATER PART of their time.'],
              ['Adjourning', 'Members move on to new tasks and the group DISBANDS.', 'A good opportunity to REFLECT on what worked and what did not.']
            ]}
          />
        </Card>

        <Callout kind="danger" title="Gersick’s challenge — punctuated equilibrium">
          <p>
            Connie Gersick observed <strong>eight teams</strong> meeting over life cycles ranging from{' '}
            <strong>a week to six months</strong>. Some groups progressed through Tuckman&rsquo;s
            stages — but <strong>others did not</strong>. Those others showed{' '}
            <strong>punctuated equilibrium</strong>: they <strong>changed course</strong> in their
            approach at roughly the <strong>HALFWAY POINT</strong> between starting and their deadline.
          </p>
          <p className="mt-2">
            Her work built on findings that teams go through <strong>iterative cycles</strong> rather
            than linear steps. More recent scholars define a <strong>transition (planning) phase</strong>{' '}
            and an <strong>action phase</strong> that teams cycle between.
          </p>
          <p className="mt-2">
            <strong>The methods point matters too:</strong> if Gersick had not used{' '}
            <strong>observational methods</strong>, the finding might never have emerged. This is a
            direct callback to Chapter 2 — the method you choose determines what you can find.
          </p>
        </Callout>

        <Callout kind="warn" title="Why skipping stages costs you">
          Student teams that jump straight to <strong>performing</strong> without forming, storming, or
          norming are at greater risk of having to go <strong>BACK to storming later</strong> — when
          time pressure is stronger and the deadline is close. Doing the awkward early work is
          cheaper than doing it under pressure.
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 3
  {
    id: 'types-of-teams',
    title: 'Types of Teams',
    subtitle: 'Cross-training, and Sundstrom’s six types',
    images: [
      {
        src: `${IMG}/13c_fig13-3_types_of_teams.png`,
        alt: 'Figure 13.3: six team types listed with examples — action and performing, advisory, management, production, project, and service teams.',
        caption: 'Figure 13.3 — Types of teams (Sundstrom et al., 1990).'
      }
    ],
    content: (
      <>
        <Callout kind="info" title="Cross-trained teams">
          <strong>Cross-trained teams</strong> have members trained to perform{' '}
          <strong>multiple roles beyond their own</strong>, which avoids over-dependence on any one
          person. It is an <strong>investment</strong>, so the payoff depends on the team: worth it for
          a long-running product development team, much less so for a short-term project that will
          disband in three weeks.
        </Callout>

        <Card title="Sundstrom’s six team types">
          <Table
            headers={['Type', 'What it does', 'Examples']}
            rows={[
              ['Action and performing', 'Deals with EMERGENCIES AND CRISES.', 'Surgical teams, bomb squads, firefighting crews'],
              ['Advisory', 'Makes SUGGESTIONS to improve a product, process, or service. Includes task forces with ONE-TIME objectives and quality control groups.', 'Task forces, quality circles'],
              ['Management', 'The TOP LEADERS within an organization — usually the highest executive and direct subordinates.', 'Executive team, C-suite'],
              ['Production', 'MAKES or PROCESSES things.', 'Computer chip manufacturers, oil refinery crews, assembly teams'],
              ['Project', 'Deals with IDEAS; often CROSS-FUNCTIONAL. Knowledge workers and R&D staff are often placed here.', 'New product development, R&D teams'],
              ['Service', 'Ensures high-quality outcomes over REPEATED situations.', 'Flight attendants, customer support representatives']
            ]}
          />
          <p className="mt-2 text-sm">
            <strong>The two that get confused:</strong> advisory teams RECOMMEND (they do not execute),
            and project teams work on <strong>ideas</strong> rather than on <strong>things</strong> —
            production teams work on things.
          </p>
        </Card>
      </>
    )
  },

  // ------------------------------------------------------------------ 4
  {
    id: 'team-effectiveness-model',
    title: 'Team Effectiveness and the Input–Process–Output Frame',
    subtitle: 'Performance plus viability, and the map for the rest of the chapter',
    images: [
      {
        src: `${IMG}/13d_fig13-4_team_effectiveness_factors.png`,
        alt: 'Figure 13.4: three grouped columns of factors — group composition, group processes, and group affect and cognition — feeding into team effectiveness.',
        caption: 'Figure 13.4 — Factors affecting team effectiveness.'
      }
    ],
    content: (
      <>
        <Callout kind="danger" title="Effectiveness has TWO facets — this is a guaranteed exam item">
          <Table
            headers={['Facet', 'Definition', 'Plain version']}
            rows={[
              ['Team performance', 'The successful DELIVERY OF AN OUTPUT to customers inside or outside the organization.', '"Getting the job done well."'],
              ['Team viability', 'The ABILITY AND DESIRE of group members to CONTINUE to work with one another.', 'The possible LONGEVITY of the team — would you do it again?']
            ]}
          />
          <p className="mt-2">
            A team can <strong>deliver and still be non-viable</strong> — the group project that got an
            A while everybody swore never to work together again. That team was{' '}
            <strong>high-performing and low-viability</strong>, so it was not fully effective.
          </p>
        </Callout>

        <Card title="The input–process–output map">
          <Table
            headers={['Stage', 'Category', 'What is in it']}
            rows={[
              ['INPUT', 'Group composition', 'Size, tenure, personality, diversity'],
              ['PROCESS', 'Group processes', 'Teamwork skills, meetings, norms and team mental models, roles, team leadership, conflict'],
              ['PROCESS', 'Group affect & cognition', 'Cohesion, psychological safety, team efficacy'],
              ['OUTPUT', 'Team effectiveness', 'Performance + viability']
            ]}
          />
          <p className="mt-2 text-sm">
            Scholars study teams through this <strong>input–process–output model</strong>, and the
            chapter organizes its whole effectiveness section around it. If you can name which bucket
            a concept belongs to, you can usually answer the item.
          </p>
        </Card>
      </>
    )
  },

  // ------------------------------------------------------------------ 5
  {
    id: 'group-composition',
    title: 'Group Composition: Size, Tenure, Personality, Diversity',
    subtitle: 'Social loafing, process loss, the agreeableness finding, and faultlines',
    content: (
      <>
        <Callout kind="danger" title="Group size and social loafing">
          <Table
            headers={['Term', 'Definition']}
            rows={[
              ['Social loafing', 'The tendency for group members to put forth LESS EFFORT in a joint activity than they would acting INDIVIDUALLY. The result of DEINDIVIDUATION.'],
              ['Process loss', 'The difference between the INPUT of effort and the OUTPUT quantity.']
            ]}
          />
          <p className="mt-2">
            Individuals in larger groups <strong>expend less effort, take less responsibility, and
            have lower performance</strong>. Larger groups also <strong>lowered feelings of support
            or relational connection</strong>.
          </p>
          <p className="mt-2">
            But the picture is more nuanced than &ldquo;loafing is inevitable&rdquo;:
          </p>
          <ul className="list-disc pl-5 space-y-0.5 mt-1">
            <li>
              Perceptions of coworker social loafing were associated with{' '}
              <strong>REDUCED loafing</strong>, not an increase — people compensated rather than
              matched.
            </li>
            <li>
              Loafing was <strong>not an issue when members had high conscientiousness</strong>, and
              there was <strong>NO performance decrement at all</strong> when members were high on{' '}
              <strong>BOTH conscientiousness and agreeableness</strong> (Schippers, 2014).
            </li>
          </ul>
          <p className="mt-2">
            <strong>Overall gains DO increase with size</strong> — but there is a{' '}
            <strong>point of diminishing returns</strong>, from higher potential for task and personal
            conflict, coordination challenges, and communication difficulty. And organizations{' '}
            <strong>rarely account for process loss when setting deadlines</strong>.
          </p>
        </Callout>

        <Card title="Group tenure">
          <p>
            <strong>Group tenure</strong> is how long members have belonged to a certain group —
            complicated because members come, go, return, and get replaced.
          </p>
          <ul className="list-disc pl-5 space-y-0.5 mt-1">
            <li>High <strong>&ldquo;churn&rdquo;</strong> relates to <strong>lower</strong> effectiveness.</li>
            <li>
              New member <strong>performance and improvement</strong> relate to overall team
              performance.
            </li>
            <li>
              Interestingly, groups were <strong>more prolific idea generators</strong> when members{' '}
              <strong>left to join another group and then returned</strong> — they brought new
              approaches back.
            </li>
            <li>
              Whether member change helps or hurts depends on the <strong>relative abilities</strong> of
              those who STAY versus those who LEAVE.
            </li>
          </ul>
        </Card>

        <Callout kind="warn" title="Group personality — elevation, variability, and the agreeableness headline">
          <p className="mb-2">
            Traits get studied two ways: <strong>elevation</strong> is the <strong>MEAN</strong>{' '}
            personality score in the group; <strong>variability</strong> is the{' '}
            <strong>VARIANCE</strong> from that mean — how different members are from each other.
          </p>
          <Table
            headers={['Trait', 'What the research found']}
            rows={[
              ['Agreeableness', 'THE HEADLINE. One of the STRONGEST personality predictors of TEAM performance while being one of the WEAKEST predictors of INDIVIDUAL performance. It works by making communication more effective and cohesion higher. CONSISTENT levels were positively associated with performance; VARIABILITY was negatively associated. Held in FACE-TO-FACE groups — the effect DISAPPEARED in virtual settings.'],
              ['Conscientiousness', 'The most consistent predictor of INDIVIDUAL performance, but correlates with TEAM performance only when SIMILARITY in conscientiousness among members is HIGH.'],
              ['Extraversion', 'NO significant correlation with team performance in either direction, for elevation or variability — though LESS variation in extraversion related to higher team INNOVATION.'],
              ['Emotional stability', 'NOT linked to team performance on its own — but see the conflict finding below.'],
              ['Openness', 'NOT linked to team performance on its own — but see the conflict finding below.']
            ]}
          />
          <p className="mt-2">
            The nuance that ties it together: task conflict had a{' '}
            <strong>POSITIVE effect when members were higher on openness or emotional stability</strong>{' '}
            and <strong>NEGATIVE effects when lower</strong> (Bradley et al., 2013b). So conflict was{' '}
            <strong>neither good nor bad</strong> — what mattered was whether they dealt with it{' '}
            <strong>openly and calmly</strong> versus <strong>secretly and volatilely</strong>.
          </p>
        </Callout>

        <Callout kind="info" title="Group diversity and faultlines">
          <p>
            Diversity covers <strong>demographics</strong> (gender, race, age) plus{' '}
            <strong>experiences, abilities, cultures, and physical characteristics</strong>. It can set
            the stage for success — more information, more varied experience, more ways to approach a
            problem — and it can also present challenges, because when differences lower cohesion or
            produce unhealthy communication, effectiveness falls.
          </p>
          <p className="mt-2">
            <strong>Faultlines</strong> are &ldquo;hypothetical <strong>dividing lines</strong> that may{' '}
            <strong>split a group into subgroups</strong> based on one or more attributes&rdquo; (Lau &amp;
            Murnighan, 1998). They are problematic to the degree they trigger{' '}
            <strong>in-groups and out-groups</strong>.
          </p>
          <Table
            headers={['Finding', 'What it showed']}
            rows={[
              ['Faultlines were strongest…', '…when a team consisted of TWO EQUALLY SIZED subgroups from the SAME country that were SIMILAR to one another — suggesting it may not be diversity per se, but multiple subgroups not working toward a common goal.'],
              ['Subgroup TYPE decides it (Carton & Cummings, 2013)', 'The MOST effective teams had subgroups based on KNOWLEDGE. Those that SUFFERED MOST had subgroups based on IDENTITY.'],
              ['Emphasize commonalities', 'MBA teams emphasizing commonalities in GOALS AND INTERESTS rather than differences were more effective.'],
              ['Express, do not suppress', 'Groups where members could EXPRESS their differences OUTPERFORMED groups where members SUPPRESSED them — authenticity in the forming stage puts differences on the table so they become group strengths.'],
              ['Surface vs. deep (Harrison et al.)', 'Gender, ethnicity, and age are SURFACE-LEVEL traits that may stop mattering as people get to know each other. DEEP-LEVEL traits — skills, values, attitudes — are MORE important to group functioning.']
            ]}
          />
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 6
  {
    id: 'group-processes',
    title: 'Group Processes: Teamwork Skills, Meetings, Norms, and Roles',
    subtitle: 'The Google study, team mental models, Mumford’s ten roles, and the leadership 2×2',
    images: [
      {
        src: `${IMG}/13e_fig13-5_team_role_typology.png`,
        alt: 'Figure 13.5: ten team roles grouped into task-oriented, social, and boundary-spanning families, each with a one-line description.',
        caption: 'Figure 13.5 — Mumford’s team role typology: ten roles in three families.'
      },
      {
        src: `${IMG}/13f_fig13-6_team_leadership_types.png`,
        alt: 'Figure 13.6: a two-by-two grid crossing internal versus external to the team with formal versus informal leadership, with example roles in each quadrant.',
        caption: 'Figure 13.6 — Types of team leadership: internal/external × formal/informal.'
      }
    ],
    content: (
      <>
        <Callout kind="info" title="Group process — the definition">
          <strong>Group process</strong> is <strong>HOW</strong> the group approaches the process of
          doing its work, as opposed to the work itself. It can help or hinder effectiveness
          independent of how skilled the members are.
        </Callout>

        <Card title="Teamwork skills can be measured">
          <p>
            Stevens and Campion developed a <strong>teamwork survey</strong> designed to be a{' '}
            <strong>valid predictor of teamwork skills</strong> — superior to an interview, where a
            candidate can simply <em>claim</em> to be a team player. Higher scorers were later{' '}
            <strong>more effective</strong> and <strong>rated higher by peers and supervisors</strong>.
          </p>
        </Card>

        <Callout kind="warn" title="Meetings — the best practices and the stand-up finding">
          <ul className="list-disc pl-5 space-y-0.5">
            <li>Provide <strong>agendas beforehand</strong></li>
            <li><strong>Start on time</strong> and come <strong>prepared</strong></li>
            <li>Use <strong>time strategically</strong></li>
            <li>Create an environment where people feel <strong>comfortable voicing concerns</strong></li>
            <li><strong>Listen actively</strong></li>
            <li>Do <strong>not allow one person to dominate</strong></li>
          </ul>
          <p className="mt-2">
            <strong>Stand-up meetings</strong> — held standing up — produced decisions{' '}
            <strong>34 percent faster with NO difference in decision quality</strong>. Teams
            interacting more while standing were <strong>better at elaborating on information</strong>{' '}
            and <strong>performed better</strong>. <strong>Walking meetings</strong>, held while all
            participants are in motion, are <strong>newer and less researched</strong>.
          </p>
        </Callout>

        <Callout kind="danger" title="Norms, team mental models, and what Google actually found">
          <Table
            headers={['Concept', 'Definition']}
            rows={[
              ['Norms', 'The UNDERSTOOD RULES about how group members should behave. First noticed in the HAWTHORNE studies of the 1920s.'],
              ['Team Mental Models (TMM)', 'The degree to which individual CONCEPTUALIZATIONS are SHARED across the team. Higher TMM = more effective teams. The everyday phrase is "being on the same page."']
            ]}
          />
          <p className="mt-2">
            Norms help members understand what is expected of them and of others, and{' '}
            <strong>learning a new group&rsquo;s norms is a major task on joining</strong>. The
            textbook&rsquo;s example: nobody told you to <strong>face the doors</strong> in an elevator.
          </p>
          <p className="mt-2">
            Google studied <strong>180 teams</strong>, conducted over <strong>200 interviews</strong>,
            and analyzed over <strong>250 team attributes</strong>. The answer was not who was on the
            team — it was <strong>group NORMS</strong>, which reduced to five characteristics:
          </p>
          <ol className="list-decimal pl-5 space-y-0.5 mt-1">
            <li><strong>Psychological safety</strong> — the most important factor, BY FAR</li>
            <li>Dependability</li>
            <li>Structure and clarity</li>
            <li>Meaning</li>
            <li>Impact</li>
          </ol>
        </Callout>

        <Card title="Roles — task types and Mumford’s ten">
          <p className="mb-2">
            McGrath identified four <strong>task types</strong>:{' '}
            <strong>generating, choosing, negotiating, and executing</strong>. Separately, Mumford
            et al. (2006) defined <strong>ten member roles in three families</strong> — conveniently,
            every single one starts with C.
          </p>
          <Table
            headers={['Family', 'Role', 'What they do']}
            rows={[
              ['Task-oriented', 'Contractor', 'Organizes and allocates the work'],
              ['Task-oriented', 'Creator', 'Creates new structures or visions'],
              ['Task-oriented', 'Contributor', 'Provides information or expertise'],
              ['Task-oriented', 'Completer', 'Follows through and finishes'],
              ['Task-oriented', 'Critic', 'Critically evaluates and questions'],
              ['Social', 'Calibrator', 'Creates new social norms'],
              ['Social', 'Communicator', 'Creates a supportive environment'],
              ['Social', 'Cooperator', 'Conforms to and supports others’ decisions'],
              ['Boundary-spanning', 'Coordinator', 'Manages interactions OUTSIDE the team'],
              ['Boundary-spanning', 'Consul', 'Represents the team to outsiders and ACQUIRES RESOURCES']
            ]}
          />
        </Card>

        <Callout kind="info" title="Team leadership — two dimensions, and the directive/empowering flip">
          <p className="mb-2">
            Team leadership varies on <strong>two dimensions</strong>:{' '}
            <strong>INTERNAL vs. EXTERNAL</strong> to the team, and{' '}
            <strong>FORMAL vs. INFORMAL</strong>.
          </p>
          <Table
            headers={['', 'Formal', 'Informal']}
            rows={[
              ['Internal', 'Team leader, project manager', 'Shared / EMERGENT leadership'],
              ['External', 'Sponsor, coach, advisor', 'Mentor, champion']
            ]}
          />
          <p className="mt-2">
            <strong>Self-leadership</strong> relates positively to both individual and team
            performance. And the finding worth memorizing (Lorinkova et al., 2013):{' '}
            <strong>DIRECTIVE leaders produce better INITIAL performance, but teams led by EMPOWERING
            leaders perform at a HIGHER level OVER TIME</strong> — because of better team learning,
            coordination, and mental model development.
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 7
  {
    id: 'conflict-in-teams',
    title: 'Conflict in Teams',
    subtitle: 'The classic inverted U, and why the meta-analyses did not support it',
    images: [
      {
        src: `${IMG}/13g_fig13-7_conflict_performance.png`,
        alt: 'Figure 13.7: an inverted-U curve with performance on the vertical axis and level of conflict on the horizontal axis, peaking at a moderate level of conflict.',
        caption: 'Figure 13.7 — The classic depiction of conflict and performance.'
      }
    ],
    content: (
      <>
        <Callout kind="info" title="The starting position">
          Some conflict about <strong>what to do and how to do it</strong> is{' '}
          <strong>normal and healthy</strong> — it is exactly the <strong>storming</strong> phase, and
          it signals that members <strong>care</strong> about the outcome. The classic depiction is an{' '}
          <strong>inverted U</strong>: too little conflict means nobody is engaged, too much means the
          team cannot function, and moderate conflict is optimal.
        </Callout>

        <Callout kind="danger" title="…but that is not what the evidence showed">
          <p>Subsequent meta-analyses found:</p>
          <ul className="list-disc pl-5 space-y-0.5 mt-1">
            <li>
              <strong>Task conflict is NOT related to better performance.</strong>
            </li>
            <li>
              Team performance was <strong>NEGATIVELY related to BOTH relationship conflict AND
              process conflict</strong>.
            </li>
          </ul>
          <p className="mt-2">
            So rather than <strong>encourage task conflict</strong>, teams do well with:
          </p>
          <ul className="list-disc pl-5 space-y-0.5 mt-1">
            <li><strong>Rich, unemotional debate</strong> in a context of <strong>trust</strong></li>
            <li>Members <strong>comfortable expressing doubts</strong> and <strong>changing their minds</strong></li>
            <li><strong>No striving for premature consensus</strong></li>
          </ul>
          <p className="mt-2">
            Which is really a description of <strong>psychological safety</strong> — the same answer
            Google landed on. Note the tie-in to composition: conflict helped when members were higher
            on <strong>openness</strong> and/or <strong>emotional stability</strong>, so{' '}
            <strong>how</strong> conflict is handled matters more than <strong>how much</strong> there is.
          </p>
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 8
  {
    id: 'group-affect-cognition',
    title: 'Group Affect and Cognition',
    subtitle: 'Cohesion, psychological safety, and team efficacy',
    images: [
      {
        src: `${IMG}/13h_fig13-8_cohesion_by_norms.png`,
        alt: 'Figure 13.8: a two-by-two grid crossing high and low cohesion with positive and negative performance norms, showing the outcome in each cell.',
        caption: 'Figure 13.8 — Cohesion is only an asset when performance norms are positive.'
      }
    ],
    content: (
      <>
        <Callout kind="danger" title="Cohesion — the .32 and the measurement problem">
          <p>
            <strong>Cohesion</strong> is the degree to which the group <strong>wishes to stay
            together in the future</strong>, marked by <strong>collective identity</strong>,{' '}
            <strong>shared purpose</strong>, and <strong>satisfaction with how the group operates</strong>.
          </p>
          <p className="mt-2">It is HIGHER when:</p>
          <ul className="list-disc pl-5 space-y-0.5 mt-1">
            <li>Members are <strong>similar</strong></li>
            <li>The group is <strong>smaller</strong></li>
            <li>There is a <strong>history of success</strong></li>
            <li>The group is <strong>perceived as exclusive</strong></li>
          </ul>
          <Table
            headers={['Point', 'Detail']}
            rows={[
              ['Correlation with effectiveness', '.32 overall (Gully, Devine & Whitney, 1995).'],
              ['Moderator', 'The relationship with PERFORMANCE is moderated by TASK INTERDEPENDENCE — cohesion matters more when members must rely on each other.'],
              ['The downside', 'Cohesion can FEED GROUPTHINK. Janis named it a key antecedent.'],
              ['The measurement flaw', 'Many studies used INDIVIDUAL-LEVEL measures for cohesion, which is a GROUP-LEVEL concept — a shared belief, not an individual one. A direct Chapter 2 callback.']
            ]}
          />
        </Callout>

        <Card title="Psychological safety">
          <p>
            <strong>Psychological safety</strong> is perceptions of the{' '}
            <strong>negative or positive consequences of taking INTERPERSONAL RISKS</strong> in the
            workplace (Edmondson, 1999). The <strong>safer people feel, the more they share ideas and
            act communally</strong>.
          </p>
          <p className="mt-2">It relates to:</p>
          <ul className="list-disc pl-5 space-y-0.5 mt-1">
            <li>Information sharing</li>
            <li>Voice behaviors</li>
            <li>Learning</li>
            <li>Performance</li>
            <li>Creativity</li>
          </ul>
          <p className="mt-2 text-sm">
            This is the single concept that threads through the Google study, the conflict findings,
            and the groupthink prevention list. If an item asks for &ldquo;the most important
            factor&rdquo; in Google&rsquo;s results, it is this.
          </p>
        </Card>

        <Callout kind="info" title="Team efficacy">
          <strong>Team efficacy</strong> is the extent to which a group <strong>believes it can
          perform its tasks well</strong>. It correlates <strong>.41</strong> with performance, and{' '}
          <strong>more strongly when tasks are interdependent</strong>. Compare it with{' '}
          <strong>self-efficacy</strong> from Chapter 9 — same belief, group level.
        </Callout>
      </>
    )
  },

  // ------------------------------------------------------------------ 9
  {
    id: 'team-decision-making',
    title: 'Team Decision-Making, Brainstorming, and Groupthink',
    subtitle: 'The six steps, the 20 percent debrief, the 44 percent IM finding, and Janis’s eight symptoms',
    images: [
      {
        src: `${IMG}/13i_fig13-9_decision_making_steps.png`,
        alt: 'Figure 13.9: six numbered steps of the rational decision-making model, from clarifying the problem through evaluating the chosen course of action.',
        caption: 'Figure 13.9 — Steps in the rational decision-making model.'
      },
      {
        src: `${IMG}/13j_fig13-10_groupthink_symptoms.png`,
        alt: 'Figure 13.10: eight symptoms of groupthink grouped under three headings — overestimations of the group, close-mindedness, and pressures toward uniformity.',
        caption: 'Figure 13.10 — Janis’s eight symptoms of groupthink, in three types.'
      },
      {
        src: `${IMG}/13k_fig13-11_avoiding_groupthink.png`,
        alt: 'Figure 13.11: five recommended practices for avoiding groupthink, each with a short explanation.',
        caption: 'Figure 13.11 — Ways to avoid groupthink.'
      }
    ],
    content: (
      <>
        <Card title="The rational decision-making model — six steps">
          <Table
            headers={['#', 'Step', 'The detail that matters']}
            rows={[
              ['1', 'Clarify the problem', 'Use PRECISE language and get at ROOT CAUSES, not symptoms.'],
              ['2', 'Develop alternatives', 'Research shows this is among the HARDEST steps — groups converge too fast.'],
              ['3', 'Evaluate the alternatives', 'Weigh expected POSITIVE and NEGATIVE outcomes of each.'],
              ['4', 'Choose the best alternative', '—'],
              ['5', 'Implement it', '—'],
              ['6', 'Evaluate the course of action', 'The DEBRIEF — and it matters disproportionately.']
            ]}
          />
        </Card>

        <Callout kind="danger" title="Debriefs are worth 20 percent">
          <p>
            Tannenbaum and Cerasoli (2013) found debriefs produce an{' '}
            <strong>average team performance increase of 20 percent</strong>. Effective debriefs had{' '}
            <strong>four elements</strong>:
          </p>
          <ol className="list-decimal pl-5 space-y-0.5 mt-1">
            <li><strong>Active self-learning</strong></li>
            <li><strong>Developmental intent</strong> (improvement, not blame)</li>
            <li><strong>Reflection on specific events</strong></li>
            <li><strong>Multiple information sources</strong></li>
          </ol>
          <p className="mt-2 text-sm">
            Watch for the overlap: <strong>20 percent</strong> is also the gain from{' '}
            <strong>team training</strong>. Two different findings, same number.
          </p>
        </Callout>

        <Callout kind="warn" title="Brainstorming — the four rules, and why it is no longer the gold standard">
          <p className="mb-2">Osborn&rsquo;s (1953) four rules:</p>
          <ol className="list-decimal pl-5 space-y-0.5">
            <li><strong>Criticism is ruled out</strong> — judgments are held until later</li>
            <li><strong>Freewheeling is encouraged</strong> — even infeasible ideas</li>
            <li><strong>Quantity is the goal</strong></li>
            <li><strong>Piggybacking is encouraged</strong> — combine and build on others&rsquo; ideas</li>
          </ol>
          <p className="mt-2">
            Its supremacy is now questioned. Kohn and Smith (2011) found students using{' '}
            <strong>instant messaging generated 44 PERCENT MORE ideas</strong> than face-to-face
            participants. The implication: have members{' '}
            <strong>generate individually FIRST, then share with the group</strong> — which reduces
            social apprehension and process loss.
          </p>
        </Callout>

        <Callout kind="danger" title="Groupthink — Janis’s eight symptoms in three types">
          <p className="mb-2">
            <strong>Groupthink</strong> is a tendency to desire <strong>group harmony</strong> and{' '}
            <strong>avoid critical debate</strong> during decision-making (Janis, 1972).
          </p>
          <Table
            headers={['Type', 'Symptoms']}
            rows={[
              ['Overestimations of the group', '1. Illusions of INVULNERABILITY · 2. UNQUESTIONED BELIEF in the group’s MORALITY'],
              ['Close-mindedness', '3. RATIONALIZING WARNINGS away · 4. Negatively STEREOTYPING opponents'],
              ['Pressures toward uniformity', '5. SELF-CENSORSHIP · 6. Illusions of UNANIMITY · 7. DIRECT PRESSURE on those who question · 8. MINDGUARDS — self-appointed members who shield the group from dissenting information']
            ]}
          />
          <p className="mt-2">
            <strong>Antecedents Janis posited:</strong> group <strong>COHESION</strong> (the key one),
            structural faults, <strong>lack of impartial leadership</strong>, overly{' '}
            <strong>similar members</strong>, and <strong>external threats</strong>.
          </p>
          <p className="mt-2">
            <strong>The evidence is mixed:</strong> case studies support the theory, while{' '}
            <strong>laboratory research has been more limited</strong> — though more cohesive groups{' '}
            <strong>DID make poorer decisions when groupthink conditions existed</strong>.
          </p>
        </Callout>

        <Card title="Five ways to avoid groupthink">
          <ol className="list-decimal pl-5 space-y-0.5">
            <li><strong>Discuss the symptoms</strong> of groupthink openly</li>
            <li>Use a <strong>rotating devil&rsquo;s advocate</strong></li>
            <li><strong>Invite outside experts</strong></li>
            <li>Encourage a <strong>culture of difference</strong></li>
            <li><strong>Debate the ethical implications</strong> of decisions</li>
          </ol>
        </Card>
      </>
    )
  }
];
