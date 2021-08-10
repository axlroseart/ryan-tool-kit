import * as React from 'react';
import { Video, Button } from '@frontend/dcc-system-components';
export default () => {
  const [type, setType] = React.useState(1);
  return (
    <>
      <Button onPress={() => {
        setType(type === 1 ? 2 : 1);
      }}>播放：{type === 1 ? '普通视频' : '加密视频'}
      </Button>
      <br />
      <br />
      {
        type === 1
          ? <Video
            type="default"
            source="//player.alicdn.com/video/aliyunmedia.mp4" /> : <Video
            vid="75c29071669a48749d96c1f63b6e4d2b"
            getAliVideoAuth={() => new Promise((resolve) => {
              resolve('eyJTZWN1cml0eVRva2VuIjoiQ0FJU2h3TjFxNkZ0NUIyeWZTaklyNWZIZjk3R3JxWkg3bys1VEhYZmdrVXNOTzRlaEpEanB6ejJJSHBLZVhkdUFlQVhzL28wbW1oWjcvWVlsck1xRjhjWUZSQ2RQWlVndDhrS3JsejdKcExGc3QySjZyOEpqc1ZvcFpBYnhGbXBzdlhKYXNEVkVmbDJFNVhFTWlJUi8wMGU2TC8rY2lyWXBUWEhWYlNDbFo5Z2FQa09Rd0M4ZGtBb0xkeEtKd3hrMnQxNFVtWFdPYVNDUHdMU2htUEJMVXhtdldnR2wyUnp1NHV5M3ZPZDVoZlpwMXI4eE80YXhlTDBQb1AyVjgxbExacGxlc3FwM0k0U2M3YmFnaFpVNGdscjhxbHg3c3BCNVN5Vmt0eVdHVWhKL3phTElvaXQ3TnBqZmlCMGVvUUFQb3BGcC9YNmp2QWF3UExVbTliWXhncGhCOFIrWGo3RFpZYXV4N0d6ZW9XVE84MCthS3p3TmxuVXo5bUxMZU9WaVE0L1ptOEJQdzQ0RUxoSWFGMElVRXh6RVcrRmV2TC9wZ21RUGwvK0ZKTG9pdjltamNCSHFIeno1c2VQS2xTMVJMR1U3RDBWSUpkVWJUbHpiVUJMZ3pLNUl2NWJMVmNTS3dJK1YreVBNYXgzYlFGRHI1M3ZzVGJiWHpaYjBtcHR1UG56ZHdKNFRXYnJna2VVR29BQkFZRXBLcWRtRlQ4WmkxdDVUTTFMMThKdmJVa0lBV0pMRmNHUHBZNVdockZlWFlMS1EyRWVTZTBpVHpmUXpHMWdXSW5ITlZ6YWg5T3puMllReXRhQ1RUbjdsNWpjbU5nK1JrbjFqRzUvVE5FUy94aVYrQk9IT3V4c1Q2eTQ1TFNvc2ZtZFFyb1IzT3VTU3BiZ2kvQ1pBK2NKTmYzRGltSzV3N1JrS2V3ZHlvRT0iLCJBdXRoSW5mbyI6IntcIkNJXCI6XCJBOW1oNEd4cGZPYkJqbVRobkJTVTh1SUR4VGFzU2paK0tCbGMzOHpORVllRHVGZnlBUTVhaE9kZlVaL2ZmU3l3Ymc4SzY4STcrVVg2OU9mb1dzMW5VMG0rNkVsZytseEF6cWZYTFc1MXhhND1cIixcIkNhbGxlclwiOlwiM1BDNER1OWdkT0FpSXFaNjN1SmVkbmZTbGp6dXgxN3dsMkdtTDVLTytFQT1cIixcIkV4cGlyZVRpbWVcIj·pcIjIwMjEtMDctMDZUMTI6Mzc6MjBaXCIsXCJNZWRpYUlkXCI6XCI3NWMyOTA3MTY2OWE0ODc0OWQ5NmMxZjYzYjZlNGQyYlwiLFwiUGxheURvbWFpblwiOlwib2N0b3B1cy12b2QuY29kZW1hby5jblwiLFwiU2lnbmF0dXJlXCI6XCJNWW1zcnZMTS9SNEFGaSt1aUlnbWpyRjE1WHM9XCJ9IiwiVmlkZW9NZXRhIjp7IlN0YXR1cyI6Ik5vcm1hbCIsIlZpZGVvSWQiOiI3NWMyOTA3MTY2OWE0ODc0OWQ5NmMxZjYzYjZlNGQyYiIsIlRpdGxlIjoiMTYxOTUxNDUwNzE5MjIwMjAxMDE5Z3VpZGVfa2l0dGVuMTA5NC5tcDQiLCJDb3ZlclVSTCI6Imh0dHBzOi8vb2N0b3B1cy12b2QuY29kZW1hby5jbi83NWMyOTA3MTY2OWE0ODc0OWQ5NmMxZjYzYjZlNGQyYi9zbmFwc2hvdHMvMDRlZmViZWQ2NTU2NGQwMGIwYjA3NzRlZDMwYWYwNDQtMDAwMDUuanBnIiwiRHVyYXRpb24iOjI2Ni42ODh9LCJBY2Nlc3NLZXlJZCI6IlNUUy5OVHI0ZHJDeWZZTVJOU25mRXk4YTJrVUhFIiwiUGxheURvbWFpbiI6Im9jdG9wdXMtdm9kLmNvZGVtYW8uY24iLCJBY2Nlc3NLZXlTZWNyZXQiOiI1dE5KdXUyRm9ud29XSEpCMUV3TndHc1BKZkVrQjRFZWd4UjlLMTNCcnJjRiIsIlJlZ2lvbiI6ImNuLXNoYW5naGFpIiwiQ3VzdG9tZXJJZCI6MTQwNTg0MTg2ODE1NTc3Mn0=');
            })}
            type="sceret" />
      }
    </>
  );
};