from sanic import Sanic  # type: ignore
from sanic.request import Request  # type: ignore
from sanic.response import HTTPResponse, text  # type: ignore

app = Sanic("PythonTestServer")


@app.get("/")
async def hello_world(request: Request) -> HTTPResponse:
    return text("Hello, world.")
