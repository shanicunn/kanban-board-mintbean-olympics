# Part 1 - Building the Kanban board
Rather than go into a long-winded explanation of how to build the board, here's what I'm going to do.

I'm going to give you the user stories.

Build this in a frontend-only fashion so that it's deployable on Github Pages. Backends are DISALLOWED for reasons of scope management (it'd be too hard to do a full stack kanban board).

## Required entity relations
Here are some basic entity relations. You need to fulfill these requirements, but they are not limits. You can definitely expand on top of them.

* Column: Title (required), Ordering, Cards

* Card: Title (required), Description

* User: this entity does NOT exist since this is not an authenticated app

## Required features
Here are the basic features. You MUST implement all these features over the course of the weekend in order to win the hackathon.

* When the application starts, you have 3 empty columns: "Todo", "In progress", "Done"

* Each column has a "+" button. The user can click this button to create a task card in any column

* Task cards clearly display the title of the contained task

* The user can move tasks between columns using drag-and-drop

* The user can delete a task.

* The user can expand a task card to see its description

* The user can move tasks between columns using the "Move" button in the context menu

* The user can edit column titles

* The user can create columns

* The user can change the order of columns using drag-and-drop

* The user can delete columns (you will have to decide what happens to a column's cards in this case)

## Bonus features
These are suggestions for improvements once "Important" features are completed. The more of these you do, the better your app will be, and the more chances you have of winning the hackathon. 

* The site is mobile-responsive (highly recommended but not required)

* Each card has a context menu you can access through right-click (desktop).

* Each card has a context menu you can access through long-press (mobile).

* Nice animations

* The user can access the context menu using right-click

* The user can add images as attachments to the cards (yes, it is possible to save images to localstorage, https://stackoverflow.com/questions/19183180/how-to-save-an-image-to-localstorage-and-display-it-on-the-next-page)

* Data is saved to LocalStorage or IndexedDB (to avoid collisions when using FeaturePeek, please use a unique name for the namespace you're saving your data to)

* Something cooler? More creative? It's your site! Make it however you want, we're looking forward to seeing your creativity!

## Disallowed features
These features should NOT be present, in favour of scope management.

1. Login/logout

2. Backend server

# Part 2 - Refining the UX & optional "help" sections
From Rocket55's site: 
UX is important because it tries to fulfill the user's needs. It aims to provide positive experiences that keep users loyal to the product or brand. Additionally, a meaningful user experience allows you to define customer journeys on your website that are most conducive to business success.

In order for your kanban board to have good UX, each part should be either intuitive or clearly & concisely explained. 

## Here are some more suggestions to help you win this section of the challenge:

* onboarding tutorial

* help text

* info bubbles

* helpful hints

* clear notifications

# Part 3 - Landing page + promoting on social media
We have this section because:

Personal projects without landing pages end up being COMPLETELY invisible to recruiters & employers.

Personal projects that are not promoted on social media are RARELY seen by recruiters & employers.

## Part 3.A: You must create a landing page for your kanban board that clearly explains your product. For example, see FeaturePeek's landing page: https://featurepeek.com/ . It's a great landing page that concisely explains what FeaturePeek is all about. Google "Product Landing Page" for more examples of standard landing pages for products.

## Part 3.B: promote your project on social media! LinkedIn and Twitter are great places to be. There will be an award for "Best marketing" so make sure you paste your posts + tweets inside the Discord server! and tag Mintbean!!!