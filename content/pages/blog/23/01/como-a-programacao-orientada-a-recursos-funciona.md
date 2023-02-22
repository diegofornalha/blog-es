---
layout: PostLayout
metaTitle: 'Como a programação orientada a recursos funciona? '
addTitleSuffix: true
metaTags: []
colors: colors-d
date: '2023-01-16'
featuredImage:
  type: ImageBlock
  url: >-
    /images/23/01/Como a programação orientada a recursos funciona
    diegofornalha.png
  altText: Como a programação orientada a recursos funciona?
  caption: >-
    O EVM (Ethereum Virtual Machine) ou WASM (WebAssembly) são opções ideais
    para ativos digitais, pois permitem que esses ativos sejam rotulados como
    "recursos" e sejam acompanhados por regras especiais que mantêm seu valor.
    Essas regras incluem a existência exclusiva de um recurso em um lugar
    específico, a impossibilidade de duplicação ou exclusão acidental e a
    propriedade determinada pelo local de armazenamento. Além disso, o acesso
    aos métodos de um recurso é limitado ao proprietário e as regras devem ser
    aplicadas enquanto o código é executado na blockchain para evitar invasões.
    Se essas regras forem seguidas corretamente, é possível armazenar ativos
    importantes de forma segura em estruturas de dados controladas por código de
    usuário. Um exemplo de como isso pode ser aplicado é o uso de tokens não
    fungíveis (NFTs) como CryptoKitties, que são indivisíveis, não copiáveis e
    podem ter um único proprietário direto. No modelo de recursos, o próprio
    CryptoKitty é armazenado diretamente na conta do proprietário, enquanto no
    modelo de ledger, é armazenado em um contrato inteligente centralizado.
  width: 800
  height: 450
media:
  type: ImageBlock
  url: >-
    /images/23/01/Como a programação orientada a recursos funciona
    diegofornalha.png
  altText: 'Como a programação orientada a recursos funciona? '
  caption: >-
    O EVM (Ethereum Virtual Machine) ou WASM (WebAssembly) são opções ideais
    para ativos digitais, pois permitem que esses ativos sejam rotulados como
    "recursos" e sejam acompanhados por regras especiais que mantêm seu valor.
    Essas regras incluem a existência exclusiva de um recurso em um lugar
    específico, a impossibilidade de duplicação ou exclusão acidental e a
    propriedade determinada pelo local de armazenamento. Além disso, o acesso
    aos métodos de um recurso é limitado ao proprietário e as regras devem ser
    aplicadas enquanto o código é executado na blockchain para evitar invasões.
    Se essas regras forem seguidas corretamente, é possível armazenar ativos
    importantes de forma segura em estruturas de dados controladas por código de
    usuário. Um exemplo de como isso pode ser aplicado é o uso de tokens não
    fungíveis (NFTs) como CryptoKitties, que são indivisíveis, não copiáveis e
    podem ter um único proprietário direto. No modelo de recursos, o próprio
    CryptoKitty é armazenado diretamente na conta do proprietário, enquanto no
    modelo de ledger, é armazenado em um contrato inteligente centralizado.
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
title: ¿Cómo funciona la programación orientada a recursos?
author: content/data/team/people/diego-fornalha.json
excerpt: >-
  El objetivo de Dapper Labs es utilizar tecnología descentralizada,
  específicamente tokens no fungibles (NFT), para empoderar a los creadores y
  permitirles monetizar y promover su trabajo de manera más eficiente.
---
Entre las opciones de EVM o WASM, son una buena opción para activos digitales.

Etiquetar algo como un "recurso" le informa al ambiente de programación que esta estructura de datos representa algo de valor tangible y que todo código que interactúe con esta estructura de datos necesita seguir una serie de reglas especiales que mantendrán el valor de esa estructura de datos.

Las reglas son:

1.  Cada recurso existe exactamente en un lugar en cualquier momento.

2.  La propiedad de un recurso está definida por dónde se almacena.

3.  El acceso a los métodos en un recurso está limitado al propietario.

Para aplicar correctamente estas reglas, se puede permitir que el activo más importante de la red del token nativo se almacene de manera segura dentro de estructuras de datos controladas por el código enviado por el usuario.

La forma más fácil de pensar en Recursos es pensar en un ejemplo usando un token no fungible (NFT), como un CryptoKitty. Cada CryptoKitty es indivisible, no copiable y puede tener un único propietario directo, que corresponde directamente a la construcción de programación de Recursos.

En un modelo de Ledger como Ethereum, todos los CryptoKitties se almacenan en un único contrato inteligente como una lista gigante. En el Modelo de Recursos, el propio Kitty se representa como un objeto de Recursos y se almacena directamente en la cuenta que lo posee.

En el modelo de Recursos, el propio CryptoKitty se representa como un objeto de Recursos y se almacena directamente en la cuenta que lo posee.

Al igual que en el mundo físico, la propiedad se representa por medio de la posesión. No es necesario buscar en un libro central para ver si se posee algo, se almacena en la cuenta o no.

Y si se posee, se puede transferir o controlar de otra manera, y si no se posee, no hay forma de capturarlo o cambiarlo.

```
contract CryptoKitties {
    // Las cuentas almacenan una colección en su recurso de almacenamiento de cuenta
    KittyCollection {
        // Cada colección tiene funciones para mover recursos almacenados dentro y fuera
        fun withdraw(kittyId: int): CryptoKitty
        fun deposit(kitty: CryptoKitty)
    }

    // Los objetos de recurso que pueden ser almacenados en el recurso de colección
    CryptoKitty {}
}

transaction(signer: Account) {
    // Remueve el Kitty de la colección del firmante y lo almacena temporalmente en la pila.
    let theKitty <- signer.kittyCollection.withdraw(kittyId: myKittyId)
    // Mueve el Kitty a la cuenta del destinatario
    let receiver = getAccount(receiverAccountId)
    receiver.kittyCollection.deposit(kitty: <-theKitty)
}


```

*Nota: para mantener el enfoque en las diferencias entre los modelos de contabilidad y propiedad directa, los dos ejemplos anteriores ignoran cuestiones como el control de acceso, la definición de todas las variables y otros factores con los que el código activo tendría que preocuparse.*

# **Por qué importan los recursos**

Además de la ventaja obvia de incluir abstracciones para gestionar la propiedad, existen varios otros beneficios secundarios derivados del uso de Recursos, entre ellos:

*   **Mayor seguridad**: El modelo de Recursos proporciona una forma más segura de gestionar la propiedad, evitando errores comunes que se producen con la gestión de datos en una estructura de contabilidad. Además, los recursos son más difíciles de duplicar o eliminar por error de programación o código malicioso.

*   **Más eficiencia**: Con el modelo de Recursos, se evita la necesidad de consultar una base de datos centralizada cada vez que se requiere una actualización de propiedad o una transferencia de propiedad. En su lugar, los recursos se transfieren directamente entre las cuentas, lo que reduce la cantidad de operaciones necesarias y aumenta la eficiencia.

*   **Mayor flexibilidad**: El modelo de Recursos permite una mayor flexibilidad en la gestión de la propiedad, lo que permite a los desarrolladores crear nuevos modelos de negocio y aplicaciones que no son posibles con una estructura de contabilidad tradicional.

En resumen, el modelo de Recursos es una forma innovadora de gestionar la propiedad y los activos digitales en una estructura de contabilidad descentralizada. Al utilizar este modelo, los desarrolladores pueden crear aplicaciones más seguras, eficientes y flexibles que permiten a los usuarios tener un mayor control sobre sus propios activos digitales.
