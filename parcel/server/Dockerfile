FROM python

ARG USER_ID=1000
ARG GROUP_ID=1000
ARG USER=bacchilu

RUN groupadd -g ${GROUP_ID} ${USER}
RUN useradd -ms /bin/bash -l -u ${USER_ID} -g ${USER} ${USER}
RUN install -d -m 0755 -o ${USER} -g ${USER} /home/${USER}

USER ${USER}

WORKDIR /app

COPY ./src .

ENV PATH="/home/$USER/.local/bin:$PATH"
RUN pip3 install -r requirements.txt

EXPOSE 8000

CMD sanic server.app --host=0.0.0.0 --dev