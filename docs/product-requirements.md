# Product Requirements Document (PRD)

## 1) Product vision

Build a no-judgment social QR platform where people share who they are through
personality, communication styles, values, and preferences instead of forcing
connection through assumptions.

The platform combines:

- Public QR-based profile discovery
- Consent-based messaging and social interaction
- Minor/adult safety boundaries
- Optional location and emergency capabilities
- Specialized paid QR products for additional use cases

## 2) Problem statement

People need a low-friction way to introduce themselves and connect safely in
different contexts (public networking, dating, events, school, and lost-item
recovery) while maintaining control over who can contact them and what
information is shared.

## 3) Product principles

1. **No judgment**: profiles are self-expression first.
2. **Consent first**: interaction requires account creation and permissions.
3. **Safety first**: minors and adults have guardrails and access boundaries.
4. **Privacy by default**: sensitive data is protected and never public by
   default.
5. **Persistent identity**: each core QR code remains stable over time.

## 4) User roles

- **Guest scanner (not signed in)**
  - Can scan QR codes and view public profile pages.
  - Cannot comment, message, follow, or interact.
  - Must re-enter intro details repeatedly across sessions.
- **Registered user**
  - Can message, comment, follow, share, and manage personal QR portfolio.
  - Can choose visibility and location-sharing permissions.
- **QR owner**
  - Manages profile and owned QR codes.
  - Sees scan analytics and can approve/deny followers.
  - Can block users and configure safety/privacy settings.
- **Admin & trust/safety**
  - Moderates abuse, enforces age policies, and handles legal/compliance flows.

## 5) Core user experience

### 5.1 Public QR profile (free, default)

- Each account gets one free persistent public QR code ("yours for life").
- QR can be printed/sewn/shared on merchandise, cards, posters, and links.
- Scanning opens a public profile page with:
  - Intro/bio
  - Personality and communication style highlights
  - Optional public traits/qualities
  - Clear caption/disclaimer explaining profile purpose and boundaries

### 5.2 Guest behavior

- Guests can read only.
- Guests are prompted to create an account for interaction.
- Without account creation, guest experience remains non-interactive and
  session-limited.

### 5.3 Registered interaction

After account creation and sign-in, users can:

- Send direct messages
- Comment on profile (if enabled)
- Follow/friend request QR owners
- Share selected traits/qualities

QR owners can:

- View who scanned and scan frequency
- Approve/restrict specific followers
- Block users

## 6) Age and safety model

### 6.1 Age-tiered experience

- Separate under-18 and 18+ experiences.
- Minor and adult interaction controls:
  - Option A: fully block cross-tier interactions.
  - Option B: allow restricted view with warning and no interaction.
- Adult profile can show: "This is an 18+ account. You cannot proceed."

### 6.2 Minor-safe defaults

- Public QR routes to safe/public profile only.
- Sensitive profile details are never exposed on public/default QR.
- Additional private/sensitive QR spaces require account, eligibility checks,
  and explicit consent.

### 6.3 Reporting and abuse controls

- In-profile report flow
- Block and mute tools
- Safety escalation queue for threats, harassment, or exploitation

## 7) QR product system

### 7.1 QR types

1. **Public profile QR (free)**  
   Primary identity and traffic driver to public page.
2. **Romantic/private QR (paid tier)**  
   Intended for deeper compatibility/personality contexts.
3. **Meetup/event QR (paid tier)**  
   Temporary or context-specific QR for locations, clubs, events, and groups.
4. **Item-recovery QR (paid tier)**  
   For physical objects (backpacks, cards, patches, merchandise).

### 7.2 QR lifecycle

- Static image and stable link per QR instance.
- Owner can activate/deactivate or rotate destination behavior while preserving
  physical code identity where possible.
- QR ownership remains tied to user account.

## 8) Location and emergency capabilities

### 8.1 Location sharing

- Location is off by default.
- User can share location only with approved contacts/friends.
- Public scanners never see private live location.

### 8.2 Item-recovery mode

- For registered item QR tags, owner can check latest scan time and approximate
  scan location history.
- Intended for lost merchandise (e.g., school backpack).

### 8.3 Emergency mode

- User can enable emergency discovery mode.
- Shared location should be coarse (e.g., within ~25-mile radius), not exact.
- Emergency sharing recipients and duration must be explicit and revocable.

## 9) Messaging and social graph

- 1:1 direct messaging
- Follower/friend model with owner approval options
- Optional comments on profiles
- Scan-driven relationship funnel:
  1. Scan
  2. View
  3. Account creation
  4. Request/message/follow

## 10) Data handling and user rights

- Users can export their data.
- Users can delete their account and data.
- Audit log for critical actions (consent, blocks, location-sharing changes).

## 11) Security, privacy, and compliance requirements

> Legal review required prior to launch. The following are product
> requirements, not legal advice.

- Privacy-by-design architecture
- Encryption in transit and at rest
- Role-based access controls for sensitive data
- Consent receipts for location and sensitive sharing
- Child safety and age-appropriate design requirements
- Regional compliance planning for U.S. + global launch:
  - COPPA/children privacy requirements where applicable
  - GDPR/UK GDPR data subject rights
  - CCPA/CPRA for California users
  - HIPAA applicability only if the product becomes a covered entity/business
    associate handling protected health information in scope

## 12) Functional requirements (MVP)

### Must-have

- Account creation and authentication
- Age bracket selection and policy enforcement
- One free persistent public QR per user
- Public profile rendering from scanned QR
- Guest read-only mode
- Registered messaging and follow requests
- Block/report controls
- Basic scan analytics dashboard (unique scanners, total scans, recency)
- Data export and account deletion

### Should-have

- Paid QR purchase flow (romantic, meetup, item-recovery)
- Moderation dashboard for trust/safety
- Granular privacy controls per profile field

### Could-have

- Emergency mode with coarse-radius sharing
- Advanced compatibility matching
- Regionalized policy packs by country

## 13) Non-functional requirements

- Mobile-first web performance for scan landing pages
- QR landing page load under 2s on average mobile connection
- High availability for profile-read endpoints
- Auditability for moderation and legal requests
- Accessibility (WCAG 2.1 AA baseline)

## 14) Suggested implementation roadmap

### Phase 1: Foundation

- Auth, profiles, public QR, guest mode, age guardrails

### Phase 2: Interaction

- Messaging, comments, follows, block/report, analytics

### Phase 3: Paid QR extensions

- Romantic/meetup/item-recovery QR products and billing

### Phase 4: Advanced safety/location

- Emergency mode, coarse geofence sharing, global policy hardening

## 15) Open product decisions

1. How many free premium QR codes (if any) are included at signup?
2. Exact rules for minor-to-adult visibility and interactions?
3. Paid tier pricing and packaging (subscription vs one-time QR purchases)?
4. How long scan logs and location events should be retained?
5. Which countries are in initial global launch cohort?

