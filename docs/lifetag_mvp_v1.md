# Life Tag MVP V1 Product Specification

## 1) Product Outcome (Primary)

Build educational social connections based on mental-behavior awareness and personal boundaries.

Life Tag helps people share important "care tag" style context up front (for example: communication preferences, triggers, boundaries, sensory needs, neurodivergence notes), so social interactions begin with empathy and clarity.

## 2) MVP Window (First 90 Days)

The first 90 days prioritize:

1. Account creation and profile completion with autobiography
2. QR code scanning and profile viewing
3. Three QR profile modes:
   - Public/Generic ("This is me")
   - Platonic
   - Romantic
4. Age-aware account controls for minors, especially 13 and under
5. Parent/guardian controls for communication and visibility (for children under 13)

## 3) Core User Types

1. Adult user (18+)
2. Teen user (13-17, no mandatory parent approval in MVP unless policy requires)
3. Parent/guardian account linked to minor user
4. Unauthenticated scanner (no account yet, can only view public-safe profile)

## 4) Profile Architecture

Each user has a base profile and can publish multiple QR-linked profile views.

### 4.1 Base Profile (private edit space)

Required fields:
- Display name
- Age band (not exact age on public page)
- Short autobiography
- Communication style
- Boundaries and trigger warnings ("Do not touch", "Loud spaces are difficult", etc.)
- Welcome preferences ("How to approach me respectfully")

Optional fields:
- Diagnoses/conditions user chooses to disclose
- Interests/hobbies
- Social goals (friends, events, dating, study group, etc.)

### 4.2 QR Profile Views (MVP)

MVP supports up to 3 QR endpoints:

1. Public QR (default free)
   - Always available
   - Viewable by anyone scanning
   - Contains safe "about me" and boundary tags only
   - No direct interaction if viewer is unauthenticated

2. Platonic QR
   - Shared for friendship/community contexts
   - More detail than public, still non-romantic

3. Romantic QR
   - Shared intentionally for dating/romantic discovery
   - User-controlled visibility and content

Commercial assumption for MVP:
- 1 QR included for free (Public)
- Up to 2 additional QR profiles purchasable (Platonic and Romantic)
- Final pricing and unlock model remain open.

## 5) Scan and Interaction Rules

## 5.1 If scanner is not logged in
- Can scan Public QR only
- Can view public-safe profile data
- Cannot message, follow, or connect
- Prompt to create account for interaction

## 5.2 If scanner has an account
- Can request connect/follow based on the QR type and owner settings
- System enforces age and guardian safety policies before allowing interaction

## 5.3 If scanner is an adult and profile belongs to a child
- Adult sees only child-safe public view
- No direct interaction unless policy permits and guardian flow is satisfied

## 6) Child Safety & Guardian Model (MVP)

## 6.1 Age logic
- Under 13: parent/guardian required for communications and account permissions
- Ages 13-17: no mandatory guardian approval by default in MVP unless jurisdiction/policy requires it
- Final thresholds must be configurable by jurisdiction/legal policy

## 6.2 Guardian controls for under-13 accounts

Guardian can:
- Approve/deny who can connect or follow child account
- Set account visibility scope (public-only, approved users, no discovery)
- Approve communications related to:
  - Sleepovers
  - Outings
  - Events
- Review pending interaction requests

Child can:
- Present a public QR (for identity/introduction context)
- Share profile content limited by guardian policy
- Not bypass guardian restrictions for messaging/connection

## 6.3 Safety prompts

When an unauthenticated adult scans a child profile:
- Show public info only
- Show "Account required to interact"
- On signup/interaction attempt, enforce age and policy checks

## 7) Information Design: "Care Tag" Concept

The first profile page should behave like a product care tag:
- Quick, clear, consent-respecting information
- User-defined warning and welcome tags
- Emphasis on boundaries and communication support

Examples:
- "Please do not touch me without explicit consent."
- "I process verbal information slowly under stress."
- "Loud environments can trigger anxiety."

## 8) MVP Feature List (Build Scope)

### Must Have
- Signup/login
- Age capture and age-band classification
- Base profile editor with autobiography and boundaries
- Public QR generation
- QR scan -> profile view
- Auth gate for interaction actions
- Parent/guardian linkage for under-13 accounts
- Guardian approval queue for connection and communication requests

### Should Have
- Platonic and Romantic QR profiles
- Visibility controls per QR profile
- Follow/connect requests with status

### Out of Scope (V1)
- Group communities at large scale
- Complex recommendation engine
- Full moderation automation and trust scoring
- Advanced monetization variants beyond simple extra-QR purchase

## 9) Data and Policy Principles

1. Consent-first: no physical-contact assumptions, no forced disclosure
2. Minimum public exposure: public QR shows only user-approved fields
3. Safety by default for minors
4. Explainability: every block/approval decision should have readable reason text
5. Privacy: store sensitive profile attributes with stricter access controls

## 10) Success Criteria (MVP)

1. New user can complete profile and generate Public QR in one session
2. Public QR can be scanned without account and shows only allowed content
3. Interactions require authentication
4. Under-13 account cannot receive unapproved direct communication
5. Guardian can approve or deny child interaction requests end-to-end

## 11) Open Product Questions (Need Decision)

1. Age framework:
   - Is 13 the global threshold, or should jurisdiction-specific age bands apply at launch?
2. Paid QR model:
   - Exactly which QR types are free vs paid?
   - One-time purchase or subscription?
3. Romantic profile safety:
   - What content restrictions and reporting flows are required at launch?
4. Minor discoverability:
   - Should child accounts ever be searchable, or only accessible via approved QR sharing?
5. Guardian verification:
   - What minimum proof is required to verify parent/guardian relationship?
6. Interaction matrix:
   - Which age groups can connect/follow/message each other by default?
7. Moderation:
   - What is the minimum review/reporting SLA and escalation flow for safety incidents?

## 12) Recommended Next Step

Convert this spec into:
1. User stories + acceptance criteria
2. A legal/compliance checklist by region
3. API and data model draft for profiles, QR links, guardian approvals, and interaction policies
