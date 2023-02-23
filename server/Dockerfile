FROM python

ARG USER_ID=1000
ARG GROUP_ID=1000
ARG USERNAME=bacchilu

RUN groupadd -g ${GROUP_ID} ${USERNAME}
RUN useradd -ms /bin/bash -l -u ${USER_ID} -g ${USERNAME} ${USERNAME}
RUN install -d -m 0755 -o ${USERNAME} -g ${USERNAME} /home/${USERNAME}

USER ${USERNAME}

WORKDIR /app

COPY ./src .

ENV PATH="/home/$USERNAME/.local/bin:$PATH"
RUN pip3 install -r requirements.txt

EXPOSE 8000

CMD sanic server.app --host=0.0.0.0 --port=8000 --fast