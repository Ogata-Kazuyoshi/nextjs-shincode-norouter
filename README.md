# Test Double Template

<details open="open">
<summary>目次</summary>



- [Nextjsセットアップ](#Nextjsセットアップ)
- [SSG/SSRについて](#SSG/SSRについて)
- [index.tsxについて](#index.tsxについて)
- [ダイナミックルーティングについて](#ダイナミックルーティングについて)
- [Linkタグとaタグの違い](#Linkタグとaタグの違い)

- [参考](#参考)

</details>

# Nextjsセットアップ

<summary> 1. 下記コマンドでNextAppを作成</summary>


```zh
 npx create-next-app@latest
```

<summary> 2. 下記の設定を聞かれる</summary>

```zh
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes => AppRouterにするとpage.tsxしかルーティングできなくなる
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*
```

# SSG/SSRについて
- SSGとはStatic Site Generatorの略で、ビルド時にHtmlの雛形が生成されており、ユーザーがreq出すごとにそれを返すだけ
- SSRとはServer Side Renderingの略で、ユーザーのreqの度にサーバー側でレンダリングしてから、htmlの雛形を返す

# index.tsxについて


<summary> 1. SSGを実施したいコンポーネントではgetStaticPropsを使用する</summary>

- props : {}は書き方が決まっているので覚える

```tsx
export const getStaticProps = async () => {
    const allPostsData =  getPostsData()
    return {
        props : {
            allPostsData
        }
    }
}
```

# ダイナミックルーティングについて

<summary>1. getStaticPathsメソッドでダイナミックルーティングできるパスを用意する</summary>

- getAllPostIdsはpost.tsの中にあるので確認。next.jsのドキュメントの通り、params : { id : パス}の配列になるようにすること
- fallbackはfalseにしておくと、pathsに含まれないルーティングは404を返せる

```ts
export const getStaticPaths = async () => {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false, //pathsに含まれていない文字列は404NotFoundを返却する
    };
};
```

<summary>2. SSGできるようにgetStaticPropsでコンポーネントにPropsを渡すこと</summary>

- パスパラメータを取りたい時は、下記のように型をつけるとOK

```ts
export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const postData = await getPostData(params?.id);

  return {
    props: {
      postData,
    },
  };
};
```

# Linkタグとaタグの違い

- Linkタグはリロードされずに遷移。aタグはリロードされて遷移



# 参考
- [Nextjsの公式ドキュメント](https://nextjs.org/docs)
