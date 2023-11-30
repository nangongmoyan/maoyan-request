

<h1 class="curproject-name"> maoyan-api </h1>

 maoyan-request是本人在后续用于学习开发网页、h5、小程序和App端上关于api的一次集成封装，它是本人通过抓包猫眼请求后采用typescript实现的api库，此api库仅作为本人学习中使用，切勿使用在其他情况！！！

## Installation

### Npm

```
npm install maoyan-request
```
### Yarn

```
yarn add maoyan-request
```

## Table of contents

- [公共信息](#公共信息)
    - [**添加统一请求头信息**](#添加统一请求头信息)
- [业务](#业务)
  - [movieApi - 电影相关](#movieapi---电影相关)
    - [正在热映](#正在热映)
      - [基本信息](#基本信息)
    - [请求参数](#请求参数)
    - [返回数据](#返回数据)
  
# 公共信息

### **添加统一请求头信息**

`{uuid}`: 通用唯一识别码

`{channelId}`: 渠道ID

`{ci/cityId}`: 城市id（不同api需要的字段不一样）

# 业务

## movieApi - 电影相关

### 正在热映

#### 基本信息

**Url：** https://api.maoyan.com

**Path：** /mmdb/movie/v4/list/hot

**Method：** GET

**接口描述：**
 <pre>
  <code>  
  /**
   * 正在热映
   * @author nangongmoyan
   * @param vo
   * @returns
   */
  hot: async(vo: MaoYanMovie.Hot.Request): Promise<MovieBase.MoviesData> => {
    return mapYanTryCatch<MovieBase.MoviesData>(apiRequest<MaoYanMovie.Hot.Request, MaoYanMovie.MovieResponeseOne>({
      vo,
      url: pathMap.movieApi.hot(),
      key: createRequestKey('movieApi', 'hot'),
    }).then(rlt => rlt?.data?.hot ?? []))
  },
  </code>
</pre>

### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |

**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th>
      <th key=type>类型</th>
      <th key=required>是否必须</th>
      <th key=default>默认值</th>
      <th key=desc>备注</th>
    </tr>
  </thead>
  <tbody className="ant-table-tbody">
    <tr key=0-0>
      <td key=0>xxx</td>
      <td key=1>Long</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
  </tbody>
</table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th>
      <th key=type>类型</th>
      <th key=required>是否必须</th>
      <th key=default>默认值</th>
      <th key=desc>备注</th>
    </tr>
  </thead>
  <tbody className="ant-table-tbody">
    <tr key=0>
      <td key=0></td>
      <td key=1>object []</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap">List<MyBankCardListRespVO></span>
      </td>
    </tr>
    <tr key=0-0>
      <td key=0>
        <span style="padding-left: 20px">
          boxInfo
        </span>
      </td>
      <td key=1>string</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-1>
      <td key=0>
        <span style="padding-left: 20px">
          civilPubSt
        </span>
      </td>
      <td key=1>number</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-2>
      <td key=0>
        <span style="padding-left: 20px">
          comingTitle
        </span>
      </td>
      <td key=1>string</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-3>
      <td key=0>
        <span style="padding-left: 20px">
          desc
        </span>
      </td>
      <td key=1>string</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-4>
      <td key=0>
        <span style="padding-left: 20px">
          effectShowNum
        </span>
      </td>
      <td key=1>number</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-5>
      <td key=0>
        <span style="padding-left: 20px">
          followst
        </span>
      </td>
      <td key=1>number</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-6>
      <td key=0>
        <span style="padding-left: 20px">
          haspromotionTag
        </span>
      </td>
      <td key=1>boolean</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-7>
      <td key=0>
        <span style="padding-left: 20px">
          headLineShow
        </span>
      </td>
      <td key=1>boolean</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-8>
      <td key=0>
        <span style="padding-left: 20px">
          isRevival
        </span>
      </td>
      <td key=1>boolean</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-9>
      <td key=0>
        <span style="padding-left: 20px">
          late
        </span>
      </td>
      <td key=1>boolean</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-10>
      <td key=0>
        <span style="padding-left: 20px">
          localPubSt
        </span>
      </td>
      <td key=1>number</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-11>
      <td key=0>
        <span style="padding-left: 20px">
          mark
        </span>
      </td>
      <td key=1>boolean</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-12>
      <td key=0>
        <span style="padding-left: 20px">
          mk
        </span>
      </td>
      <td key=1>number</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-13>
      <td key=0>
        <span style="padding-left: 20px">
          preSale
        </span>
      </td>
      <td key=1>number</td>
      <td key=2>非必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-14>
      <td key=0>
        <span style="padding-left: 20px">
          preShow
        </span>
      </td>
      <td key=1>boolean</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-15>
      <td key=0>
        <span style="padding-left: 20px">
          pubShowNum
        </span>
      </td>
      <td key=1>number</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-16>
      <td key=0>
        <span style="padding-left: 20px">
          recentShowDate
        </span>
      </td>
      <td key=1>number</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-17>
      <td key=0>
        <span style="padding-left: 20px">
          recentShowNum
        </span>
      </td>
      <td key=1>number</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-18>
      <td key=0>
        <span style="padding-left: 20px">
          showCinemaNum
        </span>
      </td>
      <td key=1>number</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-19>
      <td key=0>
        <span style="padding-left: 20px">
          showNum
        </span>
      </td>
      <td key=1>number</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-20>
      <td key=0>
        <span style="padding-left: 20px">
          showTimeInfo
        </span>
      </td>
      <td key=1>string</td>
      <td key=2>非必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-21>
      <td key=0>
        <span style="padding-left: 20px">
          totalShowNum
        </span>
      </td>
      <td key=1>number</td>
      <td key=2>非必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-22>
      <td key=0>
        <span style="padding-left: 20px">
          videoId
        </span>
      </td>
      <td key=1>number</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-23>
      <td key=0>
        <span style="padding-left: 20px">
          fra
        </span>
      </td>
      <td key=1>string</td>
      <td key=2>非必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-24>
      <td key=0>
        <span style="padding-left: 20px">
          frt
        </span>
      </td>
      <td key=1>string</td>
      <td key=2>非必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-25>
      <td key=0>
        <span style="padding-left: 20px">
          ftime
        </span>
      </td>
      <td key=1>string</td>
      <td key=2>非必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-26>
      <td key=0>
        <span style="padding-left: 20px">
          showStateButton
        </span>
      </td>
      <td key=1>object</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
        <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-26-0>
      <td key=0>
        <span style="padding-left: 20px">
          <span style="color: #8c8a8a"> </span> color
        </span>
      </td>
      <td key=1>string</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
      <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-26-1>
      <td key=0>
        <span style="padding-left: 20px">
          <span style="color: #8c8a8a"> </span> content
        </span>
      </td>
      <td key=1>string</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
      <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
    <tr key=0-26-2>
      <td key=0>
        <span style="padding-left: 20px">
          <span style="color: #8c8a8a"> </span> onlyPreShow
        </span>
      </td>
      <td key=1>boolean</td>
      <td key=2>必须</td>
      <td key=3></td>
      <td key=4>
      <span style="white-space: pre-wrap"></span>
      </td>
    </tr>
  </tbody>
</table>