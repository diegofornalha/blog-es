---
layout: PostLayout
metaTitle: Como a rede blockchain flow funciona?
addTitleSuffix: true
metaTags: []
colors: colors-d
date: '2023-01-17'
featuredImage:
  type: ImageBlock
  url: /images/23/01/Como a rede blockchain flow funciona diegofornalha.png
  altText: Como a rede blockchain flow funciona?
  caption: >-
    Flow é uma blockchain projetada para ser usada em jogos e aplicativos,
    especialmente para NFTs. Ele foi criado com o objetivo de resolver o
    problema de escalabilidade das blockchains existentes e foi construído para
    suportar ecossistemas de aplicativos e jogos de alto desempenho sem
    comprometer a descentralização. A Flow permite que seus nós desempenhem
    funções específicas, dividindo as tarefas e tornando-as mais fáceis de serem
    cumpridas. A arquitetura de rede Flow é mais simples e menos problemática do
    que outras opções no mercado.
  width: 800
  height: 450
media:
  type: ImageBlock
  url: /images/23/01/Como a rede blockchain flow funciona diegofornalha.png
  altText: Como a rede blockchain flow funciona?
  caption: >-
    Flow é uma blockchain projetada para ser usada em jogos e aplicativos,
    especialmente para NFTs. Ele foi criado com o objetivo de resolver o
    problema de escalabilidade das blockchains existentes e foi construído para
    suportar ecossistemas de aplicativos e jogos de alto desempenho sem
    comprometer a descentralização. A Flow permite que seus nós desempenhem
    funções específicas, dividindo as tarefas e tornando-as mais fáceis de serem
    cumpridas. A arquitetura de rede Flow é mais simples e menos problemática do
    que outras opções no mercado.
  width: 800
  height: 450
bottomSections:
  - type: CtaSection
    colors: colors-e
    elementId: ''
    backgroundSize: full
    title: CoFlow
    titlePt: CoFlow
    text: >
      Nuestra empresa comparte la misma visión que Dapper Labs, que es crear
      experiencias líderes en la industria web3 y desarrollar dapps en la cadena
      de bloques Flow que proporcionen a los usuarios una forma sencilla de
      administrar sus activos y usar la cadena de bloques. Nuestra misión es
      hacer del mundo un lugar más accesible y agradable a través de la adopción
      por los consumidores de tecnologías descentralizadas.
    textPt: >
      Nossa empresa compartilha a mesma visão do Dapper Labs, que é criar
      experiências web3 líderes do setor e desenvolver dapps na blockchain da
      Flow que possibilita aos usuários uma maneira simples de gerenciar seus
      ativos e usar o blockchain. Nossa missão é tornar o mundo um lugar mais
      acessível e agradável por meio da adoção pelo consumidor de tecnologias
      descentralizadas.
    actions:
      - label: Servidor no Discord
        altText: Entrar no Discord
        url: 'https://discord.com/invite/hT8EpC5mUN'
        showIcon: true
        icon: arrowRight
        style: primary
        type: Button
    backgroundImage: null
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-28
          - pb-28
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
metaDescription: >-
  Flow é uma blockchain projetada para ser usada em jogos e aplicativos,
  especialmente para NFTs. Ele foi criado com o objetivo de resolver o problema
  de escalabilidade das blockchains existentes e foi construído para suportar
  ecossistemas de aplicativos e jogos de alto desempenho sem comprometer a
  descentralização. A Flow permite que seus nós desempenhem funções específicas,
  dividindo as tarefas e tornando-as mais fáceis de serem cumpridas. A
  arquitetura de rede Flow é mais simples e menos problemática do que outras
  opções no mercado.
socialImage: /images/23/01/Como a rede blockchain flow funciona diegofornalha.png
author: content/data/team/people/diego-fornalha.json
title: ¿Cómo funciona la red blockchain Flow?
excerpt: División de nodos y funciones en Flow
---

Flow es una tecnología blockchain diseñada desde cero para integrarse en juegos y aplicaciones, convirtiéndose en una red blockchain de alta velocidad y una arquitectura modular extremadamente flexible para el desarrollo.
Los desarrolladores de Flow crearon un sistema en el que varias funciones pueden coexistir, funciones que son desempeñadas por sus nodos, cada una con un objetivo muy específico. Esto permite dividir las tareas recibidas (las transacciones que se envían) de manera exclusiva, haciéndolas más fáciles de atender.
Por ejemplo, si una transacción interactúa con un contrato inteligente avanzado (por ejemplo, una interacción con un DApp), la transacción se divide en dos partes: la primera, donde se encuentran los metadatos de la transacción (quién envía, direcciones, entre otros).
Y la segunda, la interacción con el contrato inteligente en sí, que debe ser invocado (desde su dirección), ejecutado y ofrecer una respuesta a nuestro usuario (que es visible en el blockchain). Además, todo este proceso debe ser verificado, obedecer a las reglas de consenso y, finalmente, ser incluido en el blockchain. Si estuviéramos en Ethereum, estas tareas se realizan de manera lineal (lenta y costosa).
Pero en Flow, la primera y la segunda partes se envían a un tipo de nodo (llamado nodo de ejecución), mientras que las tareas de consenso, verificación y almacenamiento se asignan a tipos de nodos específicos para cada tarea. Como cada uno de estos puntos requiere trabajo computacional específico (algunos requieren más potencia que otros), la división del trabajo facilita la entrega de grandes volúmenes de información de manera rápida y sencilla al final. Flow ha creado una red blockchain de operación heterogénea (con nodos asignados a diferentes funciones), con paralelismo y escalabilidad que crece con el número de nodos en la red.
¿Quieres una explicación más simple que esta? Mira de la siguiente manera, no es lo mismo tener un restaurante en el que ocupas todos los puestos (chef, camarero, cajero), que tener un equipo que te apoya en cada tarea y, sobre todo, si tu restaurante tiene una gran demanda y afluencia de comensales. El primero sería el sistema actual de muchas blockchains, mientras que el segundo sería Flow.
Explorando cómo funciona Flow en profundidad
Ahora que sabemos cómo funciona Flow en general, es bueno saber cómo lo hace realidad. En primer lugar, Flow es un proyecto con una arquitectura multifuncional pensada en la divisibilidad de atribuciones y tareas. Esto es esencial, porque la arquitectura de red de Flow, aunque compleja, es mucho menos problemática que otras opciones que encontramos en este mercado. Dicho esto, primero exploremos cómo se dividen sus nodos y cuáles son sus funciones.
