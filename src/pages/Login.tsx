function Login() {
    return (
        <div>
            <h1>ログイン</h1>

            <input placeholder="メールアドレス" />

            <br /><br />

            <input
                type="password"
                placeholder="パスワード"
            />

            <br /><br />

            <button>ログイン</button>

            <button>新規登録</button>
        </div>
    )
}

export default Login