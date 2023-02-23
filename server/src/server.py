from sanic import Sanic
from sanic.request import Request
from sanic.response import HTTPResponse, json

app = Sanic("PythonTestServer")


@app.get("/")
async def hello_world(request: Request) -> HTTPResponse:
    return json({"res": "Hello, world."})
