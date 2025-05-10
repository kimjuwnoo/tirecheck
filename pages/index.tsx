import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>타이어체크 | 믿을 수 있는 중고 타이어 플랫폼</title>
        <meta name="description" content="중고 타이어를 투명하고 정직하게! 타이어체크에서 가격 비교하고, 무료 장착까지!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main style={{ fontFamily: "Noto Sans KR, sans-serif", padding: "2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🚘 타이어체크</h1>
        <p style={{ fontSize: "1.25rem", color: "#666" }}>
          대한민국 최초의 중고 타이어 비교 플랫폼<br />
          믿고 보는 타이어, 무료 장착까지 한 번에!
        </p>

        <div style={{ marginTop: "3rem" }}>
          <a
            href="/select-tire"
            style={{
              display: "inline-block",
              backgroundColor: "#333",
              color: "#fff",
              padding: "1rem 2rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            지금 타이어 검색하기
          </a>
        </div>
      </main>
    </>
  );
}
