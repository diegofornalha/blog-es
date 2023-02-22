---
layout: PostLayout
metaTitle: null
addTitleSuffix: true
metaTags: []
title: Aprende los fundamentos de Flow Playground
colors: colors-d
excerptFr: >-
  Como implantar um contrato e como interagir com contratos implantados usando
  transações e scripts.
featuredImage:
  type: ImageBlock
  url: /images/23/01/CAPAS-Aprenda os fundamentos do Flow Playground.png
  altText: Aprenda os fundamentos do Flow Playground
  caption: Aprenda os fundamentos do Flow Playground
  width: 800
  height: 450
media:
  type: ImageBlock
  url: /images/23/01/CAPAS-Aprenda os fundamentos do Flow Playground.png
  altText: Aprenda os fundamentos do Flow Playground
  caption: Aprenda os fundamentos do Flow Playground
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
metaDescription: null
socialImage: null
date: '2023-01-09'
author: content/data/team/people/diego-fornalha.json
excerpt: >-
  Aprende a desplegar un contrato y a interactuar con contratos desplegados
  usando transacciones y scripts.
---



Flow Playground es un editor y emulador construido directamente en el navegador. Con Playground, los desarrolladores pueden empezar a aprender a escribir contratos inteligentes en Cadence e interactuar con una blockchain local Flow emulada usando scripts y transacciones.
No es necesario saber Cadence para seguir el tutorial. Playground tiene modelos pre-cargados que usaremos.
El objetivo de este tutorial es ayudarte a familiarizarte con Flow Playground y cómo funciona 🏆
🗣️ FYI: según la documentación de Flow, se recomienda usar Google Chrome como navegador.

Cuentas
Flow Playground comienza con cinco cuentas estándar. Cada cuenta tiene una dirección diferente que comienza con 0x01. Las cuentas se encuentran en la barra lateral izquierda.

Desplegando un contrato
Para desplegar un contrato, primero debes seleccionar una cuenta. Las cuentas se encuentran en el lado izquierdo y están etiquetadas con la dirección, por ejemplo, 0x01, 0x02.
Selecciona la cuenta 0x01. Esta es la cuenta que usaremos para desplegar nuestro contrato.
A la derecha de las cuentas está la sección de contrato. Verás un contrato pre-cargado llamado HelloWorld.cdc. Playground se carga con un modelo de contrato, por lo que no es necesario crear el nuestro propio contrato.
Hay muchos comentarios, pero por una buena razón, ya que los comentarios explican exactamente lo que está sucediendo con el código. Dos puntos importantes, nuestra variable de saludo se establece como "Hola Mundo" y la función hello() devuelve la variable de saludo.
Desplegaremos el contrato en la blockchain local Flow emulada. Para hacer esto, haz clic en el botón verde Deploy ubicado en la parte derecha de la pantalla.
Después de desplegar el contrato, la consola imprimirá Deployed Contract To: 0x01 para indicar que el contrato se ha desplegado con éxito.
Si ves este mensaje, ¡bien hecho! Has desplegado un contrato con éxito en la cuenta 0x01!

Transacciones
Las transacciones son una forma de interactuar con la blockchain Flow. Las transacciones se utilizan para hacer cambios en la blockchain y tienen un costo que se debe pagar para ejecutarlas.

En la parte izquierda de la pantalla, debajo de Cuentas, verás Plantillas de Transacción. Selecciona la plantilla de transacción llamada "Transaction". Aparecerá una transacción pre-cargada.
Sin entrar en muchos detalles con Cadence, esta transacción registrará la variable de saludo del contrato HelloWorld que desplegamos en la cuenta 0x01. Recuerda, la variable de saludo en el contrato HelloWorld era "Hello World".
Verás que aparece una nueva caja en la parte derecha de la pantalla: Asignatarios de Transacción. Elegirás la cuenta para firmar la transacción. En este caso, dejaremos la cuenta predeterminada como 0x01.
Haz clic en el botón verde Enviar.
Al hacer clic en el botón Enviar, los resultados de la transacción se mostrarán en la consola:
¡Felicidades! ¡Acabas de ejecutar una transacción!

Scripts
Los scripts se utilizan para leer datos (no para cambiar datos) de la blockchain y no hay costos

