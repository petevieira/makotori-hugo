+++
title = "Syntax"
weight = 6
+++

# Hierarchical Organization of Language
* Mental computations of language:
  * performed on a hierarchically organized structure, not on a linear string of words
* How are words organized into a sentence?
  * H1: A sentence is a collection words?
    * NO! Doesn't account for word order
  * H2: A sentence is an *ordered* collection of words?
    * NO! Can't tell us why sentence a is good and b is bad
    * NO! Doesn't capture intuition/fact that not all substrings of a sentece are "created equal"
      * Some substrings contain words that *"belong"* more together than others, i.e., more "cohesive."

# Tests of Cohesiveness
  1. Substitution
  1. Movement
  1. Questions/Fragment Answers

## Substitution
Cohesive substrings can be replaced with other words while maintaining the meaning of the sentence.

- "This guy took **his dog** to **his girlfriend** today."
  - "This guy took his dog to [her] today."
  - "This guy took [it] to his girlfriend today."

This type of substitution isn't possible with non-cohesive substrings.
<br>What about these substrings:
- This guy took his **dog to** his **girlfriend today**."

## Movement
Cohesive substrings can be movement to different parts of the sentence.

- "This guy took **his dog** to **his girlfriend** today."
  - "His dog, this guy took to his girlfriend today."
  - "To his girlfriend, this guy took his dog."

What about these substrings:
- "This guy took his **dog to** his **girlfriend today**."

## Questions/Fragment Answers
- "This guy took **his dog** to **his girlfriend** today."
  - Q: [**What**] did this guy take to his girlfriend today?"
    - A: [**his dog**]
  - Q: [**Who**] did this guy take his dog to today?
    - A: [**his girlfriend**]
  - Q: ...?
    - A: \*[**novel to**]

**"cohesive substrings" = "consituents"**
## Notes
- Constituency tests work fine but they are unidirectionl:
  - If they succeed, then the substring is a constituent,
  - But if they fail, then either
    - the substring is not a constituent
    - or it is a constituent, but failed the test for a different reason
- So H2 doesn't capture the idea that some substrings form constituents, and some don't.

## Organization of Constituents
- Constituents are always nested, i.e., fully contained in another constituent.
  - Partially overlapping constituents don't exist: <sup>\*</sup> [word 1 [[word 2] word 3]]

# Syntax Trees

## Terminology
- **Dominance**: A node *α* *dominates* a node *β* iff there is a descending path from *α* to *β*.
- **Mothers**/**Daughters**/**Sisters**:
  - A node *α* is the *mother* of a node *β* iff *α* immediately dominates *β*.
  - *β* is the *daughter* of *α*
  - *α* is the *mother* of *β*
  - *β* and *γ* are *sisters* iff *β* and *γ* have the same mother *α*
- **Terminal nodes**: A node *α* is a *terminal node* iff *α* has no daughters
- **Exhaustive dominance**: A node *α* *exhaustively dominates* a string *S* iff
  - *α* dominates every terminal *t* ∈ *S*
  - There is no terminal *t'* ∉ *S* that *α* dominates
- **Constituents**: Strings that are exhaustively dominated by a single node.
- **Maximal projection**: The highest relevant projection of a property that stop projecting to the next node up. A.k.a. "phrase".
  - When b stops projects, we have a "bP" or a "b phrase".
- **Head**: A terminal node, i.e., at the bottom of the syntax tree (end of branch), with no children.


## Branching
So far trees we've seen have been "binary branching". This means that every mother has at most two daughters. Let's adopt the hypothesis that branching is only ever binary.

## Merge
How are syntactic trees built:
  - Syntactic trees are binary branching trees
  - Built by iteration of a structure-building operation called *Merge*.
- Merge takes two elements *α* and *β*, and forms a single, binary branching constituent out of them.
- Merge two words:<br>
<img class="mw15" src="/images/merge-two-words.png" alt="Merge two words">
- Merge a word with a constituent formed by a previous iteration of *Merge*:<br>
<img class="mw25" src="/images/merge-word-with-constituent.png" alt="Merge word with constituent">
- Merge two constituents formed by a previous iteration of *Merge*:<br>
<img class="mw70" src="/images/merge-two-constituents.png" alt="Merge two constituents">

### Names:
- Merge (a,b) -> X <br>
<img class="mw15" src="/images/merge-a-b-x.png" alt="Merge(a,b)->X">
- But what is X?
  - X will be a *projection* of either *a* or *b*.
  - i.e., either *a* or *b* will pass on some of its properties (or features) to X.
- Think of the x' ("x-bar") notation as indicating that the "x-ness" of this constituent has been passed up to this node from lower down.

## Projection
- **Definition**: The highest relevant projection of a property that stop projecting to the next node up. A.k.a. "phrase".
  - When b stops projects, we have a "bP" or a "b phrase".
- So what determines which node projects?
- A **Head* is a terminal node, i.e., at the bottom of the syntax tree (end of branch). A set formed by Merge cannot be a head, because it has children.
- A consitutent *α* is headed by a terminal node *x* iff *x* determines the properties of *α*.

### Representations
- Head: X<sup>0</sup>
- Maximal Projection: XP
- All intermediate projections: X<sup>'</sup>

## X-bar Schema
